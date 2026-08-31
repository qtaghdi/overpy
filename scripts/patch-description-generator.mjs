import fs from "node:fs";

const file = "generate-the-other-languages-doc.js";
let content = fs.readFileSync(file, "utf8");

content = content.replaceAll("if (fuzzyMatch) {", "if (!persistGuid || fuzzyMatch) {");

content = content.replace(
    'function replaceJsonObjectsInFile(path) {\n    console.log("Processing " + path);',
    'function replaceJsonObjectsInFile(path) {\n    if (!fs.existsSync(path)) {\n        console.warn("Skipping missing data file: " + path);\n        return;\n    }\n    console.log("Processing " + path);',
);

fs.writeFileSync(file, content);
console.log("Description DataTool lookup behavior patched.");
