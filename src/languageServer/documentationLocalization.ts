import {
    CompletionList,
    Hover,
    MarkupContent,
    SignatureHelp,
} from "vscode-languageserver/node";

import type { OWLanguage } from "../types";

const koreanPhraseTranslations = new Map<string, string>([
    [
        "Pauses the execution of the action list.\nUnless the wait is interrupted, the remainder of the actions will execute after the pause.",
        "동작 목록의 실행을 일시 중지합니다.\n대기가 중단되지 않으면 남은 동작은 대기 시간이 지난 뒤 실행됩니다.",
    ],
    ["The duration of the pause.", "대기 시간입니다."],
    [
        "Specifies if and how the wait can be interrupted. If the condition list is ignored, the wait will not be interrupted.\nOtherwise, the condition list will determine if and when the action list will abort or restart.",
        "대기를 중단할 수 있는지와 중단 방식을 지정합니다. 조건 목록을 무시하면 대기가 중단되지 않습니다.\n그 외에는 조건 목록에 따라 동작 목록을 중단하거나 다시 시작할지와 그 시점이 결정됩니다.",
    ],
    ["Teleports one or more players to the specified position.", "한 명 이상의 플레이어를 지정한 위치로 순간이동시킵니다."],
    ["The player or players to teleport.", "순간이동할 플레이어입니다."],
    [
        "The position to which the player or players will teleport.\nIf a player is provided, the position of the player is used.",
        "플레이어가 순간이동할 위치입니다.\n플레이어를 지정하면 해당 플레이어의 위치를 사용합니다.",
    ],
    [
        "Creates hud text visible to specific players at a specific location on the screen.\nThis text will persist until destroyed. To obtain a reference to this text, use the last text id value.\nThis action will fail if too many text elements have been created.\n\nNote: you can use the macros `hudHeader`, `hudSubheader` and `hudSubtext` to reduce the number of arguments.",
        "지정한 플레이어에게 화면의 특정 위치에 HUD 텍스트를 표시합니다.\n이 텍스트는 제거할 때까지 유지됩니다. 텍스트를 참조하려면 마지막 텍스트 ID 값을 사용하세요.\n텍스트 요소가 너무 많이 생성된 경우 이 동작은 실패합니다.\n\n참고: `hudHeader`, `hudSubheader`, `hudSubtext` 매크로를 사용하면 필요한 인자 수를 줄일 수 있습니다.",
    ],
    ["One or more players who will see the hud text.", "HUD 텍스트를 볼 한 명 이상의 플레이어입니다."],
    ["The text to be displayed (can be blank)", "표시할 텍스트입니다. 비워 둘 수 있습니다."],
    ["The subheader text to be displayed (can be blank)", "표시할 부제목 텍스트입니다. 비워 둘 수 있습니다."],
    ["The body text to be displayed (can be blank)", "표시할 본문 텍스트입니다. 비워 둘 수 있습니다."],
    ["The location on the screen where the text will appear.", "텍스트가 표시될 화면 위치입니다."],
    [
        "The sort order of the text relative to other text in the same location.\nA higher sort order will come after a lower sort order.",
        "같은 위치에 있는 다른 텍스트와 비교한 정렬 순서입니다.\n정렬 순서가 높을수록 더 낮은 값 뒤에 배치됩니다.",
    ],
    ["The color of the header.", "제목의 색상입니다."],
    ["The color of the subheader.", "부제목의 색상입니다."],
    ["The color of the text.", "본문 텍스트의 색상입니다."],
    ["Specifies which of this action's inputs will be continuously reevaluated.", "이 동작의 입력값 중 계속 다시 계산할 항목을 지정합니다."],
    ["Whether spectators can see the text or not.", "관전자가 텍스트를 볼 수 있는지 지정합니다."],
    [
        "Creates an in-world effect entity.\nThis effect entity will persist until destroyed. To obtain a reference to this entity, use the last created entity value. This action will fail if too many entities have been created.",
        "월드 안에 효과 엔티티를 생성합니다.\n이 효과는 제거할 때까지 유지됩니다. 엔티티를 참조하려면 마지막으로 생성된 엔티티 값을 사용하세요. 너무 많은 엔티티가 생성된 경우 이 동작은 실패합니다.",
    ],
    ["One or more players who will be able to see the effect.", "효과를 볼 수 있는 한 명 이상의 플레이어입니다."],
    ["The type of effect to be created.", "생성할 효과의 종류입니다."],
    [
        "The color of the effect to be created.\nIf a particular team is chosen, the effect will either be red or blue, depending on whether the team is hostile to the viewer. Does not apply to sound effects. Does not support Custom Color.",
        "생성할 효과의 색상입니다.\n특정 팀을 선택하면 보는 사람에게 해당 팀이 적인지에 따라 효과가 빨간색 또는 파란색으로 표시됩니다. 사운드 효과에는 적용되지 않으며 사용자 지정 색상은 지원하지 않습니다.",
    ],
    [
        "The effect's position. If this value is a player, then the effect will move along with the player.\nOtherwise, the value is interpreted as a position in the world.",
        "효과가 표시될 위치입니다. 이 값이 플레이어이면 효과가 해당 플레이어를 따라 이동합니다.\n그 외에는 월드 좌표로 해석됩니다.",
    ],
    ["The radius of this effect.", "효과의 반경입니다."],
    ["Sets the move speed of one or more players to a percentage of their raw move speed.", "한 명 이상의 플레이어 이동 속도를 기본 이동 속도의 일정 비율로 설정합니다."],
    ["The player or players whose move speed will be set.", "이동 속도를 변경할 플레이어입니다."],
    ["The percentage of raw move speed to which the player or players will set their move speed.", "플레이어에게 적용할 기본 이동 속도 대비 비율입니다."],
    ["Modifies the score (kill count) of one or more players. This action only has an effect in free-for-all modes.", "한 명 이상의 플레이어 점수(처치 수)를 변경합니다. 이 동작은 자유 경쟁전 모드에서만 적용됩니다."],
    ["The player or players whose score will change.", "점수를 변경할 플레이어입니다."],
    ["The amount the score will increase or decrease. If positive, the score will increase. If negative, the score will decrease.", "점수를 증가시키거나 감소시킬 값입니다. 양수면 증가하고 음수면 감소합니다."],
    ["Adds a temporary health pool to a player or players. This health pool can be referenced using the Last Created Health Pool value. Up to 16 health pools of a given health type (health, armor, or shields) may exist on a player (including base pools and pools generated by abilities).", "한 명 이상의 플레이어에게 임시 생명력 풀을 추가합니다. 마지막으로 생성된 생명력 풀 값으로 참조할 수 있습니다. 플레이어 한 명에게 같은 생명력 유형(생명력, 방어력, 보호막)의 풀은 기본 풀과 기술로 생성된 풀을 포함해 최대 16개까지 존재할 수 있습니다."],
    ["The player or players whose movement collision is affected.", "생명력 풀을 추가할 플레이어입니다."],
    ["Specifies the type of health (Armor or shields) contained in the Health Pool.", "생명력 풀에 포함할 생명력 유형(방어력 또는 보호막)을 지정합니다."],
    ["The size of the health pool", "생명력 풀의 최대 크기입니다."],
    ["Whether health in this pool can be healed once it is lost.", "이 풀에서 잃은 생명력을 다시 회복할 수 있는지 지정합니다."],
]);

