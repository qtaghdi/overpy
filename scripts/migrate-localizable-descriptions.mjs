import fs from "node:fs";
import path from "node:path";
import ts from "typescript";

const root = process.cwd();

function walk(dir) {
    return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
        const target = path.join(dir, entry.name);
        return entry.isDirectory() ? walk(target) : [target];
    });
}

function isDescriptionName(name) {
    return (ts.isIdentifier(name) || ts.isStringLiteral(name)) && name.text === "description";
}

function localizableTypeFor(file) {
    if (path.resolve(file) === path.join(root, "src", "types.d.ts")) {
        return "LocalizableString";
    }
    let relative = path.relative(path.dirname(file), path.join(root, "src", "types")).replaceAll(path.sep, "/");
    if (!relative.startsWith(".")) relative = `./${relative}`;
    return `import(\"${relative}\").LocalizableString`;
}

function migrateFile(file) {
    let content = fs.readFileSync(file, "utf8");
    const source = ts.createSourceFile(file, content, ts.ScriptTarget.Latest, true, ts.ScriptKind.TS);
    const replacements = [];
    const localizableType = localizableTypeFor(file);

    function visit(node) {
        if ((ts.isPropertySignature(node) || ts.isPropertyDeclaration(node)) && isDescriptionName(node.name) && node.type?.kind === ts.SyntaxKind.StringKeyword) {
            replacements.push({ start: node.type.getStart(source), end: node.type.end, text: localizableType });
        }

        if (ts.isPropertyAssignment(node) && isDescriptionName(node.name) && !ts.isObjectLiteralExpression(node.initializer)) {
            const initializer = node.initializer;
            if (initializer.kind !== ts.SyntaxKind.UndefinedKeyword && initializer.kind !== ts.SyntaxKind.NullKeyword) {
                replacements.push({
                    start: initializer.getStart(source),
                    end: initializer.end,
                    text: `{ \"en-US\": ${initializer.getText(source)} }`,
                });
            }
        }

        ts.forEachChild(node, visit);
    }

    visit(source);
    replacements.sort((a, b) => b.start - a.start);
    for (const replacement of replacements) {
        content = content.slice(0, replacement.start) + replacement.text + content.slice(replacement.end);
    }
    if (replacements.length > 0) fs.writeFileSync(file, content);
}

for (const file of walk(path.join(root, "src", "data")).filter((file) => file.endsWith(".ts"))) {
    migrateFile(file);
}
migrateFile(path.join(root, "src", "types.d.ts"));

const typesPath = path.join(root, "src", "types.d.ts");
let types = fs.readFileSync(typesPath, "utf8");
types = types.replace("type OWLanguage = `${ow_languages}`;", "export type OWLanguage = `${ow_languages}`;");
fs.writeFileSync(typesPath, types);

const generatorPath = path.join(root, "generate-the-other-languages-doc.js");
let generator = fs.readFileSync(generatorPath, "utf8");
generator = generator.replace("function iterateOnObject(content) {", "function iterateOnObject(content, isDescription = false) {");
generator = generator.replace("content = addTranslations(content);", "content = addTranslations(content, !isDescription);");
generator = generator.replace("content[key] = iterateOnObject(content[key]);", "content[key] = iterateOnObject(content[key], key === \"description\");");

const start = generator.indexOf("function addTranslations(content) {");
const end = generator.indexOf("\nfunction normalizeName(content)", start);
if (start === -1 || end === -1) throw new Error("Could not locate addTranslations");
const addTranslations = String.raw`function addTranslations(content, persistGuid = true) {
    if (!persistGuid && "guid" in content) delete content.guid;

    let guid = content.guid;
    if (guid === undefined || guid === "<unknown guid>") {
        assert(Object.keys(content).includes("en-US"), "GUID-less content does not have an en-US key: " + JSON.stringify(content));
        guid = fuzzyMatch
            ? enUSFuzzyToGuidMap.get(content["en-US"].replace(/[\.,;'\s()-]/g, "").toLowerCase())
            : enUSToGuidMap.get(content["en-US"]);
        if (persistGuid && guid !== undefined) content.guid = guid;
    }

    if (guid === undefined) {
        console.warn("GUID not found for content: " + JSON.stringify(content));
        return content;
    }

    let guidGlob = guidToLocaleMap.get(guid);
    if (!guidGlob) {
        console.warn(`GUID ${guid} for ${JSON.stringify(content)} appears to have become invalid! Attempting to rectify by finding the GUID again...`);
        guid = fuzzyMatch
            ? enUSFuzzyToGuidMap.get(content["en-US"].replace(/[\.,;'\s()-]/g, "").toLowerCase())
            : enUSToGuidMap.get(content["en-US"]);
        if (persistGuid && guid !== undefined) content.guid = guid;
        guidGlob = guid === undefined ? undefined : guidToLocaleMap.get(guid);
        if (!guidGlob) {
            console.error(`No valid GUID found for content ${JSON.stringify(content)}`);
            return content;
        }
        console.log(`New GUID found: ${guid}, proceeding...`);
    }

    for (let localeEntry of Object.entries(guidGlob)) {
        localeEntry[1] = localeEntry[1].replace(/%%/g, "%");
        if (removeParentheses) localeEntry[1] = localeEntry[1].replace(/[,\(\)\/]/g, "");
        content[dataToolLocaleToOverPyLocale(localeEntry[0])] = localeEntry[1];
    }
    return content;
}
`;
generator = generator.slice(0, start) + addTranslations + generator.slice(end);
fs.writeFileSync(generatorPath, generator);

console.log("Localizable description migration completed.");
