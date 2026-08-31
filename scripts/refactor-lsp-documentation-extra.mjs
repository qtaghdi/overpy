import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function edit(rel, fn) {
    const file = path.join(root, rel);
    const before = fs.readFileSync(file, "utf8");
    const after = fn(before);
    if (after === before) throw new Error(`No changes made to ${rel}`);
    fs.writeFileSync(file, after);
}

function replaceOnce(content, from, to, label) {
    const index = content.indexOf(from);
    if (index === -1) throw new Error(`Missing replacement target: ${label}`);
    return content.slice(0, index) + to + content.slice(index + from.length);
}

edit("src/languageServer/completionState.ts", (content) => {
    content = replaceOnce(
        content,
        '            description: macro.isFunction && macro.isScript ? `This macro executes the script:\\n  \\`${macro.scriptPath}\\`` : `This macro resolves to:\\n\\n\\`\\`\\`\\n${macro.replacement}\\n\\`\\`\\``,',
        '            description: macro.isFunction && macro.isScript\n                ? localizableDocumentation("macroExecutesScript", macro.scriptPath)\n                : localizableDocumentation("macroResolvesTo", macro.replacement),',
        "runtime macro description",
    );
    content = replaceOnce(
        content,
        '            description: `${doc ? doc + "\\n\\n" : ""}This macro resolves to:\\n\\n\\`\\`\\`\\n${macro.linesStr.map((line) => line.substring(minIndent)).join("\\n")}\\n\\`\\`\\``,',
        '            description: (() => {\n                const localized = localizableDocumentation("macroResolvesTo", macro.linesStr.map((line) => line.substring(minIndent)).join("\\n"));\n                if (doc) localized["en-US"] = `${doc}\\n\\n${localized["en-US"]}`;\n                return localized;\n            })(),',
        "AST macro description",
    );
    content = replaceOnce(
        content,
        '            description: `${doc ? doc + "\\n\\n" : ""}This macro resolves to:\\n\\n\\`\\`\\`\\n${constant.valueStr}\\n\\`\\`\\``,',
        '            description: (() => {\n                const localized = localizableDocumentation("macroResolvesTo", constant.valueStr);\n                if (doc) localized["en-US"] = `${doc}\\n\\n${localized["en-US"]}`;\n                return localized;\n            })(),',
        "AST constant description",
    );
    content = replaceOnce(
        content,
        '            const base = variable.index !== -1 ? `A ${scope} variable. (index: ${variable.index})` : `A ${scope} variable.`;\n            const doc = docs.get(variable.name);\n            return [variable.name, { description: doc ? `${doc}\\n\\n${base}` : base }];',
        '            const key = scope === "global"\n                ? (variable.index !== -1 ? "globalVariableIndex" : "globalVariable")\n                : (variable.index !== -1 ? "playerVariableIndex" : "playerVariable");\n            const base = variable.index !== -1 ? localizableDocumentation(key, variable.index) : localizableDocumentation(key);\n            const doc = docs.get(variable.name);\n            if (doc) base["en-US"] = `${doc}\\n\\n${base["en-US"]}`;\n            return [variable.name, { description: base }];',
        "variable description",
    );
    content = replaceOnce(
        content,
        '            const base = subroutine.index ? `A subroutine. (index: ${subroutine.index})` : "A subroutine.";\n            const doc = docs.get(subroutine.name);',
        '            const base = subroutine.index ? localizableDocumentation("subroutineIndex", subroutine.index) : localizableDocumentation("subroutine");\n            const doc = docs.get(subroutine.name);\n            if (doc) base["en-US"] = `${doc}\\n\\n${base["en-US"]}`;',
        "subroutine description",
    );
    content = content.replace('                    description: doc ? `${doc}\\n\\n${base}` : base,', '                    description: base,');
    content = content.replace(
        '    entry: [string, string | { description: string; args: Argument[]; return: Type }],\n): entry is [string, { description: string; args: Argument[]; return: Type }] {',
        '    entry: [string, string | { description: string | LocalizableString; args: Argument[]; return: Type }],\n): entry is [string, { description: string | LocalizableString; args: Argument[]; return: Type }] {',
    );
    return content;
});