export function localizeDocumentation(markdown: string, language: OWLanguage): string {
    if (language !== "ko-KR") {
        return markdown;
    }

    let result = markdown;
    for (const [english, korean] of koreanPhraseTranslations) {
        result = result.replaceAll(english, korean);
    }

    result = result
        .replaceAll("Arguments:", "인자:")
        .replaceAll("Type: ", "타입: ")
        .replaceAll("Class: ", "클래스: ")
        .replaceAll("Returns: ", "반환값: ")
        .replaceAll("Value: ", "값: ")
        .replaceAll("This macro resolves to:", "이 매크로는 다음으로 변환됩니다:")
        .replaceAll("A user-defined enum member.", "사용자 정의 열거형 멤버입니다.")
        .replace(/A global variable\. \(index: (\d+)\)/g, "전역 변수입니다. (인덱스: $1)")
        .replace(/A player variable\. \(index: (\d+)\)/g, "플레이어 변수입니다. (인덱스: $1)")
        .replaceAll("A global variable.", "전역 변수입니다.")
        .replaceAll("A player variable.", "플레이어 변수입니다.")
        .replace(/A subroutine\. \(index: (\d+)\)/g, "서브루틴입니다. (인덱스: $1)")
        .replaceAll("A subroutine.", "서브루틴입니다.")
        .replace(/If omitted, defaults to `([^`]+)`\./g, "생략하면 기본값은 `$1`입니다.")
        .replace(/Part of extension `([^`]+)`\./g, "`$1` 확장 기능에 포함됩니다.")
        .replace(/The `([^`]+)` enum\./g, "`$1` 열거형입니다.")
        .replace(/Enum with (\d+) members?\./g, "$1개의 멤버를 가진 열거형입니다.")
        .replace(/<no documentation found for `([^`]+)`>/g, "`$1`에 대한 문서를 찾을 수 없습니다.");

    return result;
}

export function localizeCompletionList(list: CompletionList, language: OWLanguage): CompletionList {
    if (language !== "ko-KR") {
        return list;
    }

    return {
        ...list,
        items: list.items.map((item) => ({
            ...item,
            documentation: localizeMarkupContent(item.documentation, language),
        })),
    };
}

export function localizeSignatureHelp(help: SignatureHelp | undefined, language: OWLanguage): SignatureHelp | undefined {
    if (!help || language !== "ko-KR") {
        return help;
    }

    return {
        ...help,
        signatures: help.signatures.map((signature) => ({
            ...signature,
            documentation: localizeMarkupContent(signature.documentation, language),
            parameters: signature.parameters?.map((parameter) => ({
                ...parameter,
                documentation: localizeMarkupContent(parameter.documentation, language),
            })),
        })),
    };
}

export function localizeHover(hover: Hover | null, language: OWLanguage): Hover | null {
    if (!hover || language !== "ko-KR") {
        return hover;
    }

    if (typeof hover.contents === "object" && !Array.isArray(hover.contents) && "value" in hover.contents) {
        return {
            ...hover,
            contents: {
                ...hover.contents,
                value: localizeDocumentation(hover.contents.value, language),
            },
        };
    }

    return hover;
}

function localizeMarkupContent<T extends string | MarkupContent | undefined>(content: T, language: OWLanguage): T {
    if (typeof content === "string") {
        return localizeDocumentation(content, language) as T;
    }
    if (content && typeof content.value === "string") {
        return {
            ...content,
            value: localizeDocumentation(content.value, language),
        } as T;
    }
    return content;
}
