import assert from "node:assert/strict";

import { MarkupKind } from "vscode-languageserver/node";

import {
    localizeCompletionList,
    localizeDocumentation,
    localizeHover,
    localizeSignatureHelp,
} from "../languageServer/documentationLocalization";

const waitDocumentation = [
    "Pauses the execution of the action list.",
    "Unless the wait is interrupted, the remainder of the actions will execute after the pause.",
    "",
    "Arguments:",
    "- `time?`: The duration of the pause. If omitted, defaults to `0.016`.",
    "- `waitBehavior?`: Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted.",
    "Otherwise, the condition list will determine if and when the action list will abort or restart. If omitted, defaults to `Wait.IGNORE_CONDITION`.",
    "Returns: `void`",
].join("\n");

const localizedWait = localizeDocumentation(waitDocumentation, "ko-KR");
assert.match(localizedWait, /동작 목록의 실행을 일시 중지합니다/);
assert.match(localizedWait, /인자:/);
assert.match(localizedWait, /대기 시간입니다/);
assert.match(localizedWait, /생략하면 기본값은 `0\.016`입니다/);
assert.match(localizedWait, /반환값: `void`/);
assert.doesNotMatch(localizedWait, /Pauses the execution/);

assert.equal(
    localizeDocumentation(waitDocumentation, "en-US"),
    waitDocumentation,
    "non-Korean documentation must remain unchanged",
);

const completionList = localizeCompletionList(
    {
        isIncomplete: false,
        items: [
            {
                label: "teleport",
                documentation: {
                    kind: MarkupKind.Markdown,
                    value: "Teleports one or more players to the specified position.\n\nArguments:",
                },
            },
        ],
    },
    "ko-KR",
);
const completionDocumentation = completionList.items[0].documentation;
assert.ok(completionDocumentation && typeof completionDocumentation !== "string");
assert.match(completionDocumentation.value, /지정한 위치로 순간이동시킵니다/);
assert.match(completionDocumentation.value, /인자:/);

const signatureHelp = localizeSignatureHelp(
    {
        activeSignature: 0,
        activeParameter: 0,
        signatures: [
            {
                label: "wait(time=0.016)",
                parameters: [
                    {
                        label: "time=0.016",
                        documentation: {
                            kind: MarkupKind.Markdown,
                            value: "The duration of the pause.\n\nType: `unsigned float`",
                        },
                    },
                ],
            },
        ],
    },
    "ko-KR",
);
assert.ok(signatureHelp);
const parameterDocumentation = signatureHelp.signatures[0].parameters?.[0].documentation;
assert.ok(parameterDocumentation && typeof parameterDocumentation !== "string");
assert.match(parameterDocumentation.value, /대기 시간입니다/);
assert.match(parameterDocumentation.value, /타입: `unsigned float`/);

const hover = localizeHover(
    {
        contents: {
            kind: MarkupKind.Markdown,
            value: "**Hero**\n\nEnum with 42 members.",
        },
    },
    "ko-KR",
);
assert.ok(hover && typeof hover.contents === "object" && !Array.isArray(hover.contents) && "value" in hover.contents);
assert.match(hover.contents.value, /42개의 멤버를 가진 열거형입니다/);

console.log("Korean documentation localization tests passed.");