edit("src/languageServer/hover.ts", (content) => {
    content = replaceOnce(
        content,
        'import { TextDocument } from "vscode-languageserver-textdocument";\n',
        'import { TextDocument } from "vscode-languageserver-textdocument";\nimport type { OWLanguage } from "../types";\nimport { formatDocumentation, getLocalizedString } from "../data/opy/documentation";\n',
        "hover imports",
    );
    content = content.replace(
        "export function getHover(document: TextDocument, position: Position): Hover | null {",
        'export function getHover(document: TextDocument, position: Position, documentationLanguage: OWLanguage = "en-US"): Hover | null {',
    );
    content = content.replace("const state = getCompletionState(document.uri);", "const state = getCompletionState(document.uri, documentationLanguage);");
    content = content.replace("getEnumNameHover(enumName, state)", "getEnumNameHover(enumName, state, documentationLanguage)");
    content = content.replace("getFunctionHover(normalizedName, state)", "getFunctionHover(normalizedName, state, documentationLanguage)");
    content = content.replace("getEnumTypeHover(normalizedName, state)", "getEnumTypeHover(normalizedName, state, documentationLanguage)");
    content = content.replace(
        "function getFunctionHover(functionName: string, state: CompletionState): MarkupContent | null {",
        "function getFunctionHover(functionName: string, state: CompletionState, documentationLanguage: OWLanguage): MarkupContent | null {",
    );
    content = replaceOnce(
        content,
        '    if (typeof functionData.description === "string" && functionData.description.trim().length > 0) {\n        sections.push(functionData.description.trim());\n    }',
        '    const functionDescription = getLocalizedString(functionData.description, documentationLanguage);\n    if (functionDescription.trim().length > 0) {\n        sections.push(functionDescription.trim());\n    }',
        "function description",
    );
    content = content.replace("makeSignatureHelp(functionName, functionData, 0, null)", "makeSignatureHelp(functionName, functionData, 0, null, documentationLanguage)");
    content = content.replace('sections.push(`Arguments:\\n${parameterDocs.join("\\n")}`);', 'sections.push(`${formatDocumentation("arguments", documentationLanguage)}\\n${parameterDocs.join("\\n")}`);');
    content = content.replace(
        "function getEnumNameHover(enumName: string, state: CompletionState): MarkupContent | null {",
        "function getEnumNameHover(enumName: string, state: CompletionState, documentationLanguage: OWLanguage): MarkupContent | null {",
    );
    content = content.replace("getEnumTypeHover(enumName, state);", "getEnumTypeHover(enumName, state, documentationLanguage);");
    content = content.replace(
        "function getEnumTypeHover(symbolName: string, state: CompletionState): MarkupContent | null {",
        "function getEnumTypeHover(symbolName: string, state: CompletionState, documentationLanguage: OWLanguage): MarkupContent | null {",
    );
    content = replaceOnce(
        content,
        '        value: `**${symbolName}**\\n\\nEnum with ${enumCompletions.items.length} member${enumCompletions.items.length === 1 ? "" : "s"}.`,',
        '        value: `**${symbolName}**\\n\\n${formatDocumentation(enumCompletions.items.length === 1 ? "enumMember" : "enumMembers", documentationLanguage, enumCompletions.items.length)}`,',
        "enum count",
    );
    return content;
});

