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
    content = replaceOnce(content, "    Argument,\n", "    Argument,\n    LocalizableString,\n    OWLanguage,\n", "type imports");
    content = replaceOnce(
        content,
        'import { valueFuncKw } from "../data/values";\n',
        'import { valueFuncKw } from "../data/values";\nimport { formatDocumentation, getLocalizedString, localizableDocumentation } from "../data/opy/documentation";\n',
        "documentation import",
    );
    content = replaceOnce(content, "    description?: string;", "    description?: string | LocalizableString;", "CompletionData description");
    content = replaceOnce(
        content,
        'export function getCompletionState(uri?: string): CompletionState {\n    initializeCompletionState();\n    const dynamic = (uri !== undefined ? dynamicCompletionDataByUri.get(uri) : undefined) ?? dynamicCompletionData;\n    return buildCompletionState(dynamic);\n}',
        'export function getCompletionState(uri?: string, documentationLanguage: OWLanguage = "en-US"): CompletionState {\n    initializeCompletionState();\n    const dynamic = (uri !== undefined ? dynamicCompletionDataByUri.get(uri) : undefined) ?? dynamicCompletionData;\n    return buildCompletionState(dynamic, documentationLanguage);\n}',
        "getCompletionState",
    );
    content = replaceOnce(
        content,
        "    keywordArgument: string | null,\n): SignatureHelp | undefined {",
        '    keywordArgument: string | null,\n    documentationLanguage: OWLanguage = "en-US",\n): SignatureHelp | undefined {',
        "makeSignatureHelp language",
    );
    content = replaceOnce(
        content,
        '        parameters.push({\n            label: [start, signatureLabel.length],\n            documentation: {\n                kind: MarkupKind.Markdown,\n                value: `${arg.description ? `${arg.description}\\n\\n` : ""}Type: \\`${compiler.typeToString(arg.type)}\\``,\n            },\n        });',
        '        const argDescription = getLocalizedString(arg.description, documentationLanguage);\n        parameters.push({\n            label: [start, signatureLabel.length],\n            documentation: {\n                kind: MarkupKind.Markdown,\n                value: `${argDescription ? `${argDescription}\\n\\n` : ""}${formatDocumentation("type", documentationLanguage)} \\`${compiler.typeToString(arg.type)}\\``,\n            },\n        });',
        "signature argument docs",
    );
    content = replaceOnce(content, "    baseConstantValueCompletions = makeDefaultConstantValueCompletions();", '    baseConstantValueCompletions = makeDefaultConstantValueCompletions("en-US");', "base constants");
    content = content.replace("completionState.annotationCompletions = makeCompletionList(opyAnnotations, CompletionItemKind.Property);", 'completionState.annotationCompletions = makeCompletionList(opyAnnotations, CompletionItemKind.Property, "en-US");');
    content = content.replace("completionState.preprocessingCompletions = makeCompletionList(preprocessingDirectives, CompletionItemKind.Property);", 'completionState.preprocessingCompletions = makeCompletionList(preprocessingDirectives, CompletionItemKind.Property, "en-US");');
    content = replaceOnce(content, "        CompletionItemKind.Text,\n    );", '        CompletionItemKind.Text,\n        "en-US",\n    );', "string entity completion");

    content = replaceOnce(content, "function buildCompletionState(dynamic: DynamicCompletionData): CompletionState {", "function buildCompletionState(dynamic: DynamicCompletionData, documentationLanguage: OWLanguage): CompletionState {", "buildCompletionState signature");
    content = replaceOnce(
        content,
        "    const constantValueCompletions: Record<string, CompletionList> = { ...baseConstantValueCompletions };\n    const userEnumCompletions = getUserEnumCompletionLists(dynamic.userEnums, dynamic.declarationDocs.enumMembers);",
        '    const localizedBaseConstantValueCompletions = documentationLanguage === "en-US"\n        ? baseConstantValueCompletions\n        : makeDefaultConstantValueCompletions(documentationLanguage);\n    const constantValueCompletions: Record<string, CompletionList> = { ...localizedBaseConstantValueCompletions };\n    const userEnumCompletions = getUserEnumCompletionLists(dynamic.userEnums, dynamic.declarationDocs.enumMembers, documentationLanguage);',
        "localized constants",
    );
    content = content.replace("mergeEnumCompletionLists(baseConstantValueCompletions[enumName], userList)", "mergeEnumCompletionLists(localizedBaseConstantValueCompletions[enumName], userList)");
    content = replaceOnce(
        content,
        '                return [key, { description: doc ? `${doc}\\n\\nThe \\`${key}\\` enum.` : `The \\`${key}\\` enum.` }];',
        '                const enumDescription = localizableDocumentation("enum", key);\n                if (doc) enumDescription["en-US"] = `${doc}\\n\\n${enumDescription["en-US"]}`;\n                return [key, { description: enumDescription }];',
        "enum description",
    );
    content = content.replace("        annotationCompletions: completionState.annotationCompletions,", '        annotationCompletions: documentationLanguage === "en-US" ? completionState.annotationCompletions : makeCompletionList(opyAnnotations, CompletionItemKind.Property, documentationLanguage),');
    content = content.replace("        preprocessingCompletions: completionState.preprocessingCompletions,", '        preprocessingCompletions: documentationLanguage === "en-US" ? completionState.preprocessingCompletions : makeCompletionList(preprocessingDirectives, CompletionItemKind.Property, documentationLanguage),');
    content = content.replace("        defaultCompletions: makeCompletionList(defaultItems, CompletionItemKind.Function),", "        defaultCompletions: makeCompletionList(defaultItems, CompletionItemKind.Function, documentationLanguage),");
    content = content.replace("        memberCompletions: makeCompletionList(memberItems, CompletionItemKind.Method),", "        memberCompletions: makeCompletionList(memberItems, CompletionItemKind.Method, documentationLanguage),");

    content = content.replace("function makeDefaultConstantValueCompletions(): Record<string, CompletionList> {", "function makeDefaultConstantValueCompletions(documentationLanguage: OWLanguage): Record<string, CompletionList> {");
    content = content.replace("makeCompletionList(filterOw2Values(value), CompletionItemKind.EnumMember)", "makeCompletionList(filterOw2Values(value), CompletionItemKind.EnumMember, documentationLanguage)");
    content = replaceOnce(
        content,
        "    memberDocs: Map<string, Map<string, string>>,\n): Record<string, CompletionList> {",
        "    memberDocs: Map<string, Map<string, string>>,\n    documentationLanguage: OWLanguage,\n): Record<string, CompletionList> {",
        "user enum signature",
    );
    content = content.replace('let description = "A user-defined enum member.";', 'let description = formatDocumentation("userDefinedEnumMember", documentationLanguage);');
    content = content.replace('description += `\\n\\nValue: \\`${decompiler.astToOpy(memberAst)}\\``;', 'description += `\\n\\n${formatDocumentation("value", documentationLanguage)} \\`${decompiler.astToOpy(memberAst)}\\``;');
    content = content.replace("return makeCompletionItem(memberName, { description }, CompletionItemKind.EnumMember);", "return makeCompletionItem(memberName, { description }, CompletionItemKind.EnumMember, documentationLanguage);");

    content = replaceOnce(content, "function makeCompletionList(obj: Record<string, unknown>, defaultKind: CompletionItemKind): CompletionList {", "function makeCompletionList(obj: Record<string, unknown>, defaultKind: CompletionItemKind, documentationLanguage: OWLanguage): CompletionList {", "makeCompletionList signature");
    content = content.replace(".map((key) => makeCompletionItem(key, obj[key] as CompletionData, getCompletionKind(key, obj[key] as CompletionData, defaultKind))),", ".map((key) => makeCompletionItem(key, obj[key] as CompletionData, getCompletionKind(key, obj[key] as CompletionData, defaultKind), documentationLanguage)),");
    content = content.replace("function makeCompletionItem(itemName: string, item: CompletionData, kind: CompletionItemKind): CompletionItem {", "function makeCompletionItem(itemName: string, item: CompletionData, kind: CompletionItemKind, documentationLanguage: OWLanguage): CompletionItem {");
    content = content.replace("const documentation = generateDocumentation(itemName, item);", "const documentation = generateDocumentation(itemName, item, documentationLanguage);");
    content = replaceOnce(content, 'function generateDocumentation(itemName: string, item: CompletionData): string {\n    let result = typeof item.description === "string" ? item.description : "";', 'function generateDocumentation(itemName: string, item: CompletionData, documentationLanguage: OWLanguage): string {\n    let result = getLocalizedString(item.description, documentationLanguage);', "generateDocumentation signature");
    content = replaceOnce(
        content,
        '            const defaultText = arg.default !== undefined ? ` If omitted, defaults to \\`${argDefaultToString(arg).replaceAll("_", "_\\u200B")}\\`.` : "";\n            return `- \\`${arg.name}${arg.default !== undefined ? "?" : ""}\\`${arg.description ? `: ${arg.description}${arg.description.endsWith(".") ? "" : "."}` : ""}${defaultText}`;',
        '            const argDescription = getLocalizedString(arg.description, documentationLanguage);\n            const defaultText = arg.default !== undefined ? ` ${formatDocumentation("defaultValue", documentationLanguage, argDefaultToString(arg).replaceAll("_", "_\\u200B"))}` : "";\n            return `- \\`${arg.name}${arg.default !== undefined ? "?" : ""}\\`${argDescription ? `: ${argDescription}${argDescription.endsWith(".") ? "" : "."}` : ""}${defaultText}`;',
        "argument docs",
    );
    content = content.replace('info.push(`Arguments:\\n${args.join("\\n")}`);', 'info.push(`${formatDocumentation("arguments", documentationLanguage)}\\n${args.join("\\n")}`);');
    content = content.replace('info.push("Class: `Player`");', 'info.push(`${formatDocumentation("class", documentationLanguage)} `Player``);');
    content = content.replace('info.push(`Class: \\`${item.class}\\``);', 'info.push(`${formatDocumentation("class", documentationLanguage)} \\`${item.class}\\``);');
    content = content.replace('info.push(`Returns: \\`${compiler.typeToString(item.return as Type)}\\``);', 'info.push(`${formatDocumentation("returns", documentationLanguage)} \\`${compiler.typeToString(item.return as Type)}\\``);');
    content = content.replace('info.push(`Part of extension \\`${item.extension}\\`.`);', 'info.push(formatDocumentation("extension", documentationLanguage, item.extension));');
    content = content.replace('info.push(`This macro resolves to:\\n\\`${item.macro.trim().replaceAll("$", "")}\\``);', 'info.push(formatDocumentation("macroResolvesInline", documentationLanguage, item.macro.trim().replaceAll("$", "")));');
    content = content.replace('return result || (itemName ? `<no documentation found for \\`${itemName}\\`>` : "");', 'return result || (itemName ? formatDocumentation("noDocumentation", documentationLanguage, itemName) : "");');
    return content;
});

