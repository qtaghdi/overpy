import fs from "node:fs";

const file = "src/languageServer/completionState.ts";
let content = fs.readFileSync(file, "utf8");
content = content.replace(
    'info.push(`${formatDocumentation("class", documentationLanguage)} `Player``);',
    'info.push(`${formatDocumentation("class", documentationLanguage)} \\`Player\\``);',
);
fs.writeFileSync(file, content);