edit("src/languageServer/server.ts", (content) => {
    content = replaceOnce(
        content,
        'import {\n    localizeCompletionList,\n    localizeHover,\n    localizeSignatureHelp,\n} from "./documentationLocalization";\n',
        "",
        "remove old localization import",
    );
    content = content.replace("    workshopLanguage: OWLanguage;\n    inlayHintsMinParameters: number;", "    workshopLanguage: OWLanguage;\n    documentationLanguage: OWLanguage;\n    inlayHintsMinParameters: number;");
    content = content.replace('    workshopLanguage: "en-US",\n    inlayHintsMinParameters: 1,', '    workshopLanguage: "en-US",\n    documentationLanguage: "en-US",\n    inlayHintsMinParameters: 1,');
    content = content.replace("let globalSettings = defaultSettings;", 'let clientDocumentationLanguage: OWLanguage = "en-US";\nlet globalSettings = defaultSettings;');
    content = content.replace(
        "    hasSemanticTokensRefreshSupport = params.capabilities.workspace?.semanticTokens?.refreshSupport === true;\n    workspaceRoots =",
        "    hasSemanticTokensRefreshSupport = params.capabilities.workspace?.semanticTokens?.refreshSupport === true;\n    clientDocumentationLanguage = resolveDocumentationLanguage(params.locale);\n    globalSettings = { ...defaultSettings, documentationLanguage: clientDocumentationLanguage };\n    workspaceRoots =",
    );
    content = replaceOnce(
        content,
        '    return localizeCompletionList(\n        getCompletionList(document, params.position, params.context?.triggerCharacter),\n        settings.workshopLanguage,\n    );',
        '    return getCompletionList(document, params.position, params.context?.triggerCharacter, settings.documentationLanguage);',
        "completion handler",
    );
    content = replaceOnce(
        content,
        '    return localizeSignatureHelp(\n        getSignatureHelp(document, params.position, params.context?.triggerCharacter),\n        settings.workshopLanguage,\n    ) ?? null;',
        '    return getSignatureHelp(document, params.position, params.context?.triggerCharacter, settings.documentationLanguage) ?? null;',
        "signature handler",
    );
    content = content.replace("return localizeHover(getHover(document, params.position), settings.workshopLanguage);", "return getHover(document, params.position, settings.documentationLanguage);");
    content = content.replace('    const normalized: OverpySettings = {\n        ...defaultSettings,\n    };', '    const normalized: OverpySettings = {\n        ...defaultSettings,\n        documentationLanguage: clientDocumentationLanguage,\n    };');
    const workshopBlock = `        if ("workshopLanguage" in settings) {\n            const configuredLanguage = settings.workshopLanguage;\n            if (typeof configuredLanguage === "string" && supportedLanguages.includes(configuredLanguage as OWLanguage)) {\n                normalized.workshopLanguage = configuredLanguage as OWLanguage;\n            }\n        }\n`;
    content = replaceOnce(
        content,
        workshopBlock,
        workshopBlock + `\n        if ("documentationLanguage" in settings) {\n            const configuredLanguage = settings.documentationLanguage;\n            if (configuredLanguage === "auto") {\n                normalized.documentationLanguage = clientDocumentationLanguage;\n            } else if (typeof configuredLanguage === "string" && supportedLanguages.includes(configuredLanguage as OWLanguage)) {\n                normalized.documentationLanguage = configuredLanguage as OWLanguage;\n            }\n        }\n`,
        "documentation setting",
    );
    content = content.replace(
        "function getErrorMessage(error: unknown): string {",
        `function resolveDocumentationLanguage(locale: string | undefined): OWLanguage {\n    if (!locale) return "en-US";\n    if (supportedLanguages.includes(locale as OWLanguage)) return locale as OWLanguage;\n\n    const normalized = locale.toLowerCase().replaceAll("_", "-");\n    if (normalized.startsWith("zh")) {\n        return normalized.includes("hant") || normalized.includes("tw") || normalized.includes("hk") ? "zh-TW" : "zh-CN";\n    }\n    if (normalized.startsWith("es")) return normalized.includes("mx") ? "es-MX" : "es-ES";\n\n    const aliases: Record<string, OWLanguage> = {\n        de: "de-DE", en: "en-US", fr: "fr-FR", it: "it-IT", ja: "ja-JP",\n        ko: "ko-KR", pl: "pl-PL", pt: "pt-BR", ru: "ru-RU", th: "th-TH", tr: "tr-TR",\n    };\n    return aliases[normalized.split("-")[0]] ?? "en-US";\n}\n\nfunction getErrorMessage(error: unknown): string {`,
    );
    return content;
});

const packagePath = path.join(root, "package.json");
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));
const properties = pkg.contributes.configuration.properties;
const documentationLanguage = {
    type: "string",
    description: "Specifies the language used for editor documentation. 'auto' follows the VS Code display language.",
    default: "auto",
    enum: ["auto", "de-DE", "en-US", "es-ES", "es-MX", "fr-FR", "it-IT", "ja-JP", "ko-KR", "pl-PL", "pt-BR", "ru-RU", "th-TH", "tr-TR", "zh-CN", "zh-TW"],
};
const nextProperties = {};
for (const [key, value] of Object.entries(properties)) {
    nextProperties[key] = value;
    if (key === "overpy.workshopLanguage") nextProperties["overpy.documentationLanguage"] = documentationLanguage;
}
pkg.contributes.configuration.properties = nextProperties;
fs.writeFileSync(packagePath, JSON.stringify(pkg, null, 4) + "\n");

fs.rmSync(path.join(root, "src", "languageServer", "documentationLocalization.ts"), { force: true });

const testPath = path.join(root, "src", "test", "documentationLocalization.test.ts");
const testLines = [
    'import assert from "node:assert/strict";',
    '',
    'import { actionKw } from "../data/actions";',
    'import { formatDocumentation, getLocalizedString, localizableDocumentation } from "../data/opy/documentation";',
    '',
    'assert.equal(formatDocumentation("arguments", "ko-KR"), "인자:");',
    'assert.equal(formatDocumentation("returns", "ko-KR"), "반환값:");',
    'assert.equal(formatDocumentation("defaultValue", "ko-KR", "0.016"), "생략하면 기본값은 `0.016`입니다.");',
    'assert.equal(formatDocumentation("arguments", "ja-JP"), "Arguments:");',
    '',
    'const localized = localizableDocumentation("globalVariableIndex", 3);',
    'assert.equal(getLocalizedString(localized, "ko-KR"), "전역 변수입니다. (인덱스: 3)");',
    'assert.equal(getLocalizedString(localized, "fr-FR"), "A global variable. (index: 3)");',
    '',
    'assert.equal(typeof actionKw.wait.description, "object");',
    'assert.ok(actionKw.wait.description["en-US"]);',
    'assert.ok(actionKw.wait.description["ko-KR"]);',
    '',
    'console.log("Documentation localization tests passed.");',
];
fs.writeFileSync(testPath, testLines.join("\n") + "\n");

console.log("Additional documentation localization refactor prepared.");