edit("src/languageServer/completions.ts", (content) => {
    content = 'import type { OWLanguage } from "../types";\n' + content;
    content = replaceOnce(content, "    triggerCharacter?: string,\n): CompletionList {", '    triggerCharacter?: string,\n    documentationLanguage: OWLanguage = "en-US",\n): CompletionList {', "completion language");
    return content.replaceAll("getCompletionState(document.uri)", "getCompletionState(document.uri, documentationLanguage)");
});

edit("src/languageServer/signatureHelp.ts", (content) => {
    content = replaceOnce(content, 'import { Position, SignatureHelp } from "vscode-languageserver/node";\n', 'import { Position, SignatureHelp } from "vscode-languageserver/node";\nimport type { OWLanguage } from "../types";\n', "signature import");
    content = replaceOnce(content, "    triggerCharacter?: string,\n): SignatureHelp | undefined {", '    triggerCharacter?: string,\n    documentationLanguage: OWLanguage = "en-US",\n): SignatureHelp | undefined {', "signature language");
    content = content.replace("getCompletionState(document.uri)", "getCompletionState(document.uri, documentationLanguage)");
    content = content.replace("        signatureContext.keywordArgument,\n    );", "        signatureContext.keywordArgument,\n        documentationLanguage,\n    );");
    return content;
});

console.log("LSP documentation refactor prepared.");
