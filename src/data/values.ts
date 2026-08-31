/*
 * This file is part of OverPy (https://github.com/Zezombye/overpy).
 * Copyright (c) 2019 Zezombye.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
// @ts-check

import { Value } from "../types";

export const valueFuncKw: Record<string, Value> =
//begin-json
{
    "Vector.BACKWARD": {
        "guid": "00000000B11B",
        "description": {
            "en-US": "Shorthand for the directional vector(0, 0, -1), which points backward."
        },
        "args": null,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "signed int"
            ]
        },
        "canBePutInBoolean": false,
        "isConstant": true,
        "en-US": "Backward",
        "es-MX": "Atrás",
        "fr-FR": "Arrière",
        "ja-JP": "後方",
        "pt-BR": "Para Trás",
        "tr-TR": "Geri",
        "zh-CN": "后",
        "de-DE": "Backward",
        "es-ES": "Backward",
        "it-IT": "Backward",
        "ko-KR": "Backward",
        "pl-PL": "Backward",
        "ru-RU": "Backward",
        "th-TH": "Backward",
        "zh-TW": "Backward"
    },
    "Vector.DOWN": {
        "guid": "00000000B119",
        "description": {
            "en-US": "Shorthand for the directional vector(0, -1, 0), which points downward."
        },
        "args": null,
        "return": {
            "Direction": [
                "unsigned int",
                "signed int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "isConstant": true,
        "en-US": "Down",
        "es-MX": "Abajo",
        "fr-FR": "Bas",
        "ja-JP": "下",
        "pt-BR": "Baixo",
        "tr-TR": "Ekle",
        "zh-CN": "下",
        "de-DE": "Down",
        "es-ES": "Down",
        "it-IT": "Down",
        "ko-KR": "Down",
        "pl-PL": "Down",
        "ru-RU": "Down",
        "th-TH": "Down",
        "zh-TW": "Down"
    },
    "Vector.FORWARD": {
        "guid": "00000000B11A",
        "description": {
            "en-US": "Shorthand for the directional vector(0, 0, 1), which points forward."
        },
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Forward",
        "es-MX": "Adelante",
        "fr-FR": "Avant",
        "ja-JP": "前方向",
        "pt-BR": "Para a Frente",
        "tr-TR": "İleri",
        "zh-CN": "前",
        "de-DE": "Forward",
        "es-ES": "Forward",
        "it-IT": "Forward",
        "ko-KR": "Forward",
        "pl-PL": "Forward",
        "ru-RU": "Forward",
        "th-TH": "Forward",
        "zh-TW": "Forward"
    },
    "Vector.LEFT": {
        "guid": "00000000B116",
        "description": {
            "en-US": "Shorthand for the directional vector(1, 0, 0), which points to the left."
        },
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Left",
        "es-MX": "Izquierda",
        "fr-FR": "Gauche",
        "ja-JP": "左",
        "pt-BR": "Esquerda",
        "tr-TR": "Sol",
        "zh-CN": "左",
        "de-DE": "Left",
        "es-ES": "Left",
        "it-IT": "Left",
        "ko-KR": "Left",
        "pl-PL": "Left",
        "ru-RU": "Left",
        "th-TH": "Left",
        "zh-TW": "Left"
    },
    "Vector.RIGHT": {
        "guid": "00000000B117",
        "description": {
            "en-US": "Shorthand for the directional vector(-1, 0, 0), which points to the right."
        },
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "signed int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Right",
        "es-MX": "Derecha",
        "fr-FR": "Droite",
        "ja-JP": "右",
        "pt-BR": "Direita",
        "tr-TR": "Sağ",
        "zh-CN": "右",
        "de-DE": "Right",
        "es-ES": "Right",
        "it-IT": "Right",
        "ko-KR": "Right",
        "pl-PL": "Right",
        "ru-RU": "Right",
        "th-TH": "Right",
        "zh-TW": "Right"
    },
    "Vector.UP": {
        "guid": "00000000B118",
        "description": {
            "en-US": "Shorthand for the directional vector(0, 1, 0), which points upward."
        },
        "args": null,
        "isConstant": true,
        "return": {
            "Direction": [
                "unsigned int",
                "unsigned int",
                "unsigned int"
            ]
        },
        "canBePutInBoolean": false,
        "en-US": "Up",
        "es-MX": "Arriba",
        "fr-FR": "Haut",
        "ja-JP": "上",
        "pt-BR": "Cima",
        "tr-TR": "At",
        "zh-CN": "上",
        "de-DE": "Up",
        "es-ES": "Up",
        "it-IT": "Up",
        "ko-KR": "Up",
        "pl-PL": "Up",
        "ru-RU": "Up",
        "th-TH": "Up",
        "zh-TW": "Up"
    },
    ".getAbilityCharge": {
        "description": {
            "en-US": "The ability charge count for a player associated by button."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ability to check."
                },
                "type": "Player"
            },
            {
                "name": "button",
                "description": {
                    "en-US": "The ability to check associated by button.",
                    "de-DE": "Die per Taste zugeordnete zu prüfende Fähigkeit.",
                    "es-ES": "Habilidad que se comprueba asociada por botón.",
                    "es-MX": "La habilidad que se verificará asociada por botón",
                    "fr-FR": "La capacité à vérifier associée à un bouton.",
                    "it-IT": "L'abilità da controllare associata al tasto.",
                    "ja-JP": "チェックするボタンに割り当てられたアビリティ",
                    "ko-KR": "버튼으로 확인할 기술입니다.",
                    "pl-PL": "Zdolność która zostanie sprawdzona; powiązana z przyciskiem.",
                    "pt-BR": "A habilidade a ser verificada associada por botão.",
                    "ru-RU": "Проверяемая способность сопоставленная с кнопкой.",
                    "th-TH": "The ability to check associated by button.",
                    "tr-TR": "Düğmeyle ilişkili kontrol edilecek kabiliyet.",
                    "zh-CN": "检测此按键对应的技能状态。",
                    "zh-TW": "The ability to check associated by button."
                },
                "type": "Button"
            }
        ],
        "return": "unsigned int",
        "guid": "000000011216",
        "en-US": "Ability Charge",
        "es-MX": "Carga de habilidad",
        "fr-FR": "Charge de la capacité",
        "ja-JP": "アビリティのチャージ",
        "pt-BR": "Cargas de Habilidade",
        "tr-TR": "Kabiliyet Dolum Oranı",
        "zh-CN": "技能充能",
        "de-DE": "Ability Charge",
        "es-ES": "Ability Charge",
        "it-IT": "Ability Charge",
        "ko-KR": "Ability Charge",
        "pl-PL": "Ability Charge",
        "ru-RU": "Ability Charge",
        "th-TH": "Ability Charge",
        "zh-TW": "Ability Charge"
    },
    ".getAbilityCooldown": {
        "description": {
            "en-US": "The ability cooldown time in seconds for a player associated by button."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ability to check."
                },
                "type": "Player"
            },
            {
                "name": "button",
                "description": {
                    "en-US": "The ability to check associated by button.",
                    "de-DE": "Die per Taste zugeordnete zu prüfende Fähigkeit.",
                    "es-ES": "Habilidad que se comprueba asociada por botón.",
                    "es-MX": "La habilidad que se verificará asociada por botón",
                    "fr-FR": "La capacité à vérifier associée à un bouton.",
                    "it-IT": "L'abilità da controllare associata al tasto.",
                    "ja-JP": "チェックするボタンに割り当てられたアビリティ",
                    "ko-KR": "버튼으로 확인할 기술입니다.",
                    "pl-PL": "Zdolność która zostanie sprawdzona; powiązana z przyciskiem.",
                    "pt-BR": "A habilidade a ser verificada associada por botão.",
                    "ru-RU": "Проверяемая способность сопоставленная с кнопкой.",
                    "th-TH": "The ability to check associated by button.",
                    "tr-TR": "Düğmeyle ilişkili kontrol edilecek kabiliyet.",
                    "zh-CN": "检测此按键对应的技能状态。",
                    "zh-TW": "The ability to check associated by button."
                },
                "type": "Button"
            }
        ],
        "return": "unsigned float",
        "guid": "0000000109B3",
        "en-US": "Ability Cooldown",
        "es-MX": "Reutilización de habilidad",
        "fr-FR": "Temps de recharge de la capacité",
        "ja-JP": "アビリティのクールダウン",
        "pt-BR": "Tempo de Recarga da Habilidade",
        "tr-TR": "Kabiliyet Dolum Süresi",
        "zh-CN": "技能冷却时间",
        "de-DE": "Ability Cooldown",
        "es-ES": "Ability Cooldown",
        "it-IT": "Ability Cooldown",
        "ko-KR": "Ability Cooldown",
        "pl-PL": "Ability Cooldown",
        "ru-RU": "Ability Cooldown",
        "th-TH": "Ability Cooldown",
        "zh-TW": "Ability Cooldown"
    },
    ".getAbilityResource": {
        "description": {
            "en-US": "The ability resource percent for a player associated by button."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ability to check."
                },
                "type": "Player"
            },
            {
                "name": "button",
                "description": {
                    "en-US": "The ability to check associated by button.",
                    "de-DE": "Die per Taste zugeordnete zu prüfende Fähigkeit.",
                    "es-ES": "Habilidad que se comprueba asociada por botón.",
                    "es-MX": "La habilidad que se verificará asociada por botón",
                    "fr-FR": "La capacité à vérifier associée à un bouton.",
                    "it-IT": "L'abilità da controllare associata al tasto.",
                    "ja-JP": "チェックするボタンに割り当てられたアビリティ",
                    "ko-KR": "버튼으로 확인할 기술입니다.",
                    "pl-PL": "Zdolność która zostanie sprawdzona; powiązana z przyciskiem.",
                    "pt-BR": "A habilidade a ser verificada associada por botão.",
                    "ru-RU": "Проверяемая способность сопоставленная с кнопкой.",
                    "th-TH": "The ability to check associated by button.",
                    "tr-TR": "Düğmeyle ilişkili kontrol edilecek kabiliyet.",
                    "zh-CN": "检测此按键对应的技能状态。",
                    "zh-TW": "The ability to check associated by button."
                },
                "type": "Button"
            }
        ],
        "return": "unsigned float",
        "guid": "000000011218",
        "en-US": "Ability Resource",
        "es-MX": "Recurso de habilidad",
        "fr-FR": "Ressource de la capacité",
        "ja-JP": "アビリティのリソース",
        "pt-BR": "Recurso de Habilidade",
        "tr-TR": "Kabiliyet Kaynağı",
        "zh-CN": "技能资源",
        "de-DE": "Ability Resource",
        "es-ES": "Ability Resource",
        "it-IT": "Ability Resource",
        "ko-KR": "Ability Resource",
        "pl-PL": "Ability Resource",
        "ru-RU": "Ability Resource",
        "th-TH": "Ability Resource",
        "zh-TW": "Ability Resource"
    },
    ".getAllowedHeroes": {
        "description": {
            "en-US": "The array of heroes from which the specified player is currently allowed to select."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose allowed heroes to acquire."
                },
                "type": "Player"
            }
        ],
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000BBA8",
        "en-US": "Allowed Heroes",
        "es-MX": "Héroes permitidos",
        "fr-FR": "Héros autorisés",
        "ja-JP": "許可されたヒーロー",
        "pt-BR": "Heróis Permitidos",
        "tr-TR": "Seçilebilen Kahramanlar",
        "zh-CN": "可用英雄",
        "de-DE": "Allowed Heroes",
        "es-ES": "Allowed Heroes",
        "it-IT": "Allowed Heroes",
        "ko-KR": "Allowed Heroes",
        "pl-PL": "Allowed Heroes",
        "ru-RU": "Allowed Heroes",
        "th-TH": "Allowed Heroes",
        "zh-TW": "Allowed Heroes"
    },
    ".getAltitude": {
        "description": {
            "en-US": "The player's current height in meters above a surface. Results in 0 whenever the player is on a surface."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose altitude to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B11D",
        "en-US": "Altitude Of",
        "es-MX": "Altitud de",
        "fr-FR": "Altitude de",
        "ja-JP": "高度: ",
        "pt-BR": "Altitude de",
        "tr-TR": "İrtifa",
        "zh-CN": "高度",
        "de-DE": "Altitude Of",
        "es-ES": "Altitude Of",
        "it-IT": "Altitude Of",
        "ko-KR": "Altitude Of",
        "pl-PL": "Altitude Of",
        "ru-RU": "Altitude Of",
        "th-TH": "Altitude Of",
        "zh-TW": "Altitude Of"
    },
    ".getAmmo": {
        "description": {
            "en-US": "The current ammo of a player."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ammo to acquire."
                },
                "type": "Player"
            },
            {
                "name": "clip",
                "description": {
                    "en-US": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades)."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "unsigned float",
        "guid": "0000000110E8",
        "en-US": "Ammo",
        "es-ES": "Munición",
        "es-MX": "Munición",
        "fr-FR": "Munitions",
        "ja-JP": "弾薬数",
        "pt-BR": "Munição",
        "tr-TR": "Cephane",
        "zh-CN": "弹药",
        "de-DE": "Ammo",
        "it-IT": "Ammo",
        "ko-KR": "Ammo",
        "pl-PL": "Ammo",
        "ru-RU": "Ammo",
        "th-TH": "Ammo",
        "zh-TW": "Ammo"
    },
    ".getHero": {
        "description": {
            "en-US": "The current hero of a player."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose hero to acquire."
                },
                "type": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Hero",
        "guid": "00000000ACA9",
        "en-US": "Hero Of",
        "es-MX": "Héroe de",
        "fr-FR": "Héroïsme de",
        "ja-JP": "ヒーロー: ",
        "pt-BR": "Herói de",
        "tr-TR": "Kahraman",
        "zh-CN": "所用英雄",
        "de-DE": "Hero Of",
        "es-ES": "Hero Of",
        "it-IT": "Hero Of",
        "ko-KR": "Hero Of",
        "pl-PL": "Hero Of",
        "ru-RU": "Hero Of",
        "th-TH": "Hero Of",
        "zh-TW": "Hero Of"
    },
    ".getCurrentWeapon": {
        "description": {
            "en-US": "The currently held weapon of a player. Returns 2 for Baby Dva's gun, Torbjorn's hammer, and Mercy's pistol; 1 otherwise."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose weapon to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned int",
        "guid": "000000011059",
        "en-US": "Weapon",
        "es-MX": "Arma",
        "fr-FR": "Arme",
        "ja-JP": "武器",
        "pt-BR": "Arma",
        "tr-TR": "Silah",
        "zh-CN": "武器",
        "de-DE": "Weapon",
        "es-ES": "Weapon",
        "it-IT": "Weapon",
        "ko-KR": "Weapon",
        "pl-PL": "Weapon",
        "ru-RU": "Weapon",
        "th-TH": "Weapon",
        "zh-TW": "Weapon"
    },
    ".getEyePosition": {
        "guid": "00000000C595",
        "description": {
            "en-US": "The position of a player's first person view (used for aiming)"
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The position of a player's first person view (used for aiming)"
                },
                "type": "Player"
            }
        ],
        "return": "Position",
        "canBePutInBoolean": false,
        "en-US": "Eye Position",
        "es-MX": "Posición de la vista",
        "fr-FR": "Position des yeux",
        "ja-JP": "目の位置",
        "pt-BR": "Posição do Olho",
        "th-TH": "ตำแหน่งตา",
        "tr-TR": "Göz Konumu",
        "zh-CN": "眼睛位置",
        "de-DE": "Eye Position",
        "es-ES": "Eye Position",
        "it-IT": "Eye Position",
        "ko-KR": "Eye Position",
        "pl-PL": "Eye Position",
        "ru-RU": "Eye Position",
        "zh-TW": "Eye Position"
    },
    ".getFacingDirection": {
        "description": {
            "en-US": "The unit-length directional vector of a player's current facing relative to the world. This value includes both horizontal and vertical facing."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose facing direction to acquire."
                },
                "type": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B281",
        "en-US": "Facing Direction Of",
        "es-MX": "Dirección de orientación de",
        "fr-FR": "Regard en direction de",
        "ja-JP": "プレイヤーが向いている方向: ",
        "pt-BR": "Direção Frontal de",
        "tr-TR": "Doğrultulduğu Yön",
        "zh-CN": "面朝方向",
        "de-DE": "Facing Direction Of",
        "es-ES": "Facing Direction Of",
        "it-IT": "Facing Direction Of",
        "ko-KR": "Facing Direction Of",
        "pl-PL": "Facing Direction Of",
        "ru-RU": "Facing Direction Of",
        "th-TH": "Facing Direction Of",
        "zh-TW": "Facing Direction Of"
    },
    ".getHealth": {
        "guid": "0000000081C2",
        "description": {
            "en-US": "The current health of a player, including armor and shields."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose health to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned float",
        "en-US": "Health",
        "es-MX": "Salud",
        "fr-FR": "Points de vie",
        "ja-JP": "ライフ",
        "pt-BR": "Vida",
        "tr-TR": "Can",
        "zh-CN": "生命值",
        "de-DE": "Health",
        "es-ES": "Health",
        "it-IT": "Health",
        "ko-KR": "Health",
        "pl-PL": "Health",
        "ru-RU": "Health",
        "th-TH": "Health",
        "zh-TW": "Health"
    },
    ".getHealthOfType": {
        "description": {
            "en-US": "The current health of the specified player, filtered by the given health type."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose health to acquire."
                },
                "type": "Player"
            },
            {
                "name": "health",
                "description": {
                    "en-US": "The type of health to acquire.",
                    "de-DE": "Der Typ der Trefferpunkte die abgerufen werden sollen.",
                    "es-ES": "Tipo de salud que se adquiere.",
                    "es-MX": "El tipo de salud que se adquirirá.",
                    "fr-FR": "Le type de points de vie à acquérir.",
                    "it-IT": "Il tipo di salute che sarà acquisita.",
                    "ja-JP": "取得するライフの種類",
                    "ko-KR": "가져올 생명력의 유형입니다.",
                    "pl-PL": "Typ zdrowia do pozyskania.",
                    "pt-BR": "O tipo de vida que será adquirido.",
                    "ru-RU": "Тип запаса здоровья который нужно определить.",
                    "th-TH": "The type of health to acquire.",
                    "tr-TR": "Edinilecek can türü.",
                    "zh-CN": "获取此类型的生命值。",
                    "zh-TW": "The type of health to acquire."
                },
                "type": "Health"
            }
        ],
        "return": "unsigned float",
        "guid": "000000011448",
        "en-US": "Health Of Type",
        "es-MX": "Salud según tipo",
        "fr-FR": "Points de vie par type",
        "ja-JP": "タイプごとのライフ",
        "pt-BR": "Vida do Tipo",
        "th-TH": "พลังชีวิตของประเภท",
        "tr-TR": "Türe Göre Can",
        "zh-CN": "类型的生命值",
        "de-DE": "Health Of Type",
        "es-ES": "Health Of Type",
        "it-IT": "Health Of Type",
        "ko-KR": "Health Of Type",
        "pl-PL": "Health Of Type",
        "ru-RU": "Health Of Type",
        "zh-TW": "Health Of Type"
    },
    ".getHeroOfDuplication": {
        "description": {
            "en-US": "The hero currently being duplicated by the specified player. If no hero is being duplicated, the resulting value is 0."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player performing the duplication."
                },
                "type": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Hero",
        "guid": "000000010E6A",
        "en-US": "Hero Being Duplicated",
        "es-MX": "Héroe que está siendo copiado",
        "fr-FR": "Héros dupliqué",
        "ja-JP": "コピーされているヒーロー",
        "pt-BR": "Herói Sendo Duplicado",
        "th-TH": "ฮีโร่ที่กำลังถูกดูพลิเคต",
        "tr-TR": "Kopyalanan Kahraman",
        "zh-CN": "正在复制的英雄",
        "de-DE": "Hero Being Duplicated",
        "es-ES": "Hero Being Duplicated",
        "it-IT": "Hero Being Duplicated",
        "ko-KR": "Hero Being Duplicated",
        "pl-PL": "Hero Being Duplicated",
        "ru-RU": "Hero Being Duplicated",
        "zh-TW": "Hero Being Duplicated"
    },
    ".getHeroStatistic": {
        "description": {
            "en-US": "Provides a statistic of the specified player's time playing a specific hero (limited to the current match). Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The Player whose statistic to acquire.",
                    "de-DE": "Der Spieler dessen Statistikwert abgerufen werden soll.",
                    "es-ES": "Jugador cuyas estadísticas se adquieren.",
                    "es-MX": "El jugador cuya estadística se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les statistiques.",
                    "it-IT": "Il giocatore del quale acquisire la statistica.",
                    "ja-JP": "統計を取得するプレイヤー",
                    "ko-KR": "통계치를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego statystykę należy pozyskać.",
                    "pt-BR": "O Jogador cuja estatística será obtida.",
                    "ru-RU": "Игрок статистику которого нужно определить.",
                    "th-TH": "The Player whose statistic to acquire.",
                    "tr-TR": "İstatistiği alınacak Oyuncu.",
                    "zh-CN": "获取此玩家的数据。",
                    "zh-TW": "The Player whose statistic to acquire."
                },
                "type": "Player"
            },
            {
                "name": "hero",
                "description": {
                    "en-US": "The hero whose statistic to acquire"
                },
                "type": "Hero"
            },
            {
                "name": "stat",
                "description": {
                    "en-US": "The statistic to acquire.",
                    "de-DE": "Der Statistikwert der abgerufen werden soll.",
                    "es-ES": "Las estadísticas que se adquieren.",
                    "es-MX": "La estadística que se adquirirá.",
                    "fr-FR": "Les statistiques à acquérir.",
                    "it-IT": "La statistica da acquisire.",
                    "ja-JP": "取得する統計",
                    "ko-KR": "가져올 통계치입니다.",
                    "pl-PL": "Statystyka która zostanie pozyskana.",
                    "pt-BR": "A estatística a ser obtida.",
                    "ru-RU": "Статистика которую нужно определить.",
                    "th-TH": "The statistic to acquire.",
                    "tr-TR": "Alınacak istatistik.",
                    "zh-CN": "获取数据。",
                    "zh-TW": "The statistic to acquire."
                },
                "type": "HeroStat"
            }
        ],
        "return": "unsigned float",
        "guid": "000000012505",
        "en-US": "Player Hero Stat",
        "es-MX": "Estadística de héroe del jugador",
        "fr-FR": "Stats de héros de joueur",
        "ja-JP": "プレイヤー・ヒーロー統計",
        "pt-BR": "Estatística de Herói do Jogador",
        "tr-TR": "Oyuncu Kahraman İstatistiği",
        "zh-CN": "玩家英雄数据",
        "de-DE": "Player Hero Stat",
        "es-ES": "Player Hero Stat",
        "it-IT": "Player Hero Stat",
        "ko-KR": "Player Hero Stat",
        "pl-PL": "Player Hero Stat",
        "ru-RU": "Player Hero Stat",
        "th-TH": "Player Hero Stat",
        "zh-TW": "Player Hero Stat"
    },
    ".getHorizontalFacingAngle": {
        "description": {
            "en-US": "The horizontal angle in degrees of a player's current facing relative to the world. This value increases as the player rotates to the left (wrapping around at +/- 180)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose horizontal facing angle to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "float",
        "guid": "00000000B27F",
        "en-US": "Horizontal Facing Angle Of",
        "es-MX": "Ángulo horizontal de orientación de",
        "fr-FR": "Angle horizontal du regard de",
        "ja-JP": "対面水平角: ",
        "pt-BR": "Ângulo Horizontal Frontal de",
        "tr-TR": "Yatay Konumlandırma Açısı",
        "zh-CN": "水平朝向角度",
        "de-DE": "Horizontal Facing Angle Of",
        "es-ES": "Horizontal Facing Angle Of",
        "it-IT": "Horizontal Facing Angle Of",
        "ko-KR": "Horizontal Facing Angle Of",
        "pl-PL": "Horizontal Facing Angle Of",
        "ru-RU": "Horizontal Facing Angle Of",
        "th-TH": "Horizontal Facing Angle Of",
        "zh-TW": "Horizontal Facing Angle Of"
    },
    ".getHorizontalSpeed": {
        "description": {
            "en-US": "The current horizontal speed of a player in meters per second. This measurement excludes all vertical motion."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose horizontal speed to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25E",
        "en-US": "Horizontal Speed Of",
        "es-MX": "Velocidad horizontal de",
        "fr-FR": "Vitesse horizontale de",
        "ja-JP": "水平速度: ",
        "pt-BR": "Velocidade Horizontal de",
        "tr-TR": "Yatay Hız",
        "zh-CN": "水平速度",
        "de-DE": "Horizontal Speed Of",
        "es-ES": "Horizontal Speed Of",
        "it-IT": "Horizontal Speed Of",
        "ko-KR": "Horizontal Speed Of",
        "pl-PL": "Horizontal Speed Of",
        "ru-RU": "Horizontal Speed Of",
        "th-TH": "Horizontal Speed Of",
        "zh-TW": "Horizontal Speed Of"
    },
    ".getMaxAmmo": {
        "description": {
            "en-US": "The current max ammo of a player."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose max ammo to acquire."
                },
                "type": "Player"
            },
            {
                "name": "clip",
                "description": {
                    "en-US": "The index of the clip to be acquired. 0 is the first clip, and 1 is the second (only used for Bastion's Sentry gun and Baptiste's Heal Grenades)."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": 0
            }
        ],
        "return": "unsigned float",
        "guid": "0000000110EA",
        "en-US": "Max Ammo",
        "es-MX": "Munición máxima",
        "fr-FR": "Munitions maximum",
        "ja-JP": "最大弾薬数",
        "pt-BR": "Munição Máxima",
        "th-TH": "กระสุนสูงสุด",
        "tr-TR": "Maks. Cephane",
        "zh-CN": "最大弹药",
        "de-DE": "Max Ammo",
        "es-ES": "Max Ammo",
        "it-IT": "Max Ammo",
        "ko-KR": "Max Ammo",
        "pl-PL": "Max Ammo",
        "ru-RU": "Max Ammo",
        "zh-TW": "Max Ammo"
    },
    ".getMaxHealth": {
        "description": {
            "en-US": "The max health of a player, including armor and shields."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose max health to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned float",
        "guid": "0000000081C4",
        "en-US": "Max Health",
        "es-MX": "Salud máxima",
        "fr-FR": "Points de vie maximum",
        "ja-JP": "最大ライフ",
        "pt-BR": "Vida Máxima",
        "tr-TR": "Maks. Can",
        "zh-CN": "最大生命值",
        "de-DE": "Max Health",
        "es-ES": "Max Health",
        "it-IT": "Max Health",
        "ko-KR": "Max Health",
        "pl-PL": "Max Health",
        "ru-RU": "Max Health",
        "th-TH": "Max Health",
        "zh-TW": "Max Health"
    },
    ".getMaxHealthOfType": {
        "description": {
            "en-US": "The max health of the specified player, filtered by the given health type."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose max health to acquire."
                },
                "type": "Player"
            },
            {
                "name": "health",
                "description": {
                    "en-US": "The type of max health to acquire.",
                    "de-DE": "Der Typ der maximalen Trefferpunkte die abgerufen werden sollen.",
                    "es-ES": "Tipo de salud máxima que se adquiere.",
                    "es-MX": "El tipo de salud máxima que se adquirirá.",
                    "fr-FR": "Le type de points de vie maximum à acquérir.",
                    "it-IT": "Il tipo di salute massima che sarà acquisita.",
                    "ja-JP": "取得する最大ライフの種類",
                    "ko-KR": "가져올 최대 생명력의 유형입니다.",
                    "pl-PL": "Typ maksimum zdrowia do pozyskania.",
                    "pt-BR": "O tipo de vida máxima que será adquirido.",
                    "ru-RU": "Тип максимального запаса здоровья который нужно определить.",
                    "th-TH": "ประเภทของพลังชีวิตสูงสุดที่จะได้รับ",
                    "tr-TR": "Edinilecek maksimum can türü.",
                    "zh-CN": "获取此类型的最大生命值。",
                    "zh-TW": "The type of max health to acquire."
                },
                "type": "Health"
            }
        ],
        "return": "unsigned float",
        "guid": "000000011446",
        "en-US": "Max Health Of Type",
        "es-MX": "Salud máxima según tipo",
        "fr-FR": "Points de vie maximum par type",
        "ja-JP": "タイプごとの最大ライフ",
        "pt-BR": "Vida Máxima do Tipo",
        "tr-TR": "Türe Göre Maks. Can",
        "zh-CN": "类型的最大生命值",
        "de-DE": "Max Health Of Type",
        "es-ES": "Max Health Of Type",
        "it-IT": "Max Health Of Type",
        "ko-KR": "Max Health Of Type",
        "pl-PL": "Max Health Of Type",
        "ru-RU": "Max Health Of Type",
        "th-TH": "Max Health Of Type",
        "zh-TW": "Max Health Of Type"
    },
    ".getNormalizedHealth": {
        "description": {
            "en-US": "The current health of a player, including armor and shields, normalized between 0 and 1. (for example, 0 is no health, 0.5 is half health, 1 is full health, etc.)"
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose normalized health to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned float",
        "guid": "0000000081C3",
        "en-US": "Normalized Health",
        "es-MX": "Salud normalizada",
        "fr-FR": "Points de vie normalisés",
        "ja-JP": "正規化ライフ",
        "pt-BR": "Vida Normalizada",
        "tr-TR": "Normalleştirilen Can",
        "zh-CN": "标准化生命值",
        "de-DE": "Normalized Health",
        "es-ES": "Normalized Health",
        "it-IT": "Normalized Health",
        "ko-KR": "Normalized Health",
        "pl-PL": "Normalized Health",
        "ru-RU": "Normalized Health",
        "th-TH": "Normalized Health",
        "zh-TW": "Normalized Health"
    },
    ".getNumberOfDeaths": {
        "description": {
            "en-US": "The number of deaths a specific player has earned. This value only accumulates while a game is in progress."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose death count to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B103",
        "en-US": "Number Of Deaths",
        "de-DE": "Number of Deaths",
        "es-MX": "Cantidad de muertes",
        "fr-FR": "Nombre de morts",
        "it-IT": "Number of Deaths",
        "ja-JP": "デス数",
        "pt-BR": "Número de Mortes",
        "tr-TR": "Ölüm Sayısı",
        "zh-CN": "死亡数",
        "es-ES": "Number Of Deaths",
        "ko-KR": "Number Of Deaths",
        "pl-PL": "Number Of Deaths",
        "ru-RU": "Number Of Deaths",
        "th-TH": "Number Of Deaths",
        "zh-TW": "Number Of Deaths"
    },
    ".getNumberOfElims": {
        "description": {
            "en-US": "The number of eliminations a specific player has earned. This value only accumulates while a game is in progress."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose elimination count to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B101",
        "en-US": "Number Of Eliminations",
        "de-DE": "Number of Eliminations",
        "es-MX": "Cantidad de eliminaciones",
        "fr-FR": "Nombre d’éliminations",
        "it-IT": "Number of Eliminations",
        "ja-JP": "エリミネーション数",
        "pt-BR": "Número de Eliminações",
        "tr-TR": "Bertaraf Sayısı",
        "zh-CN": "消灭数",
        "es-ES": "Number Of Eliminations",
        "ko-KR": "Number Of Eliminations",
        "pl-PL": "Number Of Eliminations",
        "ru-RU": "Number Of Eliminations",
        "th-TH": "Number Of Eliminations",
        "zh-TW": "Number Of Eliminations"
    },
    ".getNumberOfFinalBlows": {
        "description": {
            "en-US": "The number of final blows a specific player has earned. This value only accumulates while a game is in progress."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose final blow count to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B102",
        "en-US": "Number Of Final Blows",
        "de-DE": "Number of Final Blows",
        "es-MX": "Cantidad de golpes de gracia",
        "fr-FR": "Nombre de coups de grâce",
        "it-IT": "Number of Final Blows",
        "ja-JP": "ファイナル・ブロウ数",
        "pt-BR": "Número de Golpes Finais",
        "tr-TR": "Son Vuruş Sayısı",
        "zh-CN": "最后一击数",
        "es-ES": "Number Of Final Blows",
        "ko-KR": "Number Of Final Blows",
        "pl-PL": "Number Of Final Blows",
        "ru-RU": "Number Of Final Blows",
        "th-TH": "Number Of Final Blows",
        "zh-TW": "Number Of Final Blows"
    },
    ".getPlayerClosestToReticle": {
        "description": {
            "en-US": "The player closest to the reticle of the specified player, optionally restricted by team."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player from whose reticle to search for the closest player."
                },
                "type": "Player"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to search for the closest player."
                },
                "type": "Team"
            }
        ],
        "return": "Player",
        "guid": "00000000C328",
        "hideFromAutocomplete": true,
        "en-US": "Player Closest To Reticle",
        "es-MX": "Jugador más cercano al retículo",
        "fr-FR": "Joueur le plus proche du réticule",
        "ja-JP": "照準に最も近いプレイヤー",
        "pt-BR": "Jogador Mais Próximo da Mira",
        "tr-TR": "Retiküle En Yakın Oyuncu",
        "zh-CN": "距离准星最近的玩家",
        "de-DE": "Player Closest To Reticle",
        "es-ES": "Player Closest To Reticle",
        "it-IT": "Player Closest To Reticle",
        "ko-KR": "Player Closest To Reticle",
        "pl-PL": "Player Closest To Reticle",
        "ru-RU": "Player Closest To Reticle",
        "th-TH": "Player Closest To Reticle",
        "zh-TW": "Player Closest To Reticle"
    },
    ".getPlayersInViewAngle": {
        "description": {
            "en-US": "The players who are within a specific view angle of a specific player's reticle, optionally restricted by team.\n\n**Note**: This function picks up dead and unspawned players. Use `.getRealPlayersInViewAngle()` instead."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose view to use for the check."
                },
                "type": "Player"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to consider players."
                },
                "type": "Team"
            },
            {
                "name": "viewAngle",
                "description": {
                    "en-US": "The view angle to compare against in degrees."
                },
                "type": "float"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "hideFromAutocomplete": true,
        "guid": "00000000C32F",
        "en-US": "Players in View Angle",
        "es-MX": "Jugadores en el ángulo de vista",
        "fr-FR": "Joueurs dans le champ de vision",
        "ja-JP": "視角範囲内のプレイヤー",
        "pt-BR": "Jogadores no Ângulo de Visão",
        "tr-TR": "Oyuncuların Görüş Açısı",
        "zh-CN": "视角中的玩家",
        "de-DE": "Players in View Angle",
        "es-ES": "Players in View Angle",
        "it-IT": "Players in View Angle",
        "ko-KR": "Players in View Angle",
        "pl-PL": "Players in View Angle",
        "ru-RU": "Players in View Angle",
        "th-TH": "Players in View Angle",
        "zh-TW": "Players in View Angle"
    },
    ".getPosition": {
        "description": {
            "en-US": "The current position of a player as a vector."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose position to acquire."
                },
                "type": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B11C",
        "en-US": "Position Of",
        "es-MX": "Posición de",
        "fr-FR": "Position de",
        "ja-JP": "位置: ",
        "pt-BR": "Posição de",
        "tr-TR": "Konum",
        "zh-CN": "所选位置",
        "de-DE": "Position Of",
        "es-ES": "Position Of",
        "it-IT": "Position Of",
        "ko-KR": "Position Of",
        "pl-PL": "Position Of",
        "ru-RU": "Position Of",
        "th-TH": "Position Of",
        "zh-TW": "Position Of"
    },
    ".getScore": {
        "description": {
            "en-US": "The current score of a player. Results in 0 if the game mode is not free-for-all."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose score to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "int",
        "guid": "00000000AD3C",
        "en-US": "Score Of",
        "es-MX": "Puntuación de",
        "fr-FR": "Score de",
        "ja-JP": "スコア: ",
        "pt-BR": "Pontuação de",
        "tr-TR": "Skor",
        "zh-CN": "分数",
        "de-DE": "Score Of",
        "es-ES": "Score Of",
        "it-IT": "Score Of",
        "ko-KR": "Score Of",
        "pl-PL": "Score Of",
        "ru-RU": "Score Of",
        "th-TH": "Score Of",
        "zh-TW": "Score Of"
    },
    ".getSlot": {
        "description": {
            "en-US": "The slot number of the specified player. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose slot number to acquire.",
                    "de-DE": "Der Spieler dessen Slot-Nummer abgerufen werden soll.",
                    "es-ES": "Jugador cuyo número de ranura se adquiere.",
                    "es-MX": "El jugador cuyo número de puesto se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir le numéro d’emplacement.",
                    "it-IT": "Il Giocatore il cui numero dello slot sarà acquisito.",
                    "ja-JP": "スロット番号を取得するプレイヤー",
                    "ko-KR": "슬롯 번호 정보를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego miejsce należy pozyskać.",
                    "pt-BR": "O Jogador cujo número de espaço será adquirido.",
                    "ru-RU": "Игрок номер ячейки которого нужно получить.",
                    "th-TH": "The player whose slot number to acquire.",
                    "tr-TR": "Yuva numarası alınacak Oyuncu.",
                    "zh-CN": "获取此玩家的栏位编号。",
                    "zh-TW": "The player whose slot number to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000BB7F",
        "en-US": "Slot Of",
        "es-MX": "Puesto de",
        "fr-FR": "Emplacement de",
        "ja-JP": "スロット: ",
        "pt-BR": "Espaço de",
        "tr-TR": "Yuvası",
        "zh-CN": "栏位",
        "de-DE": "Slot Of",
        "es-ES": "Slot Of",
        "it-IT": "Slot Of",
        "ko-KR": "Slot Of",
        "pl-PL": "Slot Of",
        "ru-RU": "Slot Of",
        "th-TH": "Slot Of",
        "zh-TW": "Slot Of"
    },
    ".getSpeed": {
        "description": {
            "en-US": "The current speed of a player in meters per second."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose speed to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25D",
        "en-US": "Speed Of",
        "es-MX": "Velocidad de",
        "fr-FR": "Vitesse de",
        "ja-JP": "速さ: ",
        "pt-BR": "Velocidade de",
        "tr-TR": "Hız",
        "zh-CN": "速度",
        "de-DE": "Speed Of",
        "es-ES": "Speed Of",
        "it-IT": "Speed Of",
        "ko-KR": "Speed Of",
        "pl-PL": "Speed Of",
        "ru-RU": "Speed Of",
        "th-TH": "Speed Of",
        "zh-TW": "Speed Of"
    },
    ".getSpeedInDirection": {
        "description": {
            "en-US": "The current speed of a player in a specific direction in meters per second."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose speed to acquire."
                },
                "type": "Player"
            },
            {
                "name": "direction",
                "description": {
                    "en-US": "The direction of travel in which to measure the player's speed."
                },
                "type": "Direction"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B260",
        "en-US": "Speed Of In Direction",
        "es-MX": "Velocidad deen dirección",
        "fr-FR": "Vitesse dans la direction donnée de",
        "ja-JP": "速さと方向: ",
        "pt-BR": "Velocidade de na Direção",
        "tr-TR": "Yön Hız",
        "zh-CN": "指定方向速度",
        "de-DE": "Speed Of In Direction",
        "es-ES": "Speed Of In Direction",
        "it-IT": "Speed Of In Direction",
        "ko-KR": "Speed Of In Direction",
        "pl-PL": "Speed Of In Direction",
        "ru-RU": "Speed Of In Direction",
        "th-TH": "Speed Of In Direction",
        "zh-TW": "Speed Of In Direction"
    },
    ".getStatistic": {
        "description": {
            "en-US": "Provides a statistic of the specified player (limited to the current match). Statistics are only gathered when the game is in progress. Dummy bots do not gather statistics."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The Player whose statistic to acquire.",
                    "de-DE": "Der Spieler dessen Statistikwert abgerufen werden soll.",
                    "es-ES": "Jugador cuyas estadísticas se adquieren.",
                    "es-MX": "El jugador cuya estadística se adquirirá.",
                    "fr-FR": "Le joueur dont il faut acquérir les statistiques.",
                    "it-IT": "Il giocatore del quale acquisire la statistica.",
                    "ja-JP": "統計を取得するプレイヤー",
                    "ko-KR": "통계치를 가져올 플레이어입니다.",
                    "pl-PL": "Gracz którego statystykę należy pozyskać.",
                    "pt-BR": "O Jogador cuja estatística será obtida.",
                    "ru-RU": "Игрок статистику которого нужно определить.",
                    "th-TH": "The Player whose statistic to acquire.",
                    "tr-TR": "İstatistiği alınacak Oyuncu.",
                    "zh-CN": "获取此玩家的数据。",
                    "zh-TW": "The Player whose statistic to acquire."
                },
                "type": "Player"
            },
            {
                "name": "statistic",
                "description": {
                    "en-US": "The statistic to acquire.",
                    "de-DE": "Der Statistikwert der abgerufen werden soll.",
                    "es-ES": "Las estadísticas que se adquieren.",
                    "es-MX": "La estadística que se adquirirá.",
                    "fr-FR": "Les statistiques à acquérir.",
                    "it-IT": "La statistica da acquisire.",
                    "ja-JP": "取得する統計",
                    "ko-KR": "가져올 통계치입니다.",
                    "pl-PL": "Statystyka która zostanie pozyskana.",
                    "pt-BR": "A estatística a ser obtida.",
                    "ru-RU": "Статистика которую нужно определить.",
                    "th-TH": "The statistic to acquire.",
                    "tr-TR": "Alınacak istatistik.",
                    "zh-CN": "获取数据。",
                    "zh-TW": "The statistic to acquire."
                },
                "type": "Stat"
            }
        ],
        "return": "unsigned float",
        "guid": "000000012507",
        "en-US": "Player Stat",
        "es-MX": "Estadística de jugador",
        "fr-FR": "Stats de joueur",
        "ja-JP": "プレイヤーの統計",
        "pt-BR": "Estatística de Jogador",
        "tr-TR": "Oyuncu İstatistiği",
        "zh-CN": "玩家数据",
        "de-DE": "Player Stat",
        "es-ES": "Player Stat",
        "it-IT": "Player Stat",
        "ko-KR": "Player Stat",
        "pl-PL": "Player Stat",
        "ru-RU": "Player Stat",
        "th-TH": "Player Stat",
        "zh-TW": "Player Stat"
    },
    ".getTeam": {
        "description": {
            "en-US": "The team of a player. If the game mode is free-for-all, the team is considered to be all."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose team to acquire."
                },
                "type": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Team",
        "guid": "00000000B279",
        "en-US": "Team Of",
        "es-MX": "Equipo de",
        "fr-FR": "Équipe de",
        "ja-JP": "チーム: ",
        "pt-BR": "Equipe de",
        "tr-TR": "Takım",
        "zh-CN": "所在队伍",
        "de-DE": "Team Of",
        "es-ES": "Team Of",
        "it-IT": "Team Of",
        "ko-KR": "Team Of",
        "pl-PL": "Team Of",
        "ru-RU": "Team Of",
        "th-TH": "Team Of",
        "zh-TW": "Team Of"
    },
    ".getThrottle": {
        "description": {
            "en-US": "The directional input of a player, represented by a vector with horizontal input on the x component (positive to the left) and vertical input on the z component (positive upward)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose directional input to acquire."
                },
                "type": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B2F5",
        "en-US": "Throttle Of",
        "es-MX": "Aceleración de",
        "fr-FR": "Accélération de",
        "ja-JP": "スロットル: ",
        "pt-BR": "Aceleração de",
        "tr-TR": "Hızlanma:",
        "zh-CN": "阈值",
        "de-DE": "Throttle Of",
        "es-ES": "Throttle Of",
        "it-IT": "Throttle Of",
        "ko-KR": "Throttle Of",
        "pl-PL": "Throttle Of",
        "ru-RU": "Throttle Of",
        "th-TH": "Throttle Of",
        "zh-TW": "Throttle Of"
    },
    ".getUltCharge": {
        "description": {
            "en-US": "The current ultimate ability charge percentage of a player."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ultimate charge percentage to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned int",
        "guid": "0000000081C5",
        "en-US": "Ultimate Charge Percent",
        "es-MX": "Porcentaje de carga de la habilidad máxima",
        "fr-FR": "Pourcentage de charge de la capacité ultime",
        "ja-JP": "アルティメット・チャージのパーセンテージ",
        "pt-BR": "Percentual de Carga da Suprema",
        "tr-TR": "Ulti Dolum Oranı Yüzdesi",
        "zh-CN": "终极技能充能百分比",
        "de-DE": "Ultimate Charge Percent",
        "es-ES": "Ultimate Charge Percent",
        "it-IT": "Ultimate Charge Percent",
        "ko-KR": "Ultimate Charge Percent",
        "pl-PL": "Ultimate Charge Percent",
        "ru-RU": "Ultimate Charge Percent",
        "th-TH": "Ultimate Charge Percent",
        "zh-TW": "Ultimate Charge Percent"
    },
    ".getVelocity": {
        "description": {
            "en-US": "The current velocity of a player as a vector. If the player is on a surface, the y component of this velocity will be 0, even when traveling up or down a slope."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose velocity to acquire."
                },
                "type": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Velocity",
        "guid": "00000000B25C",
        "en-US": "Velocity Of",
        "es-MX": "Rapidez de",
        "fr-FR": "Vélocité de",
        "ja-JP": "速度: ",
        "pt-BR": "Rapidez de",
        "tr-TR": "Hız",
        "zh-CN": "速率",
        "de-DE": "Velocity Of",
        "es-ES": "Velocity Of",
        "it-IT": "Velocity Of",
        "ko-KR": "Velocity Of",
        "pl-PL": "Velocity Of",
        "ru-RU": "Velocity Of",
        "th-TH": "Velocity Of",
        "zh-TW": "Velocity Of"
    },
    ".getVerticalFacingAngle": {
        "description": {
            "en-US": "The vertical angle in degrees of a player's current facing relative to the world. This value increases as the player looks down."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose vertical facing angle to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "float",
        "guid": "00000000B280",
        "en-US": "Vertical Facing Angle Of",
        "es-MX": "Ángulo vertical de orientación de",
        "fr-FR": "Angle vertical du regard de",
        "ja-JP": "対面頂角: ",
        "pt-BR": "Ângulo Vertical Frontal de",
        "tr-TR": "Dikey Konumlandırma Açısı",
        "zh-CN": "垂直朝向角度",
        "de-DE": "Vertical Facing Angle Of",
        "es-ES": "Vertical Facing Angle Of",
        "it-IT": "Vertical Facing Angle Of",
        "ko-KR": "Vertical Facing Angle Of",
        "pl-PL": "Vertical Facing Angle Of",
        "ru-RU": "Vertical Facing Angle Of",
        "th-TH": "Vertical Facing Angle Of",
        "zh-TW": "Vertical Facing Angle Of"
    },
    ".getVerticalSpeed": {
        "description": {
            "en-US": "The current vertical speed of a player in meters per second. This measurement excludes all horizontal motion, including motion while traveling up and down slopes."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose vertical speed to acquire."
                },
                "type": "Player"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B25F",
        "en-US": "Vertical Speed Of",
        "es-MX": "Velocidad vertical de",
        "fr-FR": "Vitesse verticale de",
        "ja-JP": "垂直速度: ",
        "pt-BR": "Velocidade Vertical de",
        "tr-TR": "Dikey Hız",
        "zh-CN": "垂直速度",
        "de-DE": "Vertical Speed Of",
        "es-ES": "Vertical Speed Of",
        "it-IT": "Vertical Speed Of",
        "ko-KR": "Vertical Speed Of",
        "pl-PL": "Vertical Speed Of",
        "ru-RU": "Vertical Speed Of",
        "th-TH": "Vertical Speed Of",
        "zh-TW": "Vertical Speed Of"
    },
    ".hasSpawned": {
        "description": {
            "en-US": "Whether an entity has spawned in the world. Results in false for players who have not chosen a hero yet."
        },
        "args": [
            {
                "name": "entity",
                "description": {
                    "en-US": "The player, icon entity, or effect entity whose presence in world to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000C192",
        "en-US": "Has Spawned",
        "es-MX": "Ha aparecido",
        "fr-FR": "Apparition",
        "ja-JP": "スポーンした",
        "pt-BR": "Surgiu",
        "tr-TR": "Doğdu",
        "zh-CN": "已重生",
        "de-DE": "Has Spawned",
        "es-ES": "Has Spawned",
        "it-IT": "Has Spawned",
        "ko-KR": "Has Spawned",
        "pl-PL": "Has Spawned",
        "ru-RU": "Has Spawned",
        "th-TH": "Has Spawned",
        "zh-TW": "Has Spawned"
    },
    ".hasStatus": {
        "description": {
            "en-US": "Whether the specified player has the specified status, either from the set status action or from a non-scripted game mechanic."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose status to check."
                },
                "type": "Player"
            },
            {
                "name": "status",
                "description": {
                    "en-US": "The status to check for.",
                    "de-DE": "Der Status auf den geprüft werden soll.",
                    "es-ES": "Estado que se comprueba.",
                    "es-MX": "El estado que se verificará.",
                    "fr-FR": "Le statut à vérifier.",
                    "it-IT": "Lo stato da controllare.",
                    "ja-JP": "チェックするステータス",
                    "ko-KR": "확인할 상태입니다.",
                    "pl-PL": "Status do sprawdzenia.",
                    "pt-BR": "O status a ser verificado.",
                    "ru-RU": "Проверяемый статус.",
                    "th-TH": "The status to check for.",
                    "tr-TR": "Kontrol edilecek durum.",
                    "zh-CN": "要检测的状态。",
                    "zh-TW": "The status to check for."
                },
                "type": "Status"
            }
        ],
        "return": "bool",
        "guid": "00000000B363",
        "en-US": "Has Status",
        "es-MX": "Tiene estado",
        "fr-FR": "Statut",
        "ja-JP": "ステータスがある",
        "pt-BR": "Tem Status",
        "tr-TR": "Durumu Olan",
        "zh-CN": "具有状态",
        "de-DE": "Has Status",
        "es-ES": "Has Status",
        "it-IT": "Has Status",
        "ko-KR": "Has Status",
        "pl-PL": "Has Status",
        "ru-RU": "Has Status",
        "th-TH": "Has Status",
        "zh-TW": "Has Status"
    },
    ".isAlive": {
        "description": {
            "en-US": "Whether a player is alive."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose life to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B278",
        "en-US": "Is Alive",
        "es-MX": "Está vivo",
        "fr-FR": "En vie",
        "ja-JP": "生存している",
        "pt-BR": "É Vivo",
        "tr-TR": "Hayatta",
        "zh-CN": "存活",
        "de-DE": "Is Alive",
        "es-ES": "Is Alive",
        "it-IT": "Is Alive",
        "ko-KR": "Is Alive",
        "pl-PL": "Is Alive",
        "ru-RU": "Is Alive",
        "th-TH": "Is Alive",
        "zh-TW": "Is Alive"
    },
    ".isCommunicating": {
        "description": {
            "en-US": "Whether a player is using a specific communication type (such as emoting, using a voice line, using a spray, etc.)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose communication status to check."
                },
                "type": "Player"
            },
            {
                "name": "type",
                "description": {
                    "en-US": "The type of communication to consider. The duration of emotes is exact the duration of voice lines is assumed to be 4 seconds and all other durations are assumed to be 2 seconds.",
                    "de-DE": "Der Typ der zu berücksichtigenden Kommunikation. Die Dauer von Emotes ist genau als Dauer von Sprüchen werden 4 Sekunden angenommen. Für jede andere Dauer werden 2 Sekunden angenommen.",
                    "es-ES": "Tipo de comunicación que se considera. La duración de los gestos es exacta la duración de las frases se presupone que es 4 segundos y las demás duraciones se presuponen de 2 segundos.",
                    "es-MX": "El tipo de comunicación que se considerará. La duración de los gestos es exacta se calcula que la duración de las líneas de voz es de 4 segundos y que las demás duraciones son de 2 segundos.",
                    "fr-FR": "Le type de communication à prendre en compte. La durée des emotes est exacte la durée des répliques est supposée être de 4 secondes et toutes les autres durées sont supposées être de 2 secondes.",
                    "it-IT": "Il tipo di comunicazione da considerare. La durata delle emote è esatta la durata delle battute audio è impostata a 4 secondi mentre tutte le altre durate sono impostate a 2 secondi.",
                    "ja-JP": "検討されるコミュニケーションのタイプ。エモートの持続時間は固定、ボイス・ラインは4秒を想定、その他の所要時間は2秒を想定している",
                    "ko-KR": "고려할 의사소통 유형입니다. 감정 표현의 지속 시간은 정확하게 적용되며 음성 대사의 지속 시간은 4초로 간주합니다. 그 이외의 지속 시간은 2초로 간주합니다.",
                    "pl-PL": "Typ komunikacji do uwzględnienia. Czas działania emotek jest dokładny domyślny czas trwania kwestii to 4 sekundy a pozostałe czasy to domyślnie 2 sekundy.",
                    "pt-BR": "O tipo de comunicação a ser considerado. A duração dos emotes é exata presume-se que a duração das falas seja de 4 segundos e presume-se que todas as outras durações sejam de 2 segundos.",
                    "ru-RU": "Рассматриваемый тип коммуникации. Длительность эмоций ограничена жестко длительность реплик приравнивается к 4 секундам длительность остальных видов коммуникации приравнивается к 2 секундам.",
                    "th-TH": "The type of communication to consider. The duration of emotes is exact the duration of voice lines is assumed to be 4 seconds and all other durations are assumed to be 2 seconds.",
                    "tr-TR": "Değerlendirilecek iletişim türü. İfadelerin süresi aynıyken repliklerin süresi 4 saniye diğer tüm süreler ise 2 saniye olarak kabul edilmektedir.",
                    "zh-CN": "考察的交流类型。表情的持续时间为准确值，语音的播放时间视为4秒，其他所有交流类型的持续时间视为2秒。",
                    "zh-TW": "The type of communication to consider. The duration of emotes is exact the duration of voice lines is assumed to be 4 seconds and all other durations are assumed to be 2 seconds."
                },
                "type": "Comms"
            }
        ],
        "return": "bool",
        "guid": "00000000B268",
        "en-US": "Is Communicating",
        "es-MX": "Se está comunicando",
        "fr-FR": "Communication",
        "ja-JP": "コミュニケーションしている",
        "pt-BR": "É Comunicando",
        "tr-TR": "İletişim Kuruyor",
        "zh-CN": "正在交流",
        "de-DE": "Is Communicating",
        "es-ES": "Is Communicating",
        "it-IT": "Is Communicating",
        "ko-KR": "Is Communicating",
        "pl-PL": "Is Communicating",
        "ru-RU": "Is Communicating",
        "th-TH": "Is Communicating",
        "zh-TW": "Is Communicating"
    },
    ".isCommunicatingAnything": {
        "description": {
            "en-US": "Whether a player is using any communication type (such as emoting, using a voice line, using a spray, etc.)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose communication status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B9E5",
        "en-US": "Is Communicating Any",
        "es-MX": "Comunica algo",
        "fr-FR": "N’importe quelle communication",
        "ja-JP": "任意の方法でコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer",
        "tr-TR": "Herhangi Bir Şekilde İletişim Kuruyor",
        "zh-CN": "正在与人交流",
        "de-DE": "Is Communicating Any",
        "es-ES": "Is Communicating Any",
        "it-IT": "Is Communicating Any",
        "ko-KR": "Is Communicating Any",
        "pl-PL": "Is Communicating Any",
        "ru-RU": "Is Communicating Any",
        "th-TH": "Is Communicating Any",
        "zh-TW": "Is Communicating Any"
    },
    ".isCommunicatingEmote": {
        "description": {
            "en-US": "Whether a player is using an emote."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose emoting status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B9E8",
        "en-US": "Is Communicating Any Emote",
        "es-MX": "Comunica un gesto",
        "fr-FR": "Communication par emote",
        "ja-JP": "エモートでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Emote",
        "tr-TR": "İfadeyle İletişim Kuruyor",
        "zh-CN": "正在使用表情交流",
        "de-DE": "Is Communicating Any Emote",
        "es-ES": "Is Communicating Any Emote",
        "it-IT": "Is Communicating Any Emote",
        "ko-KR": "Is Communicating Any Emote",
        "pl-PL": "Is Communicating Any Emote",
        "ru-RU": "Is Communicating Any Emote",
        "th-TH": "Is Communicating Any Emote",
        "zh-TW": "Is Communicating Any Emote"
    },
    ".isCommunicatingSpray": {
        "description": {
            "en-US": "Whether a Player is using a spray.",
            "de-DE": "Ob ein Spieler ein Spray verwendet.",
            "es-ES": "Si un jugador está usando un grafiti.",
            "es-MX": "Verifica si un jugador está utilizando un spray.",
            "fr-FR": "Si une personne utilise un tag.",
            "it-IT": "Specifica se un Giocatore sta usando uno spray.",
            "ja-JP": "プレイヤーがスプレーを使用しているかどうか",
            "ko-KR": "플레이어가 스프레이를 사용하는지 여부입니다.",
            "pl-PL": "Czy gracz korzysta z graffiti.",
            "pt-BR": "Se um Jogador está usando um spray ou não.",
            "ru-RU": "Определяет использует ли игрок граффити.",
            "th-TH": "Whether a Player is using a spray.",
            "tr-TR": "Bir Oyuncu'nun grafiti kullanıp kullanmadığı.",
            "zh-CN": "玩家是否在使用喷漆。",
            "zh-TW": "Whether a Player is using a spray."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The Player whose spray status to check.",
                    "de-DE": "Der Spieler dessen Spray-Status geprüft werden soll.",
                    "es-ES": "Jugador cuyo estado de grafiti se comprueba.",
                    "es-MX": "El jugador cuyo estado de spray se verificará.",
                    "fr-FR": "La personne dont il faut vérifier le statut d’utilisation de tags.",
                    "it-IT": "Il Giocatore il cui stato dello spray sarà controllato.",
                    "ja-JP": "スプレー・ステータスを確認するプレイヤー",
                    "ko-KR": "스프레이 상태를 확인할 플레이어입니다.",
                    "pl-PL": "Gracz status graffiti którego zostanie sprawdzony.",
                    "pt-BR": "O Jogador cujo status de spray será verificado.",
                    "ru-RU": "Игрок для которого производится проверка статуса граффити.",
                    "th-TH": "The Player whose spray status to check.",
                    "tr-TR": "Grafiti durumu kontrol edilecek Oyuncu.",
                    "zh-CN": "检测此玩家的喷漆状态。",
                    "zh-TW": "The Player whose spray status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "000000012290",
        "en-US": "Is Communicating Any Spray",
        "es-MX": "Comunica un spray",
        "fr-FR": "Communication par tag",
        "ja-JP": "スプレーでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Spray",
        "tr-TR": "Grafitiyle İletişim Kuruyor",
        "zh-CN": "正在使用喷漆交流",
        "de-DE": "Is Communicating Any Spray",
        "es-ES": "Is Communicating Any Spray",
        "it-IT": "Is Communicating Any Spray",
        "ko-KR": "Is Communicating Any Spray",
        "pl-PL": "Is Communicating Any Spray",
        "ru-RU": "Is Communicating Any Spray",
        "th-TH": "Is Communicating Any Spray",
        "zh-TW": "Is Communicating Any Spray"
    },
    ".isCommunicatingVoiceline": {
        "description": {
            "en-US": "Whether a player is using a voice line. (The duration of voice lines is assumed to be 4 seconds.)"
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose voice line status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B9E7",
        "en-US": "Is Communicating Any Voice line",
        "es-MX": "Comunica una línea de voz",
        "fr-FR": "Communication par réplique",
        "ja-JP": "ボイス・ラインでコミュニケーションしている",
        "pt-BR": "É Comunicando Qualquer Fala",
        "tr-TR": "Replikle İletişim Kuruyor",
        "zh-CN": "正在使用语音交流",
        "de-DE": "Is Communicating Any Voice line",
        "es-ES": "Is Communicating Any Voice line",
        "it-IT": "Is Communicating Any Voice line",
        "ko-KR": "Is Communicating Any Voice line",
        "pl-PL": "Is Communicating Any Voice line",
        "ru-RU": "Is Communicating Any Voice line",
        "th-TH": "Is Communicating Any Voice line",
        "zh-TW": "Is Communicating Any Voice line"
    },
    ".isCrouching": {
        "description": {
            "en-US": "Whether a player is crouching."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose crouching status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B289",
        "en-US": "Is Crouching",
        "es-MX": "Agachado",
        "fr-FR": "Accroupi",
        "ja-JP": "しゃがんでいる",
        "pt-BR": "É Agachado",
        "tr-TR": "Çömeliyor",
        "zh-CN": "正在蹲下",
        "de-DE": "Is Crouching",
        "es-ES": "Is Crouching",
        "it-IT": "Is Crouching",
        "ko-KR": "Is Crouching",
        "pl-PL": "Is Crouching",
        "ru-RU": "Is Crouching",
        "th-TH": "Is Crouching",
        "zh-TW": "Is Crouching"
    },
    ".isDead": {
        "description": {
            "en-US": "Whether a player is dead."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose death to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B277",
        "en-US": "Is Dead",
        "es-MX": "Está muerto",
        "fr-FR": "Mort",
        "ja-JP": "倒れている",
        "pt-BR": "É Morto",
        "tr-TR": "Öldü",
        "zh-CN": "死亡",
        "de-DE": "Is Dead",
        "es-ES": "Is Dead",
        "it-IT": "Is Dead",
        "ko-KR": "Is Dead",
        "pl-PL": "Is Dead",
        "ru-RU": "Is Dead",
        "th-TH": "Is Dead",
        "zh-TW": "Is Dead"
    },
    ".isDummy": {
        "description": {
            "en-US": "Whether a player is a dummy bot."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "Player to consider.",
                    "de-DE": "Der zu berücksichtigende Spieler.",
                    "es-ES": "Jugador que se considera.",
                    "es-MX": "Jugador a considerar.",
                    "fr-FR": "Joueur à prendre en compte.",
                    "it-IT": "Giocatore da considerare.",
                    "ja-JP": "推定プレイヤー",
                    "ko-KR": "고려할 플레이어입니다.",
                    "pl-PL": "Gracze do uwzględnienia.",
                    "pt-BR": "Jogador a ser considerado.",
                    "ru-RU": "Рассматриваемый игрок.",
                    "th-TH": "Player to consider.",
                    "tr-TR": "Dikkate alınacak Oyuncu.",
                    "zh-CN": "考察此玩家。",
                    "zh-TW": "Player to consider."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000CEDF",
        "en-US": "Is Dummy Bot",
        "es-MX": "Robot de entrenamiento",
        "fr-FR": "Est une I.A.",
        "ja-JP": "ダミーボットである",
        "pt-BR": "É Bot",
        "th-TH": "เป็นบอตฝึกซ้อม",
        "tr-TR": "Eğitim Robotu",
        "zh-CN": "是否是机器人",
        "de-DE": "Is Dummy Bot",
        "es-ES": "Is Dummy Bot",
        "it-IT": "Is Dummy Bot",
        "ko-KR": "Is Dummy Bot",
        "pl-PL": "Is Dummy Bot",
        "ru-RU": "Is Dummy Bot",
        "zh-TW": "Is Dummy Bot"
    },
    ".isDuplicatingAHero": {
        "description": {
            "en-US": "Whether the specified player is duplicating another hero. To check which hero, use the Hero Being Duplicated value."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose duplication status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "000000010E65",
        "en-US": "Is Duplicating",
        "es-MX": "Está copiando",
        "fr-FR": "Effectue une duplication",
        "ja-JP": "コピー中",
        "pt-BR": "Está Duplicando",
        "th-TH": "ถูกทำซ้ำอยู่",
        "tr-TR": "Kopyalıyor",
        "zh-CN": "正在人格复制",
        "de-DE": "Is Duplicating",
        "es-ES": "Is Duplicating",
        "it-IT": "Is Duplicating",
        "ko-KR": "Is Duplicating",
        "pl-PL": "Is Duplicating",
        "ru-RU": "Is Duplicating",
        "zh-TW": "Is Duplicating"
    },
    ".isFiringPrimaryFire": {
        "description": {
            "en-US": "Whether the specified player's primary weapon attack is being used."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose primary weapon attack usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000C3E7",
        "en-US": "Is Firing Primary",
        "es-MX": "Está usando el disparo principal",
        "fr-FR": "Tir principal",
        "ja-JP": "メイン攻撃を使用中",
        "pt-BR": "É Disparo Primário",
        "tr-TR": "Birincil Saldırıyı Kullanıyor",
        "zh-CN": "正在使用主要武器",
        "de-DE": "Is Firing Primary",
        "es-ES": "Is Firing Primary",
        "it-IT": "Is Firing Primary",
        "ko-KR": "Is Firing Primary",
        "pl-PL": "Is Firing Primary",
        "ru-RU": "Is Firing Primary",
        "th-TH": "Is Firing Primary",
        "zh-TW": "Is Firing Primary"
    },
    ".isFiringSecondaryFire": {
        "description": {
            "en-US": "Whether the specified player's secondary weapon attack is being used."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose secondary weapon attack usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000C3E9",
        "en-US": "Is Firing Secondary",
        "es-MX": "Está usando el disparo secundario",
        "fr-FR": "Tir secondaire",
        "ja-JP": "サブ攻撃を使用中",
        "pt-BR": "É Disparo Secundário",
        "tr-TR": "İkincil Saldırıyı Kullanıyor",
        "zh-CN": "正在使用辅助武器",
        "de-DE": "Is Firing Secondary",
        "es-ES": "Is Firing Secondary",
        "it-IT": "Is Firing Secondary",
        "ko-KR": "Is Firing Secondary",
        "pl-PL": "Is Firing Secondary",
        "ru-RU": "Is Firing Secondary",
        "th-TH": "Is Firing Secondary",
        "zh-TW": "Is Firing Secondary"
    },
    ".isHoldingButton": {
        "description": {
            "en-US": "Whether a player is holding a specific button."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose button to check."
                },
                "type": "Player"
            },
            {
                "name": "button",
                "description": {
                    "en-US": "The button to check.",
                    "de-DE": "Die zu prüfende Taste.",
                    "es-ES": "Botón que se comprueba.",
                    "es-MX": "El botón que se verificará.",
                    "fr-FR": "Le bouton à vérifier.",
                    "it-IT": "Il tasto da controllare.",
                    "ja-JP": "チェックするボタン",
                    "ko-KR": "확인할 버튼입니다.",
                    "pl-PL": "Przycisk do sprawdzenia.",
                    "pt-BR": "O botão a ser verificado.",
                    "ru-RU": "Проверяемая кнопка.",
                    "th-TH": "The button to check.",
                    "tr-TR": "Kontrol edilecek düğme.",
                    "zh-CN": "用于检测的按钮。",
                    "zh-TW": "The button to check."
                },
                "type": "Button"
            }
        ],
        "return": "bool",
        "guid": "00000000B2F3",
        "en-US": "Is Button Held",
        "es-MX": "Botón presionado",
        "fr-FR": "Bouton maintenu enfoncé",
        "ja-JP": "ボタンが長押しされている",
        "pt-BR": "É Botão Segurado",
        "tr-TR": "Basılı Tutulan Düğme",
        "zh-CN": "按钮被按下",
        "de-DE": "Is Button Held",
        "es-ES": "Is Button Held",
        "it-IT": "Is Button Held",
        "ko-KR": "Is Button Held",
        "pl-PL": "Is Button Held",
        "ru-RU": "Is Button Held",
        "th-TH": "Is Button Held",
        "zh-TW": "Is Button Held"
    },
    ".isInAir": {
        "description": {
            "en-US": "Whether a player is airborne."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose airborne status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B28B",
        "en-US": "Is In Air",
        "es-MX": "En el aire",
        "fr-FR": "Dans les airs",
        "ja-JP": "空中にいる",
        "pt-BR": "É no Ar",
        "tr-TR": "Havada",
        "zh-CN": "正在空中",
        "de-DE": "Is In Air",
        "es-ES": "Is In Air",
        "it-IT": "Is In Air",
        "ko-KR": "Is In Air",
        "pl-PL": "Is In Air",
        "ru-RU": "Is In Air",
        "th-TH": "Is In Air",
        "zh-TW": "Is In Air"
    },
    ".isInAlternateForm": {
        "description": {
            "en-US": "Whether the specified player is currently in an alternate form:\n        \n- Wrecking Ball's ball form\n- Baby Dva\n- Bastion's turret and tank forms\n- Lucio's speed song\n- Mercy's pistol\n- Torbjorn's hammer\n\nFor Echo duplication, use the Is Duplicating value instead."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose form to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "000000010E62",
        "en-US": "Is In Alternate Form",
        "es-MX": "Está en su forma alterna",
        "fr-FR": "Est dans une forme alternative",
        "ja-JP": "異なる形態である",
        "pt-BR": "Está em uma Forma Alternativa",
        "th-TH": "อยู่ในรูปแบบอื่น",
        "tr-TR": "Alternatif Bir Formda",
        "zh-CN": "处于非初始状态",
        "de-DE": "Is In Alternate Form",
        "es-ES": "Is In Alternate Form",
        "it-IT": "Is In Alternate Form",
        "ko-KR": "Is In Alternate Form",
        "pl-PL": "Is In Alternate Form",
        "ru-RU": "Is In Alternate Form",
        "zh-TW": "Is In Alternate Form"
    },
    ".isInSpawnRoom": {
        "description": {
            "en-US": "Whether a specific player is in the spawn room (and is thus being healed and able to change heroes)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose spawn room status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B3B1",
        "en-US": "Is In Spawn Room",
        "es-MX": "En el cuarto de reaparición",
        "fr-FR": "Dans la salle d’apparition",
        "ja-JP": "リスポーンエリアにいる",
        "pt-BR": "É Na Sala de Ressurgimento",
        "tr-TR": "Başlangıç Odası'nda",
        "zh-CN": "在重生室中",
        "de-DE": "Is In Spawn Room",
        "es-ES": "Is In Spawn Room",
        "it-IT": "Is In Spawn Room",
        "ko-KR": "Is In Spawn Room",
        "pl-PL": "Is In Spawn Room",
        "ru-RU": "Is In Spawn Room",
        "th-TH": "Is In Spawn Room",
        "zh-TW": "Is In Spawn Room"
    },
    ".isInViewAngle": {
        "description": {
            "en-US": "Whether a location is within view of a player."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose view to use for the check."
                },
                "type": "Player"
            },
            {
                "name": "location",
                "description": {
                    "en-US": "The location to test if it's within view."
                },
                "type": "Position"
            },
            {
                "name": "viewAngle",
                "description": {
                    "en-US": "The view angle to compare against in degrees."
                },
                "type": "float"
            }
        ],
        "return": "bool",
        "guid": "00000000BF7C",
        "en-US": "Is In View Angle",
        "es-MX": "En el ángulo de vista",
        "fr-FR": "Dans le champ de vision",
        "ja-JP": "視角範囲内",
        "pt-BR": "É No Ângulo de Visão",
        "tr-TR": "Görüş Açısında",
        "zh-CN": "在视野内",
        "de-DE": "Is In View Angle",
        "es-ES": "Is In View Angle",
        "it-IT": "Is In View Angle",
        "ko-KR": "Is In View Angle",
        "pl-PL": "Is In View Angle",
        "ru-RU": "Is In View Angle",
        "th-TH": "Is In View Angle",
        "zh-TW": "Is In View Angle"
    },
    ".isJumping": {
        "description": {
            "en-US": "Whether the specified player is jumping."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose jump usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "0000000105A0",
        "en-US": "Is Jumping",
        "es-MX": "Está saltando",
        "fr-FR": "Utilise Saut",
        "ja-JP": "ジャンプ中",
        "pt-BR": "Está Pulando",
        "tr-TR": "Zıplıyor",
        "zh-CN": "正在跳跃",
        "de-DE": "Is Jumping",
        "es-ES": "Is Jumping",
        "it-IT": "Is Jumping",
        "ko-KR": "Is Jumping",
        "pl-PL": "Is Jumping",
        "ru-RU": "Is Jumping",
        "th-TH": "Is Jumping",
        "zh-TW": "Is Jumping"
    },
    ".isMeleeing": {
        "description": {
            "en-US": "Whether the specified player is meleeing."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose melee usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000001059A",
        "en-US": "Is Meleeing",
        "es-MX": "Está usando un ataque melé",
        "fr-FR": "Utilise Mêlée",
        "ja-JP": "近接攻撃中",
        "pt-BR": "Está Usando Corpo a Corpo",
        "tr-TR": "Yakın Saldırı Kullanıyor",
        "zh-CN": "正在近战攻击",
        "de-DE": "Is Meleeing",
        "es-ES": "Is Meleeing",
        "it-IT": "Is Meleeing",
        "ko-KR": "Is Meleeing",
        "pl-PL": "Is Meleeing",
        "ru-RU": "Is Meleeing",
        "th-TH": "Is Meleeing",
        "zh-TW": "Is Meleeing"
    },
    ".isMoving": {
        "description": {
            "en-US": "Whether a player is moving (defined as having a non-zero current speed)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose moving status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B288",
        "en-US": "Is Moving",
        "es-MX": "En movimiento",
        "fr-FR": "Se déplace",
        "ja-JP": "移動している",
        "pt-BR": "É Movimentando-se",
        "tr-TR": "Hareket Ediyor",
        "zh-CN": "正在移动",
        "de-DE": "Is Moving",
        "es-ES": "Is Moving",
        "it-IT": "Is Moving",
        "ko-KR": "Is Moving",
        "pl-PL": "Is Moving",
        "ru-RU": "Is Moving",
        "th-TH": "Is Moving",
        "zh-TW": "Is Moving"
    },
    ".isOnFire": {
        "description": {
            "en-US": "Whether a specific player's portrait is on fire."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose portrait to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B3B3",
        "en-US": "Is Portrait On Fire",
        "es-MX": "Retrato en llamas",
        "fr-FR": "Portrait « en feu »",
        "ja-JP": "ポートレートに炎エフェクトがついている",
        "pt-BR": "É Retrato Em Chamas",
        "tr-TR": "Alevli Portre",
        "zh-CN": "头像火力全开",
        "de-DE": "Is Portrait On Fire",
        "es-ES": "Is Portrait On Fire",
        "it-IT": "Is Portrait On Fire",
        "ko-KR": "Is Portrait On Fire",
        "pl-PL": "Is Portrait On Fire",
        "ru-RU": "Is Portrait On Fire",
        "th-TH": "Is Portrait On Fire",
        "zh-TW": "Is Portrait On Fire"
    },
    ".isOnGround": {
        "description": {
            "en-US": "Whether a player is on the ground (or other walkable surface)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ground status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000BF70",
        "en-US": "Is On Ground",
        "es-MX": "En el suelo",
        "fr-FR": "Au sol",
        "ja-JP": "地上にいる",
        "pt-BR": "É No Chão",
        "tr-TR": "Yerde",
        "zh-CN": "在地面上",
        "de-DE": "Is On Ground",
        "es-ES": "Is On Ground",
        "it-IT": "Is On Ground",
        "ko-KR": "Is On Ground",
        "pl-PL": "Is On Ground",
        "ru-RU": "Is On Ground",
        "th-TH": "Is On Ground",
        "zh-TW": "Is On Ground"
    },
    ".isOnObjective": {
        "description": {
            "en-US": "Whether a specific player is currently occupying a payload or capture point."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose objective status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B3B2",
        "en-US": "Is On Objective",
        "es-MX": "En el objetivo",
        "fr-FR": "Sur l’objectif",
        "ja-JP": "目標にいる",
        "pt-BR": "É No Objetivo",
        "tr-TR": "Hedefte",
        "zh-CN": "在目标点上",
        "de-DE": "Is On Objective",
        "es-ES": "Is On Objective",
        "it-IT": "Is On Objective",
        "ko-KR": "Is On Objective",
        "pl-PL": "Is On Objective",
        "ru-RU": "Is On Objective",
        "th-TH": "Is On Objective",
        "zh-TW": "Is On Objective"
    },
    ".isOnWall": {
        "description": {
            "en-US": "Whether a player is on a wall (climbing or riding)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose wall status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000BB0B",
        "en-US": "Is On Wall",
        "es-MX": "En el muro",
        "fr-FR": "Sur le mur",
        "ja-JP": "壁の上にいる",
        "pt-BR": "É Na Parede",
        "tr-TR": "Duvarda",
        "zh-CN": "在墙上",
        "de-DE": "Is On Wall",
        "es-ES": "Is On Wall",
        "it-IT": "Is On Wall",
        "ko-KR": "Is On Wall",
        "pl-PL": "Is On Wall",
        "ru-RU": "Is On Wall",
        "th-TH": "Is On Wall",
        "zh-TW": "Is On Wall"
    },
    ".isReloading": {
        "description": {
            "en-US": "Whether the specified player is reloading."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose reload usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "000000011065",
        "en-US": "Is Reloading",
        "es-MX": "Está recargando",
        "fr-FR": "Utilise Recharger",
        "ja-JP": "リロード中",
        "pt-BR": "Está Recarregando",
        "tr-TR": "Dolduruyor",
        "zh-CN": "正在装填",
        "de-DE": "Is Reloading",
        "es-ES": "Is Reloading",
        "it-IT": "Is Reloading",
        "ko-KR": "Is Reloading",
        "pl-PL": "Is Reloading",
        "ru-RU": "Is Reloading",
        "th-TH": "Is Reloading",
        "zh-TW": "Is Reloading"
    },
    ".isStanding": {
        "description": {
            "en-US": "Whether a player is standing (defined as both not moving and not in the air)."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose standing status to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B287",
        "en-US": "Is Standing",
        "es-MX": "De pie",
        "fr-FR": "Debout",
        "ja-JP": "立っている",
        "pt-BR": "É Parado",
        "tr-TR": "Ayakta",
        "zh-CN": "正在站立",
        "de-DE": "Is Standing",
        "es-ES": "Is Standing",
        "it-IT": "Is Standing",
        "ko-KR": "Is Standing",
        "pl-PL": "Is Standing",
        "ru-RU": "Is Standing",
        "th-TH": "Is Standing",
        "zh-TW": "Is Standing"
    },
    ".isUsingAbility1": {
        "description": {
            "en-US": "Whether the specified player is using ability 1."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ability 1 usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000C3EB",
        "en-US": "Is Using Ability 1",
        "es-MX": "Está utilizando la habilidad 1",
        "fr-FR": "Capacité 1 utilisée",
        "ja-JP": "アビリティ1を使用",
        "pt-BR": "É Usando Habilidade 1",
        "tr-TR": "1. Kabiliyeti Kullanıyor",
        "zh-CN": "正在使用技能 1",
        "de-DE": "Is Using Ability 1",
        "es-ES": "Is Using Ability 1",
        "it-IT": "Is Using Ability 1",
        "ko-KR": "Is Using Ability 1",
        "pl-PL": "Is Using Ability 1",
        "ru-RU": "Is Using Ability 1",
        "th-TH": "Is Using Ability 1",
        "zh-TW": "Is Using Ability 1"
    },
    ".isUsingAbility2": {
        "description": {
            "en-US": "Whether the specified player is using ability 2."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ability 2 usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000C3ED",
        "en-US": "Is Using Ability 2",
        "es-MX": "Está utilizando la habilidad 2",
        "fr-FR": "Capacité 2 utilisée",
        "ja-JP": "アビリティ2を使用",
        "pt-BR": "É Usando Habilidade 2",
        "tr-TR": "2. Kabiliyeti Kullanıyor",
        "zh-CN": "正在使用技能 2",
        "de-DE": "Is Using Ability 2",
        "es-ES": "Is Using Ability 2",
        "it-IT": "Is Using Ability 2",
        "ko-KR": "Is Using Ability 2",
        "pl-PL": "Is Using Ability 2",
        "ru-RU": "Is Using Ability 2",
        "th-TH": "Is Using Ability 2",
        "zh-TW": "Is Using Ability 2"
    },
    ".isUsingUltimate": {
        "description": {
            "en-US": "Whether a player is using an ultimate ability."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose ultimate ability usage to check."
                },
                "type": "Player"
            }
        ],
        "return": "bool",
        "guid": "00000000B9D4",
        "en-US": "Is Using Ultimate",
        "es-MX": "Está usando la habilidad máxima",
        "fr-FR": "Capacité ultime utilisée",
        "ja-JP": "アルティメットを使用している",
        "pt-BR": "É Usando Suprema",
        "tr-TR": "Ulti Kullanıyor",
        "zh-CN": "正在使用终极技能",
        "de-DE": "Is Using Ultimate",
        "es-ES": "Is Using Ultimate",
        "it-IT": "Is Using Ultimate",
        "ko-KR": "Is Using Ultimate",
        "pl-PL": "Is Using Ultimate",
        "ru-RU": "Is Using Ultimate",
        "th-TH": "Is Using Ultimate",
        "zh-TW": "Is Using Ultimate"
    },
    "__add__": {
        "guid": "00000000C408",
        "description": {
            "en-US": "The sum of two numbers or vectors.",
            "de-DE": "Die Summe zweier Zahlen oder Vektoren.",
            "es-ES": "Suma de dos números o vectores.",
            "es-MX": "La suma de dos números o vectores.",
            "fr-FR": "La somme de deux nombres ou vecteurs.",
            "it-IT": "La somma di due numeri o vettori.",
            "ja-JP": "2つの数値またはベクトルの合計",
            "ko-KR": "두 숫자 또는 벡터의 합입니다.",
            "pl-PL": "Suma dwóch liczb lub wektorów.",
            "pt-BR": "A soma de dois números ou vetores.",
            "ru-RU": "Сумма двух чисел или векторов.",
            "th-TH": "The sum of two numbers or vectors.",
            "tr-TR": "İki sayı veya vektörün toplamı.",
            "zh-CN": "两个数字或矢量的和。",
            "zh-TW": "The sum of two numbers or vectors."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Add",
        "es-MX": "Agregar",
        "fr-FR": "Addition",
        "ja-JP": "追加",
        "pt-BR": "Somar",
        "th-TH": "เพิ่ม",
        "tr-TR": "Topla",
        "zh-CN": "加",
        "de-DE": "Add",
        "es-ES": "Add",
        "it-IT": "Add",
        "ko-KR": "Add",
        "pl-PL": "Add",
        "ru-RU": "Add",
        "zh-TW": "Add"
    },
    "__all__": {
        "description": {
            "en-US": "Whether the specified condition evaluates to true for every value in the specified array."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose values will be considered."
                },
                "type": "Array"
            },
            {
                "name": "condition",
                "description": {
                    "en-US": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered."
                },
                "type": "bool"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B5BA",
        "en-US": "Is True For All",
        "es-MX": "Es verdadero para todos",
        "fr-FR": "Vrai pour tous",
        "ja-JP": "すべてに対して「TRUE」",
        "pt-BR": "É Verdadeiro para Todos",
        "tr-TR": "Tümü İçin Doğru",
        "zh-CN": "对全部为“真”",
        "de-DE": "Is True For All",
        "es-ES": "Is True For All",
        "it-IT": "Is True For All",
        "ko-KR": "Is True For All",
        "pl-PL": "Is True For All",
        "ru-RU": "Is True For All",
        "th-TH": "Is True For All",
        "zh-TW": "Is True For All"
    },
    "__and__": {
        "description": {
            "en-US": "Whether both of the two inputs are true (or equivalent to true)."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true."
                },
                "type": "bool"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "One of the two inputs considered. If both are true (or equivalent to true), then the and value is true."
                },
                "type": "bool"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B273",
        "en-US": "And",
        "es-MX": "Y",
        "fr-FR": "Et",
        "ja-JP": "AND",
        "pt-BR": "E",
        "tr-TR": "Ve",
        "zh-CN": "与",
        "de-DE": "And",
        "es-ES": "And",
        "it-IT": "And",
        "ko-KR": "And",
        "pl-PL": "And",
        "ru-RU": "And",
        "th-TH": "And",
        "zh-TW": "And"
    },
    "__any__": {
        "description": {
            "en-US": "Whether the specified condition evaluates to true for any value in the specified array."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose values will be considered."
                },
                "type": "Array"
            },
            {
                "name": "condition",
                "description": {
                    "en-US": "The condition that is evaluated for each element of the specified array. Use the current array element value to reference the element of the array currently being considered."
                },
                "type": "bool"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B5BB",
        "en-US": "Is True For Any",
        "es-MX": "Es verdadero para cualquiera",
        "fr-FR": "Vrai pour n’importe qui",
        "ja-JP": "いずれに対しても「TRUE」",
        "pt-BR": "É Verdadeiro para Qualquer",
        "tr-TR": "Her Değer İçin Doğru",
        "zh-CN": "对任意为“真”",
        "de-DE": "Is True For Any",
        "es-ES": "Is True For Any",
        "it-IT": "Is True For Any",
        "ko-KR": "Is True For Any",
        "pl-PL": "Is True For Any",
        "ru-RU": "Is True For Any",
        "th-TH": "Is True For Any",
        "zh-TW": "Is True For Any"
    },
    "__arrayContains__": {
        "description": {
            "en-US": "Whether the specified array contains the specified value."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array in which to search for the specified value."
                },
                "type": "Array"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The value for which to search."
                },
                "type": "Object",
                "canReplace0ByNull": true
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000C336",
        "en-US": "Array Contains",
        "es-MX": "La matriz contiene",
        "fr-FR": "Contenu du tableau",
        "ja-JP": "含む配列",
        "pt-BR": "Matriz Contém",
        "tr-TR": "Dizin İçeriği",
        "zh-CN": "数组包含",
        "de-DE": "Array Contains",
        "es-ES": "Array Contains",
        "it-IT": "Array Contains",
        "ko-KR": "Array Contains",
        "pl-PL": "Array Contains",
        "ru-RU": "Array Contains",
        "th-TH": "Array Contains",
        "zh-TW": "Array Contains"
    },
    ".slice": {
        "description": {
            "en-US": "A copy of the specified array containing only values from a specified index range. **Does not support nested arrays.**"
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array from which to make a copy.",
                    "de-DE": "Das Array von dem eine Kopie erstellt werden soll.",
                    "es-ES": "Matriz que se copia.",
                    "es-MX": "La matriz a partir de la cual se hará una copia.",
                    "fr-FR": "Le tableau dont il faut faire une copie.",
                    "it-IT": "L'array dal quale creare una copia.",
                    "ja-JP": "コピーを作成する配列",
                    "ko-KR": "복사본을 만들 배열입니다.",
                    "pl-PL": "Tabela z której wykonywana jest kopia.",
                    "pt-BR": "A matriz a ser copiada.",
                    "ru-RU": "Массив копию значений из которого нужно создать.",
                    "th-TH": "The array from which to make a copy.",
                    "tr-TR": "Kopyasının yapılacağı dizin.",
                    "zh-CN": "产生此数组的复制。",
                    "zh-TW": "The array from which to make a copy."
                },
                "type": {
                    "Array": "Object"
                }
            },
            {
                "name": "startIndex",
                "description": {
                    "en-US": "The first index of the range.",
                    "de-DE": "Der erste Index des Bereichs.",
                    "es-ES": "Primer índice del intervalo.",
                    "es-MX": "El primer índice del intervalo.",
                    "fr-FR": "Le premier index de l’intervalle.",
                    "it-IT": "Il primo indice dell'intervallo.",
                    "ja-JP": "範囲の最初の値",
                    "ko-KR": "범위의 첫 번째 인덱스입니다.",
                    "pl-PL": "Pierwszy indeks zakresu.",
                    "pt-BR": "O primeiro índice do intervalo.",
                    "ru-RU": "Первое значение диапазона.",
                    "th-TH": "The first index of the range.",
                    "tr-TR": "Aralığın ilk indeksi.",
                    "zh-CN": "范围内的第一个索引。",
                    "zh-TW": "The first index of the range."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "count",
                "description": {
                    "en-US": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                    "de-DE": "Die Anzahl der Elemente im resultierenden Array. Das resultierende Array enthält weniger Elemente wenn der festgelegte Bereich die Grenzen des Arrays überschreitet.",
                    "es-ES": "Número de elementos en la matriz resultante. La matriz resultante contendrá menos elementos si el intervalo especificado supera los límites de la matriz.",
                    "es-MX": "La cantidad de elementos de la matriz resultante. La matriz resultante contendrá menos elementos si el intervalo especificado excede los límites de la matriz.",
                    "fr-FR": "Le nombre d’éléments du tableau résultant. Le tableau résultant contiendra moins d’éléments si l’intervalle spécifié excède les limites du tableau.",
                    "it-IT": "Il numero degli elementi nell'array risultante. Esso conterrà meno elementi se l'intervallo specificato supera i limiti dell'array.",
                    "ja-JP": "結果として生じる配列に含まれる要素の数。指定した範囲が配列の範囲を超えると、配列に含まれる要素の数は少なくなる",
                    "ko-KR": "결과 배열의 요소 개수입니다. 설정 영역이 배열 범위를 벗어나는 경우 결과 배열이 갖는 요소의 수가 상대적으로 적을 수 있습니다.",
                    "pl-PL": "Liczba elementów w wynikowej tabeli. Wynikowa tabela zawiera mniej elementów jeśli określony zakres przekracza jej granice.",
                    "pt-BR": "O número de elementos na matriz resultante. A matriz resultante conterá menos elementos se o intervalo especificado exceder os limites da matriz.",
                    "ru-RU": "Количество элементов в итоговом массиве. Итоговый массив будет содержать меньшее количество элементов если указанный диапазон превышает границы массива.",
                    "th-TH": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array.",
                    "tr-TR": "Sonuç dizinindeki element sayısı. Belirtilen aralık dizinin sınırlarını aşarsa sonuç dizini daha az element içerir.",
                    "zh-CN": "结果数组中的元素数量。如果指定的范围超过此数组的限制，则结果数组中会包含较少的元素。",
                    "zh-TW": "The number of elements in the resulting array. The resulting array will contain fewer elements if the specified range exceeds the bounds of the array."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true,
                "default": "Math.INFINITY"
            }
        ],
        "class": "Array",
        "isConstant": true,
        "return": {
            "Array": "Object"
        },
        "guid": "00000000B597",
        "en-US": "Array Slice",
        "es-MX": "Extracción de matriz",
        "fr-FR": "Section de tableau",
        "ja-JP": "配列のスライス",
        "pt-BR": "Fatia da Matriz",
        "tr-TR": "Dizin Kesiti",
        "zh-CN": "数组分割",
        "de-DE": "Array Slice",
        "es-ES": "Array Slice",
        "it-IT": "Array Slice",
        "ko-KR": "Array Slice",
        "pl-PL": "Array Slice",
        "ru-RU": "Array Slice",
        "th-TH": "Array Slice",
        "zh-TW": "Array Slice"
    },
    "__array__": {
        "description": {
            "en-US": "An array constructed from the listed values."
        },
        "args": [
            {
                "name": "[0]",
                "description": {
                    "en-US": "The value that will be stored in the array at index [0]."
                },
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000B836",
        "en-US": "Array",
        "es-MX": "Matriz",
        "fr-FR": "Tableau",
        "ja-JP": "配列",
        "pt-BR": "Matriz",
        "tr-TR": "Dizin",
        "zh-CN": "数组",
        "de-DE": "Array",
        "es-ES": "Array",
        "it-IT": "Array",
        "ko-KR": "Array",
        "pl-PL": "Array",
        "ru-RU": "Array",
        "th-TH": "Array",
        "zh-TW": "Array"
    },
    "__button__": {
        "description": {
            "en-US": "A button constant."
        },
        "args": [
            {
                "name": "button",
                "description": {
                    "en-US": "A button constant."
                },
                "type": "ButtonLiteral"
            }
        ],
        "isConstant": true,
        "isLiteral": true,
        "canBePutInBoolean": false,
        "return": "Button",
        "guid": "000000010B3B",
        "en-US": "Button",
        "es-MX": "Botón",
        "fr-FR": "Bouton",
        "ja-JP": "ボタン",
        "pt-BR": "Botão",
        "tr-TR": "Düğme",
        "zh-CN": "按钮",
        "de-DE": "Button",
        "es-ES": "Button",
        "it-IT": "Button",
        "ko-KR": "Button",
        "pl-PL": "Button",
        "ru-RU": "Button",
        "th-TH": "Button",
        "zh-TW": "Button"
    },
    "__color__": {
        "description": {
            "en-US": "A Color Constant"
        },
        "args": [
            {
                "name": "color",
                "description": {
                    "en-US": "A Color Constant"
                },
                "type": "ColorLiteral"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "isLiteral": true,
        "return": "Color",
        "guid": "000000011D42",
        "en-US": "Color",
        "fr-FR": "Couleur",
        "ja-JP": "色",
        "pt-BR": "Cor",
        "tr-TR": "Renk",
        "zh-CN": "颜色",
        "de-DE": "Color",
        "es-ES": "Color",
        "es-MX": "Color",
        "it-IT": "Color",
        "ko-KR": "Color",
        "pl-PL": "Color",
        "ru-RU": "Color",
        "th-TH": "Color",
        "zh-TW": "Color"
    },
    "__compare__": {
        "description": {
            "en-US": "Whether the comparison of the two inputs is true."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected."
                },
                "type": [
                    "Object",
                    "Array"
                ]
            },
            {
                "name": "comparison",
                "description": {
                    "en-US": "",
                    "de-DE": "",
                    "es-ES": "",
                    "es-MX": "",
                    "fr-FR": "",
                    "it-IT": "",
                    "ja-JP": "",
                    "ko-KR": "",
                    "pl-PL": "",
                    "pt-BR": "",
                    "ru-RU": "",
                    "th-TH": "",
                    "tr-TR": "",
                    "zh-CN": "",
                    "zh-TW": ""
                },
                "type": "__Operator__"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand side of the comparison. This may be any value type if the operation is == or !=. Otherwise, real numbers are expected."
                },
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000000B276",
        "en-US": "Compare",
        "es-MX": "Comparar",
        "fr-FR": "Comparer",
        "ja-JP": "COMPARE",
        "pt-BR": "Comparar",
        "tr-TR": "Karşılaştır",
        "zh-CN": "比较",
        "de-DE": "Compare",
        "es-ES": "Compare",
        "it-IT": "Compare",
        "ko-KR": "Compare",
        "pl-PL": "Compare",
        "ru-RU": "Compare",
        "th-TH": "Compare",
        "zh-TW": "Compare"
    },
    ".concat": {
        "guid": "00000000C41A",
        "description": {
            "en-US": "A copy of an array with one or more values appended to the end."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array to which to append.",
                    "de-DE": "Das Array das ergänzt werden soll.",
                    "es-ES": "Matriz a la que se agrega.",
                    "es-MX": "La matriz a la cual se anexará.",
                    "fr-FR": "Le tableau qui reçoit l’ajout.",
                    "it-IT": "L'array al quale aggiungere Valori.",
                    "ja-JP": "追加先の配列",
                    "ko-KR": "덧붙일 대상 배열입니다.",
                    "pl-PL": "Tabela do której należy dołączyć.",
                    "pt-BR": "A matriz a ser juntada.",
                    "ru-RU": "Массив который нужно дополнить.",
                    "th-TH": "The array to which to append.",
                    "tr-TR": "Eklenecek dizin.",
                    "zh-CN": "要添加至数组的值。",
                    "zh-TW": "The array to which to append."
                },
                "type": "Array"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The value to append to the end of the array. If this value is itself an array, each element is appended."
                },
                "type": [
                    "Object",
                    {
                        "Array": "Object"
                    }
                ],
                "canReplace0ByNull": true
            }
        ],
        "class": "Array",
        "isConstant": true,
        "return": "Array",
        "en-US": "Append To Array",
        "es-MX": "Anexar a la matriz",
        "fr-FR": "Ajouter au tableau",
        "ja-JP": "配列に追加",
        "pt-BR": "Juntar à Matriz",
        "tr-TR": "Dizine Ekle",
        "zh-CN": "添加至数组",
        "de-DE": "Append To Array",
        "es-ES": "Append To Array",
        "it-IT": "Append To Array",
        "ko-KR": "Append To Array",
        "pl-PL": "Append To Array",
        "ru-RU": "Append To Array",
        "th-TH": "Append To Array",
        "zh-TW": "Append To Array"
    },
    "__currentArrayElement__": {
        "description": {
            "en-US": "The current array element being considered. Only meaningful during the evaluation of values such as filtered array and sorted array."
        },
        "args": [],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5B9",
        "en-US": "Current Array Element",
        "es-MX": "Elemento de matriz actual",
        "fr-FR": "Élément de tableau actuel",
        "ja-JP": "現在の配列の要素",
        "pt-BR": "Elemento da Matriz Atual",
        "tr-TR": "Mevcut Dizin Unsuru",
        "zh-CN": "当前数组元素",
        "de-DE": "Current Array Element",
        "es-ES": "Current Array Element",
        "it-IT": "Current Array Element",
        "ko-KR": "Current Array Element",
        "pl-PL": "Current Array Element",
        "ru-RU": "Current Array Element",
        "th-TH": "Current Array Element",
        "zh-TW": "Current Array Element"
    },
    "__currentArrayIndex__": {
        "description": {
            "en-US": "The current array index being considered. Only meaningful during the evaluation of values such as filtered array and sorted array."
        },
        "args": [],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "0000000111B5",
        "en-US": "Current Array Index",
        "es-MX": "Índice de matriz actual",
        "fr-FR": "Index de tableau actuel",
        "ja-JP": "現在の配列のインデックス",
        "pt-BR": "Índice da Matriz Atual",
        "th-TH": "ดัชนีอาร์เรย์ปัจจุบัน",
        "tr-TR": "Mevcut Dizin İndeksi",
        "zh-CN": "当前数组索引",
        "de-DE": "Current Array Index",
        "es-ES": "Current Array Index",
        "it-IT": "Current Array Index",
        "ko-KR": "Current Array Index",
        "pl-PL": "Current Array Index",
        "ru-RU": "Current Array Index",
        "zh-TW": "Current Array Index"
    },
    "__customString__": {
        "description": {
            "en-US": "ty magzie for adding that"
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "",
                    "de-DE": "",
                    "es-ES": "",
                    "es-MX": "",
                    "fr-FR": "",
                    "it-IT": "",
                    "ja-JP": "",
                    "ko-KR": "",
                    "pl-PL": "",
                    "pt-BR": "",
                    "ru-RU": "",
                    "th-TH": "",
                    "tr-TR": "",
                    "zh-CN": "",
                    "zh-TW": ""
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "{0}",
                "description": {
                    "en-US": "The value that will be converted to text and used to replace {0}."
                },
                "type": "Object",
                "canReplace0ByNull": true
            },
            {
                "name": "{1}",
                "description": {
                    "en-US": "The value that will be converted to text and used to replace {1}."
                },
                "type": "Object",
                "canReplace0ByNull": true
            },
            {
                "name": "{2}",
                "description": {
                    "en-US": "The value that will be converted to text and used to replace {2}."
                },
                "type": "Object",
                "canReplace0ByNull": true
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "00000000CE3C",
        "en-US": "Custom String",
        "es-MX": "Cadena personalizada",
        "fr-FR": "Chaîne personnalisée",
        "ja-JP": "カスタムストリング",
        "pt-BR": "String Personalizada",
        "tr-TR": "Özel Dizgi",
        "zh-CN": "自定义字符串",
        "de-DE": "Custom String",
        "es-ES": "Custom String",
        "it-IT": "Custom String",
        "ko-KR": "Custom String",
        "pl-PL": "Custom String",
        "ru-RU": "Custom String",
        "th-TH": "Custom String",
        "zh-TW": "Custom String"
    },
    "__divide__": {
        "guid": "00000000C40F",
        "description": {
            "en-US": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
            "de-DE": "Der Quotient zweier Zahlen oder Vektoren. Das Ergebnis einer Division eines Vektors durch eine Zahl ist ein skalierter Vektor. Die Division durch 0 ergibt 0.",
            "es-ES": "Razón de dos números o vectores. Un vector dividido por un número dará como resultado un vector escalado. Dividir por cero tiene cero como resultado.",
            "es-MX": "La relación entre dos números o vectores. El resultado de un vector dividido por un número será un vector escalado. El resultado de toda división por 0 será 0.",
            "fr-FR": "Le ratio de deux nombres ou vecteurs. Un vecteur divisé par un nombre donnera un vecteur échelonné. Toute division par 0 sera égale à 0.",
            "it-IT": "Il rapporto tra due numeri o vettori. Il rapporto tra un vettore e un numero produce un vettore scalare. La divisione per zero risulta in zero.",
            "ja-JP": "2つの数値またはベクトルの割合。ベクトルの除算を行った場合、スケールされたベクトルが導き出される。0による除算を行った場合、結果は0になる",
            "ko-KR": "두 숫자 또는 벡터의 비율입니다. 벡터를 숫자로 나누면 비율이 증감된 벡터가 도출됩니다. 0으로 나누면 0이 됩니다.",
            "pl-PL": "Współczynnik dwóch liczb lub wektorów. Wektor podzielony przez liczbę da wektor skalowany. Podział przez zero da wynik zero.",
            "pt-BR": "A razão de dois números ou vetores. Um vetor dividido por um número produzirá um vetor escalar. Divisão por zero resulta em zero.",
            "ru-RU": "Частное двух чисел или векторов. Вектор поделенный на число дает вектор другого размера. Деление на ноль дает ноль.",
            "th-TH": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero.",
            "tr-TR": "İki sayının veya vektörün birbirine olan oranı. Bir vektörün bir sayıya oranı orantılı bir vektördür. Bir sayıyı sıfıra bölmek sıfır sonucu verir.",
            "zh-CN": "两个数字或矢量的商。矢量除以数字会得到一个缩放后的矢量。除以零的结果为0。",
            "zh-TW": "The ratio of two numbers or vectors. A vector divided by a number will yield a scaled vector. Division by zero results in zero."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ]
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Divide",
        "es-MX": "Dividir",
        "fr-FR": "Division",
        "ja-JP": "除算",
        "pt-BR": "Dividir",
        "tr-TR": "Böl",
        "zh-CN": "除",
        "de-DE": "Divide",
        "es-ES": "Divide",
        "it-IT": "Divide",
        "ko-KR": "Divide",
        "pl-PL": "Divide",
        "ru-RU": "Divide",
        "th-TH": "Divide",
        "zh-TW": "Divide"
    },
    "__emptyArray__": {
        "description": {
            "en-US": "An array with no elements.",
            "de-DE": "Ein Array ohne Elemente.",
            "es-ES": "Una matriz sin elementos.",
            "es-MX": "Una matriz sin elementos.",
            "fr-FR": "Un tableau sans éléments.",
            "it-IT": "Un array senza alcun elemento.",
            "ja-JP": "要素のない配列",
            "ko-KR": "요소가 없는 배열입니다.",
            "pl-PL": "Tabela bez żadnych elementów.",
            "pt-BR": "Uma matriz sem elementos.",
            "ru-RU": "Пустой массив.",
            "th-TH": "An array with no elements.",
            "tr-TR": "Unsuru olmayan bir dizin.",
            "zh-CN": "一个没有任何元素的数组。",
            "zh-TW": "An array with no elements."
        },
        "args": [],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000BF5A",
        "en-US": "Empty Array",
        "es-MX": "Matriz vacía",
        "fr-FR": "Tableau vide",
        "ja-JP": "空の配列",
        "pt-BR": "Matriz Vazia",
        "tr-TR": "Boş Dizin",
        "zh-CN": "空数组",
        "de-DE": "Empty Array",
        "es-ES": "Empty Array",
        "it-IT": "Empty Array",
        "ko-KR": "Empty Array",
        "pl-PL": "Empty Array",
        "ru-RU": "Empty Array",
        "th-TH": "Empty Array",
        "zh-TW": "Empty Array"
    },
    "__filteredArray__": {
        "description": {
            "en-US": "A copy of the specified array with any values that do not match the specified condition removed."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose copy will be filtered.",
                    "de-DE": "Das Array dessen Kopie gefiltert wird.",
                    "es-ES": "Matriz cuya copia se filtrará.",
                    "es-MX": "La matriz cuya copia será filtrada.",
                    "fr-FR": "Le tableau dont la copie sera filtrée.",
                    "it-IT": "L'array la cui copia sarà filtrata.",
                    "ja-JP": "コピーがフィルタリングされる配列",
                    "ko-KR": "복사본을 필터링할 배열입니다.",
                    "pl-PL": "Tabela której kopia zostanie przefiltrowana.",
                    "pt-BR": "A matriz cuja cópia será filtrada.",
                    "ru-RU": "Массив содержимое копии которого будет отфильтровано.",
                    "th-TH": "The array whose copy will be filtered.",
                    "tr-TR": "Kopyası filtrelenecek dizin.",
                    "zh-CN": "对此数组的复制进行过滤。",
                    "zh-TW": "The array whose copy will be filtered."
                },
                "type": "Array"
            },
            {
                "name": "condition",
                "description": {
                    "en-US": "The condition that is evaluated for each element of the copied array. If the condition is true, the element is kept in the copied array. Use the current array element value to reference the element of the array currently being considered."
                },
                "type": "bool"
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "00000000B5B7",
        "en-US": "Filtered Array",
        "es-MX": "Matriz filtrada",
        "fr-FR": "Tableau filtré",
        "ja-JP": "フィルタリングされた配列",
        "pt-BR": "Matriz Filtrada",
        "tr-TR": "Filtreli Dizin",
        "zh-CN": "已过滤的数组",
        "de-DE": "Filtered Array",
        "es-ES": "Filtered Array",
        "it-IT": "Filtered Array",
        "ko-KR": "Filtered Array",
        "pl-PL": "Filtered Array",
        "ru-RU": "Filtered Array",
        "th-TH": "Filtered Array",
        "zh-TW": "Filtered Array"
    },
    "__firstOf__": {
        "description": {
            "en-US": "The value at the start of the specified array. Results in 0 if the specified array is empty."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array from which the value is acquired."
                },
                "type": "Array"
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5C2",
        "en-US": "First Of",
        "es-MX": "Primero de",
        "fr-FR": "Premier de",
        "ja-JP": "最初の値",
        "pt-BR": "Primeiro de",
        "tr-TR": "İlk",
        "zh-CN": "首个",
        "de-DE": "First Of",
        "es-ES": "First Of",
        "it-IT": "First Of",
        "ko-KR": "First Of",
        "pl-PL": "First Of",
        "ru-RU": "First Of",
        "th-TH": "First Of",
        "zh-TW": "First Of"
    },
    "__gamemode__": {
        "guid": "00000000F161",
        "description": {
            "en-US": "A game mode constant."
        },
        "args": [
            {
                "name": "gameMode",
                "description": {
                    "en-US": "A game mode constant."
                },
                "type": "GamemodeLiteral"
            }
        ],
        "isConstant": true,
        "isLiteral": true,
        "canBePutInBoolean": false,
        "return": "Gamemode",
        "en-US": "Game Mode",
        "es-MX": "Modo de juego",
        "fr-FR": "Mode de jeu",
        "ja-JP": "ゲーム・モード",
        "pt-BR": "Modo de jogo",
        "tr-TR": "Oyun Modu",
        "zh-CN": "游戏模式",
        "de-DE": "Game Mode",
        "es-ES": "Game Mode",
        "it-IT": "Game Mode",
        "ko-KR": "Game Mode",
        "pl-PL": "Game Mode",
        "ru-RU": "Game Mode",
        "th-TH": "Game Mode",
        "zh-TW": "Game Mode"
    },
    "__globalVar__": {
        "description": {
            "en-US": "The current value of a global variable, which is a variable that belongs to the game itself."
        },
        "args": [
            {
                "name": "variable",
                "description": {
                    "en-US": "The variable whose value to acquire."
                },
                "type": "GlobalVariable"
            }
        ],
        "return": "Value",
        "guid": "00000000B0F9",
        "en-US": "Global Variable",
        "es-MX": "Variable global",
        "fr-FR": "Variable globale",
        "ja-JP": "グローバル変数",
        "pt-BR": "Variável Global",
        "tr-TR": "Küresel Değişken",
        "zh-CN": "全局变量",
        "de-DE": "Global Variable",
        "es-ES": "Global Variable",
        "it-IT": "Global Variable",
        "ko-KR": "Global Variable",
        "pl-PL": "Global Variable",
        "ru-RU": "Global Variable",
        "th-TH": "Global Variable",
        "zh-TW": "Global Variable"
    },
    "__global__": {
        "return": "GlobalVariable",
        "args": null,
        "guid": "00000000EB1F",
        "en-US": "Global",
        "it-IT": "Globale",
        "ja-JP": "グローバル",
        "pl-PL": "Globalnie",
        "th-TH": "ทั่วโลก",
        "tr-TR": "Küresel",
        "zh-CN": "全局",
        "de-DE": "Global",
        "es-ES": "Global",
        "es-MX": "Global",
        "fr-FR": "Global",
        "ko-KR": "Global",
        "pt-BR": "Global",
        "ru-RU": "Global",
        "zh-TW": "Global"
    },
    "__hero__": {
        "guid": "00000000ACAA",
        "description": {
            "en-US": "A hero constant."
        },
        "args": [
            {
                "name": "hero",
                "description": {
                    "en-US": "A hero constant."
                },
                "type": "HeroLiteral"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "isLiteral": true,
        "return": "Hero",
        "en-US": "Hero",
        "es-MX": "Héroe",
        "fr-FR": "Personnage",
        "ja-JP": "ヒーロー",
        "pt-BR": "Herói",
        "tr-TR": "Kahraman",
        "zh-CN": "英雄",
        "de-DE": "Hero",
        "es-ES": "Hero",
        "it-IT": "Hero",
        "ko-KR": "Hero",
        "pl-PL": "Hero",
        "ru-RU": "Hero",
        "th-TH": "Hero",
        "zh-TW": "Hero"
    },
    "__ifThenElse__": {
        "description": {
            "en-US": "Results in the Then value when the If condition is true; otherwise results in the Else value.",
            "de-DE": "Ergibt den Wert [Then] wenn die [If]-Bedingung True ist; ergibt andernfalls den Wert [Else].",
            "es-ES": "El resultado es el valor «Then» cuando la condición «If» es verdadera; de lo contrario el resultado es el valor «Else».",
            "es-MX": "Resulta en el valor Then cuando la condición If es verdadera; si no resulta en el valor Else.",
            "fr-FR": "Les résultats dans la valeur « Alors » quand la condition « Si » est vraie ; dans le cas contraire les résultats dans la valeur « Sinon ».",
            "it-IT": "Risulta nel valore Then quando la condizione If è True; altrimenti risulta nel valore Else.",
            "ja-JP": "「IF」条件が「TRUE」の場合、結果は「THEN」の値。それ以外の場合は「ELSE」の値",
            "ko-KR": "조건이 참일 때 Then 값이 결과값이 됩니다. 그 외의 경우에는 Else 값이 결과값이 됩니다.",
            "pl-PL": "Kiedy warunek „If” Jeśli jest prawdą to efektem jest wartość „Then” Wtedy w przeciwnym razie efektem jest wartość „Else” Inaczej.",
            "pt-BR": "Resulta no valor Then quando a condição If for verdadeira; caso contrário resulta no valor Else.",
            "ru-RU": "Если условие «Если» верно возвращает значение «То»; в остальных случаях возвращает значение «В противном случае».",
            "th-TH": "ผลลัพธ์ในค่า \"Then\" เมื่อเงื่อนไข \"If\" เป็นจริง มิฉะนั้นจะได้ผลลัพธ์เป็นค่า \"Else\"",
            "tr-TR": "Eğer koşulu doğruysa İse değeri yanlışsa Değilse değeri sonucunu verir.",
            "zh-CN": "如果If后面的条件为真，则结果为Then后面的值；否则结果为Else后面的值。",
            "zh-TW": "Results in the Then value when the If condition is true; otherwise results in the Else value."
        },
        "args": [
            {
                "name": "if",
                "description": {
                    "en-US": "If this condition evaluates to true, the result of the value is then; otherwise, the result is else."
                },
                "type": "bool"
            },
            {
                "name": "then",
                "description": {
                    "en-US": "The result of the value when the if condition evaluates to true."
                },
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true
            },
            {
                "name": "else",
                "description": {
                    "en-US": "The result of the value when the if condition evaluates to false."
                },
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "000000010BC7",
        "en-US": "If-Then-Else",
        "fr-FR": "Si-Alors-Sinon",
        "ja-JP": "IF-THEN-ELSE",
        "tr-TR": "Eğer-İse-Değilse",
        "de-DE": "If-Then-Else",
        "es-ES": "If-Then-Else",
        "es-MX": "If-Then-Else",
        "it-IT": "If-Then-Else",
        "ko-KR": "If-Then-Else",
        "pl-PL": "If-Then-Else",
        "pt-BR": "If-Then-Else",
        "ru-RU": "If-Then-Else",
        "th-TH": "If-Then-Else",
        "zh-CN": "If-Then-Else",
        "zh-TW": "If-Then-Else"
    },
    ".index": {
        "description": {
            "en-US": "The index of a value within the array or -1 if no such value can be found. **Does not support nested arrays.**\nWarning: if the array contains `true`, it will match against any truthy value, and `true` will match against any truthy value in the array."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array in which to search for the specified value."
                },
                "type": {
                    "Array": "Object"
                }
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The value for which to search."
                },
                "type": "Object",
                "canReplace0ByNull": true
            }
        ],
        "class": "Array",
        "isConstant": true,
        "return": "int",
        "guid": "00000000C330",
        "en-US": "Index Of Array Value",
        "es-MX": "Índice del valor de la matriz",
        "fr-FR": "Index de la valeur de tableau",
        "ja-JP": "配列値のインデックス",
        "pt-BR": "Índice do Valor da Matriz",
        "tr-TR": "Dizin Değeri İndeksi",
        "zh-CN": "数组值的索引",
        "de-DE": "Index Of Array Value",
        "es-ES": "Index Of Array Value",
        "it-IT": "Index Of Array Value",
        "ko-KR": "Index Of Array Value",
        "pl-PL": "Index Of Array Value",
        "ru-RU": "Index Of Array Value",
        "th-TH": "Index Of Array Value",
        "zh-TW": "Index Of Array Value"
    },
    ".last": {
        "description": {
            "en-US": "The value at the end of the specified array. Results in 0 if the specified array is empty."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array from which the value is acquired."
                },
                "type": "Array"
            }
        ],
        "class": "Array",
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B5C1",
        "en-US": "Last Of",
        "es-MX": "Último de",
        "fr-FR": "Dernier",
        "ja-JP": "最後の値",
        "pt-BR": "Último de",
        "tr-TR": "Son",
        "zh-CN": "最后",
        "de-DE": "Last Of",
        "es-ES": "Last Of",
        "it-IT": "Last Of",
        "ko-KR": "Last Of",
        "pl-PL": "Last Of",
        "ru-RU": "Last Of",
        "th-TH": "Last Of",
        "zh-TW": "Last Of"
    },
    "__localizedString__": {
        "guid": "00000000BA60",
        "description": {
            "en-US": "Text formed from a selection of strings and specified values."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "",
                    "de-DE": "",
                    "es-ES": "",
                    "es-MX": "",
                    "fr-FR": "",
                    "it-IT": "",
                    "ja-JP": "",
                    "ko-KR": "",
                    "pl-PL": "",
                    "pt-BR": "",
                    "ru-RU": "",
                    "th-TH": "",
                    "tr-TR": "",
                    "zh-CN": "",
                    "zh-TW": ""
                },
                "type": "LocalizedStringLiteral"
            },
            {
                "name": "{0}",
                "description": {
                    "en-US": "The value that will be converted to text and used to replace {0}."
                },
                "type": "Object",
                "canReplace0ByNull": true
            },
            {
                "name": "{1}",
                "description": {
                    "en-US": "The value that will be converted to text and used to replace {1}."
                },
                "type": "Object",
                "canReplace0ByNull": true
            },
            {
                "name": "{2}",
                "description": {
                    "en-US": "The value that will be converted to text and used to replace {2}."
                },
                "type": "Object",
                "canReplace0ByNull": true
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "String",
        "en-US": "String",
        "es-MX": "Cadena",
        "fr-FR": "Chaîne de texte",
        "ja-JP": "文字列",
        "tr-TR": "Dizgi",
        "zh-CN": "字符串",
        "de-DE": "String",
        "es-ES": "String",
        "it-IT": "String",
        "ko-KR": "String",
        "pl-PL": "String",
        "pt-BR": "String",
        "ru-RU": "String",
        "th-TH": "String",
        "zh-TW": "String"
    },
    "__map__": {
        "guid": "00000000D415",
        "description": {
            "en-US": "A map constant."
        },
        "args": [
            {
                "name": "map",
                "description": {
                    "en-US": "A map constant."
                },
                "type": "MapLiteral"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "isLiteral": true,
        "return": "Map",
        "en-US": "Map",
        "es-MX": "Mapa",
        "fr-FR": "Carte",
        "ja-JP": "マップ",
        "pt-BR": "Mapa",
        "tr-TR": "Harita",
        "zh-CN": "地图",
        "de-DE": "Map",
        "es-ES": "Map",
        "it-IT": "Map",
        "ko-KR": "Map",
        "pl-PL": "Map",
        "ru-RU": "Map",
        "th-TH": "Map",
        "zh-TW": "Map"
    },
    "__mappedArray__": {
        "description": {
            "en-US": "A copy of the specified array with the values mapped according to the mapping expression that is evaluated for each element."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose copy will be mapped.",
                    "de-DE": "Das Array dessen Kopie abgebildet wird.",
                    "es-ES": "Matriz cuya copia se mapeará.",
                    "es-MX": "La matriz cuya copia será mapeada.",
                    "fr-FR": "Le tableau dont la copie sera appliquée",
                    "it-IT": "L'array la cui copia sarà mappata.",
                    "ja-JP": "コピーがマッピングされる配列",
                    "ko-KR": "복사본을 매핑할 배열입니다.",
                    "pl-PL": "Tabela której kopia zostanie zmapowana.",
                    "pt-BR": "A matriz cuja cópia será mapeada.",
                    "ru-RU": "Массив копия которого будет сопоставлена.",
                    "th-TH": "The array whose copy will be mapped.",
                    "tr-TR": "Kopyası eşlenecek dizin.",
                    "zh-CN": "对此数组的复制进行映射。",
                    "zh-TW": "The array whose copy will be mapped."
                },
                "type": "Array"
            },
            {
                "name": "condition",
                "description": {
                    "en-US": "The mapping expression that is evaluated for each element of the copied array. Use the current array element value to reference the element of the array currently being considered."
                },
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "isConstant": true,
        "return": "Array",
        "guid": "000000011228",
        "en-US": "Mapped Array",
        "es-MX": "Matriz mapeada",
        "fr-FR": "Tableau appliqué",
        "ja-JP": "マッピングされた配列",
        "pt-BR": "Matriz Mapeada",
        "tr-TR": "Haritalanmış Dizin",
        "zh-CN": "映射的数组",
        "de-DE": "Mapped Array",
        "es-ES": "Mapped Array",
        "it-IT": "Mapped Array",
        "ko-KR": "Mapped Array",
        "pl-PL": "Mapped Array",
        "ru-RU": "Mapped Array",
        "th-TH": "Mapped Array",
        "zh-TW": "Mapped Array"
    },
    "__modulo__": {
        "guid": "00000000C410",
        "description": {
            "en-US": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
            "de-DE": "Der Rest der Division des linken Operanden durch den rechten Operanden. Der Rest einer Division durch 0 ist immer 0.",
            "es-ES": "Resto del operando de la parte izquierda dividido por el operando de la parte derecha. Cualquier número módulo cero tiene cero como resultado.",
            "es-MX": "El resto del operando del lado izquierdo dividido por el operando del lado derecho. El resultado de todo módulo de 0 será 0.",
            "fr-FR": "Le reste de l’opérande de gauche divisé par l’opérande de droite. Toute opération Modulo de 0 renvoie un résultat nul.",
            "it-IT": "Il resto dell'operando a sinistra diviso per l'operando a destra. Qualsiasi numero modulo zero risulta in zero.",
            "ja-JP": "左側の被演算子の残りは右側の被演算子で除算される。0を法とした場合、結果は0になる",
            "ko-KR": "좌측 피연산자를 우측 피연산자로 나눈 나머지입니다. 어떤 숫자이든 Modulo 0의 결과는 0입니다.",
            "pl-PL": "Reszta z dzielenia lewostronnego operandu przez prawostronny operand. Modulo zero dowolnej liczby daje wynik zero.",
            "pt-BR": "O resto do operando esquerdo dividido pelo operando direito. Qualquer número modular zero resulta em zero.",
            "ru-RU": "Остаток левого операнда поделенного на правый операнд. Результатом целочисленного деления любого числа на ноль будет ноль.",
            "th-TH": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero.",
            "tr-TR": "Sol işlenenin kalanının sağ işlenene bölümü. Modülosu sıfır olan sayının sonucu sıfırdır.",
            "zh-CN": "左边的运算量除以右边的运算量之后的余数。如果右边是0的话则结果为0。",
            "zh-TW": "The remainder of the left-hand operand divided by the right-hand operand. Any number modulo zero results in zero."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number."
                },
                "type": "float",
                "canReplace1ByTrue": true
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number."
                },
                "type": "unsigned float",
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "return": "float",
        "en-US": "Modulo",
        "es-MX": "Módulo",
        "ja-JP": "剰余",
        "pt-BR": "Modular",
        "tr-TR": "Modülo",
        "zh-CN": "余数",
        "de-DE": "Modulo",
        "es-ES": "Modulo",
        "fr-FR": "Modulo",
        "it-IT": "Modulo",
        "ko-KR": "Modulo",
        "pl-PL": "Modulo",
        "ru-RU": "Modulo",
        "th-TH": "Modulo",
        "zh-TW": "Modulo"
    },
    "__multiply__": {
        "guid": "00000000C40D",
        "description": {
            "en-US": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
            "de-DE": "Das Produkt zweier Zahlen oder Vektoren. Das Ergebnis einer Multiplikation eines Vektors mit einer Zahl ist ein skalierter Vektor.",
            "es-ES": "Producto de dos números o vectores. Un vector multiplicado por un número dará como resultado un vector escalado.",
            "es-MX": "El producto de dos números o vectores. El resultado de un vector multiplicado por un número será un vector escalado.",
            "fr-FR": "Le produit de deux nombres ou vecteurs. Un vecteur multiplié par un nombre donnera un vecteur échelonné.",
            "it-IT": "Il prodotto tra due numeri o vettori. La moltiplicazione di un vettore per un numero produce un vettore scalare.",
            "ja-JP": "2つの数値またはベクトルの積。ベクトルの乗算を行った場合、スケールされたベクトルが導き出される",
            "ko-KR": "두 숫자 또는 벡터의 곱입니다. 벡터에 숫자를 곱하면 비율이 증감된 벡터가 도출됩니다.",
            "pl-PL": "Produkt dwóch liczb lub wektorów. Wektor pomnożony przez liczbę da wektor skalowany.",
            "pt-BR": "O produto de dois números ou vetores. Um vetor multiplicado por um número produzirá um vetor escalar.",
            "ru-RU": "Произведение двух чисел или векторов. Вектор помноженный на число дает вектор другого размера.",
            "th-TH": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector.",
            "tr-TR": "İki sayının veya vektörün birbirleriyle çarpımı. Bir sayı ile bir vektörün çarpımı orantılı bir vektördür.",
            "zh-CN": "两个数字或矢量的积。矢量乘以数字会得到一个缩放后的矢量。",
            "zh-TW": "The product of two numbers or vectors. A vector multiplied by a number will yield a scaled vector."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ]
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ]
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Multiply",
        "es-MX": "Multiplicar",
        "fr-FR": "Multiplication",
        "ja-JP": "乗算",
        "pt-BR": "Multiplicar",
        "tr-TR": "Çarp",
        "zh-CN": "乘",
        "de-DE": "Multiply",
        "es-ES": "Multiply",
        "it-IT": "Multiply",
        "ko-KR": "Multiply",
        "pl-PL": "Multiply",
        "ru-RU": "Multiply",
        "th-TH": "Multiply",
        "zh-TW": "Multiply"
    },
    "__not__": {
        "guid": "00000000B275",
        "description": {
            "en-US": "Whether the input is false (or equivalent to false)."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "When this input is false (or equivalent to false), then the not value is true. Otherwise, the not value is false."
                },
                "type": "bool"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "en-US": "Not",
        "es-MX": "No",
        "fr-FR": "Pas",
        "ja-JP": "NOT",
        "pt-BR": "Não",
        "tr-TR": "Değil",
        "zh-CN": "非",
        "de-DE": "Not",
        "es-ES": "Not",
        "it-IT": "Not",
        "ko-KR": "Not",
        "pl-PL": "Not",
        "ru-RU": "Not",
        "th-TH": "Not",
        "zh-TW": "Not"
    },
    "__number__": {
        "args": [
            {
                "name": "number",
                "type": "FloatLiteral"
            }
        ],
        "isConstant": true,
        "isLiteral": true,
        "return": "float",
        "guid": "00000000AC38",
        "en-US": "Number",
        "es-MX": "Número",
        "fr-FR": "Nombre",
        "ja-JP": "数値",
        "pt-BR": "Número",
        "tr-TR": "Sayı",
        "zh-CN": "数字",
        "de-DE": "Number",
        "es-ES": "Number",
        "it-IT": "Number",
        "ko-KR": "Number",
        "pl-PL": "Number",
        "ru-RU": "Number",
        "th-TH": "Number",
        "zh-TW": "Number"
    },
    "__or__": {
        "guid": "00000000B274",
        "description": {
            "en-US": "Whether either of the two inputs are true (or equivalent to true)."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true."
                },
                "type": "bool"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "One of the two inputs considered. If either one is true (or equivalent to true), then the or value is true."
                },
                "type": "bool"
            }
        ],
        "isConstant": true,
        "return": "bool",
        "en-US": "Or",
        "es-MX": "O",
        "fr-FR": "Ou",
        "ja-JP": "OR",
        "pt-BR": "Ou",
        "tr-TR": "Veya",
        "zh-CN": "或",
        "de-DE": "Or",
        "es-ES": "Or",
        "it-IT": "Or",
        "ko-KR": "Or",
        "pl-PL": "Or",
        "ru-RU": "Or",
        "th-TH": "Or",
        "zh-TW": "Or"
    },
    "__playerVar__": {
        "description": {
            "en-US": "The current value of a player variable, which is a variable that belongs to a specific player."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player whose variable value to acquire."
                },
                "type": "Player"
            },
            {
                "name": "variable",
                "description": {
                    "en-US": "The variable whose value to acquire."
                },
                "type": "PlayerVariable"
            }
        ],
        "return": "Value",
        "guid": "00000000B0FD",
        "en-US": "Player Variable",
        "es-MX": "Variable de jugador",
        "fr-FR": "Variable de joueur",
        "ja-JP": "プレイヤー変数",
        "pt-BR": "Variável de Jogador",
        "tr-TR": "Oyuncu Değişkeni",
        "zh-CN": "玩家变量",
        "de-DE": "Player Variable",
        "es-ES": "Player Variable",
        "it-IT": "Player Variable",
        "ko-KR": "Player Variable",
        "pl-PL": "Player Variable",
        "ru-RU": "Player Variable",
        "th-TH": "Player Variable",
        "zh-TW": "Player Variable"
    },
    "__raiseToPower__": {
        "guid": "00000000C414",
        "description": {
            "en-US": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative the result is always zero.",
            "de-DE": "Der linke Operand potenziert mit dem rechten Operanden. Ist der linke Operand negativ ist das Ergebnis immer 0.",
            "es-ES": "Operando de la parte izquierda elevado al operando de la parte derecha. Si el operando de la parte izquierda es negativo el resultado siempre será cero.",
            "es-MX": "El operando del lado izquierdo elevado a la potencia del operando del lado derecho. Si el operando del lado izquierdo es negativo el resultado será siempre 0.",
            "fr-FR": "L’opérande de gauche élevée à la valeur de l’opérande de droite. Si l’opérande de gauche est négative le résultat sera toujours égal à 0.",
            "it-IT": "L'operando a sinistra innalzato alla potenza dell'operando a destra. Se l'operando a sinistra è negativo il risultato è sempre zero.",
            "ja-JP": "左側の被演算子を右側の被演算子の数値の分だけ累乗する。左側の被演算子が負の場合、結果は0となる",
            "ko-KR": "좌측 피연산자를 우측 피연산자만큼 제곱합니다. 좌측 피연산자가 음수이면 결과는 항상 0입니다.",
            "pl-PL": "Lewostronny operand podniesiony do potęgi prawostronnego operandu. Jeśli lewostronny jest ujemny wynikiem jest zawsze zero.",
            "pt-BR": "O operando esquerdo elevado à potência do operando direito. Se o operando esquerdo for negativo o resultado sempre será zero.",
            "ru-RU": "Левый операнд возведенный в степень с показателем равным правому оператору. Если левый операнд отрицателен то результат приравнивается к нулю.",
            "th-TH": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative the result is always zero.",
            "tr-TR": "Sol işlenen sağ işlenenin üssüne yükseltildi. Sol işlenen negatifse sonuç her zaman sıfırdır.",
            "zh-CN": "左边运算量的乘方，幂为右边运算量。如果左边运算量为负，则结果始终为0。",
            "zh-TW": "The left-hand operand raised to the power of the right-hand operand. If the left-hand operand is negative the result is always zero."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number."
                },
                "type": "unsigned float"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "en-US": "Raise To Power",
        "es-MX": "Elevar a la potencia",
        "fr-FR": "Élévation à une puissance ",
        "ja-JP": "累乗",
        "pt-BR": "Elevar à Potência",
        "tr-TR": "Üssünü Al",
        "zh-CN": "乘方",
        "de-DE": "Raise To Power",
        "es-ES": "Raise To Power",
        "it-IT": "Raise To Power",
        "ko-KR": "Raise To Power",
        "pl-PL": "Raise To Power",
        "ru-RU": "Raise To Power",
        "th-TH": "Raise To Power",
        "zh-TW": "Raise To Power"
    },
    "raycastHitNormal": {
        "description": {
            "en-US": "The surface normal at the ray cast hit position (or from end pos to start pos if no hit occurs)."
        },
        "args": [
            {
                "name": "startPos",
                "description": {
                    "en-US": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": "Position"
            },
            {
                "name": "endPos",
                "description": {
                    "en-US": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": "Position"
            },
            {
                "name": "playersToInclude",
                "description": {
                    "en-US": "Which players can be hit by this ray cast.",
                    "de-DE": "Welche Spieler von diesem Raycast getroffen werden können.",
                    "es-ES": "Los jugadores a los que puede alcanzar este ray cast.",
                    "es-MX": "Los jugadores que pueden ser golpeados por este lanzamiento de rayo.",
                    "fr-FR": "Les joueurs pouvant être intersectés par cette émission de rayons.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio.",
                    "ja-JP": "このレイ・キャストが当たりうるプレイヤー",
                    "ko-KR": "이 레이캐스트로 맞힐 수 있는 플레이어입니다.",
                    "pl-PL": "Którzy gracze mogą zostać oświetleni przez raycasting.",
                    "pt-BR": "Quais jogadores podem ser atingidos por este lançamento de raio.",
                    "ru-RU": "Определяет каких игроков может учитывать функция [Ray Cast].",
                    "th-TH": "ผู้เล่นคนที่สามารถโดนเรย์แคสต์นี้ได้",
                    "tr-TR": "Işın dökümünün isabet edebileceği oyuncular.",
                    "zh-CN": "哪些玩家可以被射线击中。",
                    "zh-TW": "Which players can be hit by this ray cast."
                },
                "type": {
                    "Array": "Player"
                }
            },
            {
                "name": "playersToExclude",
                "description": {
                    "en-US": "Which players cannot be hit by this ray cast. This list takes precedence over players to include."
                },
                "type": {
                    "Array": "Player"
                }
            },
            {
                "name": "includePlayerOwnedObjects",
                "description": {
                    "en-US": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast."
                },
                "type": "bool"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000C613",
        "en-US": "Ray Cast Hit Normal",
        "es-MX": "Estándar de impacto de lanzamiento de rayo",
        "fr-FR": "Surface intersectée par le rayon émis",
        "ja-JP": "レイ・キャストが当たった法線",
        "pt-BR": "Normal de Acerto do Lançamento de Raio",
        "tr-TR": "Işın Dökümü İsabet Normali",
        "zh-CN": "射线命中法线",
        "de-DE": "Ray Cast Hit Normal",
        "es-ES": "Ray Cast Hit Normal",
        "it-IT": "Ray Cast Hit Normal",
        "ko-KR": "Ray Cast Hit Normal",
        "pl-PL": "Ray Cast Hit Normal",
        "ru-RU": "Ray Cast Hit Normal",
        "th-TH": "Ray Cast Hit Normal",
        "zh-TW": "Ray Cast Hit Normal"
    },
    "raycastHitPlayer": {
        "description": {
            "en-US": "The player hit by the ray cast (or null if no player is hit)."
        },
        "args": [
            {
                "name": "startPos",
                "description": {
                    "en-US": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": "Position"
            },
            {
                "name": "endPos",
                "description": {
                    "en-US": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": "Position"
            },
            {
                "name": "playersToInclude",
                "description": {
                    "en-US": "Which players can be hit by this ray cast.",
                    "de-DE": "Welche Spieler von diesem Raycast getroffen werden können.",
                    "es-ES": "Los jugadores a los que puede alcanzar este ray cast.",
                    "es-MX": "Los jugadores que pueden ser golpeados por este lanzamiento de rayo.",
                    "fr-FR": "Les joueurs pouvant être intersectés par cette émission de rayons.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio.",
                    "ja-JP": "このレイ・キャストが当たりうるプレイヤー",
                    "ko-KR": "이 레이캐스트로 맞힐 수 있는 플레이어입니다.",
                    "pl-PL": "Którzy gracze mogą zostać oświetleni przez raycasting.",
                    "pt-BR": "Quais jogadores podem ser atingidos por este lançamento de raio.",
                    "ru-RU": "Определяет каких игроков может учитывать функция [Ray Cast].",
                    "th-TH": "ผู้เล่นคนที่สามารถโดนเรย์แคสต์นี้ได้",
                    "tr-TR": "Işın dökümünün isabet edebileceği oyuncular.",
                    "zh-CN": "哪些玩家可以被射线击中。",
                    "zh-TW": "Which players can be hit by this ray cast."
                },
                "type": {
                    "Array": "Player"
                }
            },
            {
                "name": "playersToExclude",
                "description": {
                    "en-US": "Which players cannot be hit by this ray cast. This list takes precedence over players to include."
                },
                "type": {
                    "Array": "Player"
                }
            },
            {
                "name": "includePlayerOwnedObjects",
                "description": {
                    "en-US": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast."
                },
                "type": "bool"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000C611",
        "en-US": "Ray Cast Hit Player",
        "es-MX": "Jugador de impacto de lanzamiento de rayo",
        "fr-FR": "Joueur intersecté par le rayon émis",
        "ja-JP": "レイ・キャストが当たったプレイヤー",
        "pt-BR": "Jogador Atingido pelo Lançamento de Raio",
        "tr-TR": "Işın Dökümü Oyuncu İsabeti",
        "zh-CN": "射线命中玩家",
        "de-DE": "Ray Cast Hit Player",
        "es-ES": "Ray Cast Hit Player",
        "it-IT": "Ray Cast Hit Player",
        "ko-KR": "Ray Cast Hit Player",
        "pl-PL": "Ray Cast Hit Player",
        "ru-RU": "Ray Cast Hit Player",
        "th-TH": "Ray Cast Hit Player",
        "zh-TW": "Ray Cast Hit Player"
    },
    "raycastHitPosition": {
        "description": {
            "en-US": "The position where the ray cast hits a surface, object, or player (or the end pos if no hit occurs)."
        },
        "args": [
            {
                "name": "startPos",
                "description": {
                    "en-US": "The start position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": "Position"
            },
            {
                "name": "endPos",
                "description": {
                    "en-US": "The end position for the ray cast. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": "Position"
            },
            {
                "name": "playersToInclude",
                "description": {
                    "en-US": "Which players can be hit by this ray cast.",
                    "de-DE": "Welche Spieler von diesem Raycast getroffen werden können.",
                    "es-ES": "Los jugadores a los que puede alcanzar este ray cast.",
                    "es-MX": "Los jugadores que pueden ser golpeados por este lanzamiento de rayo.",
                    "fr-FR": "Les joueurs pouvant être intersectés par cette émission de rayons.",
                    "it-IT": "Quali giocatori possono essere colpiti dal lancio di questo raggio.",
                    "ja-JP": "このレイ・キャストが当たりうるプレイヤー",
                    "ko-KR": "이 레이캐스트로 맞힐 수 있는 플레이어입니다.",
                    "pl-PL": "Którzy gracze mogą zostać oświetleni przez raycasting.",
                    "pt-BR": "Quais jogadores podem ser atingidos por este lançamento de raio.",
                    "ru-RU": "Определяет каких игроков может учитывать функция [Ray Cast].",
                    "th-TH": "ผู้เล่นคนที่สามารถโดนเรย์แคสต์นี้ได้",
                    "tr-TR": "Işın dökümünün isabet edebileceği oyuncular.",
                    "zh-CN": "哪些玩家可以被射线击中。",
                    "zh-TW": "Which players can be hit by this ray cast."
                },
                "type": {
                    "Array": "Player"
                }
            },
            {
                "name": "playersToExclude",
                "description": {
                    "en-US": "Which players cannot be hit by this ray cast. This list takes precedence over players to include."
                },
                "type": {
                    "Array": "Player"
                }
            },
            {
                "name": "includePlayerOwnedObjects",
                "description": {
                    "en-US": "Whether player-owned objects (such as barriers or turrets) should be included in the ray cast."
                },
                "type": "bool"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000C597",
        "en-US": "Ray Cast Hit Position",
        "es-MX": "Posición de impacto de lanzamiento de rayo",
        "fr-FR": "Position d’impact du rayon émis",
        "ja-JP": "レイ・キャストのヒット位置",
        "pt-BR": "Posição de Acerto do Lançamento de Raio",
        "tr-TR": "Işın Dökümü İsabet Konumu",
        "zh-CN": "射线命中位置",
        "de-DE": "Ray Cast Hit Position",
        "es-ES": "Ray Cast Hit Position",
        "it-IT": "Ray Cast Hit Position",
        "ko-KR": "Ray Cast Hit Position",
        "pl-PL": "Ray Cast Hit Position",
        "ru-RU": "Ray Cast Hit Position",
        "th-TH": "Ray Cast Hit Position",
        "zh-TW": "Ray Cast Hit Position"
    },
    ".exclude": {
        "description": {
            "en-US": "A copy of the array with one or more values removed (if found)."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array from which to remove values."
                },
                "type": "Array"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The value to remove from the array (if found). If this value is itself an array, each matching element is removed."
                },
                "type": [
                    "Object",
                    "Array"
                ],
                "canReplace0ByNull": true
            }
        ],
        "class": "Array",
        "isConstant": true,
        "return": "Array",
        "guid": "00000000C421",
        "en-US": "Remove From Array",
        "es-MX": "Eliminar de la matriz",
        "fr-FR": "Supprimer du tableau",
        "ja-JP": "配列から削除",
        "pt-BR": "Remover da Matriz",
        "tr-TR": "Dizinden Kaldır",
        "zh-CN": "从数组中移除",
        "de-DE": "Remove From Array",
        "es-ES": "Remove From Array",
        "it-IT": "Remove From Array",
        "ko-KR": "Remove From Array",
        "pl-PL": "Remove From Array",
        "ru-RU": "Remove From Array",
        "th-TH": "Remove From Array",
        "zh-TW": "Remove From Array"
    },
    "__round__": {
        "description": {
            "en-US": "The integer to which the specified value rounds."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The real number to round.",
                    "de-DE": "Die reelle Zahl die gerundet werden soll.",
                    "es-ES": "Número real para redondear.",
                    "es-MX": "El número real que se redondeará.",
                    "fr-FR": "Le nombre réel arrondi.",
                    "it-IT": "Il numero reale da arrotondare.",
                    "ja-JP": "四捨五入する実数",
                    "ko-KR": "반올림할 실수입니다.",
                    "pl-PL": "Liczba rzeczywista do zaokrąglenia.",
                    "pt-BR": "O número real a arredondar.",
                    "ru-RU": "Действительное число которое нужно округлить.",
                    "th-TH": "The real number to round.",
                    "tr-TR": "Yuvarlanacak gerçek sayı.",
                    "zh-CN": "要取整的实数。",
                    "zh-TW": "The real number to round."
                },
                "type": "float"
            },
            {
                "name": "roundingType",
                "description": {
                    "en-US": "Determines the direction in which the value will be rounded."
                },
                "type": "__Rounding__"
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "00000000C354",
        "en-US": "Round To Integer",
        "es-MX": "Redondear a número entero",
        "fr-FR": "Arrondir à l’entier",
        "ja-JP": "整数への四捨五入",
        "pt-BR": "Arredondar para Inteiro",
        "tr-TR": "Tam Sayıya Yuvarla",
        "zh-CN": "取整",
        "de-DE": "Round To Integer",
        "es-ES": "Round To Integer",
        "it-IT": "Round To Integer",
        "ko-KR": "Round To Integer",
        "pl-PL": "Round To Integer",
        "ru-RU": "Round To Integer",
        "th-TH": "Round To Integer",
        "zh-TW": "Round To Integer"
    },
    "__sortedArray__": {
        "description": {
            "en-US": "A copy of the specified array with the values sorted according to the value rank that is evaluated for each element."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose copy will be sorted.",
                    "de-DE": "Das Array dessen Kopie sortiert wird.",
                    "es-ES": "Matriz cuya copia se ordenará.",
                    "es-MX": "La matriz cuya copia será ordenada.",
                    "fr-FR": "Le tableau dont la copie sera triée.",
                    "it-IT": "L'array la cui copia sarà ordinata.",
                    "ja-JP": "コピーがソートされる配列",
                    "ko-KR": "복사본을 정렬할 배열입니다.",
                    "pl-PL": "Tabela której kopia zostanie posortowana.",
                    "pt-BR": "A matriz cuja cópia será ordenada.",
                    "ru-RU": "Массив в копии которого нужно выполнить сортировку.",
                    "th-TH": "The array whose copy will be sorted.",
                    "tr-TR": "Kopyası sıralanacak dizin.",
                    "zh-CN": "对此数组的复制进行排序。",
                    "zh-TW": "The array whose copy will be sorted."
                },
                "type": {
                    "Array": "Object"
                }
            },
            {
                "name": "valueRank",
                "description": {
                    "en-US": "The value that is evaluated for each element of the copied array. The array is sorted by this rank in ascending order. Use the current array element value to reference the element of the array currently being considered."
                },
                "type": "Object"
            }
        ],
        "isConstant": true,
        "return": {
            "Array": "Object"
        },
        "guid": "00000000B5C0",
        "en-US": "Sorted Array",
        "es-MX": "Matriz ordenada",
        "fr-FR": "Tableau trié",
        "ja-JP": "ソートされた配列",
        "pt-BR": "Matriz Ordenada",
        "tr-TR": "Sıralı Dizin",
        "zh-CN": "已排序的数组",
        "de-DE": "Sorted Array",
        "es-ES": "Sorted Array",
        "it-IT": "Sorted Array",
        "ko-KR": "Sorted Array",
        "pl-PL": "Sorted Array",
        "ru-RU": "Sorted Array",
        "th-TH": "Sorted Array",
        "zh-TW": "Sorted Array"
    },
    ".charAt": {
        "description": {
            "en-US": "The character found at a specified index of a String.",
            "de-DE": "Das Zeichen das bei einem festgelegten Index eines Strings gefunden wird.",
            "es-ES": "El carácter encontrado en un índice especificado de una cadena.",
            "es-MX": "El personaje encontrado en un índice específicado de una cadena.",
            "fr-FR": "Le caractère trouvé à un index spécifié d’une chaîne.",
            "it-IT": "Il carattere trovato all'indice specificato di una stringa.",
            "ja-JP": "文字列の指定のインデックスで見つかったキャラクター",
            "ko-KR": "문자열의 지정된 인덱스에서 발견된 문자입니다.",
            "pl-PL": "Znak znajdujący się pod określonym indeksem ciągu.",
            "pt-BR": "O caractere encontrado em um índice especificado de uma String.",
            "ru-RU": "Символ найденный по указанному индексу строки.",
            "th-TH": "The character found at a specified index of a String.",
            "tr-TR": "Bir Dizgi'nin belirlenen indeksinde bulunan karakter.",
            "zh-CN": "一条字符串的指定索引对应的字符。",
            "zh-TW": "The character found at a specified index of a String."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "The String value whose character to acquire."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            },
            {
                "name": "index",
                "description": {
                    "en-US": "The index of the character to be acquired with 0 as the first character 1 as the second character etc..",
                    "de-DE": "Der Index des Zeichens der abgerufen werden soll 0 für das erste Zeichen 1 für das zweite Zeichen usw..",
                    "es-ES": "El índice del carácter que se adquiere 0 es el primer carácter 1 es el segundo etc..",
                    "es-MX": "El índice del personaje que se adquirirá con 0 como el primer carácter 1 como el segundo etc..",
                    "fr-FR": "L’index du caractère à appeler avec 0 comme premier caractère 1 comme second etc..",
                    "it-IT": "L'indice di un carattere da acquisire dove 0 indica il primo carattere 1 il secondo eccetera.",
                    "ja-JP": "取得するキャラクターのインデックス（1人目のキャラクターが0、2人目が1など）",
                    "ko-KR": "가져올 문자의 인덱스입니다첫 문자는 0 두 번째 문자는 1 등.",
                    "pl-PL": "Indeks znaku który ma zostać pobrany z 0 jako pierwszym znakiem 1 jako drugim itd..",
                    "pt-BR": "O índice do caractere que será adquirido 0 é o primeiro 1 é o segundo etc.",
                    "ru-RU": "Индекс символа который нужно получить первым символом будет 0 вторым – 1 и так далее.",
                    "th-TH": "The index of the character to be acquired with 0 as the first character 1 as the second character etc..",
                    "tr-TR": "Elde edilecek karakterin indeksi birinci karakter olarak 0 ikinci karakter olarak 1 vb.",
                    "zh-CN": "要获取字符的索引（0表示第一个字符，1表示第二个字符，以此类推）。",
                    "zh-TW": "The index of the character to be acquired with 0 as the first character 1 as the second character etc.."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "class": "String",
        "return": "String",
        "guid": "000000012D5E",
        "en-US": "Char In String",
        "es-MX": "Personaje en cadena",
        "fr-FR": "Caractère dans la chaîne",
        "ja-JP": "配列の文字",
        "pt-BR": "Caractere na String",
        "tr-TR": "Karakter Dizgide",
        "zh-CN": "字符串中字符",
        "de-DE": "Char In String",
        "es-ES": "Char In String",
        "it-IT": "Char In String",
        "ko-KR": "Char In String",
        "pl-PL": "Char In String",
        "ru-RU": "Char In String",
        "th-TH": "Char In String",
        "zh-TW": "Char In String"
    },
    ".strIndex": {
        "description": {
            "en-US": "The index of a character within a String or -1 if no such character can be found.",
            "de-DE": "Der Index eines Zeichens in einem String oder -1 wenn kein solches Zeichen gefunden wird.",
            "es-ES": "El índice de un carácter dentro de una cadena o «-1» si no se encuentra ese carácter.",
            "es-MX": "El índice de un personaje dentro de una cadena o -1 si no se puede encontrar dicho personaje.",
            "fr-FR": "L’index d’un caractère extrait d’une chaîne ou -1 si aucun caractère de ce type n’a été trouvé.",
            "it-IT": "L'indice di un carattere all'interno di una stringa o -1 se tale carattere non può essere trovato.",
            "ja-JP": "文字列内のキャラクターのインデックスもしくは-1（該当するキャラクターが存在しない場合）",
            "ko-KR": "문자의 문자열 내 인덱스 또는 그러한 문자를 찾을 수 없을 경우 -1입니다.",
            "pl-PL": "Indeks znaku wewnątrz ciągu lub -1 jeśli nie znaleziono żadnego takiego znaku.",
            "pt-BR": "O índice de um caractere dentro da String ou -1 se o caractere encontrado.",
            "ru-RU": "Индекс символа в строке или -1 если такой символ не найден.",
            "th-TH": "The index of a character within a String or -1 if no such character can be found.",
            "tr-TR": "Bir Dizgi'deki karakterin indeksi karakter bulunamazsa -1.",
            "zh-CN": "一个字符在字符串中的索引位置。如果找不到此字符，则为-1。",
            "zh-TW": "The index of a character within a String or -1 if no such character can be found."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "The String Value from which to search for the character.",
                    "de-DE": "Der Stringwert in dem das Zeichen gesucht werden soll.",
                    "es-ES": "Valor de la cadena desde la que se buscará el carácter.",
                    "es-MX": "El valor de la cadena desde el cual se buscará al personaje.",
                    "fr-FR": "La valeur de la chaîne à partir de laquelle chercher le caractère.",
                    "it-IT": "Il valore della stringa da cui cercare il carattere.",
                    "ja-JP": "キャラクターの検索元となる文字列の値",
                    "ko-KR": "문자를 검색할 문자열 값입니다.",
                    "pl-PL": "Wartość ciągu dzięki której można wyszukać znak.",
                    "pt-BR": "O Valor da String que será usado para buscar o caractere.",
                    "ru-RU": "Строка в которой будет выполнен поиск символа.",
                    "th-TH": "The String Value from which to search for the character.",
                    "tr-TR": "Karakterin aranacağı Dizgi Değeri.",
                    "zh-CN": "从此字符串值中搜索字符。",
                    "zh-TW": "The String Value from which to search for the character."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            },
            {
                "name": "character",
                "description": {
                    "en-US": "The character for which to search"
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            }
        ],
        "isConstant": true,
        "class": "String",
        "return": "int",
        "guid": "000000012D5F",
        "en-US": "Index Of String Char",
        "es-MX": "Índice del personaje de la cadena",
        "fr-FR": "Index de la chaîne de caractère",
        "ja-JP": "文字列の文字のインデックス",
        "pt-BR": "Índice de Caractere de String",
        "tr-TR": "Dizgi Karakter İndeksi",
        "zh-CN": "字符串字符索引",
        "de-DE": "Index Of String Char",
        "es-ES": "Index Of String Char",
        "it-IT": "Index Of String Char",
        "ko-KR": "Index Of String Char",
        "pl-PL": "Index Of String Char",
        "ru-RU": "Index Of String Char",
        "th-TH": "Index Of String Char",
        "zh-TW": "Index Of String Char"
    },
    ".replace": {
        "description": {
            "en-US": "Results in a String Value. This String Value will be built from the specified String Value, where all occurrences of the pattern String are replaced with the replacement String.\n\n**WARNING**: This function clamps the string to 511 bytes (in UTF-8)."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "The String Value with which to search for replacements.",
                    "de-DE": "Der Stringwert der zum Ersetzen genutzt werden soll.",
                    "es-ES": "Valor de la cadena con el que se buscarán reemplazos.",
                    "es-MX": "El valor de la cadena con el cual se buscarán los reemplazos.",
                    "fr-FR": "La valeur de la chaîne avec laquelle chercher des remplacements.",
                    "it-IT": "Il valore della stringa per il quale cercare sostituzioni.",
                    "ja-JP": "置換の検索を行う文字列の値",
                    "ko-KR": "대체 항목을 검색할 문자열 값입니다.",
                    "pl-PL": "Wartość ciągu dzięki której można wyszukać zamienniki.",
                    "pt-BR": "O Valor da String que será usado para buscar substituições.",
                    "ru-RU": "Строка с помощью которой будет выполнен поиск замены.",
                    "th-TH": "The String Value with which to search for replacements.",
                    "tr-TR": "Değiştirmelerin aranacağı Dizgi Değeri.",
                    "zh-CN": "在此字符串中搜索进行替换。",
                    "zh-TW": "The String Value with which to search for replacements."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            },
            {
                "name": "pattern",
                "description": {
                    "en-US": "The String pattern to be replaced.",
                    "de-DE": "Der Musterstring der ersetzt werden soll.",
                    "es-ES": "Patrón de la cadena que se reemplaza.",
                    "es-MX": "El patrón de Cadena a reemplazar.",
                    "fr-FR": "Le motif de chaîne à remplacer.",
                    "it-IT": "La stringa Schema da sostituire.",
                    "ja-JP": "置き換えられる文字列パターン",
                    "ko-KR": "교체할 문자열 패턴입니다.",
                    "pl-PL": "Wartość ciągu który zostanie zastąpiony.",
                    "pt-BR": "Padrão de String para substituição.",
                    "ru-RU": "Строка шаблона которая будет заменена.",
                    "th-TH": "The String pattern to be replaced.",
                    "tr-TR": "Değiştirilecek Dizgi deseni.",
                    "zh-CN": "要替换的字符串模式。",
                    "zh-TW": "The String pattern to be replaced."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            },
            {
                "name": "replacement",
                "description": {
                    "en-US": "The String Value with which to replace the pattern String"
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            }
        ],
        "isConstant": true,
        "class": "String",
        "return": "String",
        "guid": "000000012D61",
        "en-US": "String Replace",
        "es-MX": "Reemplazo de cadena",
        "fr-FR": "Remplacement de la chaîne",
        "ja-JP": "文字列の置換",
        "pt-BR": "Substituição de String",
        "tr-TR": "Dizgi Değiştir",
        "zh-CN": "字符串替换",
        "de-DE": "String Replace",
        "es-ES": "String Replace",
        "it-IT": "String Replace",
        "ko-KR": "String Replace",
        "pl-PL": "String Replace",
        "ru-RU": "String Replace",
        "th-TH": "String Replace",
        "zh-TW": "String Replace"
    },
    ".split": {
        "description": {
            "en-US": "Results in an Array of String Values. These String Values will be built from the specified String Value split around the separator String.",
            "de-DE": "Ergibt ein Array von Stringwerten. Diese werden aus dem festgelegten Stringwert erstellt der um den Trennungsstring geteilt wird.",
            "es-ES": "El resultado es una matriz de valores de la cadena. Estos valores de la cadena se crearán a partir del valor de la cadena especificada dividida por la cadena de separación.",
            "es-MX": "Resultados en una matriz de valores de cadena. Estos valores de cadena se elaborarán desde el valor Cadena especificado dividida alrededor del separador Cadena.",
            "fr-FR": "Le résultat affichera un tableau de valeurs de chaîne. Ces valeurs de chaîne seront construites à partir de la valeur de la chaîne spécifiée divisées autour de la chaîne de séparation.",
            "it-IT": "Restituisce un Array di valori di stringa. Questi valori di stringa vengono ricavati dal valore di stringa specificato diviso in base alla stringa Separatore.",
            "ja-JP": "文字列の値の配列を導き出す。この文字列の値は、分割文字列で分割された指定の文字列の値から構築される",
            "ko-KR": "문자열 값 배열이 도출됩니다. 해당 문자열 값은 지정된 문자열 값을 기반으로 구성되며 분할 문자열을 기준으로 나뉩니다.",
            "pl-PL": "Wynik w postaci tabeli wartości ciągów. Te wartości ciągu znaków zostaną wytworzone z określonej wartości ciągu znaków podzielonej wokół ciągu separatora.",
            "pt-BR": "Resultados em uma Matriz de Valores de String. Esses Valores de String serão feitos a partir de um Valor de String determinado divididos ao redor do separador de String.",
            "ru-RU": "Выводит массив подстрок созданных из указанной строки при помощи строки-разделителя.",
            "th-TH": "Results in an Array of String Values. These String Values will be built from the specified String Value split around the separator String.",
            "tr-TR": "Dizgi Değerleri Dizini ile sonuçlanır. Bu Dizgi Değerleri ayırıcı Dizgi etrafında bölünmüş belirlenen Dizgi Değerinden oluşturulacaktır.",
            "zh-CN": "结果为字符串值数组。数组中的字符串值由将指定字符串值用分隔符字符串分割而成。",
            "zh-TW": "Results in an Array of String Values. These String Values will be built from the specified String Value split around the separator String."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "The String Value to split.",
                    "de-DE": "Der Stringwert der geteilt werden soll.",
                    "es-ES": "Valor de la cadena que se divide.",
                    "es-MX": "El valor de la cadena a separar.",
                    "fr-FR": "La valeur de la chaîne à diviser.",
                    "it-IT": "Il valore della stringa da dividere.",
                    "ja-JP": "分割する文字列の値",
                    "ko-KR": "분할할 문자열 값입니다.",
                    "pl-PL": "Wartość ciągu która zostanie podzielona.",
                    "pt-BR": "O Valor da String para divisão.",
                    "ru-RU": "Строка которая будет разделена.",
                    "th-TH": "The String Value to split.",
                    "tr-TR": "Bölünecek Dizgi Değeri.",
                    "zh-CN": "要分割的字符串值",
                    "zh-TW": "The String Value to split."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            },
            {
                "name": "separator",
                "description": {
                    "en-US": "The separator String with which to split the String Value.",
                    "de-DE": "Der Trennungsstring mit dem der Stringwert geteilt werden soll.",
                    "es-ES": "Cadena de separación con la que se dividirá el valor de la cadena.",
                    "es-MX": "El separador de la cadena con el cual se dividirá el valor Cadena.",
                    "fr-FR": "La chaîne de séparation avec laquelle diviser la valeur de la chaîne.",
                    "it-IT": "La stringa che funge da separatore con cui dividere il valore della stringa.",
                    "ja-JP": "文字列の値を分割するための分割文字列",
                    "ko-KR": "문자열 값을 나눌 분할 문자열입니다.",
                    "pl-PL": "Ciąg separatora dzięki któremu można podzielić wartość ciągu.",
                    "pt-BR": "O separador da String que será usado para dividir o Valor da String.",
                    "ru-RU": "Строка-разделитель с помощью которой строка будет разделена на части.",
                    "th-TH": "The separator String with which to split the String Value.",
                    "tr-TR": "Dizgi Değeri'ni bölecek ayırıcı Dizgi.",
                    "zh-CN": "要分割字符串值所用的分隔符字符串。",
                    "zh-TW": "The separator String with which to split the String Value."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            }
        ],
        "return": {
            "Array": "String"
        },
        "isConstant": true,
        "class": "String",
        "guid": "000000012D60",
        "en-US": "String Split",
        "es-MX": "Separación de cadena",
        "fr-FR": "Division de la chaîne",
        "ja-JP": "文字列の分割",
        "pt-BR": "Divisão de String",
        "tr-TR": "Dizgiyi Ayır",
        "zh-CN": "字符串分割",
        "de-DE": "String Split",
        "es-ES": "String Split",
        "it-IT": "String Split",
        "ko-KR": "String Split",
        "pl-PL": "String Split",
        "ru-RU": "String Split",
        "th-TH": "String Split",
        "zh-TW": "String Split"
    },
    ".substring": {
        "description": {
            "en-US": "The substring of the provided string."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "The string value from which to build the substring."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            },
            {
                "name": "substringStartIndex",
                "description": {
                    "en-US": "Specifies the character that will start the substring with 0 as the first character 1 as the second character etc..",
                    "de-DE": "Legt das Zeichen fest bei dem der Substring beginnt 0 für das erste Zeichen 1 für das zweite Zeichen usw..",
                    "es-ES": "Especifica el carácter que comenzará en la subcadena 0 es el primer primero 1 es el segundo etc..",
                    "es-MX": "Especifica el personaje que comenzará la subcadena con 0 como el primer personaje 1 como el segundo etc..",
                    "fr-FR": "Spécifie le caractère qui commencera la sous-chaîne avec 0 comme premier caractère 1 comme second etc..",
                    "it-IT": "Specifica il carattere all'inizio della sottostringa dove 0 indica il primo carattere 1 il secondo eccetera.",
                    "ja-JP": "部分文字列を開始する文字数を指定する（1文字目が0、2文字目が1など）",
                    "ko-KR": "하위 문자열을 시작할 문자를 지정합니다. 0이 첫 번째 문자 1이 두 번째 문자 등",
                    "pl-PL": "Określa znak który uruchomi podciąg z 0 jako pierwszym znakiem 1 jako drugim itd..",
                    "pt-BR": "Especifica o caractere que iniciará a substring 0 é o primeiro 1 é o segundo etc.",
                    "ru-RU": "Указывает символ с которого будет начинаться подстрока первым символом будет 0 вторым – 1 и так далее.",
                    "th-TH": "Specifies the character that will start the substring with 0 as the first character 1 as the second character etc..",
                    "tr-TR": "Alt dizgiyi başlatacak karakteri belirler birinci karakter olarak 0 ikinci karakter olarak 1 vb..",
                    "zh-CN": "指定一个字符作为子字符串的起始处（0表示第一个字符，1表示第二个字符，以此类推）。",
                    "zh-TW": "Specifies the character that will start the substring with 0 as the first character 1 as the second character etc.."
                },
                "type": "unsigned int"
            },
            {
                "name": "substringLength",
                "description": {
                    "en-US": "Specifies the number of characters in the substring.",
                    "de-DE": "Legt die Anzahl der Zeichen im Substring fest.",
                    "es-ES": "Especifica el número de caracteres en la subcadena.",
                    "es-MX": "Especifica la cantidad de caracteres de la subcadena.",
                    "fr-FR": "Spécifie le nombre de caractères dans la sous-chaîne.",
                    "it-IT": "Specifica il numero di caratteri nella sottostringa.",
                    "ja-JP": "部分文字列の文字数を指定する",
                    "ko-KR": "하위 문자열 내의 문자 수를 지정합니다.",
                    "pl-PL": "Określa liczbę znaków w podciągu.",
                    "pt-BR": "Especifica o número de caracteres na substring.",
                    "ru-RU": "Указывает число символов в подстроке.",
                    "th-TH": "Specifies the number of characters in the substring.",
                    "tr-TR": "Alt dizgideki karakter sayısını belirtir.",
                    "zh-CN": "指定子字符串的字符数。",
                    "zh-TW": "Specifies the number of characters in the substring."
                },
                "type": "unsigned int",
                "default": "Math.INFINITY"
            }
        ],
        "class": "String",
        "isConstant": true,
        "return": "String",
        "guid": "0000000124A6",
        "en-US": "String Slice",
        "es-MX": "Extracción de cadena",
        "fr-FR": "Section de la chaîne",
        "ja-JP": "文字列の切り取り",
        "pt-BR": "Fatia da String",
        "tr-TR": "Dizgi Kesiti",
        "zh-CN": "截取字符串",
        "de-DE": "String Slice",
        "es-ES": "String Slice",
        "it-IT": "String Slice",
        "ko-KR": "String Slice",
        "pl-PL": "String Slice",
        "ru-RU": "String Slice",
        "th-TH": "String Slice",
        "zh-TW": "String Slice"
    },
    "__subtract__": {
        "guid": "00000000C40A",
        "description": {
            "en-US": "The difference between two numbers or vectors.",
            "de-DE": "Die Differenz zweier Zahlen oder Vektoren.",
            "es-ES": "Diferencia entre dos números o vectores.",
            "es-MX": "La diferencia entre dos números o vectores.",
            "fr-FR": "La différence entre deux nombres ou vecteurs.",
            "it-IT": "La differenza tra due numeri o vettori.",
            "ja-JP": "2つの数値またはベクトルの差",
            "ko-KR": "두 숫자 또는 벡터의 차이입니다.",
            "pl-PL": "Różnica między dwoma liczbami lub wektorami.",
            "pt-BR": "A diferença entre dois números ou vetores.",
            "ru-RU": "Разность двух чисел или векторов.",
            "th-TH": "The difference between two numbers or vectors.",
            "tr-TR": "İki sayı veya vektör arasındaki fark.",
            "zh-CN": "两个数字或矢量的差。",
            "zh-TW": "The difference between two numbers or vectors."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number or a vector."
                },
                "type": [
                    "float",
                    "Vector"
                ],
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "return": [
            "float",
            "Vector"
        ],
        "en-US": "Subtract",
        "es-MX": "Restar",
        "fr-FR": "Soustraction",
        "ja-JP": "減算",
        "pt-BR": "Subtrair",
        "th-TH": "ลบ",
        "tr-TR": "Çıkar",
        "zh-CN": "减",
        "de-DE": "Subtract",
        "es-ES": "Subtract",
        "it-IT": "Subtract",
        "ko-KR": "Subtract",
        "pl-PL": "Subtract",
        "ru-RU": "Subtract",
        "zh-TW": "Subtract"
    },
    "__team__": {
        "args": [
            {
                "name": "team",
                "type": "TeamLiteral",
                "description": {
                    "en-US": "A Team constant."
                }
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "isLiteral": true,
        "guid": "00000000BB26",
        "return": "Team",
        "en-US": "Team",
        "es-ES": "Equipo",
        "es-MX": "Equipo",
        "fr-FR": "Équipe",
        "it-IT": "Squadra",
        "ja-JP": "チーム",
        "pl-PL": "Drużyna",
        "pt-BR": "Equipe",
        "ru-RU": "Команда",
        "th-TH": "ทีม",
        "tr-TR": "Takım",
        "zh-CN": "队伍",
        "de-DE": "Team",
        "ko-KR": "Team",
        "zh-TW": "Team"
    },
    "__valueInArray__": {
        "description": {
            "en-US": "The value found at a specific element of an array. Results in 0 if the element does not exist."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose element to acquire."
                },
                "type": "Array"
            },
            {
                "name": "index",
                "description": {
                    "en-US": "The index of the element to acquire."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B52A",
        "en-US": "Value In Array",
        "es-MX": "Valor en la matriz",
        "fr-FR": "Valeur dans le tableau",
        "ja-JP": "配列内の値",
        "pt-BR": "Valor na Matriz",
        "tr-TR": "Dizindeki Değer",
        "zh-CN": "数组中的值",
        "de-DE": "Value In Array",
        "es-ES": "Value In Array",
        "it-IT": "Value In Array",
        "ko-KR": "Value In Array",
        "pl-PL": "Value In Array",
        "ru-RU": "Value In Array",
        "th-TH": "Value In Array",
        "zh-TW": "Value In Array"
    },
    "createWorkshopSettingEnum": {
        "description": {
            "en-US": "Provides the value a choice of Custom Strings of a new option setting that will appear in the Workshop Settings card as a combo box. This value returns the index of the selected choice.",
            "de-DE": "Gibt den Wert eine Auswahl benutzerdefinierter Strings einer neuen Einstellung an die in den Workshop-Einstellungen als Auswahlbox angezeigt wird. Dieser Wert gibt den Index der gewählten Option an.",
            "es-ES": "Proporciona el valor una selección de contenido personalizado de un nuevo ajuste de opciones que aparecerá en los ajustes del Taller como un cuadro combinado. Este valor muestra el índice de la opción seleccionada.",
            "es-MX": "Proporciona el valor una selección de cadenas personalizadas de una nueva opción de configuración que aparecerá en la sección de configuración del Workshop como un cuadro combinado. Este valor arroja el índice de la opción seleccionada.",
            "fr-FR": "Fournit la valeur un choix de Chaînes personnalisées d’un nouveau paramètre d’option qui apparaîtra dans la carte Paramètres de la Forge sous la forme d’une boîte combo. Cette valeur renvoie l’index du choix sélectionné.",
            "it-IT": "Fornisce il valore a scelta tra le Custom String di una nuova impostazione che apparirà nella scheda Impostazioni del Workshop come combo box. Questo valore restituisce l'indice della scelta selezionata.",
            "ja-JP": "ワークショップ設定のカードにコンボボックスとして表示される新しいオプション設定の値（選択されたカスタムストリング）を指定する。この値は選択されたもののインデックスを返す",
            "ko-KR": "워크샵 설정 카드에서 콤보 박스로 나타날 새로운 옵션의 값을 사용자 지정 문자열 중에서 제공합니다. 이 값은 선택한 문자열의 인덱스를 되돌립니다.",
            "pl-PL": "Zapewnia wartość wybór niestandardowego ciągu nowej opcji ustawienia która pojawi się na karcie ustawień Warsztatu jako pole wyboru. Wartość zwraca indeks danego wyboru.",
            "pt-BR": "Fornece o valor uma seleção de Strings Personalizadas de uma nova configuração de opção que aparecerá no cartão “Configurações do Workshop” como caixa de combinação. Esse valor retorna o índice da seleção.",
            "ru-RU": "Добавляет значение нового варианта настроек значения [Custom Strings] который появится в «Мастерской» в виде выпадающего списка. Это значение выдает индекс выбранного варианта.",
            "th-TH": "Provides the value a choice of Custom Strings of a new option setting that will appear in the Workshop Settings card as a combo box. This value returns the index of the selected choice.",
            "tr-TR": "Atölye Ayarları kartında açılan kutu olarak görünecek yeni bir seçenek ayarı değeri Özel Dizgi seçimi sağlar. Bu değer seçilen seçeneğin indeksini döndürür.",
            "zh-CN": "提供一个新的选项设置值（用于选择自定义字符串），会显示在“地图工坊设置”卡片上作为组合框。此值会返回所选内容的索引。",
            "zh-TW": "Provides the value a choice of Custom Strings of a new option setting that will appear in the Workshop Settings card as a combo box. This value returns the index of the selected choice."
        },
        "args": [
            {
                "name": "category",
                "description": {
                    "en-US": "The name of the category in which this setting will be found. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "name",
                "description": {
                    "en-US": "The name of this setting. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "default",
                "description": {
                    "en-US": "The default value for this setting.",
                    "de-DE": "Der Standardwert für diese Einstellung.",
                    "es-ES": "Valor por defecto para este ajuste.",
                    "es-MX": "El valor predeterminado en esta configuración.",
                    "fr-FR": "La valeur par défaut de ce paramètre.",
                    "it-IT": "Il valore predefinito per questa impostazione.",
                    "ja-JP": "この設定の初期値",
                    "ko-KR": "이 설정의 기본값입니다.",
                    "pl-PL": "Domyślna wartość dla tego ustawienia.",
                    "pt-BR": "O valor padrão desta configuração.",
                    "ru-RU": "Значение этого параметра по умолчанию.",
                    "th-TH": "The default value for this setting.",
                    "tr-TR": "Bu ayarın varsayılan değeri.",
                    "zh-CN": "此设置的默认值。",
                    "zh-TW": "The default value for this setting."
                },
                "type": "UnsignedIntLiteral"
            },
            {
                "name": "options",
                "description": {
                    "en-US": "The options for this setting.",
                    "de-DE": "Die Optionen für diese Einstellung.",
                    "es-ES": "Las opciones para este ajuste.",
                    "es-MX": "Las opciones en esta configuración.",
                    "fr-FR": "Les options pour ce paramètre.",
                    "it-IT": "Le opzioni per questa impostazione.",
                    "ja-JP": "この設定のオプション",
                    "ko-KR": "이 설정의 옵션입니다.",
                    "pl-PL": "Opcje tego ustawienia.",
                    "pt-BR": "As opções desta configuração.",
                    "ru-RU": "Варианты этого параметра.",
                    "th-TH": "The options for this setting.",
                    "tr-TR": "Bu ayarın seçenekleri.",
                    "zh-CN": "此设置的选项。",
                    "zh-TW": "The options for this setting."
                },
                "type": {
                    "Array": "CustomStringLiteral"
                }
            },
            {
                "name": "sortOrder",
                "description": {
                    "en-US": "A sort order for this setting (within the category). Settings with the same sort order are ordered alphabetically."
                },
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "return": "unsigned int",
        "isConstant": true,
        "guid": "000000011CC0",
        "en-US": "Workshop Setting Combo",
        "es-MX": "Combinado de la configuración del Workshop",
        "fr-FR": "Paramètre combo de la Forge",
        "ja-JP": "ワークショップ設定コンボ",
        "pt-BR": "Caixa de Combinação de Configurações do Workshop",
        "tr-TR": "Atölye Açılan Kutu Ayarı",
        "zh-CN": "地图工坊设置组合",
        "de-DE": "Workshop Setting Combo",
        "es-ES": "Workshop Setting Combo",
        "it-IT": "Workshop Setting Combo",
        "ko-KR": "Workshop Setting Combo",
        "pl-PL": "Workshop Setting Combo",
        "ru-RU": "Workshop Setting Combo",
        "th-TH": "Workshop Setting Combo",
        "zh-TW": "Workshop Setting Combo"
    },
    "createWorkshopSettingHero": {
        "description": {
            "en-US": "Provides the value of a new hero setting that will appear in the Workshop Settings card as a hero list."
        },
        "args": [
            {
                "name": "category",
                "description": {
                    "en-US": "The name of the category in which this setting will be found. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "name",
                "description": {
                    "en-US": "The name of this setting. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "default",
                "description": {
                    "en-US": "The default value for this setting.",
                    "de-DE": "Der Standardwert für diese Einstellung.",
                    "es-ES": "Valor por defecto para este ajuste.",
                    "es-MX": "El valor predeterminado en esta configuración.",
                    "fr-FR": "La valeur par défaut de ce paramètre.",
                    "it-IT": "Il valore predefinito per questa impostazione.",
                    "ja-JP": "この設定の初期値",
                    "ko-KR": "이 설정의 기본값입니다.",
                    "pl-PL": "Domyślna wartość dla tego ustawienia.",
                    "pt-BR": "O valor padrão desta configuração.",
                    "ru-RU": "Значение этого параметра по умолчанию.",
                    "th-TH": "The default value for this setting.",
                    "tr-TR": "Bu ayarın varsayılan değeri.",
                    "zh-CN": "此设置的默认值。",
                    "zh-TW": "The default value for this setting."
                },
                "type": "HeroLiteral"
            },
            {
                "name": "sortOrder",
                "description": {
                    "en-US": "A sort order for this setting (within the category). Settings with the same sort order are ordered alphabetically."
                },
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "return": "Hero",
        "isConstant": true,
        "guid": "000000011CBC",
        "en-US": "Workshop Setting Hero",
        "es-MX": "Configuración de héroe del Workshop",
        "fr-FR": "Paramètre héros de la Forge",
        "ja-JP": "ワークショップ設定ヒーロー",
        "pt-BR": "Herói de Configuração do Workshop",
        "tr-TR": "Atölye Kahraman Ayarı",
        "zh-CN": "地图工坊设置英雄",
        "de-DE": "Workshop Setting Hero",
        "es-ES": "Workshop Setting Hero",
        "it-IT": "Workshop Setting Hero",
        "ko-KR": "Workshop Setting Hero",
        "pl-PL": "Workshop Setting Hero",
        "ru-RU": "Workshop Setting Hero",
        "th-TH": "Workshop Setting Hero",
        "zh-TW": "Workshop Setting Hero"
    },
    "createWorkshopSettingInt": {
        "description": {
            "en-US": "Provides the value of a new integer setting that will appear in the workshop settings card as a slider."
        },
        "args": [
            {
                "name": "category",
                "description": {
                    "en-US": "The name of the category in which this setting will be found. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "name",
                "description": {
                    "en-US": "The name of this setting. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "default",
                "description": {
                    "en-US": "The default value for this setting.",
                    "de-DE": "Der Standardwert für diese Einstellung.",
                    "es-ES": "Valor por defecto para este ajuste.",
                    "es-MX": "El valor predeterminado en esta configuración.",
                    "fr-FR": "La valeur par défaut de ce paramètre.",
                    "it-IT": "Il valore predefinito per questa impostazione.",
                    "ja-JP": "この設定の初期値",
                    "ko-KR": "이 설정의 기본값입니다.",
                    "pl-PL": "Domyślna wartość dla tego ustawienia.",
                    "pt-BR": "O valor padrão desta configuração.",
                    "ru-RU": "Значение этого параметра по умолчанию.",
                    "th-TH": "The default value for this setting.",
                    "tr-TR": "Bu ayarın varsayılan değeri.",
                    "zh-CN": "此设置的默认值。",
                    "zh-TW": "The default value for this setting."
                },
                "type": "IntLiteral"
            },
            {
                "name": "min",
                "description": {
                    "en-US": "The minimum value for this setting."
                },
                "type": "IntLiteral"
            },
            {
                "name": "max",
                "description": {
                    "en-US": "The maximum value for this setting."
                },
                "type": "IntLiteral"
            },
            {
                "name": "sortOrder",
                "description": {
                    "en-US": "A sort order for this setting (within the category). Settings with the same sort order are ordered alphabetically."
                },
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": "int",
        "guid": "000000011375",
        "en-US": "Workshop Setting Integer",
        "es-MX": "Número entero de la configuración del Workshop",
        "fr-FR": "Paramètre entier de la Forge",
        "ja-JP": "ワークショップの設定（整数）",
        "pt-BR": "Inteiro de Configuração do Workshop",
        "tr-TR": "Atölye Ayarları Tam Sayısı",
        "zh-CN": "地图工坊设置整数",
        "de-DE": "Workshop Setting Integer",
        "es-ES": "Workshop Setting Integer",
        "it-IT": "Workshop Setting Integer",
        "ko-KR": "Workshop Setting Integer",
        "pl-PL": "Workshop Setting Integer",
        "ru-RU": "Workshop Setting Integer",
        "th-TH": "Workshop Setting Integer",
        "zh-TW": "Workshop Setting Integer"
    },
    "createWorkshopSettingFloat": {
        "description": {
            "en-US": "Provides the value of a new real number setting that will appear in the workshop settings card as a slider."
        },
        "args": [
            {
                "name": "category",
                "description": {
                    "en-US": "The name of the category in which this setting will be found. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "name",
                "description": {
                    "en-US": "The name of this setting. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "default",
                "description": {
                    "en-US": "The default value for this setting.",
                    "de-DE": "Der Standardwert für diese Einstellung.",
                    "es-ES": "Valor por defecto para este ajuste.",
                    "es-MX": "El valor predeterminado en esta configuración.",
                    "fr-FR": "La valeur par défaut de ce paramètre.",
                    "it-IT": "Il valore predefinito per questa impostazione.",
                    "ja-JP": "この設定の初期値",
                    "ko-KR": "이 설정의 기본값입니다.",
                    "pl-PL": "Domyślna wartość dla tego ustawienia.",
                    "pt-BR": "O valor padrão desta configuração.",
                    "ru-RU": "Значение этого параметра по умолчанию.",
                    "th-TH": "The default value for this setting.",
                    "tr-TR": "Bu ayarın varsayılan değeri.",
                    "zh-CN": "此设置的默认值。",
                    "zh-TW": "The default value for this setting."
                },
                "type": "FloatLiteral"
            },
            {
                "name": "min",
                "description": {
                    "en-US": "The minimum value for this setting."
                },
                "type": "FloatLiteral"
            },
            {
                "name": "max",
                "description": {
                    "en-US": "The maximum value for this setting."
                },
                "type": "FloatLiteral"
            },
            {
                "name": "sortOrder",
                "description": {
                    "en-US": "A sort order for this setting (within the category). Settings with the same sort order are ordered alphabetically."
                },
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000001137B",
        "en-US": "Workshop Setting Real",
        "es-MX": "Configuración del Workshop real",
        "fr-FR": "Paramètre réel de la Forge",
        "ja-JP": "ワークショップの設定（実数）",
        "pt-BR": "Real de Configuração do Workshop",
        "tr-TR": "Atölye Ayarı Gerçek Sayısı",
        "zh-CN": "地图工坊设置实数",
        "de-DE": "Workshop Setting Real",
        "es-ES": "Workshop Setting Real",
        "it-IT": "Workshop Setting Real",
        "ko-KR": "Workshop Setting Real",
        "pl-PL": "Workshop Setting Real",
        "ru-RU": "Workshop Setting Real",
        "th-TH": "Workshop Setting Real",
        "zh-TW": "Workshop Setting Real"
    },
    "createWorkshopSettingBool": {
        "description": {
            "en-US": "Provides the value (true or false) of a new toggle setting that will appear in the workshop settings card as a checkbox."
        },
        "args": [
            {
                "name": "category",
                "description": {
                    "en-US": "The name of the category in which this setting will be found. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "name",
                "description": {
                    "en-US": "The name of this setting. Must be a custom string literal with 128 characters or less."
                },
                "type": "CustomStringLiteral"
            },
            {
                "name": "default",
                "description": {
                    "en-US": "The default value for this setting.",
                    "de-DE": "Der Standardwert für diese Einstellung.",
                    "es-ES": "Valor por defecto para este ajuste.",
                    "es-MX": "El valor predeterminado en esta configuración.",
                    "fr-FR": "La valeur par défaut de ce paramètre.",
                    "it-IT": "Il valore predefinito per questa impostazione.",
                    "ja-JP": "この設定の初期値",
                    "ko-KR": "이 설정의 기본값입니다.",
                    "pl-PL": "Domyślna wartość dla tego ustawienia.",
                    "pt-BR": "O valor padrão desta configuração.",
                    "ru-RU": "Значение этого параметра по умолчанию.",
                    "th-TH": "The default value for this setting.",
                    "tr-TR": "Bu ayarın varsayılan değeri.",
                    "zh-CN": "此设置的默认值。",
                    "zh-TW": "The default value for this setting."
                },
                "type": "BoolLiteral"
            },
            {
                "name": "sortOrder",
                "description": {
                    "en-US": "A sort order for this setting (within the category). Settings with the same sort order are ordered alphabetically."
                },
                "type": "IntLiteral",
                "default": 0
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "00000001136B",
        "en-US": "Workshop Setting Toggle",
        "es-MX": "Alternado de configuración del Workshop",
        "fr-FR": "Activerdésactiver le paramètre de la Forge",
        "ja-JP": "ワークショップの設定の切り替え",
        "pt-BR": "Alternar Configuração do Workshop",
        "tr-TR": "Atölye Ayarını AçKapat",
        "zh-CN": "地图工坊设置开关",
        "de-DE": "Workshop Setting Toggle",
        "es-ES": "Workshop Setting Toggle",
        "it-IT": "Workshop Setting Toggle",
        "ko-KR": "Workshop Setting Toggle",
        "pl-PL": "Workshop Setting Toggle",
        "ru-RU": "Workshop Setting Toggle",
        "th-TH": "Workshop Setting Toggle",
        "zh-TW": "Workshop Setting Toggle"
    },
    "__xComponentOf__": {
        "description": {
            "en-US": "The x component of the specified vector, usually representing a leftward amount."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The vector from which to acquire the x component."
                },
                "type": "Vector"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B26F",
        "en-US": "X Component Of",
        "es-MX": "Componente X de",
        "fr-FR": "Composante X de",
        "ja-JP": "X成分: ",
        "pt-BR": "Componente X de",
        "tr-TR": "X Bileşeni",
        "zh-CN": "X方向分量",
        "de-DE": "X Component Of",
        "es-ES": "X Component Of",
        "it-IT": "X Component Of",
        "ko-KR": "X Component Of",
        "pl-PL": "X Component Of",
        "ru-RU": "X Component Of",
        "th-TH": "X Component Of",
        "zh-TW": "X Component Of"
    },
    "__yComponentOf__": {
        "description": {
            "en-US": "The y component of the specified vector, usually representing an upward amount."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The vector from which to acquire the y component."
                },
                "type": "Vector"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B270",
        "en-US": "Y Component Of",
        "es-MX": "Componente Y de",
        "fr-FR": "Composante Y de",
        "ja-JP": "Y成分: ",
        "pt-BR": "Componente Y de",
        "tr-TR": "Y Bileşeni",
        "zh-CN": "Y方向分量",
        "de-DE": "Y Component Of",
        "es-ES": "Y Component Of",
        "it-IT": "Y Component Of",
        "ko-KR": "Y Component Of",
        "pl-PL": "Y Component Of",
        "ru-RU": "Y Component Of",
        "th-TH": "Y Component Of",
        "zh-TW": "Y Component Of"
    },
    "__zComponentOf__": {
        "description": {
            "en-US": "The z component of the specified vector, usually representing a forward amount."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The vector from which to acquire the z component."
                },
                "type": "Vector"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B272",
        "en-US": "Z Component Of",
        "es-MX": "Componente Z de",
        "fr-FR": "Composante Z de",
        "ja-JP": "Z成分: ",
        "pt-BR": "Componente Z de",
        "tr-TR": "Z Bileşeni",
        "zh-CN": "Z方向分量",
        "de-DE": "Z Component Of",
        "es-ES": "Z Component Of",
        "it-IT": "Z Component Of",
        "ko-KR": "Z Component Of",
        "pl-PL": "Z Component Of",
        "ru-RU": "Z Component Of",
        "th-TH": "Z Component Of",
        "zh-TW": "Z Component Of"
    },
    "abilityIconString": {
        "description": {
            "en-US": "Converts a Hero and Button parameter into a string that shows up as an icon up to 4 per string.",
            "de-DE": "Wandelt einen Helden- und Tastenparameter in einen String um der als Icon angezeigt wird bis zu 4 pro String.",
            "es-ES": "Convierte un parámetro de héroe y botón en una cadena que se muestra en forma de icono hasta 4 por línea.",
            "es-MX": "Convierte un parámetro de héroe y de botón en una cadena que aparece como ícono hasta 4 por cadena.",
            "fr-FR": "Convertit un paramètre de héros et un bouton en une chaîne de caractères présentée sous la forme d’une icône jusqu’à 4 par chaîne.",
            "it-IT": "Converte un parametro Eroe o Tasto in una stringa che viene mostrata come un'icona fino a 4 per stringa.",
            "ja-JP": "ヒーローとボタンのパラメーターをストリングに変換し、アイコンを表示する（1ストリングあたりアイコンは4つまで）",
            "ko-KR": "영웅과 버튼의 매개변수를 아이콘으로 표시할 문자열로 변환합니다. 문자열당 최대 4개",
            "pl-PL": "Konwertuje parametry „Hero” Bohater  i „Button” Przycisk na ciąg który pokazuje się jako symbol maksymalnie 4 na ciąg.",
            "pt-BR": "Converte um parâmetro de Herói e Botão em uma string que aparece como ícone até 4 por string.",
            "ru-RU": "Преобразовывает параметры героя и кнопки в строку содержащую значок до 4 на строку.",
            "th-TH": "Converts a Hero and Button parameter into a string that shows up as an icon up to 4 per string.",
            "tr-TR": "Kahraman ve Düğme parametresini simge olarak gösteren bir dizgiye dönüştürür dizgi başına 4'e kadar.",
            "zh-CN": "将一个英雄和按键的参数转化为图标在字符串中显示（每个字符串中最多4个）。",
            "zh-TW": "Converts a Hero and Button parameter into a string that shows up as an icon up to 4 per string."
        },
        "args": [
            {
                "name": "hero",
                "description": {
                    "en-US": "The hero for the ability that will be converted to an icon.",
                    "de-DE": "Der Held für die Fähigkeit die in ein Icon umgewandelt wird.",
                    "es-ES": "Héroe de la habilidad que se convertirá en un icono.",
                    "es-MX": "El héroe de la habilidad que se convertirá en un ícono.",
                    "fr-FR": "Le héros pour la capacité qui sera convertie en icône.",
                    "it-IT": "L'eroe per l'abilità che sarà convertito in icona.",
                    "ja-JP": "アイコンに変換されるアビリティのヒーロー",
                    "ko-KR": "아이콘으로 변환될 기술의 영웅입니다.",
                    "pl-PL": "Bohater dla danej zdolności który zostanie przekonwertowany na symbol.",
                    "pt-BR": "O herói da habilidade que será convertido em ícone.",
                    "ru-RU": "Герой связанный со способностью которая будет преобразована в значок.",
                    "th-TH": "ฮีโร่สําหรับความสามารถที่จะถูกแปลงเป็นไอคอน",
                    "tr-TR": "Simgeye dönüştürülecek kabiliyetin kahramanı.",
                    "zh-CN": "将这个英雄的技能转化为图标。",
                    "zh-TW": "The hero for the ability that will be converted to an icon."
                },
                "type": "Hero"
            },
            {
                "name": "button",
                "description": {
                    "en-US": "The button for the ability that will be converted to an icon."
                },
                "type": "Button"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "000000010B52",
        "en-US": "Ability Icon String",
        "es-MX": "Cadena de ícono de habilidad",
        "fr-FR": "Chaîne d’icône de la capacité",
        "ja-JP": "アビリティアイコンストリング",
        "pt-BR": "String de Ícone de Habilidade",
        "tr-TR": "Kabiliyet Simgesi Dizgisi",
        "zh-CN": "技能图标字符串",
        "de-DE": "Ability Icon String",
        "es-ES": "Ability Icon String",
        "it-IT": "Ability Icon String",
        "ko-KR": "Ability Icon String",
        "pl-PL": "Ability Icon String",
        "ru-RU": "Ability Icon String",
        "th-TH": "Ability Icon String",
        "zh-TW": "Ability Icon String"
    },
    "abs": {
        "description": {
            "en-US": "The absolute value of the specified value."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The real number value whose absolute value will be computed."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C358",
        "en-US": "Absolute Value",
        "es-MX": "Valor absoluto",
        "fr-FR": "Valeur absolue",
        "ja-JP": "絶対値",
        "pt-BR": "Valor Absoluto",
        "th-TH": "ค่าสัมบูรณ์",
        "tr-TR": "Mutlak Değer",
        "zh-CN": "绝对值",
        "de-DE": "Absolute Value",
        "es-ES": "Absolute Value",
        "it-IT": "Absolute Value",
        "ko-KR": "Absolute Value",
        "pl-PL": "Absolute Value",
        "ru-RU": "Absolute Value",
        "zh-TW": "Absolute Value"
    },
    "acos": {
        "description": {
            "en-US": "Arccosine in radians of the specified value."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "th-TH": "Input value for the function.",
                    "tr-TR": "İşlevin girdi değeri.",
                    "zh-CN": "为函数输入值。",
                    "zh-TW": "Input value for the function."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C807",
        "en-US": "Arccosine In Radians",
        "es-MX": "Arcocoseno en radianes",
        "fr-FR": "Arc cosinus en radians",
        "ja-JP": "ラジアンのアークコサイン",
        "pt-BR": "Arco Cosseno em Radianos",
        "tr-TR": "Radyan Cinsinden Arkkosinüs",
        "zh-CN": "以弧度为单位的反余弦值",
        "de-DE": "Arccosine In Radians",
        "es-ES": "Arccosine In Radians",
        "it-IT": "Arccosine In Radians",
        "ko-KR": "Arccosine In Radians",
        "pl-PL": "Arccosine In Radians",
        "ru-RU": "Arccosine In Radians",
        "th-TH": "Arccosine In Radians",
        "zh-TW": "Arccosine In Radians"
    },
    "acosDeg": {
        "description": {
            "en-US": "Arccosine in degrees of the specified value."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "th-TH": "Input value for the function.",
                    "tr-TR": "İşlevin girdi değeri.",
                    "zh-CN": "为函数输入值。",
                    "zh-TW": "Input value for the function."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C809",
        "en-US": "Arccosine In Degrees",
        "es-MX": "Arcocoseno en grados",
        "fr-FR": "Arc cosinus en degrés",
        "ja-JP": "度単位のアークコサイン",
        "pt-BR": "Arco Cosseno em Graus",
        "tr-TR": "Derece Cinsinden Arkkosinüs",
        "zh-CN": "以角度为单位的反余弦值",
        "de-DE": "Arccosine In Degrees",
        "es-ES": "Arccosine In Degrees",
        "it-IT": "Arccosine In Degrees",
        "ko-KR": "Arccosine In Degrees",
        "pl-PL": "Arccosine In Degrees",
        "ru-RU": "Arccosine In Degrees",
        "th-TH": "Arccosine In Degrees",
        "zh-TW": "Arccosine In Degrees"
    },
    "angleBetweenVectors": {
        "description": {
            "en-US": "The angle in degrees between two directional vectors no normalization required.",
            "de-DE": "Der Winkel in Grad zwischen zwei Richtungsvektoren Normierung nicht erforderlich.",
            "es-ES": "El ángulo en grados entre dos vectores direccionales no se requiere normalización.",
            "es-MX": "El ángulo en grados entre dos vectores direccionales no se requiere normalización.",
            "fr-FR": "Angle en degrés entre deux vecteurs directionnels pas de normalisation requise.",
            "it-IT": "L'angolo in gradi tra due vettori direzionali nessuna normalizzazione richiesta.",
            "ja-JP": "2つの方向ベクトル間の度単位の角度（正規化不要）",
            "ko-KR": "두 방향 벡터 정규화 불필요 사이의 각입니다. 단위: 도",
            "pl-PL": "Mierzony w stopniach kąt tworzony przez dwa wektory kierunkowe nie wymaga normalizowania.",
            "pt-BR": "O ângulo em graus entre dois vetores direcionais normalização desnecessária.",
            "ru-RU": "Угол в градусах между двумя векторами направления нормализация не требуется.",
            "th-TH": "The angle in degrees between two directional vectors no normalization required.",
            "tr-TR": "Derece cinsinden iki yönlü vektör arasındaki açı düzeltmeye gerek yok.",
            "zh-CN": "两方向性矢量间的夹角（不需要归一化）",
            "zh-TW": "The angle in degrees between two directional vectors no normalization required."
        },
        "args": [
            {
                "name": "vector",
                "description": {
                    "en-US": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                    "de-DE": "Einer der beiden Richtungsvektoren zwischen denen der Winkel in Grad gemessen werden soll. Dieser Vektor muss nicht vorher normiert werden.",
                    "es-ES": "Uno de los dos vectores direccionales entre los que medir el ángulo en grados. Este vector no necesita una normalización previa.",
                    "es-MX": "Uno de dos vectores direccionales entre los cuales se medirá el ángulo en grados. Este vector no necesita estar prenormalizado.",
                    "fr-FR": "L’un des deux vecteurs directionnels entre lesquels l’angle est calculé en degrés. Ce vecteur n’a pas besoin d’être normalisé au préalable.",
                    "it-IT": "Uno dei due vettori direzionali tra i quali misurare l'angolo in gradi. Questo vettore non richiede di essere pre-normalizzato.",
                    "ja-JP": "度単位の角度を計算するための2つの方向ベクトルの1つこのベクトルのあらかじめの正規化は不要",
                    "ko-KR": "사이의 각단위: 도을 측정하기 위한 두 방향 벡터 중 하나입니다. 이 벡터를 미리 정규화할 필요는 없습니다.",
                    "pl-PL": "Jeden lub dwa wektory kierunkowe tworzące kąt mierzony w stopniach. Ten wektor nie musi być wstępnie znormalizowany.",
                    "pt-BR": "Um dos dois vetores direcionais entre os quais o ângulo em graus será medido. Este vetor não precisa ser normalizado previamente.",
                    "ru-RU": "Один из двух векторов направления между которыми нужно измерить угол в градусах. Нормализовать вектор не требуется.",
                    "th-TH": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                    "tr-TR": "Aradaki açının derece cinsinden ölçüldüğü iki yönlü vektörden biri. Bu vektörün önceden düzeltilmesi gerekmez.",
                    "zh-CN": "需以角度为单位测量夹角的两个方向性矢量之一。该矢量不需要预先归一化。",
                    "zh-TW": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized."
                },
                "type": "Direction"
            },
            {
                "name": "vector",
                "description": {
                    "en-US": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                    "de-DE": "Einer der beiden Richtungsvektoren zwischen denen der Winkel in Grad gemessen werden soll. Dieser Vektor muss nicht vorher normiert werden.",
                    "es-ES": "Uno de los dos vectores direccionales entre los que medir el ángulo en grados. Este vector no necesita una normalización previa.",
                    "es-MX": "Uno de dos vectores direccionales entre los cuales se medirá el ángulo en grados. Este vector no necesita estar prenormalizado.",
                    "fr-FR": "L’un des deux vecteurs directionnels entre lesquels l’angle est calculé en degrés. Ce vecteur n’a pas besoin d’être normalisé au préalable.",
                    "it-IT": "Uno dei due vettori direzionali tra i quali misurare l'angolo in gradi. Questo vettore non richiede di essere pre-normalizzato.",
                    "ja-JP": "度単位の角度を計算するための2つの方向ベクトルの1つこのベクトルのあらかじめの正規化は不要",
                    "ko-KR": "사이의 각단위: 도을 측정하기 위한 두 방향 벡터 중 하나입니다. 이 벡터를 미리 정규화할 필요는 없습니다.",
                    "pl-PL": "Jeden lub dwa wektory kierunkowe tworzące kąt mierzony w stopniach. Ten wektor nie musi być wstępnie znormalizowany.",
                    "pt-BR": "Um dos dois vetores direcionais entre os quais o ângulo em graus será medido. Este vetor não precisa ser normalizado previamente.",
                    "ru-RU": "Один из двух векторов направления между которыми нужно измерить угол в градусах. Нормализовать вектор не требуется.",
                    "th-TH": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized.",
                    "tr-TR": "Aradaki açının derece cinsinden ölçüldüğü iki yönlü vektörden biri. Bu vektörün önceden düzeltilmesi gerekmez.",
                    "zh-CN": "需以角度为单位测量夹角的两个方向性矢量之一。该矢量不需要预先归一化。",
                    "zh-TW": "One of two directional vectors between which to measure the angle in degrees. This vector does not need to be pre-normalized."
                },
                "type": "Direction"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C813",
        "en-US": "Angle Between Vectors",
        "es-MX": "Ángulo entre vectores",
        "fr-FR": "Angle entre deux vecteurs",
        "ja-JP": "ベクトル間角度",
        "pt-BR": "Ângulo entre Vetores",
        "tr-TR": "Vektörler Arasındaki Açı",
        "zh-CN": "矢量间夹角",
        "de-DE": "Angle Between Vectors",
        "es-ES": "Angle Between Vectors",
        "it-IT": "Angle Between Vectors",
        "ko-KR": "Angle Between Vectors",
        "pl-PL": "Angle Between Vectors",
        "ru-RU": "Angle Between Vectors",
        "th-TH": "Angle Between Vectors",
        "zh-TW": "Angle Between Vectors"
    },
    "angleDifference": {
        "description": {
            "en-US": "The difference in degrees between two angles. After the angles are wrapped to be within +- 180 of each other the result is positive if the second angle is greater than the first angle. Otherwise the result is zero or negative.",
            "de-DE": "Die Differenz zwischen zwei Winkeln in Grad. Nachdem die Winkel so übertragen wurden dass sie innerhalb von +-180 zueinander liegen ist das Ergebnis positiv wenn der zweite Winkel größer ist als der erste Winkel. Ansonsten ist das Ergebnis 0 oder negativ.",
            "es-ES": "Diferencia en grados entre dos ángulos. Después de simplificar los ángulos hasta que estén a +- 180 grados de distancia el resultado es positivo si el segundo ángulo es mayor que el primero; de lo contrario el resultado es cero o negativo.",
            "es-MX": "La diferencia en grados entre dos ángulos. Después de que los ángulos se simplifican para encontrarse a + o - 180 grados entre sí el resultado es positivo si el segundo ángulo es mayor al primer ángulo. Caso contrario el resultado será 0 o negativo.",
            "fr-FR": "La différence en degrés entre deux angles. Une fois les angles se trouvant dans une fourchette de +- 180° l’un par rapport à l’autre le résultat est positif si le second angle est supérieur au premier. Sinon le résultat est nul ou négatif.",
            "it-IT": "La differenza in gradi tra i due angoli. Dopo la normalizzazione degli angoli entro il limite di +- 180 tra un angolo e l'altro il risultato è positivo se il secondo angolo è più ampio del primo. Altrimenti il risultato è zero o negativo.",
            "ja-JP": "2つの角度の差。角度が互いの+-180度以内になるように調整した後、2番目の角度が1番目の角度より大きければ、結果は正の値になる。それ以外の場合、結果は0またはマイナスになる",
            "ko-KR": "두 각을 비교한 각도 차이단위: 도입니다. 두 각을 서로 +- 180 이내에서 펼쳐서 두 번째 각이 첫 번째 각보다 크다면 결과각은 양수입니다. 이외의 경우 0이나 음수가 될 수 있습니다.",
            "pl-PL": "Różnica w stopniach między dwoma kątami. Po tym jak kąty zostaną zawinięte w granicach +- 180 stopni od siebie to wynik jest dodatni jeżeli drugi kąt jest większy od pierwszego. Inaczej wynik jest zerowy lub ujemny.",
            "pt-BR": "A diferença em graus entre dois ângulos. Após os ângulos serem envolvidos dentro de +- 180 um do outro o resultado será positivo se o segundo ângulo for maior do que o primeiro. Caso contrário o resultado será zero ou negativo.",
            "ru-RU": "Разность между двумя углами в градусах. После того как углы приведены к различию в пределах +- 180 градусов друг относительно друга результат будет положительным если второй угол больше первого иначе результат примет нулевое или отрицательное значение.",
            "th-TH": "The difference in degrees between two angles. After the angles are wrapped to be within +- 180 of each other the result is positive if the second angle is greater than the first angle. Otherwise the result is zero or negative.",
            "tr-TR": "İki açı arasındaki derece farkı. Açılar birbirine kıyasla +- 180 derece arasında olduğunda ikinci açı birinci açıdan yüksekse sonuç pozitiftir. Değilse sonuç sıfır veya negatiftir.",
            "zh-CN": "两个角度之间的度数差。将两个角度折算为彼此+-180度范围内之后进行计算，如果第二个角度比第一个大则结果为正数。否则结果为负数。",
            "zh-TW": "The difference in degrees between two angles. After the angles are wrapped to be within +- 180 of each other the result is positive if the second angle is greater than the first angle. Otherwise the result is zero or negative."
        },
        "args": [
            {
                "name": "angle",
                "description": {
                    "en-US": "One of the two angles between which to measure the resulting angle.",
                    "de-DE": "Einer der beiden Winkel zwischen denen der resultierende Winkel gemessen werden soll.",
                    "es-ES": "Uno de los dos ángulos entre los que se mide el ángulo resultante.",
                    "es-MX": "Uno de los dos ángulos entre los cuales se medirá el ángulo resultante.",
                    "fr-FR": "Un des deux angles entre lesquels mesurer l’angle résultant.",
                    "it-IT": "Uno dei due angoli tra i quali misurare l'angolo risultante.",
                    "ja-JP": "結果として生じる角度を計算するための2つの角度の1つ",
                    "ko-KR": "결과각을 도출하기 위한 두 각 중 하나입니다.",
                    "pl-PL": "Jeden z dwóch kątów między którymi mierzy się kąt wynikowy.",
                    "pt-BR": "Um dos dois ângulos entre os quais o ângulo resultante será medido.",
                    "ru-RU": "Один из двух углов между которыми измеряется результирующий угол.",
                    "th-TH": "One of the two angles between which to measure the resulting angle.",
                    "tr-TR": "Son açıyı ölçmek için kullanılan iki açıdan biri.",
                    "zh-CN": "用于计算结果角度的两个角度之一。",
                    "zh-TW": "One of the two angles between which to measure the resulting angle."
                },
                "type": "float"
            },
            {
                "name": "angle",
                "description": {
                    "en-US": "One of the two angles between which to measure the resulting angle.",
                    "de-DE": "Einer der beiden Winkel zwischen denen der resultierende Winkel gemessen werden soll.",
                    "es-ES": "Uno de los dos ángulos entre los que se mide el ángulo resultante.",
                    "es-MX": "Uno de los dos ángulos entre los cuales se medirá el ángulo resultante.",
                    "fr-FR": "Un des deux angles entre lesquels mesurer l’angle résultant.",
                    "it-IT": "Uno dei due angoli tra i quali misurare l'angolo risultante.",
                    "ja-JP": "結果として生じる角度を計算するための2つの角度の1つ",
                    "ko-KR": "결과각을 도출하기 위한 두 각 중 하나입니다.",
                    "pl-PL": "Jeden z dwóch kątów między którymi mierzy się kąt wynikowy.",
                    "pt-BR": "Um dos dois ângulos entre os quais o ângulo resultante será medido.",
                    "ru-RU": "Один из двух углов между которыми измеряется результирующий угол.",
                    "th-TH": "One of the two angles between which to measure the resulting angle.",
                    "tr-TR": "Son açıyı ölçmek için kullanılan iki açıdan biri.",
                    "zh-CN": "用于计算结果角度的两个角度之一。",
                    "zh-TW": "One of the two angles between which to measure the resulting angle."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000B282",
        "en-US": "Angle Difference",
        "es-MX": "Diferencia de ángulo",
        "fr-FR": "Différence entre angles",
        "ja-JP": "角度差",
        "pt-BR": "Diferença de Ângulo",
        "tr-TR": "Açı Farkı",
        "zh-CN": "角度差",
        "de-DE": "Angle Difference",
        "es-ES": "Angle Difference",
        "it-IT": "Angle Difference",
        "ko-KR": "Angle Difference",
        "pl-PL": "Angle Difference",
        "ru-RU": "Angle Difference",
        "th-TH": "Angle Difference",
        "zh-TW": "Angle Difference"
    },
    "directionFromAngles": {
        "description": {
            "en-US": "The unit-length direction vector corresponding to the specified angles."
        },
        "args": [
            {
                "name": "horizontalAngle",
                "description": {
                    "en-US": "The horizontal angle in degrees used to construct the resulting vector."
                },
                "type": "float"
            },
            {
                "name": "verticalAngle",
                "description": {
                    "en-US": "The vertical angle in degrees used to construct the resulting vector."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000BB2D",
        "en-US": "Direction From Angles",
        "es-MX": "Dirección desde los ángulos",
        "fr-FR": "Direction depuis des angles",
        "ja-JP": "角度による方向",
        "pt-BR": "Direção a partir dos Ângulos",
        "tr-TR": "Açıların Yönü",
        "zh-CN": "与此角度的相对方向",
        "de-DE": "Direction From Angles",
        "es-ES": "Direction From Angles",
        "it-IT": "Direction From Angles",
        "ko-KR": "Direction From Angles",
        "pl-PL": "Direction From Angles",
        "ru-RU": "Direction From Angles",
        "th-TH": "Direction From Angles",
        "zh-TW": "Direction From Angles"
    },
    "asin": {
        "description": {
            "en-US": "Arcsine in radians of the specified value."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "th-TH": "Input value for the function.",
                    "tr-TR": "İşlevin girdi değeri.",
                    "zh-CN": "为函数输入值。",
                    "zh-TW": "Input value for the function."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C803",
        "en-US": "Arcsine In Radians",
        "es-MX": "Arcoseno en radianes",
        "fr-FR": "Arc sinus en radians",
        "ja-JP": "ラジアンのアークサイン",
        "pt-BR": "Arco Seno em Radianos",
        "tr-TR": "Radyan Cinsinden Arksinüs",
        "zh-CN": "以弧度为单位的反正弦值",
        "de-DE": "Arcsine In Radians",
        "es-ES": "Arcsine In Radians",
        "it-IT": "Arcsine In Radians",
        "ko-KR": "Arcsine In Radians",
        "pl-PL": "Arcsine In Radians",
        "ru-RU": "Arcsine In Radians",
        "th-TH": "Arcsine In Radians",
        "zh-TW": "Arcsine In Radians"
    },
    "asinDeg": {
        "description": {
            "en-US": "Arcsine in degrees of the specified value."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "Input value for the function.",
                    "de-DE": "Eingabe des Werts der Funktion.",
                    "es-ES": "Valor introducido para la función.",
                    "es-MX": "Valor de entrada para la función.",
                    "fr-FR": "Valeur d'entrée de la fonction.",
                    "it-IT": "Input valore per la funzione.",
                    "ja-JP": "値の入力が必要です",
                    "ko-KR": "함수의 입력값입니다.",
                    "pl-PL": "Wartość danych wejściowych dla funkcji.",
                    "pt-BR": "Valor de entrada da função.",
                    "ru-RU": "Аргумент функции.",
                    "th-TH": "Input value for the function.",
                    "tr-TR": "İşlevin girdi değeri.",
                    "zh-CN": "为函数输入值。",
                    "zh-TW": "Input value for the function."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C805",
        "en-US": "Arcsine In Degrees",
        "es-MX": "Arcoseno en grados",
        "fr-FR": "Arc sinus en degrés",
        "ja-JP": "度単位のアークサイン",
        "pt-BR": "Arco Seno em Graus",
        "tr-TR": "Derece Cinsinden Arksinüs",
        "zh-CN": "以角度为单位的反正弦值",
        "de-DE": "Arcsine In Degrees",
        "es-ES": "Arcsine In Degrees",
        "it-IT": "Arcsine In Degrees",
        "ko-KR": "Arcsine In Degrees",
        "pl-PL": "Arcsine In Degrees",
        "ru-RU": "Arcsine In Degrees",
        "th-TH": "Arcsine In Degrees",
        "zh-TW": "Arcsine In Degrees"
    },
    "atan2": {
        "description": {
            "en-US": "Arctangent in radians of the specified numerator and denominator (often referred to as atan2)."
        },
        "args": [
            {
                "name": "numerator",
                "description": {
                    "en-US": "Numerator input for the function.",
                    "de-DE": "Eingabe des Dividenden der Funktion.",
                    "es-ES": "Numerador introducido para la función.",
                    "es-MX": "Entrada de numerador para la función.",
                    "fr-FR": "Numérateur de la fonction.",
                    "it-IT": "Input numeratore per la funzione.",
                    "ja-JP": "分子の入力が必要です",
                    "ko-KR": "함수의 분자 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe licznika dla funkcji.",
                    "pt-BR": "Entrada com o numerador da função.",
                    "ru-RU": "Аргумент числителя функции.",
                    "th-TH": "Numerator input for the function.",
                    "tr-TR": "İşlevin pay girdisi.",
                    "zh-CN": "为函数输入分子。",
                    "zh-TW": "Numerator input for the function."
                },
                "type": "float"
            },
            {
                "name": "denominator",
                "description": {
                    "en-US": "Denominator input for the function.",
                    "de-DE": "Eingabe des Divisors der Funktion.",
                    "es-ES": "Denominador introducido para la función.",
                    "es-MX": "Entrada de denominador para la función.",
                    "fr-FR": "Dénominateur de la fonction.",
                    "it-IT": "Input denominatore per la funzione.",
                    "ja-JP": "分母の入力が必要です",
                    "ko-KR": "함수의 분모 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe mianownika dla funkcji.",
                    "pt-BR": "Entrada com o denominador da função.",
                    "ru-RU": "Аргумент знаменателя функции.",
                    "th-TH": "Denominator input for the function.",
                    "tr-TR": "İşlevin payda girdisi.",
                    "zh-CN": "为函数输入分母。",
                    "zh-TW": "Denominator input for the function."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7FF",
        "en-US": "Arctangent In Radians",
        "es-MX": "Arcotangente en radianes",
        "fr-FR": "Arc tangente en radians",
        "ja-JP": "ラジアンのアークタンジェント",
        "pt-BR": "Arco Tangente em Radianos",
        "tr-TR": "Radyan Cinsinden Arktanjant",
        "zh-CN": "以弧度为单位的反正切值",
        "de-DE": "Arctangent In Radians",
        "es-ES": "Arctangent In Radians",
        "it-IT": "Arctangent In Radians",
        "ko-KR": "Arctangent In Radians",
        "pl-PL": "Arctangent In Radians",
        "ru-RU": "Arctangent In Radians",
        "th-TH": "Arctangent In Radians",
        "zh-TW": "Arctangent In Radians"
    },
    "atan2Deg": {
        "description": {
            "en-US": "Arctangent in degrees of the specified numerator and denominator (often referred to as atan2)."
        },
        "args": [
            {
                "name": "numerator",
                "description": {
                    "en-US": "Numerator input for the function.",
                    "de-DE": "Eingabe des Dividenden der Funktion.",
                    "es-ES": "Numerador introducido para la función.",
                    "es-MX": "Entrada de numerador para la función.",
                    "fr-FR": "Numérateur de la fonction.",
                    "it-IT": "Input numeratore per la funzione.",
                    "ja-JP": "分子の入力が必要です",
                    "ko-KR": "함수의 분자 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe licznika dla funkcji.",
                    "pt-BR": "Entrada com o numerador da função.",
                    "ru-RU": "Аргумент числителя функции.",
                    "th-TH": "Numerator input for the function.",
                    "tr-TR": "İşlevin pay girdisi.",
                    "zh-CN": "为函数输入分子。",
                    "zh-TW": "Numerator input for the function."
                },
                "type": "float"
            },
            {
                "name": "denominator",
                "description": {
                    "en-US": "Denominator input for the function.",
                    "de-DE": "Eingabe des Divisors der Funktion.",
                    "es-ES": "Denominador introducido para la función.",
                    "es-MX": "Entrada de denominador para la función.",
                    "fr-FR": "Dénominateur de la fonction.",
                    "it-IT": "Input denominatore per la funzione.",
                    "ja-JP": "分母の入力が必要です",
                    "ko-KR": "함수의 분모 입력 정보입니다.",
                    "pl-PL": "Dane wejściowe mianownika dla funkcji.",
                    "pt-BR": "Entrada com o denominador da função.",
                    "ru-RU": "Аргумент знаменателя функции.",
                    "th-TH": "Denominator input for the function.",
                    "tr-TR": "İşlevin payda girdisi.",
                    "zh-CN": "为函数输入分母。",
                    "zh-TW": "Denominator input for the function."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C801",
        "en-US": "Arctangent In Degrees",
        "es-MX": "Arcotangente en grados",
        "fr-FR": "Arc tangente en degrés",
        "ja-JP": "度単位のアークタンジェント",
        "pt-BR": "Arco Tangente em Graus",
        "tr-TR": "Derece Cinsinden Arktanjant",
        "zh-CN": "以角度为单位的反正切值",
        "de-DE": "Arctangent In Degrees",
        "es-ES": "Arctangent In Degrees",
        "it-IT": "Arctangent In Degrees",
        "ko-KR": "Arctangent In Degrees",
        "pl-PL": "Arctangent In Degrees",
        "ru-RU": "Arctangent In Degrees",
        "th-TH": "Arctangent In Degrees",
        "zh-TW": "Arctangent In Degrees"
    },
    "attacker": {
        "guid": "00000000B32F",
        "description": {
            "en-US": "The player that dealt the damage for the event currently being processed by this rule. May be the same as the victim or the event player."
        },
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "en-US": "Attacker",
        "es-MX": "Atacante",
        "fr-FR": "Attaquant",
        "ja-JP": "攻撃者",
        "pt-BR": "Atacante",
        "tr-TR": "Saldırgan",
        "zh-CN": "攻击方",
        "de-DE": "Attacker",
        "es-ES": "Attacker",
        "it-IT": "Attacker",
        "ko-KR": "Attacker",
        "pl-PL": "Attacker",
        "ru-RU": "Attacker",
        "th-TH": "Attacker",
        "zh-TW": "Attacker"
    },
    "inputBindingString": {
        "description": {
            "en-US": "Converts a button parameter into a string that shows up based on the player's input bindings. This value cannot be stored in variables.\n\nNote: the `buttonToString()` macro performs a much nicer-looking conversion."
        },
        "args": [
            {
                "name": "button",
                "description": {
                    "en-US": "The button for the input binding that will be converted to a string."
                },
                "type": "Button"
            }
        ],
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "0000000111B7",
        "en-US": "Input Binding String",
        "es-MX": "Cadena de teclas de atajo",
        "fr-FR": "Chaîne de liaison d’entrée",
        "ja-JP": "入力割り当ての文字列",
        "pt-BR": "String de Mapeamento de Entrada",
        "th-TH": "สตริงการผูกอินพุต",
        "tr-TR": "Girdi Ataması Dizgisi",
        "zh-CN": "输入绑定字符串",
        "de-DE": "Input Binding String",
        "es-ES": "Input Binding String",
        "it-IT": "Input Binding String",
        "ko-KR": "Input Binding String",
        "pl-PL": "Input Binding String",
        "ru-RU": "Input Binding String",
        "zh-TW": "Input Binding String"
    },
    "cos": {
        "description": {
            "en-US": "Cosine of the specified angle in radians."
        },
        "args": [
            {
                "name": "angle",
                "description": {
                    "en-US": "Angle in radians.",
                    "de-DE": "Winkel in Radiant.",
                    "es-ES": "Ángulo en radianes.",
                    "es-MX": "Ángulo en radianes.",
                    "fr-FR": "Angle en radians.",
                    "it-IT": "L'Angolo in radianti.",
                    "ja-JP": "ラジアンの角度",
                    "ko-KR": "각단위: Rad입니다.",
                    "pl-PL": "Kąt w radianach.",
                    "pt-BR": "Ângulo em radianos.",
                    "ru-RU": "Угол в радианах.",
                    "th-TH": "Angle in radians.",
                    "tr-TR": "Radyan cinsinden açı.",
                    "zh-CN": "角度，以弧度为单位。",
                    "zh-TW": "Angle in radians."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C342",
        "en-US": "Cosine From Radians",
        "es-MX": "Coseno en radianes",
        "fr-FR": "Cosinus en radians",
        "ja-JP": "ラジアンのコサイン",
        "pt-BR": "Cosseno de Radianos",
        "tr-TR": "Radyan Cinsinden Kosinüs",
        "zh-CN": "弧度的余弦值",
        "de-DE": "Cosine From Radians",
        "es-ES": "Cosine From Radians",
        "it-IT": "Cosine From Radians",
        "ko-KR": "Cosine From Radians",
        "pl-PL": "Cosine From Radians",
        "ru-RU": "Cosine From Radians",
        "th-TH": "Cosine From Radians",
        "zh-TW": "Cosine From Radians"
    },
    "cosDeg": {
        "description": {
            "en-US": "Cosine of the specified angle in degrees."
        },
        "args": [
            {
                "name": "angle",
                "description": {
                    "en-US": "Angle in degrees.",
                    "de-DE": "Winkel in Grad.",
                    "es-ES": "Ángulo en grados.",
                    "es-MX": "Ángulo en grados.",
                    "fr-FR": "Angle en degrés.",
                    "it-IT": "L'Angolo in gradi.",
                    "ja-JP": "度単位の角度",
                    "ko-KR": "각단위: 도입니다.",
                    "pl-PL": "Kąt w stopniach.",
                    "pt-BR": "Ângulo em graus.",
                    "ru-RU": "Угол в градусах.",
                    "th-TH": "Angle in degrees.",
                    "tr-TR": "Derece cinsinden açı.",
                    "zh-CN": "角度，以角度为单位。",
                    "zh-TW": "Angle in degrees."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C33E",
        "en-US": "Cosine From Degrees",
        "es-MX": "Coseno en grados",
        "fr-FR": "Cosinus en degrés",
        "ja-JP": "度のコサイン",
        "pt-BR": "Cosseno de Graus",
        "th-TH": "โคไซน์จากองศา",
        "tr-TR": "Derece Cinsinden Kosinüs",
        "zh-CN": "角度的余弦值",
        "de-DE": "Cosine From Degrees",
        "es-ES": "Cosine From Degrees",
        "it-IT": "Cosine From Degrees",
        "ko-KR": "Cosine From Degrees",
        "pl-PL": "Cosine From Degrees",
        "ru-RU": "Cosine From Degrees",
        "zh-TW": "Cosine From Degrees"
    },
    "crossProduct": {
        "description": {
            "en-US": "The cross product of the specified values. (Left cross up equals forward.)"
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand-side vector operand of the cross product."
                },
                "type": "Vector"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand-side vector operand of the cross product."
                },
                "type": "Vector"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000C35D",
        "en-US": "Cross Product",
        "es-MX": "Producto vectorial",
        "fr-FR": "Produit croisé",
        "ja-JP": "クロス積",
        "pt-BR": "Produto Vetorial",
        "th-TH": "ผลคูณไขว้",
        "tr-TR": "Çapraz Çarpım",
        "zh-CN": "矢量积",
        "de-DE": "Cross Product",
        "es-ES": "Cross Product",
        "it-IT": "Cross Product",
        "ko-KR": "Cross Product",
        "pl-PL": "Cross Product",
        "ru-RU": "Cross Product",
        "zh-TW": "Cross Product"
    },
    "directionTowards": {
        "description": {
            "en-US": "The unit-length direction vector from one position to another."
        },
        "args": [
            {
                "name": "startPos",
                "description": {
                    "en-US": "The position from which the resulting direction vector will point."
                },
                "type": "Position"
            },
            {
                "name": "endPos",
                "description": {
                    "en-US": "The position to which the resulting direction vector will point."
                },
                "type": "Position"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Direction",
        "guid": "00000000B1EA",
        "en-US": "Direction Towards",
        "es-MX": "Dirección hacia",
        "fr-FR": "Direction",
        "ja-JP": "指す方向: ",
        "pt-BR": "Direção Rumo a",
        "tr-TR": "Hareket Yönü",
        "zh-CN": "方向",
        "de-DE": "Direction Towards",
        "es-ES": "Direction Towards",
        "it-IT": "Direction Towards",
        "ko-KR": "Direction Towards",
        "pl-PL": "Direction Towards",
        "ru-RU": "Direction Towards",
        "th-TH": "Direction Towards",
        "zh-TW": "Direction Towards"
    },
    "distance": {
        "description": {
            "en-US": "The distance between two positions in meters.",
            "de-DE": "Die Distanz zwischen zwei Positionen in Metern.",
            "es-ES": "Distancia entre dos posiciones en metros.",
            "es-MX": "La distancia entre dos posiciones expresada en metros.",
            "fr-FR": "La distance entre deux positions exprimée en mètres.",
            "it-IT": "La distanza tra due posizioni in metri.",
            "ja-JP": "2つの位置の距離（メートル）",
            "ko-KR": "두 위치 사이의 거리미터입니다.",
            "pl-PL": "Odległość w metrach między dwoma pozycjami.",
            "pt-BR": "A distância entre duas posições em metros.",
            "ru-RU": "Расстояние между двумя точками в метрах.",
            "th-TH": "The distance between two positions in meters.",
            "tr-TR": "Metre cinsinden iki konum arasındaki mesafe.",
            "zh-CN": "两个位置之间的距离，单位为米。",
            "zh-TW": "The distance between two positions in meters."
        },
        "args": [
            {
                "name": "startPos",
                "description": {
                    "en-US": "One of the two positions used in the distance measurement.",
                    "de-DE": "Eine der zwei Positionen die für die Distanzmessung verwendet werden.",
                    "es-ES": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "es-MX": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "fr-FR": "Une des deux positions servant à mesurer la distance.",
                    "it-IT": "Una delle due posizioni usate nella misurazione della distanza.",
                    "ja-JP": "距離を計測するのに使用された2つの位置のうちの1つ",
                    "ko-KR": "거리 측정에 사용되는 두 위치 중 하나입니다.",
                    "pl-PL": "Jedna z dwóch pozycji służących do mierzenia odległości.",
                    "pt-BR": "Uma das duas posições usadas na medida de distância.",
                    "ru-RU": "Одна из двух точек используемых для измерения расстояния.",
                    "th-TH": "One of the two positions used in the distance measurement.",
                    "tr-TR": "Mesafe ölçümünde kullanılan iki konumdan biri.",
                    "zh-CN": "用于测量距离的两个位置之一。",
                    "zh-TW": "One of the two positions used in the distance measurement."
                },
                "type": "Position"
            },
            {
                "name": "endPos",
                "description": {
                    "en-US": "One of the two positions used in the distance measurement.",
                    "de-DE": "Eine der zwei Positionen die für die Distanzmessung verwendet werden.",
                    "es-ES": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "es-MX": "Una de las dos posiciones utilizadas en la medición de distancia.",
                    "fr-FR": "Une des deux positions servant à mesurer la distance.",
                    "it-IT": "Una delle due posizioni usate nella misurazione della distanza.",
                    "ja-JP": "距離を計測するのに使用された2つの位置のうちの1つ",
                    "ko-KR": "거리 측정에 사용되는 두 위치 중 하나입니다.",
                    "pl-PL": "Jedna z dwóch pozycji służących do mierzenia odległości.",
                    "pt-BR": "Uma das duas posições usadas na medida de distância.",
                    "ru-RU": "Одна из двух точек используемых для измерения расстояния.",
                    "th-TH": "One of the two positions used in the distance measurement.",
                    "tr-TR": "Mesafe ölçümünde kullanılan iki konumdan biri.",
                    "zh-CN": "用于测量距离的两个位置之一。",
                    "zh-TW": "One of the two positions used in the distance measurement."
                },
                "type": "Position"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000B1E7",
        "en-US": "Distance Between",
        "es-MX": "Distancia entre",
        "fr-FR": "Distance entre",
        "ja-JP": "二点間の距離",
        "pt-BR": "Distância entre",
        "tr-TR": "Aradaki Mesafe",
        "zh-CN": "相距距离",
        "de-DE": "Distance Between",
        "es-ES": "Distance Between",
        "it-IT": "Distance Between",
        "ko-KR": "Distance Between",
        "pl-PL": "Distance Between",
        "ru-RU": "Distance Between",
        "th-TH": "Distance Between",
        "zh-TW": "Distance Between"
    },
    "dotProduct": {
        "description": {
            "en-US": "The dot product of the specified values."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "One of two vector operands of the dot product."
                },
                "type": "Vector"
            },
            {
                "name": "value",
                "description": {
                    "en-US": "One of two vector operands of the dot product."
                },
                "type": "Vector"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C35A",
        "en-US": "Dot Product",
        "es-MX": "Producto escalar",
        "fr-FR": "Produit scalaire",
        "ja-JP": "ドット積",
        "pt-BR": "Produto Escalar",
        "th-TH": "ผลคูณจุด",
        "tr-TR": "Nokta Çarpımı",
        "zh-CN": "标量积",
        "de-DE": "Dot Product",
        "es-ES": "Dot Product",
        "it-IT": "Dot Product",
        "ko-KR": "Dot Product",
        "pl-PL": "Dot Product",
        "ru-RU": "Dot Product",
        "zh-TW": "Dot Product"
    },
    "entityExists": {
        "description": {
            "en-US": "Whether the specified player, icon entity, or effect entity still exists. Useful for determining if a player has left the match or an entity has been destroyed."
        },
        "args": [
            {
                "name": "entity",
                "description": {
                    "en-US": "The player, icon entity, or effect entity whose existence to check."
                },
                "type": [
                    "Player",
                    "EntityId"
                ]
            }
        ],
        "return": "bool",
        "guid": "00000000B619",
        "en-US": "Entity Exists",
        "es-MX": "La entidad existe",
        "fr-FR": "Existence de l’entité",
        "ja-JP": "エンティティが存在している",
        "pt-BR": "Entidade Existe",
        "tr-TR": "Varlık Mevcut",
        "zh-CN": "实体存在",
        "de-DE": "Entity Exists",
        "es-ES": "Entity Exists",
        "it-IT": "Entity Exists",
        "ko-KR": "Entity Exists",
        "pl-PL": "Entity Exists",
        "ru-RU": "Entity Exists",
        "th-TH": "Entity Exists",
        "zh-TW": "Entity Exists"
    },
    "evalOnce": {
        "description": {
            "en-US": "Makes a copy of the provided value. Useful for selectively not reevaluating certain parts of a value, such as creating effects in a loop."
        },
        "args": [
            {
                "name": "inputValue",
                "description": {
                    "en-US": "The value that will be only evaluated once."
                },
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "000000012214",
        "en-US": "Evaluate Once",
        "es-MX": "Evaluar una vez",
        "fr-FR": "Évaluer une fois",
        "ja-JP": "一度だけ評価",
        "pt-BR": "Avaliar Uma Vez",
        "tr-TR": "Bir Kere Değerlendir",
        "zh-CN": "单次赋值",
        "de-DE": "Evaluate Once",
        "es-ES": "Evaluate Once",
        "it-IT": "Evaluate Once",
        "ko-KR": "Evaluate Once",
        "pl-PL": "Evaluate Once",
        "ru-RU": "Evaluate Once",
        "th-TH": "Evaluate Once",
        "zh-TW": "Evaluate Once"
    },
    "eventAbility": {
        "description": {
            "en-US": "The ability for the event currently being processed by this rule associated by button."
        },
        "args": null,
        "canBePutInBoolean": false,
        "return": "Button",
        "guid": "0000000109CF",
        "en-US": "Event Ability",
        "es-MX": "Evento de habilidad",
        "fr-FR": "Capacité d’évènement",
        "ja-JP": "イベントアビリティ",
        "pt-BR": "Habilidade do Evento",
        "tr-TR": "Etkinlik Kabiliyeti",
        "zh-CN": "事件技能",
        "de-DE": "Event Ability",
        "es-ES": "Event Ability",
        "it-IT": "Event Ability",
        "ko-KR": "Event Ability",
        "pl-PL": "Event Ability",
        "ru-RU": "Event Ability",
        "th-TH": "Event Ability",
        "zh-TW": "Event Ability"
    },
    "eventDamage": {
        "description": {
            "en-US": "The amount of damage received by the victim for the event currently being processed by this rule."
        },
        "args": null,
        "return": "unsigned float",
        "guid": "00000000C635",
        "en-US": "Event Damage",
        "es-MX": "Daño de evento",
        "fr-FR": "Dégâts d’évènement",
        "ja-JP": "イベント・ダメージ",
        "pt-BR": "Dano do Evento",
        "tr-TR": "Etkinlik Hasarı",
        "zh-CN": "事件伤害",
        "de-DE": "Event Damage",
        "es-ES": "Event Damage",
        "it-IT": "Event Damage",
        "ko-KR": "Event Damage",
        "pl-PL": "Event Damage",
        "ru-RU": "Event Damage",
        "th-TH": "Event Damage",
        "zh-TW": "Event Damage"
    },
    "eventDirection": {
        "description": {
            "en-US": "The incoming direction for the event currently being processed by this rule."
        },
        "args": null,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "0000000107D5",
        "en-US": "Event Direction",
        "es-MX": "Dirección del evento",
        "fr-FR": "Direction de l’évènement",
        "ja-JP": "イベント方向",
        "pt-BR": "Direção do Evento",
        "tr-TR": "Etkinlik Yönü",
        "zh-CN": "事件方向",
        "de-DE": "Event Direction",
        "es-ES": "Event Direction",
        "it-IT": "Event Direction",
        "ko-KR": "Event Direction",
        "pl-PL": "Event Direction",
        "ru-RU": "Event Direction",
        "th-TH": "Event Direction",
        "zh-TW": "Event Direction"
    },
    "eventHealing": {
        "description": {
            "en-US": "The amount of healing received by the healee for the event currently being processed by this rule."
        },
        "args": null,
        "return": "unsigned float",
        "guid": "00000000CC33",
        "en-US": "Event Healing",
        "es-MX": "Sanación de evento",
        "fr-FR": "Évènement soin",
        "ja-JP": "イベント回復",
        "pt-BR": "Cura no Evento",
        "th-TH": "การฮีลในอีเวนต์",
        "tr-TR": "Etkinlik İyileştirmesi",
        "zh-CN": "事件治疗",
        "de-DE": "Event Healing",
        "es-ES": "Event Healing",
        "it-IT": "Event Healing",
        "ko-KR": "Event Healing",
        "pl-PL": "Event Healing",
        "ru-RU": "Event Healing",
        "zh-TW": "Event Healing"
    },
    "eventPlayer": {
        "description": {
            "en-US": "The player executing this rule, as specified by the event. May be the same as the attacker or victim."
        },
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B331",
        "en-US": "Event Player",
        "es-MX": "Jugador del evento",
        "fr-FR": "Joueur exécutant",
        "ja-JP": "イベント・プレイヤー",
        "pt-BR": "Jogador do Evento",
        "tr-TR": "Etkinlik Oyuncusu",
        "zh-CN": "事件玩家",
        "de-DE": "Event Player",
        "es-ES": "Event Player",
        "it-IT": "Event Player",
        "ko-KR": "Event Player",
        "pl-PL": "Event Player",
        "ru-RU": "Event Player",
        "th-TH": "Event Player",
        "zh-TW": "Event Player"
    },
    "eventWasCriticalHit": {
        "description": {
            "en-US": "Whether the damage was a critical hit (such as a headshot) for the event currently being processed by this rule."
        },
        "args": null,
        "return": "bool",
        "guid": "00000000C637",
        "en-US": "Event Was Critical Hit",
        "es-MX": "El evento fue un golpe crítico",
        "fr-FR": "L’évènement était un coup critique",
        "ja-JP": "イベントがクリティカル・ヒットだった",
        "pt-BR": "Evento foi Golpe Crítico",
        "tr-TR": "Etkinlik Kritik Vuruştu",
        "zh-CN": "事件暴击",
        "de-DE": "Event Was Critical Hit",
        "es-ES": "Event Was Critical Hit",
        "it-IT": "Event Was Critical Hit",
        "ko-KR": "Event Was Critical Hit",
        "pl-PL": "Event Was Critical Hit",
        "ru-RU": "Event Was Critical Hit",
        "th-TH": "Event Was Critical Hit",
        "zh-TW": "Event Was Critical Hit"
    },
    "eventWasEnvironment": {
        "description": {
            "en-US": "Whether the elimination was due to the environment for the event currently being processed by this rule."
        },
        "args": null,
        "return": "bool",
        "guid": "00000001107C",
        "en-US": "Event Was Environment",
        "es-MX": "Evento fue entorno",
        "fr-FR": "L’évènement était une élimination due à l’environnement",
        "ja-JP": "イベントは環境だった",
        "pt-BR": "Evento foi Ambiente",
        "tr-TR": "Etkinlik Ortam",
        "zh-CN": "事件为环境事件",
        "de-DE": "Event Was Environment",
        "es-ES": "Event Was Environment",
        "it-IT": "Event Was Environment",
        "ko-KR": "Event Was Environment",
        "pl-PL": "Event Was Environment",
        "ru-RU": "Event Was Environment",
        "th-TH": "Event Was Environment",
        "zh-TW": "Event Was Environment"
    },
    "eventWasHealthPack": {
        "description": {
            "en-US": "Whether the healing was from a health pack for the event currently being processed by this rule."
        },
        "args": null,
        "return": "bool",
        "guid": "00000000FC80",
        "en-US": "Event Was Health Pack",
        "es-MX": "Evento fue suministro de salud",
        "fr-FR": "L’évènement était un kit de soins",
        "ja-JP": "ライフ・パックのイベントだった",
        "pt-BR": "Evento foi kit Médico",
        "tr-TR": "Etkinlik Sağlık Kiti",
        "zh-CN": "事件为急救包",
        "de-DE": "Event Was Health Pack",
        "es-ES": "Event Was Health Pack",
        "it-IT": "Event Was Health Pack",
        "ko-KR": "Event Was Health Pack",
        "pl-PL": "Event Was Health Pack",
        "ru-RU": "Event Was Health Pack",
        "th-TH": "Event Was Health Pack",
        "zh-TW": "Event Was Health Pack"
    },
    "false": {
        "description": {
            "en-US": "The boolean value of false."
        },
        "args": null,
        "isConstant": true,
        "return": "BoolLiteral",
        "guid": "00000000AC3A",
        "en-US": "False",
        "es-MX": "Falso",
        "fr-FR": "Faux",
        "th-TH": "เท็จ",
        "tr-TR": "Yanlış",
        "zh-CN": "假",
        "de-DE": "False",
        "es-ES": "False",
        "it-IT": "False",
        "ja-JP": "False",
        "ko-KR": "False",
        "pl-PL": "False",
        "pt-BR": "False",
        "ru-RU": "False",
        "zh-TW": "False"
    },
    "getAllHeroes": {
        "guid": "00000000BF58",
        "description": {
            "en-US": "The array of all heroes in overwatch. Note that the order is not guaranteed and the position of later heroes can and will change with the addition of new heroes."
        },
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "en-US": "All Heroes",
        "de-DE": "Alle Helden",
        "es-ES": "Todos los héroes",
        "es-MX": "Todos los héroes",
        "fr-FR": "Tous les personnages",
        "it-IT": "Tutti gli eroi",
        "ja-JP": "全ヒーロー",
        "ko-KR": "모든 영웅",
        "pl-PL": "Wszyscy bohaterowie",
        "pt-BR": "Todos os Heróis",
        "ru-RU": "Все герои",
        "th-TH": "ฮีโร่ทั้งหมด",
        "tr-TR": "Tüm Kahramanlar",
        "zh-CN": "全部英雄",
        "zh-TW": "所有英雄"
    },
    "getAverageServerLoad": {
        "guid": "00000000C997",
        "description": {
            "en-US": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "de-DE": "Gibt die durchschnittliche CPU-Belastung der letzten 2 Sekunden der aktuellen Spielinstanz als Prozentsatz an. Wenn diese Zahl 100 erreicht oder überschreitet wird es immer wahrscheinlicher dass die Instanz geschlossen wird weil sie zu viele Ressourcen verbraucht.",
            "es-ES": "Muestra un porcentaje que representa la carga media de CPU en la instancia de la partida actual durante los últimos 2 segundos. Cuando este número se acerque a 100 o lo supere será cada vez más probable que se cierre la instancia por estar consumiendo demasiados recursos.",
            "es-MX": "Muestra un porcentaje que representa el uso promedio del procesador de la instancia de juego actual durante los últimos dos segundos. A medida que el número alcanza o supera el 100 % aumenta la probabilidad de que esa instancia se cierre ya que está consumiendo demasiados recursos.",
            "fr-FR": "Affiche un pourcentage représentant la charge moyenne qu’a fait peser l’instance actuelle du jeu sur le processeur dans les deux dernières secondes. Quand cette valeur approche ou dépasse 100 il est fortement probable que l’instance se ferme car elle consomme trop de ressources.",
            "it-IT": "Mostra una percentuale del carico medio sulla CPU dell'istanza di gioco attuale negli ultimi due secondi. Una volta che questo numero si avvicina o supera quota 100 è molto probabile che l'istanza venga chiusa per consumo eccessivo di risorse.",
            "ja-JP": "現在のゲームインスタンスの、直近2秒間におけるCPU負荷の平均値を表すパーセンテージ。この数字が100に近づく、または超えた場合、リソースの過剰消費でインスタンスがシャットダウンされる可能性が高まる",
            "ko-KR": "최근 2초간 게임 인스턴스의 평균 CPU 사용률%입니다. 이 수치가 100에 가까워지거나 100을 초과하면 과도한 리소스 사용으로 인스턴스가 종료될 가능성이 크게 증가합니다.",
            "pl-PL": "Procentowy wskaźnik średniego obciążenia głównego procesora przez bieżącą instancję gry w ostatnich dwóch sekundach. Kiedy wartość zbliża się lub przekracza 100 rośnie prawdopodobieństwo że program zostanie zamknięty z powodu zużycia zbyt dużych zasobów systemowych.",
            "pt-BR": "Mostra uma porcentagem que representa o uso médio de CPU da instância de jogo atual nos últimos dois segundos. Se o número se aproximar ou passar de 100 será bem mais provável que a instância seja encerrada por consumir recursos demais.",
            "ru-RU": "Выводит процент средней загрузки ЦП в текущей игре за последние 2 секунды. Чем ближе это значение к 100 тем выше вероятность того что игра прервется из-за чрезмерного потребления ресурсов.",
            "th-TH": "Provides a percentage representing the average CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "tr-TR": "Son iki saniyedeki mevcut oyun örneğinin ortalama CPU yükünü temsil eden yüzdeyi sağlar. Bu sayı 100 değerine ulaşırsa veya bu değeri geçerse çok fazla kaynak harcaması sebebiyle oluşumun kapatılma olasılığı artar.",
            "zh-CN": "当前游戏副本在过去2秒内造成的平均CPU负载百分比。如果这个数字接近或者超过100，表示此游戏副本消耗了过多资源，游戏很可能会关闭。",
            "zh-TW": "此百分比數字會顯示當前遊戲在前兩秒時的CPU平均負載狀態。當這個數字接近或超出100，遊戲極有可能會因消耗過多資源而關閉。"
        },
        "args": [],
        "return": "unsigned float",
        "en-US": "Server Load Average",
        "es-MX": "Uso promedio del servidor",
        "fr-FR": "Charge moyenne du serveur",
        "ja-JP": "サーバー負荷平均",
        "pt-BR": "Média de Uso do Servidor",
        "tr-TR": "Sunucu Doluluk Ortalaması",
        "zh-CN": "服务器负载平均值",
        "de-DE": "Server Load Average",
        "es-ES": "Server Load Average",
        "it-IT": "Server Load Average",
        "ko-KR": "Server Load Average",
        "pl-PL": "Server Load Average",
        "ru-RU": "Server Load Average",
        "th-TH": "Server Load Average",
        "zh-TW": "Server Load Average"
    },
    "getCapturePercentage": {
        "description": {
            "en-US": "The current progress towards capture for the active control point expressed as a percentage.",
            "de-DE": "Der aktuelle Fortschritt hin zur Einnahme für den aktiven Kontrollpunkt als Prozentsatz dargestellt.",
            "es-ES": "Progreso actual para la captura del punto de control activo expresado en forma de porcentaje.",
            "es-MX": "El progreso actual hacia la captura del punto de control activo expresado como porcentaje.",
            "fr-FR": "La progression actuelle de la capture du point de contrôle actif exprimée en pourcentage.",
            "it-IT": "Il progresso attuale verso la conquista del punto di controllo attivo espresso in percentuale.",
            "ja-JP": "アクティブなコントロール・ポイントの確保状況（パーセントで表示）",
            "ko-KR": "활성화된 거점에서 점령 중인 거점의 점령 진척도입니다비율로 표시.",
            "pl-PL": "Bieżący postęp zajmowania aktywnego punktu kontrolnego wyrażony w procentach.",
            "pt-BR": "O progresso atual da captura do ponto de controle ativo expresso em forma de porcentagem.",
            "ru-RU": "Доля захвата активной контрольной точки в данный момент выражается в процентах.",
            "th-TH": "The current progress towards capture for the active control point expressed as a percentage.",
            "tr-TR": "Etkin kontrol noktasını ele geçirme ilerleyişi yüzde olarak gösterilir.",
            "zh-CN": "已激活的控制点当前的占领进度（以百分比表示）。",
            "zh-TW": "The current progress towards capture for the active control point expressed as a percentage."
        },
        "args": [],
        "return": "float",
        "guid": "00000000B358",
        "en-US": "Point Capture Percentage",
        "es-MX": "Porcentaje de captura de punto",
        "fr-FR": "Pourcentage de capture du point",
        "ja-JP": "ポイント・キャプチャーのパーセンテージ",
        "pt-BR": "Percentual de Captura do Ponto",
        "tr-TR": "Nokta Ele Geçirme Yüzdesi",
        "zh-CN": "目标点占领百分比",
        "de-DE": "Point Capture Percentage",
        "es-ES": "Point Capture Percentage",
        "it-IT": "Point Capture Percentage",
        "ko-KR": "Point Capture Percentage",
        "pl-PL": "Point Capture Percentage",
        "ru-RU": "Point Capture Percentage",
        "th-TH": "Point Capture Percentage",
        "zh-TW": "Point Capture Percentage"
    },
    "getClosestPlayer": {
        "description": {
            "en-US": "The player closest to a position, optionally restricted by team."
        },
        "args": [
            {
                "name": "center",
                "description": {
                    "en-US": "The position from which to measure proximity.",
                    "de-DE": "Die Position von der die Nähe gemessen wird.",
                    "es-ES": "Posición desde la que se mide la proximidad.",
                    "es-MX": "La posición desde la cual se medirá la proximidad.",
                    "fr-FR": "La position à partir de laquelle mesurer la proximité.",
                    "it-IT": "La posizione dalla quale misurare la vicinanza.",
                    "ja-JP": "距離の近さを計測し始める位置",
                    "ko-KR": "거리를 측정할 위치입니다.",
                    "pl-PL": "Pozycja z której mierzy się bliskość.",
                    "pt-BR": "A posição da qual a proximidade será medida.",
                    "ru-RU": "Точка от которой измеряется близость.",
                    "th-TH": "The position from which to measure proximity.",
                    "tr-TR": "Alanın ölçüleceği konum.",
                    "zh-CN": "用于测定距离的位置。",
                    "zh-TW": "The position from which to measure proximity."
                },
                "type": "Position"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which the closest player will come."
                },
                "type": "Team"
            }
        ],
        "canBePutInBoolean": false,
        "hideFromAutocomplete": true,
        "return": "Player",
        "guid": "00000000B1DE",
        "en-US": "Closest Player To",
        "es-MX": "Jugador más cercano a",
        "fr-FR": "Joueur le plus proche de",
        "ja-JP": "最も近いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Próximo a",
        "tr-TR": "En Yakın Oyuncu",
        "zh-CN": "距离最近的玩家",
        "de-DE": "Closest Player To",
        "es-ES": "Closest Player To",
        "it-IT": "Closest Player To",
        "ko-KR": "Closest Player To",
        "pl-PL": "Closest Player To",
        "ru-RU": "Closest Player To",
        "th-TH": "Closest Player To",
        "zh-TW": "Closest Player To"
    },
    "getControlScorePercentage": {
        "description": {
            "en-US": "The score percentage for the specified team in control mode."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose score percentage to acquire."
                },
                "type": "Team"
            }
        ],
        "return": "unsigned float",
        "guid": "00000000B37C",
        "en-US": "Control Mode Scoring Percentage",
        "es-MX": "Porcentaje de puntuación en el modo Control",
        "fr-FR": "Pourcentage du score en mode Contrôle",
        "ja-JP": "コントロール・モードのスコア・パーセンテージ",
        "pt-BR": "Percentual de Pontuação no Modo de Controle",
        "tr-TR": "Kontrol Modu Puanlama Yüzdesi",
        "zh-CN": "占领要点模式得分百分比",
        "de-DE": "Control Mode Scoring Percentage",
        "es-ES": "Control Mode Scoring Percentage",
        "it-IT": "Control Mode Scoring Percentage",
        "ko-KR": "Control Mode Scoring Percentage",
        "pl-PL": "Control Mode Scoring Percentage",
        "ru-RU": "Control Mode Scoring Percentage",
        "th-TH": "Control Mode Scoring Percentage",
        "zh-TW": "Control Mode Scoring Percentage"
    },
    "getControlScoringTeam": {
        "description": {
            "en-US": "The team that is currently accumulating score percentage in control mode. Results in all if neither team is accumulating score."
        },
        "args": [],
        "canBePutInBoolean": false,
        "return": "Team",
        "guid": "00000000B39A",
        "en-US": "Control Mode Scoring Team",
        "es-MX": "Equipo que anota en el modo Control",
        "fr-FR": "Équipe contrôlant le point en mode Contrôle",
        "ja-JP": "コントロール・モードの得点チーム",
        "pt-BR": "Equipe Pontuando no Modo de Controle",
        "tr-TR": "Kontrol Modu Puan Alan Takım",
        "zh-CN": "占领要点模式正在得分的队伍",
        "de-DE": "Control Mode Scoring Team",
        "es-ES": "Control Mode Scoring Team",
        "it-IT": "Control Mode Scoring Team",
        "ko-KR": "Control Mode Scoring Team",
        "pl-PL": "Control Mode Scoring Team",
        "ru-RU": "Control Mode Scoring Team",
        "th-TH": "Control Mode Scoring Team",
        "zh-TW": "Control Mode Scoring Team"
    },
    "getCurrentGamemode": {
        "description": {
            "en-US": "The current game mode of the custom game.",
            "de-DE": "Der aktuelle Spielmodus des benutzerdefinierten Spiels.",
            "es-ES": "El modo de juego actual de la partida personalizada.",
            "es-MX": "El modo de juego actual de la partida personalizada.",
            "fr-FR": "Le mode de jeu actuel de la partie personnalisée.",
            "it-IT": "La modalità di gioco attuale della partita personalizzata.",
            "ja-JP": "カスタム・ゲームの現在のゲーム・モード",
            "ko-KR": "사용자 지정 게임의 현재 게임 모드입니다.",
            "pl-PL": "Bieżący tryb gry dowolnej.",
            "pt-BR": "O modo de jogo atual do jogo personalizado.",
            "ru-RU": "Текущий игровой режим «Своей игры».",
            "th-TH": "The current game mode of the custom game.",
            "tr-TR": "Özel oyunun mevcut oyun modu.",
            "zh-CN": "当前自定游戏的游戏模式。",
            "zh-TW": "The current game mode of the custom game."
        },
        "args": [],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Gamemode",
        "guid": "00000000F163",
        "en-US": "Current Game Mode",
        "es-MX": "Modo de juego actual",
        "fr-FR": "Mode de jeu actuel",
        "ja-JP": "現在のゲーム・モード",
        "pt-BR": "Modo de jogo atual",
        "tr-TR": "Mevcut Oyun Modu",
        "zh-CN": "当前游戏模式",
        "de-DE": "Current Game Mode",
        "es-ES": "Current Game Mode",
        "it-IT": "Current Game Mode",
        "ko-KR": "Current Game Mode",
        "pl-PL": "Current Game Mode",
        "ru-RU": "Current Game Mode",
        "th-TH": "Current Game Mode",
        "zh-TW": "Current Game Mode"
    },
    "__getCurrentMap__": {
        "guid": "00000000D418",
        "description": {
            "en-US": "The current map of the custom game.",
            "de-DE": "Die aktuelle Karte des benutzerdefinierten Spiels.",
            "es-ES": "Mapa actual de la partida personalizada.",
            "es-MX": "El mapa actual de una partida personalizada.",
            "fr-FR": "La carte actuelle de la partie personnalisée.",
            "it-IT": "La mappa attuale della partita personalizzata.",
            "ja-JP": "カスタム・ゲームの現在のマップ",
            "ko-KR": "사용자 지정 게임의 현재 전장입니다.",
            "pl-PL": "Bieżąca mapa gry dowolnej.",
            "pt-BR": "O mapa atual do jogo personalizado.",
            "ru-RU": "Текущее поле боя для «Своей игры».",
            "th-TH": "The current map of the custom game.",
            "tr-TR": "Özel oyundaki mevcut harita.",
            "zh-CN": "自定义游戏中当前使用的地图。",
            "zh-TW": "The current map of the custom game."
        },
        "args": [],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Map",
        "en-US": "Current Map",
        "es-MX": "Mapa actual",
        "fr-FR": "Carte actuelle",
        "ja-JP": "現在のマップ",
        "pt-BR": "Mapa Atual",
        "tr-TR": "Mevcut Harita",
        "zh-CN": "当前地图",
        "de-DE": "Current Map",
        "es-ES": "Current Map",
        "it-IT": "Current Map",
        "ko-KR": "Current Map",
        "pl-PL": "Current Map",
        "ru-RU": "Current Map",
        "th-TH": "Current Map",
        "zh-TW": "Current Map"
    },
    "getCurrentObjective": {
        "description": {
            "en-US": "The control point, payload checkpoint, or payload destination currently active (either 0, 1, or 2). Valid in assault, hybrid, escort, and control."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "00000000B37D",
        "en-US": "Objective Index",
        "es-MX": "Índice de objetivo",
        "fr-FR": "Index de l’objectif",
        "ja-JP": "コントロール・モードのサブマップ番号",
        "pt-BR": "Índice do Objetivo",
        "tr-TR": "Hedef İndeksi",
        "zh-CN": "对象索引",
        "de-DE": "Objective Index",
        "es-ES": "Objective Index",
        "it-IT": "Objective Index",
        "ko-KR": "Objective Index",
        "pl-PL": "Objective Index",
        "ru-RU": "Objective Index",
        "th-TH": "Objective Index",
        "zh-TW": "Objective Index"
    },
    "getDamageHeroes": {
        "description": {
            "en-US": "The array of all damage heroes in overwatch. Note that the order is not guaranteed and the position of later heroes can and will change with the addition of new heroes."
        },
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40A",
        "en-US": "All Damage Heroes",
        "de-DE": "Alle Schadenshelden",
        "es-MX": "Todos los héroes de daño",
        "fr-FR": "Tous les héros de dégâts",
        "ja-JP": "全ダメージヒーロー",
        "pt-BR": "Todos os Heróis de Dano",
        "th-TH": "ฮีโร่ความเสียหายทั้งหมด",
        "tr-TR": "Tüm Hasar Kahramanları",
        "zh-CN": "所有输出英雄",
        "es-ES": "All Damage Heroes",
        "it-IT": "All Damage Heroes",
        "ko-KR": "All Damage Heroes",
        "pl-PL": "All Damage Heroes",
        "ru-RU": "All Damage Heroes",
        "zh-TW": "All Damage Heroes"
    },
    "getDeadPlayers": {
        "description": {
            "en-US": "An array containing all dead players on a team or in the match."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which players may come."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B265",
        "en-US": "All Dead Players",
        "es-MX": "Todos los jugadores muertos",
        "fr-FR": "Tous les joueurs morts",
        "ja-JP": "倒れたプレイヤー全員",
        "pt-BR": "Todos os Jogadores Mortos",
        "tr-TR": "Tüm Ölü Oyuncular",
        "zh-CN": "所有死亡玩家",
        "de-DE": "All Dead Players",
        "es-ES": "All Dead Players",
        "it-IT": "All Dead Players",
        "ko-KR": "All Dead Players",
        "pl-PL": "All Dead Players",
        "ru-RU": "All Dead Players",
        "th-TH": "All Dead Players",
        "zh-TW": "All Dead Players"
    },
    "getFarthestPlayer": {
        "description": {
            "en-US": "The player farthest from a position, optionally restricted by team."
        },
        "args": [
            {
                "name": "center",
                "description": {
                    "en-US": "The position from which to measure distance.",
                    "de-DE": "Die Position von der die Distanz gemessen wird.",
                    "es-ES": "Posición desde la que se mide la distancia.",
                    "es-MX": "La posición desde la cual se medirá la distancia.",
                    "fr-FR": "La position à partir de laquelle mesurer la distance.",
                    "it-IT": "La posizione dalla quale misurare la distanza.",
                    "ja-JP": "距離を計測するための位置",
                    "ko-KR": "거리 측정을 위한 위치입니다.",
                    "pl-PL": "Pozycja z której mierzy się odległość.",
                    "pt-BR": "A posição da qual a distância será medida.",
                    "ru-RU": "Точка от которой измеряется расстояние.",
                    "th-TH": "The position from which to measure distance.",
                    "tr-TR": "Uzaklığın ölçüleceği konum.",
                    "zh-CN": "以此位置为起点测量距离。",
                    "zh-TW": "The position from which to measure distance."
                },
                "type": "Position"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which the farthest player will come."
                },
                "type": "Team"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "hideFromAutocomplete": true,
        "guid": "00000000B1DF",
        "en-US": "Farthest Player From",
        "es-MX": "Jugador más lejos de",
        "fr-FR": "Joueur le plus éloigné de",
        "ja-JP": "最も遠いプレイヤー。基準: ",
        "pt-BR": "Jogador Mais Distante de",
        "tr-TR": "En Uzak Oyuncu",
        "zh-CN": "距离最远的玩家",
        "de-DE": "Farthest Player From",
        "es-ES": "Farthest Player From",
        "it-IT": "Farthest Player From",
        "ko-KR": "Farthest Player From",
        "pl-PL": "Farthest Player From",
        "ru-RU": "Farthest Player From",
        "th-TH": "Farthest Player From",
        "zh-TW": "Farthest Player From"
    },
    "getFlagCarrier": {
        "description": {
            "en-US": "The player carrying a particular team's flag in capture the flag. Results in null if no player is carrying the flag."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose flag to check."
                },
                "type": "Team"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B3A3",
        "en-US": "Player Carrying Flag",
        "es-MX": "Jugador que transporta la bandera",
        "fr-FR": "Joueur portant le drapeau",
        "ja-JP": "フラッグを運んでいる",
        "pt-BR": "Jogador Carregando a Bandeira",
        "tr-TR": "Oyuncu Bayrak Taşıyor",
        "zh-CN": "携带旗帜的玩家",
        "de-DE": "Player Carrying Flag",
        "es-ES": "Player Carrying Flag",
        "it-IT": "Player Carrying Flag",
        "ko-KR": "Player Carrying Flag",
        "pl-PL": "Player Carrying Flag",
        "ru-RU": "Player Carrying Flag",
        "th-TH": "Player Carrying Flag",
        "zh-TW": "Player Carrying Flag"
    },
    "getFlagPosition": {
        "description": {
            "en-US": "The position of a specific team's flag in capture the flag."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose flag position to acquire."
                },
                "type": "Team"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B3A0",
        "en-US": "Flag Position",
        "es-MX": "Posición de la bandera",
        "fr-FR": "Position du drapeau",
        "ja-JP": "フラッグの位置",
        "pt-BR": "Posição da Bandeira",
        "tr-TR": "Bayrak Konumu",
        "zh-CN": "旗帜位置",
        "de-DE": "Flag Position",
        "es-ES": "Flag Position",
        "it-IT": "Flag Position",
        "ko-KR": "Flag Position",
        "pl-PL": "Flag Position",
        "ru-RU": "Flag Position",
        "th-TH": "Flag Position",
        "zh-TW": "Flag Position"
    },
    "getLastAssistId": {
        "description": {
            "en-US": "An ID representing the most recent Start Assist Action that was executed by the Event Player or executed at the Global level.",
            "de-DE": "Eine ID die die aktuellste [Start Assist]-Aktion darstellt die durch [Event Player] oder auf globaler Ebene ausgeführt wurde.",
            "es-ES": "Una ID que representa la acción «Start Assist» más reciente ejecutada por el «Event Player» o ejecutada a nivel global.",
            "es-MX": "Una ID que representa la acción Comenzar asistencia más reciente que fue ejecutada por el jugador del evento o ejecutada a nivel global.",
            "fr-FR": "Un identifiant représentant la dernière action « Lancer le soutien » exécutée par le joueur exécutant ou exécutée au niveau global.",
            "it-IT": "Un ID che rappresenta l'Azione Start Assist più recente eseguita dal Giocatore Evento o eseguita a livello Globale.",
            "ja-JP": "イベント・プレイヤーまたはグローバル・レベルによって実行された最新の「アシストを開始」アクションを示すID",
            "ko-KR": "Event Player 또는 전역 레벨에서 가장 최근에 실행된 Last Assist 액션의 ID입니다.",
            "pl-PL": "Identyfikator reprezentujący ostatnie działanie „Start Assist Action” Rozpocznij asystę wykonane przez „Event Player” Gracz w zdarzeniu lub na poziomie globalnym.",
            "pt-BR": "Uma ID representando a Ação Iniciar Assistência mais recente executada pelo Jogador do Evento ou executada em nível Global.",
            "ru-RU": "ID представляющий самое последнее действие [Start Assist] которое было выполнено игроком события [Event Player] или выполнено на глобальном уровне.",
            "th-TH": "An ID representing the most recent Start Assist Action that was executed by the Event Player or executed at the Global level.",
            "tr-TR": "Etkinlik Oyuncusu tarafından gerçekleştirilen veya Küresel seviyede gerçekleştirilen son Asist Başlat eylemini temsil eden Kimlik.",
            "zh-CN": "此ID值代表最后一个时间玩家（或全局）所执行的“开始助攻”动作。",
            "zh-TW": "An ID representing the most recent Start Assist Action that was executed by the Event Player or executed at the Global level."
        },
        "args": [],
        "return": "AssistId",
        "guid": "0000000121F2",
        "en-US": "Last Assist ID",
        "es-MX": "ID de asistencia anterior",
        "fr-FR": "Dernier identifiant de soutien",
        "ja-JP": "最新のアシストID",
        "pt-BR": "ID da Última Assistência",
        "tr-TR": "Son Asist Kimliği",
        "zh-CN": "上一个助攻ID",
        "de-DE": "Last Assist ID",
        "es-ES": "Last Assist ID",
        "it-IT": "Last Assist ID",
        "ko-KR": "Last Assist ID",
        "pl-PL": "Last Assist ID",
        "ru-RU": "Last Assist ID",
        "th-TH": "Last Assist ID",
        "zh-TW": "Last Assist ID"
    },
    "getLastCreatedEntity": {
        "description": {
            "en-US": "A reference to the last effect, icon entity, or dummy bot created by the event player (or created at the global level)."
        },
        "args": [],
        "canBePutInBoolean": false,
        "return": "EntityId",
        "guid": "00000000B362",
        "en-US": "Last Created Entity",
        "es-MX": "Última entidad creada",
        "fr-FR": "Dernière entité créée",
        "ja-JP": "最新のエンティティ",
        "pt-BR": "Entidade Criada por Último",
        "tr-TR": "Oluşturulan Son Varlık",
        "zh-CN": "最后创建的实体",
        "de-DE": "Last Created Entity",
        "es-ES": "Last Created Entity",
        "it-IT": "Last Created Entity",
        "ko-KR": "Last Created Entity",
        "pl-PL": "Last Created Entity",
        "ru-RU": "Last Created Entity",
        "th-TH": "Last Created Entity",
        "zh-TW": "Last Created Entity"
    },
    "getLastCreatedHealthPool": {
        "description": {
            "en-US": "An ID representing the most recent Add Health Pool action that was executed by the event player (or executed at the global level)."
        },
        "args": [],
        "return": "HealthPoolId",
        "guid": "000000011439",
        "en-US": "Last Created Health Pool",
        "es-MX": "Última cantidad de salud creada",
        "fr-FR": "Dernière réserve de points de vie créée",
        "ja-JP": "最新のライフプール",
        "pt-BR": "Última Reserva de Vida Criada",
        "tr-TR": "Oluşturulan Son Can Havuzu",
        "zh-CN": "最后创建的生命池",
        "de-DE": "Last Created Health Pool",
        "es-ES": "Last Created Health Pool",
        "it-IT": "Last Created Health Pool",
        "ko-KR": "Last Created Health Pool",
        "pl-PL": "Last Created Health Pool",
        "ru-RU": "Last Created Health Pool",
        "th-TH": "Last Created Health Pool",
        "zh-TW": "Last Created Health Pool"
    },
    "getLastCreatedText": {
        "description": {
            "en-US": "A reference to the last piece of text created by the Event Player or created at the Global level via the Create HUD Text Create In-World Text Create Progress Bar HUD Text or Create Progress Bar In-World Text Action.",
            "de-DE": "Eine Referenz zum letzten Textstück das über die Aktion [Create HUD Text] [Create In-World Text] [Create Progress Bar HUD Text] oder [Create Progress Bar In-World Text] durch [Event Player] oder auf globaler Ebene erstellt wurde.",
            "es-ES": "Una referencia al último fragmento de texto creado por el «Event Player» o creado a nivel global mediante las acciones «Create HUD Text» «Create In-World Text» «Create Progress Bar HUD Text» o «Create Progress Bar In-World Text Action».",
            "es-MX": "Una referencia al último fragmento de texto creado por el jugador del evento o creado a nivel global a través de las acciones Crear texto del HUD Crear texto dentro del mundo Crear texto del HUD en la barra de progreso o Crear texto dentro del mundo en la barra de progreso.",
            "fr-FR": "Une référence au dernier texte créé par le joueur exécutant ou créé au niveau global via l’action « Créer du texte d’interface » « Créer du texte en jeu » « Créer du texte d’interface de barre de progression en jeu » ou « Créer du texte de barre de progression en jeu ».",
            "it-IT": "Un riferimento all'ultimo testo creato dal Giocatore Evento o creato a livello Globale attraverso l'Azione Create HUD Text Create In-World Text Create Progress Bar HUD Text o Create Progress Bar In-World Text.",
            "ja-JP": "「HUDテキストを作成」、「ワールド内テキストを作成」、「進行バーHUDテキストを作成」または「進行バーのワールド内テキスト」アクションを使用し、イベント・プレイヤーまたはグローバルによって作成された最新のテキストを参照する",
            "ko-KR": "Event Player 또는 전역 레벨에서 Create HUD Text Create In-World Text Create Progress Bar HUD Text Create Progress Bar In-World 액션으로 생성한 텍스트의 마지막 부분에 대한 참조입니다.",
            "pl-PL": "Odniesienie do ostatniego fragmentu tekstu stworzonego przez „Event player” Gracza w zdarzeniu lub stworzonego na poziomie globalnym poprzez działanie „Create HUD Text” Stwórz tekst w HUD „Create In-World Text” Stwórz tekst w świecie gry „Create Progress Bar HUD Text” Stwórz tekst w pasku postępu lub „Create Progress Bar In-World Text” Stwórz tekst w pasku postępu w świecie gry.",
            "pt-BR": "Uma referência ao último bloco de texto criado pelo Jogador do Evento ou criado em nível Global através da Ação Criar Texto de HUD Criar Texto no Mundo Criar Texto de HUD da Barra de Progresso ou Criar Texto de Barra de Progresso no Mundo.",
            "ru-RU": "Ссылка на последний текстовый элемент созданный игроком события или на глобальном уровне с помощью действия [Create HUD Text] [Create In-World Text] [Create Progress Bar HUD Text] или [Create Progress Bar In-World Text].",
            "th-TH": "A reference to the last piece of text created by the Event Player or created at the Global level via the Create HUD Text Create In-World Text Create Progress Bar HUD Text or Create Progress Bar In-World Text Action.",
            "tr-TR": "Ekran Göstergesi Metni Oluştur Oyun İçi Metin Oluştur İlerleyiş Çubuğu Ekran Göstergesi Metni Oluştur veya Oyun İçi İlerleyiş Çubuğu Metni Oluştur Eylemi ile Etkinlik Oyuncusu tarafından oluşturulan veya Küresel seviyede oluşturulan metnin son kısmı.",
            "zh-CN": "代表由事件玩家创建的（或由全局创建的）通过“创建HUD文本”、“创建地图文本”、“创建进度条HUD文本”或“创建进度条地图文本”动作所创建的最后一段文本。",
            "zh-TW": "A reference to the last piece of text created by the Event Player or created at the Global level via the Create HUD Text Create In-World Text Create Progress Bar HUD Text or Create Progress Bar In-World Text Action."
        },
        "args": [],
        "return": "TextId",
        "guid": "00000000BAFE",
        "en-US": "Last Text ID",
        "es-MX": "ID de texto anterior",
        "fr-FR": "Dernier identifiant de texte",
        "ja-JP": "最新のテキストID",
        "pt-BR": "ID de Texto Mais Recente",
        "tr-TR": "Son Metin Kimliği",
        "zh-CN": "上一个文本ID",
        "de-DE": "Last Text ID",
        "es-ES": "Last Text ID",
        "it-IT": "Last Text ID",
        "ko-KR": "Last Text ID",
        "pl-PL": "Last Text ID",
        "ru-RU": "Last Text ID",
        "th-TH": "Last Text ID",
        "zh-TW": "Last Text ID"
    },
    "getLastDamageModification": {
        "description": {
            "en-US": "An id representing the most recent start damage modification action that was executed by the event player (or executed at the global level)."
        },
        "args": [],
        "return": "DamageModificationId",
        "guid": "00000000C64A",
        "en-US": "Last Damage Modification ID",
        "es-MX": "ID de modificación de daño anterior",
        "fr-FR": "Dernier identifiant de modification de dégâts",
        "ja-JP": "最新のダメージ変更ID",
        "pt-BR": "ID de Modificação de Dano Mais Recente",
        "tr-TR": "Son Hasar Düzenlemesi Kimliği",
        "zh-CN": "上一个伤害调整ID",
        "de-DE": "Last Damage Modification ID",
        "es-ES": "Last Damage Modification ID",
        "it-IT": "Last Damage Modification ID",
        "ko-KR": "Last Damage Modification ID",
        "pl-PL": "Last Damage Modification ID",
        "ru-RU": "Last Damage Modification ID",
        "th-TH": "Last Damage Modification ID",
        "zh-TW": "Last Damage Modification ID"
    },
    "getLastDamageOverTimeId": {
        "description": {
            "en-US": "An id representing the most recent damage over time action that was executed by the event player (or executed at the global level)."
        },
        "args": [],
        "return": "DotId",
        "guid": "00000000B263",
        "en-US": "Last Damage Over Time ID",
        "es-MX": "ID de daño con el tiempo anterior",
        "fr-FR": "Dernier identifiant de dégâts sur la durée",
        "ja-JP": "最新の継続ダメージID",
        "pt-BR": "ID de Dano ao Longo do Tempo Mais Recente",
        "tr-TR": "Zamanla Son Hasar Kimliği",
        "zh-CN": "上一个持续伤害效果ID",
        "de-DE": "Last Damage Over Time ID",
        "es-ES": "Last Damage Over Time ID",
        "it-IT": "Last Damage Over Time ID",
        "ko-KR": "Last Damage Over Time ID",
        "pl-PL": "Last Damage Over Time ID",
        "ru-RU": "Last Damage Over Time ID",
        "th-TH": "Last Damage Over Time ID",
        "zh-TW": "Last Damage Over Time ID"
    },
    "getLastHealingModification": {
        "description": {
            "en-US": "An id representing the most recent start healing modification action that was executed by the event player (or executed at the global level)."
        },
        "args": [],
        "return": "HealingModificationId",
        "guid": "00000000FD2A",
        "en-US": "Last Healing Modification ID",
        "es-MX": "ID de modificación de sanación anterior",
        "fr-FR": "Dernier identifiant de modification de soins",
        "ja-JP": "最新回復変更ID",
        "pt-BR": "ID da última modificação de cura",
        "tr-TR": "Son İyileştirme Düzenlemesi Kimliği",
        "zh-CN": "上一个治疗调整ID",
        "de-DE": "Last Healing Modification ID",
        "es-ES": "Last Healing Modification ID",
        "it-IT": "Last Healing Modification ID",
        "ko-KR": "Last Healing Modification ID",
        "pl-PL": "Last Healing Modification ID",
        "ru-RU": "Last Healing Modification ID",
        "th-TH": "Last Healing Modification ID",
        "zh-TW": "Last Healing Modification ID"
    },
    "getLastHealingOverTimeId": {
        "description": {
            "en-US": "An id representing the most recent heal over time action that was executed by the event player (or executed at the global level)."
        },
        "args": [],
        "return": "HotId",
        "guid": "00000000B262",
        "en-US": "Last Heal Over Time ID",
        "es-MX": "ID de sanación con el tiempo anterior",
        "fr-FR": "Dernier identifiant de soins sur la durée",
        "ja-JP": "最新の継続回復ID",
        "pt-BR": "ID de Cura ao Longo do Tempo Mais Recente",
        "tr-TR": "Zamanla Son İyileştirme Kimliği",
        "zh-CN": "上一个持续治疗效果ID",
        "de-DE": "Last Heal Over Time ID",
        "es-ES": "Last Heal Over Time ID",
        "it-IT": "Last Heal Over Time ID",
        "ko-KR": "Last Heal Over Time ID",
        "pl-PL": "Last Heal Over Time ID",
        "ru-RU": "Last Heal Over Time ID",
        "th-TH": "Last Heal Over Time ID",
        "zh-TW": "Last Heal Over Time ID"
    },
    "getLivingPlayers": {
        "description": {
            "en-US": "An array containing all living players on a team or in the match."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which players may come."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B264",
        "en-US": "All Living Players",
        "es-MX": "Todos los jugadores vivos",
        "fr-FR": "Tous les joueurs en vie",
        "ja-JP": "生存プレイヤー全員",
        "pt-BR": "Todos os Jogadores Vivos",
        "tr-TR": "Tüm Canlı Oyuncular",
        "zh-CN": "所有存活玩家",
        "de-DE": "All Living Players",
        "es-ES": "All Living Players",
        "it-IT": "All Living Players",
        "ko-KR": "All Living Players",
        "pl-PL": "All Living Players",
        "ru-RU": "All Living Players",
        "th-TH": "All Living Players",
        "zh-TW": "All Living Players"
    },
    "getMatchRound": {
        "description": {
            "en-US": "The current round of the match counting up from 1.",
            "de-DE": "Die aktuelle Runde des Matches ab 1 gezählt.",
            "es-ES": "Ronda actual de la partida a partir de 1.",
            "es-MX": "La ronda actual de la partida la cuenta comienza desde 1.",
            "fr-FR": "La manche actuelle de la partie comptée à partir de 1.",
            "it-IT": "Il round attuale della partita contato a partire da 1.",
            "ja-JP": "現在のマッチのラウンド。1から開始される",
            "ko-KR": "경기의 현재 라운드입니다. 1부터 증가합니다.",
            "pl-PL": "Bieżąca runda meczu licząc od 1.",
            "pt-BR": "A rodada atual da partida contada a partir de 1.",
            "ru-RU": "Текущий раунд матча отсчет начинается с 1.",
            "th-TH": "The current round of the match counting up from 1.",
            "tr-TR": "1'den başlayarak sayılan mevcut maç turu.",
            "zh-CN": "比赛当前的回合数，从1开始计数。",
            "zh-TW": "The current round of the match counting up from 1."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "00000000B375",
        "en-US": "Match Round",
        "es-MX": "Ronda de la partida",
        "fr-FR": "Manche de la partie",
        "ja-JP": "マッチのラウンド",
        "pt-BR": "Rodada da Partida",
        "tr-TR": "Maç Turu",
        "zh-CN": "比赛回合",
        "de-DE": "Match Round",
        "es-ES": "Match Round",
        "it-IT": "Match Round",
        "ko-KR": "Match Round",
        "pl-PL": "Match Round",
        "ru-RU": "Match Round",
        "th-TH": "Match Round",
        "zh-TW": "Match Round"
    },
    "getMatchTime": {
        "description": {
            "en-US": "The amount of time in seconds remaining in the current game mode phase.",
            "de-DE": "Die verbleibende Dauer des aktuellen Spielmodus in Sekunden.",
            "es-ES": "Cantidad de tiempo en segundos que queda en la fase actual del modo de juego.",
            "es-MX": "La cantidad de tiempo en segundos restante en la fase del modo de juego actual.",
            "fr-FR": "Le temps restant en secondes dans la phase actuelle du mode de jeu.",
            "it-IT": "La quantità di tempo in secondi rimasta nell'attuale fase della modalità di gioco.",
            "ja-JP": "現在のゲーム・モードのフェーズの残り時間（秒）",
            "ko-KR": "현재 게임 모드 단계의 잔여 시간초입니다.",
            "pl-PL": "Czas w sekundach pozostały w bieżącej fazie trybu gry.",
            "pt-BR": "A quantidade restante de tempo em segundos na fase do modo de jogo atual.",
            "ru-RU": "Время в секундах до истечения действующей фазы игрового режима.",
            "th-TH": "The amount of time in seconds remaining in the current game mode phase.",
            "tr-TR": "Mevcut oyun modu safhasında saniye cinsinden kalan süre.",
            "zh-CN": "当前游戏模式阶段剩余的时间，以秒为单位。",
            "zh-TW": "The amount of time in seconds remaining in the current game mode phase."
        },
        "args": [],
        "return": "unsigned float",
        "guid": "00000000AD3B",
        "en-US": "Match Time",
        "es-MX": "Tiempo de la partida",
        "fr-FR": "Temps de jeu",
        "ja-JP": "マッチ時間",
        "pt-BR": "Tempo da Partida",
        "tr-TR": "Maç Süresi",
        "zh-CN": "比赛时间",
        "de-DE": "Match Time",
        "es-ES": "Match Time",
        "it-IT": "Match Time",
        "ko-KR": "Match Time",
        "pl-PL": "Match Time",
        "ru-RU": "Match Time",
        "th-TH": "Match Time",
        "zh-TW": "Match Time"
    },
    "getNumberOfAssistIds": {
        "description": {
            "en-US": "The current number of Assist instances started from the Start Assist Action.",
            "de-DE": "Die aktuelle Anzahl an Assist-Instanzen die durch die Aktion [Start Assist] gestartet wurden.",
            "es-ES": "El número actual de instancias de asistencia iniciadas por la acción «Start Assist».",
            "es-MX": "El número actual de instancias de asistencia iniciadas desde la acción Comenzar asistencia.",
            "fr-FR": "Le nombre actuel d’instances de soutien commencées à partir de l’action « Lancer le soutien ».",
            "it-IT": "Il numero attuale di istanze di assist iniziate dall'Azione Start Assist.",
            "ja-JP": "「アシストを開始」アクションで開始されたアシストのインスタンスの現在数",
            "ko-KR": "Start Assist 액션에서 시작된 Assist 인스턴스의 현재 개수입니다.",
            "pl-PL": "Bieżąca liczba instancji asyst uruchomionych z działania „Start Assist” Rozpocznij asystę.",
            "pt-BR": "O número atual de instâncias de Assistência iniciadas pela Ação Iniciar Assistência.",
            "ru-RU": "Текущее количество экземпляров содействия начатых с помощью действия [Start Assist].",
            "th-TH": "The current number of Assist instances started from the Start Assist Action.",
            "tr-TR": "Asist Başlat Eylemi'nden itibaren mevcut Asist sayısı.",
            "zh-CN": "由“开始助攻”动作启动的助攻副本的当前数量。",
            "zh-TW": "The current number of Assist instances started from the Start Assist Action."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9E",
        "en-US": "Assist Count",
        "es-MX": "Conteo de asistencia",
        "fr-FR": "Nombre de soutiens",
        "ja-JP": "アシスト数",
        "pt-BR": "Contagem de Assistência",
        "tr-TR": "Asist Sayısı",
        "zh-CN": "助攻数量",
        "de-DE": "Assist Count",
        "es-ES": "Assist Count",
        "it-IT": "Assist Count",
        "ko-KR": "Assist Count",
        "pl-PL": "Assist Count",
        "ru-RU": "Assist Count",
        "th-TH": "Assist Count",
        "zh-TW": "Assist Count"
    },
    "getNumberOfDamageModificationIds": {
        "description": {
            "en-US": "The current number of Damage Modification instances started from the Start Damage Modification Action.",
            "de-DE": "Die aktuelle Anzahl an Instanzen von Schadensmodifikationen die durch die Aktion [Start Damage Modification] gestartet wurden.",
            "es-ES": "El número actual de instancias de modificación de daño iniciadas por la acción «Start Damage Modification».",
            "es-MX": "El número actual de instancias de modificación de daño iniciadas desde la acción Comenzar modificación de daño.",
            "fr-FR": "Le nombre actuel d’instances de modification des dégâts commencées à partir de l’action « Lancer la modification des dégâts ».",
            "it-IT": "Il numero attuale di istanze di modifica dei danni iniziate dall'Azione Start Damage Modification.",
            "ja-JP": "「ダメージ変更を開始」アクションで開始されたダメージ変更のインスタンスの現在数",
            "ko-KR": "Start Damage Modification 액션에서 시작된 Damage Modification 인스턴스의 현재 개수입니다.",
            "pl-PL": "Bieżąca liczba instancji modyfikacji obrażeń uruchomionych z działania „Start Damage Modification” Początek modyfikacji obrażeń.",
            "pt-BR": "O número atual de instâncias de Modificação de Dano iniciadas pela Ação Modificação de Dano.",
            "ru-RU": "Текущее количество экземпляров изменения урона запущенных действием [Start Damage Modification].",
            "th-TH": "The current number of Damage Modification instances started from the Start Damage Modification Action.",
            "tr-TR": "Hasar Düzenlemesini Başlat Eylemi'nden itibaren mevcut Hasar Düzenlemesi sayısı.",
            "zh-CN": "由“开始伤害调整”动作启动的伤害调整副本的当前数量。",
            "zh-TW": "The current number of Damage Modification instances started from the Start Damage Modification Action."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9C",
        "en-US": "Damage Modification Count",
        "es-MX": "Conteo de modificación de daño",
        "fr-FR": "Nombre de modifications de dégâts",
        "ja-JP": "ダメージ変更数",
        "pt-BR": "Contagem de Modificação de Dano",
        "tr-TR": "Hasar Düzenlemesi Sayısı",
        "zh-CN": "伤害调整数量",
        "de-DE": "Damage Modification Count",
        "es-ES": "Damage Modification Count",
        "it-IT": "Damage Modification Count",
        "ko-KR": "Damage Modification Count",
        "pl-PL": "Damage Modification Count",
        "ru-RU": "Damage Modification Count",
        "th-TH": "Damage Modification Count",
        "zh-TW": "Damage Modification Count"
    },
    "getNumberOfDeadPlayers": {
        "description": {
            "en-US": "The number of dead players on a team or in the match."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to count players."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B29A",
        "en-US": "Number Of Dead Players",
        "de-DE": "Number of Dead Players",
        "es-MX": "Cantidad de jugadores muertos",
        "fr-FR": "Nombre de joueurs morts",
        "it-IT": "Number of Dead Players",
        "ja-JP": "倒れたプレイヤーの数",
        "pt-BR": "Número de Jogadores Mortos",
        "tr-TR": "Ölü Oyuncu Sayısı",
        "zh-CN": "死亡玩家数量",
        "es-ES": "Number Of Dead Players",
        "ko-KR": "Number Of Dead Players",
        "pl-PL": "Number Of Dead Players",
        "ru-RU": "Number Of Dead Players",
        "th-TH": "Number Of Dead Players",
        "zh-TW": "Number Of Dead Players"
    },
    "getNumberOfDamageOverTimeIds": {
        "description": {
            "en-US": "The current number of Damage Over Time instances started from the Damage Over Time action."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B99",
        "en-US": "Damage Over Time Count",
        "es-MX": "Conteo de daño con el tiempo",
        "fr-FR": "Nombre de dégâts sur la durée",
        "ja-JP": "継続ダメージ数",
        "pt-BR": "Contagem de Dano ao Longo do Tempo",
        "tr-TR": "Zamanla Hasar Miktarı",
        "zh-CN": "持续伤害数量",
        "de-DE": "Damage Over Time Count",
        "es-ES": "Damage Over Time Count",
        "it-IT": "Damage Over Time Count",
        "ko-KR": "Damage Over Time Count",
        "pl-PL": "Damage Over Time Count",
        "ru-RU": "Damage Over Time Count",
        "th-TH": "Damage Over Time Count",
        "zh-TW": "Damage Over Time Count"
    },
    "getNumberOfEntityIds": {
        "description": {
            "en-US": "The current number of Entities created from the Create Effect Create Beam Effect or Create Icon Action.",
            "de-DE": "Die aktuelle Anzahl an Entitäten die durch die Aktion [Create Effect] [Create Beam Effect] oder [Create Icon] erstellt wurden.",
            "es-ES": "El número actual de entidades creadas por las acciones «Create Effect» «Create Beam Effect» o «Create Icon».",
            "es-MX": "El número actual de entidades creadas de la acción Crear efecto Crear efecto de rayo o Crear ícono.",
            "fr-FR": "Le nombre actuel d’entités créées à partir de l’action « Créer un effet » « Créer un effet de rayon » ou « Créer une icône ».",
            "it-IT": "Il numero attuale di entità create dall'Azione Create Effect Create Beam Effect o Create Icon.",
            "ja-JP": "「エフェクトを作成」「ビーム・エフェクトを作成」または「アイコンを作成」アクションによって作成されたエンティティの現在数",
            "ko-KR": "Create Effect Create Beam Effect Create Icon 액션으로 생성한 개체의 현재 개수입니다.",
            "pl-PL": "Bieżąca liczba encji stworzonych działaniem „Create Effect” Stwórz efekt „Create Beam Effect” Stwórz efekt wiązki lub Create Icon Stwórz ikonę.",
            "pt-BR": "O número atual de Entidades criadas a partir de Criar Efeito Criar Efeito de Feixe e Criar Ícone de Ação.",
            "ru-RU": "Текущее количество экземпляров созданных действиями [Create Effect] [Create Beam Effect] или [Create Icon Action].",
            "th-TH": "The current number of Entities created from the Create Effect Create Beam Effect or Create Icon Action.",
            "tr-TR": "Efekt Oluştur Işın Efekti Oluştur veya Simge Oluştur Eylemi ile oluşturulan Varlıkların mevcut sayısı.",
            "zh-CN": "由“创建效果”、“创建光束效果”或“创建图标”动作创建的实体的当前数量。",
            "zh-TW": "The current number of Entities created from the Create Effect Create Beam Effect or Create Icon Action."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9F",
        "en-US": "Entity Count",
        "es-MX": "Conteo de entidad",
        "fr-FR": "Nombre d’entités",
        "ja-JP": "エンティティ数",
        "pt-BR": "Contagem de Entidade",
        "tr-TR": "Varlık Sayısı",
        "zh-CN": "实体数量",
        "de-DE": "Entity Count",
        "es-ES": "Entity Count",
        "it-IT": "Entity Count",
        "ko-KR": "Entity Count",
        "pl-PL": "Entity Count",
        "ru-RU": "Entity Count",
        "th-TH": "Entity Count",
        "zh-TW": "Entity Count"
    },
    "getNumberOfHealingModificationIds": {
        "description": {
            "en-US": "The current number of Healing Modification instances started from the Start Healing Modification Action.",
            "de-DE": "Die aktuelle Anzahl an Instanzen von Heilungsmodifikationen die durch die Aktion [Start Healing Modification] gestartet wurden.",
            "es-ES": "El número actual de instancias de modificación de sanación iniciadas por la acción «Start Healing Modification».",
            "es-MX": "El número actual de instancias de modificación de sanación iniciadas desde la acción Comenzar modificación de sanación.",
            "fr-FR": "Le nombre actuel d’instances de modification des soins commencées à partir de l’action « Lancer la modification des soins ».",
            "it-IT": "Il numero attuale di istanze di modifica delle cure iniziate dall'Azione Start Healing Modification.",
            "ja-JP": "「回復変更を開始」アクションで開始された回復変更のインスタンスの現在数",
            "ko-KR": "Start Healing Modification 액션에서 시작된 Healing Modification 인스턴스의 현재 개수입니다.",
            "pl-PL": "Bieżąca liczba instancji modyfikacji leczenia uruchomionych z działania „Start Healing Modification” Początek modyfikacji leczenia.",
            "pt-BR": "O número atual de instâncias de Modificação de Cura iniciadas pela Ação Modificação de Cura.",
            "ru-RU": "Текущее количество экземпляров модификации исцеления запущенных действием [Start Healing Modification].",
            "th-TH": "The current number of Healing Modification instances started from the Start Healing Modification Action.",
            "tr-TR": "İyileştirme Düzenlemesini Başlat Eylemi'nden itibaren mevcut İyileştirme Düzenlemesi sayısı.",
            "zh-CN": "由“开始治疗调整”动作启动的治疗调整副本的当前数量。",
            "zh-TW": "The current number of Healing Modification instances started from the Start Healing Modification Action."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9D",
        "en-US": "Healing Modification Count",
        "es-MX": "Conteo de modificación de sanación",
        "fr-FR": "Nombre de modifications de soins",
        "ja-JP": "回復変更数",
        "pt-BR": "Contagem de Modificação de Cura",
        "tr-TR": "İyileştirme Düzenlemesi Sayısı",
        "zh-CN": "治疗调整数量",
        "de-DE": "Healing Modification Count",
        "es-ES": "Healing Modification Count",
        "it-IT": "Healing Modification Count",
        "ko-KR": "Healing Modification Count",
        "pl-PL": "Healing Modification Count",
        "ru-RU": "Healing Modification Count",
        "th-TH": "Healing Modification Count",
        "zh-TW": "Healing Modification Count"
    },
    "getNumberOfHeroes": {
        "description": {
            "en-US": "The number of players playing a specific hero on a team or in the match."
        },
        "args": [
            {
                "name": "hero",
                "description": {
                    "en-US": "The hero to check for play."
                },
                "type": "Hero"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to check for the hero being played."
                },
                "type": "Team",
                "default": "TEAM"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B296",
        "en-US": "Number Of Heroes",
        "de-DE": "Number of Heroes",
        "es-MX": "Cantidad de héroes",
        "fr-FR": "Nombre de héros",
        "it-IT": "Number of Heroes",
        "ja-JP": "ヒーローの数",
        "pt-BR": "Número de Heróis",
        "tr-TR": "Kahraman Sayısı",
        "zh-CN": "英雄数量",
        "es-ES": "Number Of Heroes",
        "ko-KR": "Number Of Heroes",
        "pl-PL": "Number Of Heroes",
        "ru-RU": "Number Of Heroes",
        "th-TH": "Number Of Heroes",
        "zh-TW": "Number Of Heroes"
    },
    "getNumberOfHealingOverTimeIds": {
        "description": {
            "en-US": "The current number of Heal Over Time instances started from the Heal Over Time action."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9A",
        "en-US": "Heal Over Time Count",
        "es-MX": "Conteo de sanación con el tiempo",
        "fr-FR": "Nombre de soins sur la durée",
        "ja-JP": "継続回復数",
        "pt-BR": "Contagem de Cura ao Longo do Tempo",
        "tr-TR": "Zamanla İyileştirme Sayısı",
        "zh-CN": "持续治疗数量",
        "de-DE": "Heal Over Time Count",
        "es-ES": "Heal Over Time Count",
        "it-IT": "Heal Over Time Count",
        "ko-KR": "Heal Over Time Count",
        "pl-PL": "Heal Over Time Count",
        "ru-RU": "Heal Over Time Count",
        "th-TH": "Heal Over Time Count",
        "zh-TW": "Heal Over Time Count"
    },
    "getNumberOfLivingPlayers": {
        "description": {
            "en-US": "The number of living players on a team or in the match."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to count players."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B297",
        "en-US": "Number Of Living Players",
        "de-DE": "Number of Living Players",
        "es-MX": "Cantidad de jugadores vivos",
        "fr-FR": "Nombre de joueurs en vie",
        "it-IT": "Number of Living Players",
        "ja-JP": "生存プレイヤーの数",
        "pt-BR": "Número de Jogadores Vivos",
        "tr-TR": "Yaşayan Oyuncu Sayısı",
        "zh-CN": "存活玩家数量",
        "es-ES": "Number Of Living Players",
        "ko-KR": "Number Of Living Players",
        "pl-PL": "Number Of Living Players",
        "ru-RU": "Number Of Living Players",
        "th-TH": "Number Of Living Players",
        "zh-TW": "Number Of Living Players"
    },
    "getNumberOfPlayers": {
        "description": {
            "en-US": "The number of players on a team or in the match."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to count players."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B295",
        "en-US": "Number Of Players",
        "de-DE": "Number of Players",
        "es-MX": "Cantidad de jugadores",
        "fr-FR": "Nombre de joueurs",
        "it-IT": "Number of Players",
        "ja-JP": "プレイヤーの数",
        "pt-BR": "Número de Jogadores",
        "tr-TR": "Oyuncu Sayısı",
        "zh-CN": "玩家数量",
        "es-ES": "Number Of Players",
        "ko-KR": "Number Of Players",
        "pl-PL": "Number Of Players",
        "ru-RU": "Number Of Players",
        "th-TH": "Number Of Players",
        "zh-TW": "Number Of Players"
    },
    "getNumberOfPlayersOnObjective": {
        "description": {
            "en-US": "The number of players occupying a payload or control point (either on a team or in the match)."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to count players."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": "unsigned int",
        "guid": "00000000B29B",
        "en-US": "Number Of Players On Objective",
        "de-DE": "Number of Players On Objective",
        "es-MX": "Cantidad de jugadores en el objetivo",
        "fr-FR": "Nombre de joueurs sur l’objectif",
        "it-IT": "Number of Players On Objective",
        "ja-JP": "目標を確保中のプレイヤーの数",
        "pt-BR": "Número de Jogadores no Objetivo",
        "tr-TR": "Hedef Üzerindeki Oyuncu Sayısı",
        "zh-CN": "目标点上玩家数量",
        "es-ES": "Number Of Players On Objective",
        "ko-KR": "Number Of Players On Objective",
        "pl-PL": "Number Of Players On Objective",
        "ru-RU": "Number Of Players On Objective",
        "th-TH": "Number Of Players On Objective",
        "zh-TW": "Number Of Players On Objective"
    },
    "getNumberOfSlots": {
        "description": {
            "en-US": "The number of slots on a team or in the match."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to count slots."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "000000011CB7",
        "en-US": "Number Of Slots",
        "es-MX": "Cantidad de puestos",
        "fr-FR": "Nombre d’emplacements",
        "it-IT": "Number of Slots",
        "ja-JP": "スロットの数",
        "pt-BR": "Número de Espaços",
        "tr-TR": "Yuva Sayısı",
        "zh-CN": "栏位数量",
        "de-DE": "Number Of Slots",
        "es-ES": "Number Of Slots",
        "ko-KR": "Number Of Slots",
        "pl-PL": "Number Of Slots",
        "ru-RU": "Number Of Slots",
        "th-TH": "Number Of Slots",
        "zh-TW": "Number Of Slots"
    },
    "getNumberOfTextIds": {
        "description": {
            "en-US": "The current number of Text instances started from the Create HUD Text, Create In-World Text, Create Progress Bar HUD text, or Create Progress Bar In-World Text Action."
        },
        "args": [],
        "return": "unsigned int",
        "guid": "000000012B9B",
        "en-US": "Text Count",
        "es-MX": "Conteo de texto",
        "fr-FR": "Nombre de textes",
        "ja-JP": "テキスト数",
        "pt-BR": "Contagem de Texto",
        "tr-TR": "Metin Sayısı",
        "zh-CN": "文本数量",
        "de-DE": "Text Count",
        "es-ES": "Text Count",
        "it-IT": "Text Count",
        "ko-KR": "Text Count",
        "pl-PL": "Text Count",
        "ru-RU": "Text Count",
        "th-TH": "Text Count",
        "zh-TW": "Text Count"
    },
    "getObjectivePosition": {
        "description": {
            "en-US": "The position in the world of the specified objective (either a control point, a payload checkpoint, or a payload destination). Valid in assault, escort, hybrid, and control."
        },
        "args": [
            {
                "name": "number",
                "description": {
                    "en-US": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index.",
                    "de-DE": "Der Index des zu berücksichtigenden Zielpunkts ab 0 gezählt. Jeder Kontrollpunkt Fracht-Checkpoint und Frachtzielpunkt hat seinen eigenen Index.",
                    "es-ES": "Índice del objetivo que se considera empezando a contar desde 0. Cada punto del modo control punto de control de la carga y destino de la carga tiene su propio índice.",
                    "es-MX": "El índice del objetivo que se considerará la cuenta comienza de 0 en adelante. Cada punto de captura punto de control de la carga y destino de la carga tiene su propio índice.",
                    "fr-FR": "L’index de l’objectif à prendre en compte débutant à 0 et progressant. Chaque point de contrôle point de contrôle de convoi et destination de convoi possède son propre index.",
                    "it-IT": "L'indice dell'obiettivo da considerare che incrementa a partire da 0. Ogni punto di controllo checkpoint del carico e destinazione del carico ha il suo indice specifico.",
                    "ja-JP": "検討される目標のインデックス。カウントは0から開始される。各コントロール・ポイント、ペイロード・チェックポイント、ペイロード目的地にはそれぞれにインデックスがある",
                    "ko-KR": "고려해야 하는 목표의 인덱스로서 0에서 시작하여 증가합니다. 각 거점 화물 경유지 화물 목적지에는 각기 고유의 인덱스가 있습니다.",
                    "pl-PL": "Indeks zadania do uwzględnienia zaczynając od 0 i licząc w górę. Każdy punkt kontrolny punkt kontrolny ładunku i miejsce docelowe ładunku posiadają własny indeks.",
                    "pt-BR": "O índice do objetivo a ser considerado iniciando em 0 e somando. Cada ponto de controle ponto de verificação de carga e destino de carga tem seu próprio índice.",
                    "ru-RU": "Индекс рассматриваемой задачи от 0 и выше. Каждая контрольная точка объект контрольная или конечная точка доставки груза имеют свой индекс.",
                    "th-TH": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index.",
                    "tr-TR": "Dikkate alınacak hedefin 0'dan başlanarak hesaplanan indeksi. Her kontrol noktasının navlun kontrol noktasının ve navlun varış noktasının indeksi vardır.",
                    "zh-CN": "考察的目标点的索引，从0开始逐渐累加。每个控制点、运载目标检查点、运载目标目的地都有其独自的索引。",
                    "zh-TW": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "return": "Position",
        "guid": "00000000B355",
        "en-US": "Objective Position",
        "es-MX": "Posición del objetivo",
        "fr-FR": "Position de l’objectif",
        "ja-JP": "目標の位置",
        "pt-BR": "Posição do Objetivo",
        "tr-TR": "Hedef Konumu",
        "zh-CN": "目标位置",
        "de-DE": "Objective Position",
        "es-ES": "Objective Position",
        "it-IT": "Objective Position",
        "ko-KR": "Objective Position",
        "pl-PL": "Objective Position",
        "ru-RU": "Objective Position",
        "th-TH": "Objective Position",
        "zh-TW": "Objective Position"
    },
    "getOppositeTeam": {
        "description": {
            "en-US": "The team opposite the specified team."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose opposite to acquire. If all, the result will be all."
                },
                "type": "Team"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Team",
        "guid": "00000000BB0A",
        "en-US": "Opposite Team Of",
        "es-MX": "Equipo contrario de",
        "fr-FR": "Équipe opposée à",
        "ja-JP": "相手チーム: ",
        "pt-BR": "Equipe Adversária de",
        "tr-TR": "Karşı Takımı",
        "zh-CN": "对方队伍",
        "de-DE": "Opposite Team Of",
        "es-ES": "Opposite Team Of",
        "it-IT": "Opposite Team Of",
        "ko-KR": "Opposite Team Of",
        "pl-PL": "Opposite Team Of",
        "ru-RU": "Opposite Team Of",
        "th-TH": "Opposite Team Of",
        "zh-TW": "Opposite Team Of"
    },
    "getPayloadPosition": {
        "description": {
            "en-US": "The position in the world of the active payload.",
            "de-DE": "Die Position der aktiven Fracht in der Welt.",
            "es-ES": "Posición en el mundo de la carga activa.",
            "es-MX": "La posición en el mundo de la carga activa.",
            "fr-FR": "La position dans le monde du convoi actif.",
            "it-IT": "La posizione nel mondo di gioco del carico attivo.",
            "ja-JP": "アクティブなペイロードのワールド内位置",
            "ko-KR": "월드 내의 활성화된 화물 위치입니다.",
            "pl-PL": "Pozycja aktywnego ładunku w świecie.",
            "pt-BR": "A posição da carga ativa no mundo.",
            "ru-RU": "Местоположение активного груза в игровом мире.",
            "th-TH": "ตําแหน่งในโลกของเพย์โหลดที่ใช้งานอยู่",
            "tr-TR": "Etkin navlunun dünyadaki konumu.",
            "zh-CN": "已激活的运载目标在地图中的位置。",
            "zh-TW": "The position in the world of the active payload."
        },
        "args": [],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000B356",
        "en-US": "Payload Position",
        "es-MX": "Posición de la carga",
        "fr-FR": "Position du convoi",
        "ja-JP": "ペイロードの位置",
        "pt-BR": "Posição da Carga",
        "tr-TR": "Navlun Konumu",
        "zh-CN": "运载目标位置",
        "de-DE": "Payload Position",
        "es-ES": "Payload Position",
        "it-IT": "Payload Position",
        "ko-KR": "Payload Position",
        "pl-PL": "Payload Position",
        "ru-RU": "Payload Position",
        "th-TH": "Payload Position",
        "zh-TW": "Payload Position"
    },
    "getPayloadProgressPercentage": {
        "description": {
            "en-US": "The current progress towards the destination for the active payload expressed as a percentage.",
            "de-DE": "Der aktuelle Fortschritt zum Zielort für die aktive Fracht als Prozentsatz dargestellt.",
            "es-ES": "Progreso actual hasta el destino de la carga activa expresado en forma de porcentaje.",
            "es-MX": "El progreso actual hacia el destino de la carga activa expresado como porcentaje.",
            "fr-FR": "La progression actuelle du convoi actif vers sa destination exprimée en pourcentage.",
            "it-IT": "Il progresso attuale verso la destinazione del carico attivo espresso in percentuale.",
            "ja-JP": "アクティブなペイロードの、目的地に向けた現在の進行度（パーセントで表示）",
            "ko-KR": "해당 활성화 화물의 목적지까지 진행률입니다비율로 표시됨.",
            "pl-PL": "Bieżący postęp dotarcia aktywnego ładunku do miejsca docelowego wyrażony w procentach.",
            "pt-BR": "O progresso atual rumo ao destino da carga ativa expresso em percentual.",
            "ru-RU": "Степень продвижения к конечной точке доставки активного груза в данный момент выражается в процентах.",
            "th-TH": "ความคืบหน้าปัจจุบันไปยังปลายทางสําหรับเพย์โหลดที่ใช้งานอยู่ แสดงเป็นเปอร์เซ็นต์",
            "tr-TR": "Etkin navlun için varış noktasına doğru olan mevcut ilerleyiş yüzde olarak gösterilir.",
            "zh-CN": "已激活的运载目标前往目标地的当前进度（以百分比表示）。",
            "zh-TW": "The current progress towards the destination for the active payload expressed as a percentage."
        },
        "args": [],
        "return": "unsigned float",
        "guid": "00000000B357",
        "en-US": "Payload Progress Percentage",
        "es-MX": "Porcentaje de progreso de la carga",
        "fr-FR": "Pourcentage de progression du convoi",
        "ja-JP": "ペイロード進行のパーセンテージ",
        "pt-BR": "Percentual de Progresso da Carga",
        "tr-TR": "Navlun İlerleyiş Yüzdesi",
        "zh-CN": "运载目标进度百分比",
        "de-DE": "Payload Progress Percentage",
        "es-ES": "Payload Progress Percentage",
        "it-IT": "Payload Progress Percentage",
        "ko-KR": "Payload Progress Percentage",
        "pl-PL": "Payload Progress Percentage",
        "ru-RU": "Payload Progress Percentage",
        "th-TH": "Payload Progress Percentage",
        "zh-TW": "Payload Progress Percentage"
    },
    "getPeakServerLoad": {
        "guid": "00000000C996",
        "description": {
            "en-US": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "de-DE": "Gibt die höchste CPU-Belastung der letzten 2 Sekunden der aktuellen Spielinstanz als Prozentsatz an. Wenn diese Zahl 100 erreicht oder überschreitet wird es immer wahrscheinlicher dass die Instanz geschlossen wird weil sie zu viele Ressourcen verbraucht.",
            "es-ES": "Muestra un porcentaje que representa la carga máxima de CPU en la instancia de la partida actual durante los últimos 2 segundos. Cuando este número se acerque a 100 o lo supere será cada vez más probable que se cierre la instancia por estar consumiendo demasiados recursos.",
            "es-MX": "Muestra un porcentaje que representa el uso máximo del procesador de la instancia de juego actual durante los últimos dos segundos. A medida que el número alcanza o supera el 100 % aumenta la probabilidad de que esa instancia se cierre ya que está consumiendo demasiados recursos.",
            "fr-FR": "Affiche un pourcentage représentant la charge la plus élevée qu’a fait peser l’instance actuelle du jeu sur le processeur dans les deux dernières secondes. Quand cette valeur approche ou dépasse 100 il est fortement probable que l’instance se ferme car elle consomme trop de ressources.",
            "it-IT": "Mostra una percentuale del carico massimo sulla CPU dell'istanza di gioco attuale negli ultimi due secondi. Una volta che questo numero si avvicina o supera quota 100 è molto probabile che l'istanza venga chiusa per consumo eccessivo di risorse.",
            "ja-JP": "現在のゲームインスタンスの、直近の2秒間におけるCPU負荷の最高値を表すパーセンテージ。この数字が100に近づく、または超えた場合、リソースの過剰消費でインスタンスがシャットダウンされる可能性が高まる",
            "ko-KR": "최근 2초간 게임 인스턴스의 최대 CPU 사용률%입니다. 이 수치가 100에 가까워지거나 100을 초과하면 과도한 리소스 사용으로 인스턴스가 종료될 가능성이 크게 증가합니다.",
            "pl-PL": "Procentowy wskaźnik najwyższego obciążenia głównego procesora przez bieżącą instancję gry w ostatnich dwóch sekundach. Kiedy wartość zbliża się lub przekracza 100 rośnie prawdopodobieństwo że program zostanie zamknięty z powodu zużycia zbyt dużych zasobów systemowych.",
            "pt-BR": "Mostra uma porcentagem que representa o pico de uso de CPU da instância de jogo atual nos últimos dois segundos. Se o número se aproximar ou passar de 100 será bem mais provável que a instância seja encerrada por consumir recursos demais.",
            "ru-RU": "Выводит процент пиковой загрузки ЦП в текущей игре за последние 2 секунды. Чем ближе это значение к 100 тем выше вероятность того что игра прервется из-за чрезмерного потребления ресурсов.",
            "th-TH": "Provides a percentage representing the highest CPU load of the current game instance over the last two seconds. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "tr-TR": "Son iki saniyedeki mevcut oyun örneğinin en yüksek CPU yükünü temsil eden yüzdeyi sağlar. Bu sayı 100 değerine ulaşırsa veya bu değeri geçerse çok fazla kaynak harcaması sebebiyle oluşumun kapatılma olasılığı artar.",
            "zh-CN": "当前游戏副本在过去2秒内造成的最高CPU负载百分比。如果这个数字接近或者超过100，表示此游戏副本消耗了过多资源，游戏很可能会关闭。",
            "zh-TW": "此百分比數字會顯示當前遊戲在前兩秒時的CPU最高負載狀態。當這個數字接近或超出100，遊戲極有可能會因消耗過多資源而關閉。"
        },
        "args": [],
        "return": "unsigned float",
        "en-US": "Server Load Peak",
        "es-MX": "Uso máximo del servidor",
        "fr-FR": "Pic de charge du serveur",
        "ja-JP": "サーバー負荷ピーク",
        "pt-BR": "Pico de Uso do Servidor",
        "tr-TR": "Sunucu Doluluk En Üst Noktası",
        "zh-CN": "服务器负载峰值",
        "de-DE": "Server Load Peak",
        "es-ES": "Server Load Peak",
        "it-IT": "Server Load Peak",
        "ko-KR": "Server Load Peak",
        "pl-PL": "Server Load Peak",
        "ru-RU": "Server Load Peak",
        "th-TH": "Server Load Peak",
        "zh-TW": "Server Load Peak"
    },
    "getPlayers": {
        "description": {
            "en-US": "An array containing all players on a team or in the match."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which players may come."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B261",
        "en-US": "All Players",
        "es-MX": "Todos los jugadores",
        "fr-FR": "Tous les joueurs",
        "ja-JP": "すべてのプレイヤー",
        "pt-BR": "Todos os Jogadores",
        "tr-TR": "Tüm Oyuncular",
        "zh-CN": "所有玩家",
        "de-DE": "All Players",
        "es-ES": "All Players",
        "it-IT": "All Players",
        "ko-KR": "All Players",
        "pl-PL": "All Players",
        "ru-RU": "All Players",
        "th-TH": "All Players",
        "zh-TW": "All Players"
    },
    "getPlayersInRadius": {
        "description": {
            "en-US": "An array containing all players within a certain distance of a position, optionally restricted by team and line of sight.\n\n**Note**: This function picks up dead players. Use `getRealPlayersInRadius()` instead."
        },
        "args": [
            {
                "name": "center",
                "description": {
                    "en-US": "The center position from which to measure distance.",
                    "de-DE": "Die zentrale Position von der die Distanz gemessen wird.",
                    "es-ES": "Posición central desde la que se mide la distancia.",
                    "es-MX": "La posición central desde la cual se medirá la distancia.",
                    "fr-FR": "La position centrale à partir de laquelle mesurer la distance.",
                    "it-IT": "La posizione centrale dalla quale misurare la distanza.",
                    "ja-JP": "距離を計測するための中央位置",
                    "ko-KR": "거리 측정이 시작되는 중간 위치입니다.",
                    "pl-PL": "Pozycja środkowa z której mierzy się odległość.",
                    "pt-BR": "A posição central da qual a distância será medida.",
                    "ru-RU": "Центральная точка от которой измеряется расстояние.",
                    "th-TH": "The center position from which to measure distance.",
                    "tr-TR": "Uzaklığın ölçüleceği merkez konumu.",
                    "zh-CN": "以此位置为中心测定距离。",
                    "zh-TW": "The center position from which to measure distance."
                },
                "type": "Position"
            },
            {
                "name": "radius",
                "description": {
                    "en-US": "The radius in meters inside which players must be in order to be included in the resulting array."
                },
                "type": "unsigned float"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams to which a player must belong to be included in the resulting array."
                },
                "type": "Team",
                "default": "ALL"
            },
            {
                "name": "losCheck",
                "description": {
                    "en-US": "Specifies whether and how a player must pass a line-of-sight check to be included in the resulting array."
                },
                "type": "LosCheck",
                "default": "OFF"
            }
        ],
        "canBePutInBoolean": false,
        "return": {
            "Array": "Player"
        },
        "hideFromAutocomplete": true,
        "guid": "00000000B1E0",
        "en-US": "Players Within Radius",
        "es-MX": "Jugadores dentro del radio",
        "fr-FR": "Joueurs dans un rayon",
        "ja-JP": "範囲内のプレイヤー",
        "pt-BR": "Jogadores no Raio",
        "tr-TR": "Yarıçap İçerisindeki Oyuncular",
        "zh-CN": "范围内玩家",
        "de-DE": "Players Within Radius",
        "es-ES": "Players Within Radius",
        "it-IT": "Players Within Radius",
        "ko-KR": "Players Within Radius",
        "pl-PL": "Players Within Radius",
        "ru-RU": "Players Within Radius",
        "th-TH": "Players Within Radius",
        "zh-TW": "Players Within Radius"
    },
    "getPlayersInSlot": {
        "description": {
            "en-US": "The player or array of players who occupy a specific slot in the game."
        },
        "args": [
            {
                "name": "slot",
                "description": {
                    "en-US": "The slot number from which to acquire a player or players. In team games, each team has slots 0 through 5. In free-for-all games, slots are numbered 0 through 11."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which to acquire a player or players."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": [
            "Player",
            {
                "Array": "Player"
            }
        ],
        "canBePutInBoolean": false,
        "guid": "00000000B334",
        "en-US": "Players In Slot",
        "es-MX": "Jugadores en el puesto",
        "fr-FR": "Joueurs dans l’emplacement",
        "ja-JP": "スロットに入ったプレイヤー",
        "pt-BR": "Jogadores no Espaço",
        "tr-TR": "Yuvadaki Oyuncular",
        "zh-CN": "此栏位的玩家",
        "de-DE": "Players In Slot",
        "es-ES": "Players In Slot",
        "it-IT": "Players In Slot",
        "ko-KR": "Players In Slot",
        "pl-PL": "Players In Slot",
        "ru-RU": "Players In Slot",
        "th-TH": "Players In Slot",
        "zh-TW": "Players In Slot"
    },
    "getPlayersNotOnObjective": {
        "description": {
            "en-US": "An array containing all players occupying neither a payload nor a control point (either on a team or in the match)."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which players may come."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B267",
        "en-US": "All Players Not On Objective",
        "es-MX": "Todos los jugadores que no están en el objetivo",
        "fr-FR": "Tous les joueurs éloignés de l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中ではない",
        "pt-BR": "Todos os Jogadores Fora do Objetivo",
        "tr-TR": "Hedefte Olmayan Tüm Oyuncular",
        "zh-CN": "所有目标点外玩家",
        "de-DE": "All Players Not On Objective",
        "es-ES": "All Players Not On Objective",
        "it-IT": "All Players Not On Objective",
        "ko-KR": "All Players Not On Objective",
        "pl-PL": "All Players Not On Objective",
        "ru-RU": "All Players Not On Objective",
        "th-TH": "All Players Not On Objective",
        "zh-TW": "All Players Not On Objective"
    },
    "getPlayersOnHero": {
        "description": {
            "en-US": "The array of players playing a specific hero on a team or in the match."
        },
        "args": [
            {
                "name": "hero",
                "description": {
                    "en-US": "The hero to check for play."
                },
                "type": "Hero"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to check for the hero being played."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "canBePutInBoolean": false,
        "return": {
            "Array": "Player"
        },
        "guid": "00000000B338",
        "en-US": "Players On Hero",
        "es-MX": "Jugadores con el héroe",
        "fr-FR": "Joueurs sur le héros",
        "ja-JP": "ヒーローを使用中のプレイヤー",
        "pt-BR": "Jogadores Usando o Herói",
        "tr-TR": "Kahramanları Oynayan Oyuncular",
        "zh-CN": "选择英雄的玩家",
        "de-DE": "Players On Hero",
        "es-ES": "Players On Hero",
        "it-IT": "Players On Hero",
        "ko-KR": "Players On Hero",
        "pl-PL": "Players On Hero",
        "ru-RU": "Players On Hero",
        "th-TH": "Players On Hero",
        "zh-TW": "Players On Hero"
    },
    "getPlayersOnObjective": {
        "description": {
            "en-US": "An array containing all players occupying a payload or control point (either on a team or in the match)."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams from which players may come."
                },
                "type": "Team",
                "default": "ALL"
            }
        ],
        "return": {
            "Array": "Player"
        },
        "canBePutInBoolean": false,
        "guid": "00000000B266",
        "en-US": "All Players On Objective",
        "es-MX": "Todos los jugadores que están en el objetivo",
        "fr-FR": "Tous les joueurs sur l’objectif",
        "ja-JP": "プレイヤー全員が目標を確保中",
        "pt-BR": "Todos os Jogadores no Objetivo",
        "tr-TR": "Hedefte Olan Tüm Oyuncular",
        "zh-CN": "所有目标点内玩家",
        "de-DE": "All Players On Objective",
        "es-ES": "All Players On Objective",
        "it-IT": "All Players On Objective",
        "ko-KR": "All Players On Objective",
        "pl-PL": "All Players On Objective",
        "ru-RU": "All Players On Objective",
        "th-TH": "All Players On Objective",
        "zh-TW": "All Players On Objective"
    },
    "getServerLoad": {
        "guid": "00000000C961",
        "description": {
            "en-US": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "de-DE": "Gibt die CPU-Belastung der aktuellen Spielinstanz als Prozentsatz an. Wenn diese Zahl 100 erreicht oder überschreitet wird es immer wahrscheinlicher dass die Instanz geschlossen wird weil sie zu viele Ressourcen verbraucht.",
            "es-ES": "Muestra un porcentaje que representa la carga de CPU en la instancia actual de la partida. Cuando este número se acerque a 100 o lo supere será cada vez más probable que se cierre la instancia por estar consumiendo demasiados recursos.",
            "es-MX": "Muestra un porcentaje que representa el uso del procesador de la instancia de juego actual. A medida que el número alcanza o supera el 100 % aumenta la probabilidad de que esa instancia se cierre ya que está consumiendo demasiados recursos.",
            "fr-FR": "Affiche un pourcentage représentant la charge que fait peser l’instance actuelle du jeu sur le processeur. Quand cette valeur approche ou dépasse 100 il est fortement probable que l’instance se ferme car elle consomme trop de ressources.",
            "it-IT": "Mostra una percentuale del carico sulla CPU dell'istanza di gioco attuale. Una volta che questo numero si avvicina o supera quota 100 è molto probabile che l'istanza venga chiusa per consumo eccessivo di risorse.",
            "ja-JP": "現在のゲームインスタンスのCPU負荷を表すパーセンテージ。この数字が100に近づく、または超えた場合、リソースの過剰消費でインスタンスがシャットダウンされる可能性が高まる",
            "ko-KR": "현재 게임 인스턴스의 CPU 사용률%입니다. 이 수치가 100에 가까워지거나 100을 초과하면 과도한 리소스 사용으로 인스턴스가 종료될 가능성이 크게 증가합니다.",
            "pl-PL": "Procentowy wskaźnik obciążenia głównego procesora przez bieżącą instancję gry. Kiedy wartość zbliża się lub przekracza 100 rośnie prawdopodobieństwo że program zostanie zamknięty z powodu zużycia zbyt dużych zasobów systemowych.",
            "pt-BR": "Mostra uma porcentagem que representa o uso de CPU da instância de jogo atual. Se o número se aproximar ou passar de 100 será bem mais provável que a instância seja encerrada por consumir recursos demais.",
            "ru-RU": "Выводит процент загрузки ЦП в текущей игре. Чем ближе это значение к 100 тем выше вероятность того что игра прервется из-за чрезмерного потребления ресурсов.",
            "th-TH": "Provides a percentage representing the CPU load of the current game instance. As this number approaches or exceeds 100 it becomes increasingly likely that the instance will be shut down because it is consuming too many resources.",
            "tr-TR": "Mevcut oyun örneğinin CPU yükünü temsil eden yüzdeyi sağlar. Bu sayı 100 değerine ulaşırsa veya bu değeri geçerse çok fazla kaynak harcaması sebebiyle oluşumun kapatılma olasılığı artar.",
            "zh-CN": "当前游戏副本造成的CPU负载百分比。如果这个数字接近或者超过100，表示此游戏副本消耗了过多资源，游戏很可能会关闭。",
            "zh-TW": "此百分比數字會顯示當前遊戲的CPU負載狀態。當這個數字接近或超出100，遊戲極有可能會因消耗過多資源而關閉。"
        },
        "args": [],
        "return": "unsigned float",
        "en-US": "Server Load",
        "es-MX": "Uso del servidor",
        "fr-FR": "Charge du serveur",
        "ja-JP": "サーバー負荷",
        "pt-BR": "Uso do Servidor",
        "tr-TR": "Sunucu Doluluğu",
        "zh-CN": "服务器负载",
        "de-DE": "Server Load",
        "es-ES": "Server Load",
        "it-IT": "Server Load",
        "ko-KR": "Server Load",
        "pl-PL": "Server Load",
        "ru-RU": "Server Load",
        "th-TH": "Server Load",
        "zh-TW": "Server Load"
    },
    "getSpawnPoints": {
        "description": {
            "en-US": "The active spawn points for a team or for the match, provided as an array of position vectors."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose spawn points to acquire."
                },
                "type": "Team"
            }
        ],
        "return": {
            "Array": "Position"
        },
        "guid": "000000011FE7",
        "en-US": "Spawn Points",
        "es-MX": "Puntos de aparición",
        "fr-FR": "Points d’apparition",
        "ja-JP": "リスポーン地点",
        "pt-BR": "Pontos de Ressurgimento",
        "th-TH": "คะแนนการเกิด",
        "tr-TR": "Başlangıç Noktası",
        "zh-CN": "重生点",
        "de-DE": "Spawn Points",
        "es-ES": "Spawn Points",
        "it-IT": "Spawn Points",
        "ko-KR": "Spawn Points",
        "pl-PL": "Spawn Points",
        "ru-RU": "Spawn Points",
        "zh-TW": "Spawn Points"
    },
    "getSupportHeroes": {
        "description": {
            "en-US": "The array of all support heroes in overwatch. Note that the order is not guaranteed and the position of later heroes can and will change with the addition of new heroes."
        },
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40B",
        "en-US": "All Support Heroes",
        "de-DE": "Alle Unterstützungshelden",
        "es-MX": "Todos los héroes de apoyo",
        "fr-FR": "Tous les héros de soutien",
        "ja-JP": "全サポートヒーロー",
        "pt-BR": "Todos os Heróis de Suporte",
        "tr-TR": "Tüm Destek Kahramanları",
        "zh-CN": "所有支援英雄",
        "es-ES": "All Support Heroes",
        "it-IT": "All Support Heroes",
        "ko-KR": "All Support Heroes",
        "pl-PL": "All Support Heroes",
        "ru-RU": "All Support Heroes",
        "th-TH": "All Support Heroes",
        "zh-TW": "All Support Heroes"
    },
    "getTankHeroes": {
        "description": {
            "en-US": "The array of all tank heroes in overwatch. Note that the order is not guaranteed and the position of later heroes can and will change with the addition of new heroes."
        },
        "args": [],
        "isConstant": true,
        "return": {
            "Array": "Hero"
        },
        "canBePutInBoolean": false,
        "guid": "00000000D40C",
        "en-US": "All Tank Heroes",
        "de-DE": "Alle Tankhelden",
        "es-MX": "Todos los héroes tanques",
        "fr-FR": "Tous les héros tanks",
        "ja-JP": "全タンクヒーロー",
        "pt-BR": "Todos os Heróis de Tanque",
        "tr-TR": "Tüm Tank Kahramanları",
        "zh-CN": "所有重装英雄",
        "es-ES": "All Tank Heroes",
        "it-IT": "All Tank Heroes",
        "ko-KR": "All Tank Heroes",
        "pl-PL": "All Tank Heroes",
        "ru-RU": "All Tank Heroes",
        "th-TH": "All Tank Heroes",
        "zh-TW": "All Tank Heroes"
    },
    "getTotalTimeElapsed": {
        "description": {
            "en-US": "The total time in seconds that have elapsed since the game instance was created including setup time and transitions.",
            "de-DE": "Die vergangene Gesamtzeit in Sekunden seit die Spielinstanz erstellt wurde einschließlich Aufstellungszeit und Übergängen.",
            "es-ES": "Tiempo total en segundos que ha transcurrido desde la creación de la instancia de partida incluidos el tiempo de preparación y las transiciones.",
            "es-MX": "El tiempo total en segundos que ha transcurrido desde que se creó la instancia de la partida incluye el tiempo de preparación y las transiciones.",
            "fr-FR": "Temps total en secondes écoulé depuis la création de l’instance de partie y compris le temps de configuration et les transitions.",
            "it-IT": "Il tempo totale in secondi trascorso dalla creazione dell'istanza di gioco incluso il tempo della fase di Organizzazione e le transizioni.",
            "ja-JP": "ゲーム・インスタンス作成から経過した合計秒数（セットアップや移行の時間を含む）",
            "ko-KR": "게임 인스턴스 생성 후 경과 시간단위: 초입니다설정 및 전환 시간 포함.",
            "pl-PL": "Łączny czas w sekundach który minął odkąd stworzono instancję gry wliczając czas ustawiania i przejść.",
            "pt-BR": "O tempo total em segundos que se passou desde que a instância de jogo foi criada incluindo tempo de preparação e transições.",
            "ru-RU": "Общее время в секундах прошедшее с момента создания экземпляра игры включая время подготовки и замены.",
            "th-TH": "The total time in seconds that have elapsed since the game instance was created including setup time and transitions.",
            "tr-TR": "Oyun örneğinin oluşturulmasından beri geçen saniye cinsinden toplam süre kurulum süresi ve geçişler dâhil.",
            "zh-CN": "该游戏副本创建后已经过去的总时间（包括准备时间和攻防转换时间），以秒为单位。",
            "zh-TW": "The total time in seconds that have elapsed since the game instance was created including setup time and transitions."
        },
        "args": [],
        "return": "unsigned float",
        "guid": "00000000B361",
        "en-US": "Total Time Elapsed",
        "es-MX": "Tiempo total transcurrido",
        "fr-FR": "Temps total écoulé",
        "ja-JP": "合計経過時間",
        "pt-BR": "Tempo Total Decorrido",
        "tr-TR": "Toplam Geçen Süre",
        "zh-CN": "总计消耗时间",
        "de-DE": "Total Time Elapsed",
        "es-ES": "Total Time Elapsed",
        "it-IT": "Total Time Elapsed",
        "ko-KR": "Total Time Elapsed",
        "pl-PL": "Total Time Elapsed",
        "ru-RU": "Total Time Elapsed",
        "th-TH": "Total Time Elapsed",
        "zh-TW": "Total Time Elapsed"
    },
    "healee": {
        "description": {
            "en-US": "The player that received the healing for the event currently being processed by this rule. May be the same as the healer or the event player."
        },
        "args": null,
        "return": "Player",
        "guid": "00000000CC1C",
        "en-US": "Healee",
        "es-MX": "Sanado",
        "fr-FR": "Soigné",
        "ja-JP": "回復対象",
        "pt-BR": "Curado",
        "tr-TR": "İyileşen",
        "zh-CN": "受治疗者",
        "de-DE": "Healee",
        "es-ES": "Healee",
        "it-IT": "Healee",
        "ko-KR": "Healee",
        "pl-PL": "Healee",
        "ru-RU": "Healee",
        "th-TH": "Healee",
        "zh-TW": "Healee"
    },
    "healer": {
        "guid": "00000000CC1A",
        "description": {
            "en-US": "The player that dealt the healing for the event currently being processed by this rule. May be the same as the healee or the event player."
        },
        "args": null,
        "return": "Player",
        "en-US": "Healer",
        "es-MX": "Sanador",
        "fr-FR": "Soigneur",
        "ja-JP": "ヒーラー",
        "pt-BR": "Curandeiro",
        "tr-TR": "Şifacı",
        "zh-CN": "治疗者",
        "de-DE": "Healer",
        "es-ES": "Healer",
        "it-IT": "Healer",
        "ko-KR": "Healer",
        "pl-PL": "Healer",
        "ru-RU": "Healer",
        "th-TH": "Healer",
        "zh-TW": "Healer"
    },
    "heroIcon": {
        "description": {
            "en-US": "Converts a hero parameter into a string that shows up as an icon  (up to 4 per string)."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The hero that will be converted to an icon.",
                    "de-DE": "Der Held der in ein Icon umgewandelt wird.",
                    "es-ES": "Héroe que se convertirá en un icono.",
                    "es-MX": "El héroe que se convertirá en un ícono.",
                    "fr-FR": "Le héros qui sera converti en icône.",
                    "it-IT": "L'eroe che sarà convertito in icona.",
                    "ja-JP": "アイコンに変換されるヒーロー",
                    "ko-KR": "아이콘으로 변환될 영웅입니다.",
                    "pl-PL": "Bohater który zostanie przekonwertowany na symbol.",
                    "pt-BR": "O herói que será convertido em ícone.",
                    "ru-RU": "Герой который будет преобразован в значок.",
                    "th-TH": "The hero that will be converted to an icon.",
                    "tr-TR": "Simgeye dönüştürülecek kahraman.",
                    "zh-CN": "此英雄将被转换为一个图标。",
                    "zh-TW": "The hero that will be converted to an icon."
                },
                "type": "Hero"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "isLiteral": true,
        "return": "String",
        "guid": "00000000C1FE",
        "en-US": "Hero Icon String",
        "es-MX": "Cadena de ícono de héroe",
        "fr-FR": "Chaîne d’icône du héros",
        "ja-JP": "ヒーローアイコン文字列",
        "pt-BR": "String de Ícone de Herói",
        "tr-TR": "Kahraman Simge Dizgisi",
        "zh-CN": "英雄图标字符串",
        "de-DE": "Hero Icon String",
        "es-ES": "Hero Icon String",
        "it-IT": "Hero Icon String",
        "ko-KR": "Hero Icon String",
        "pl-PL": "Hero Icon String",
        "ru-RU": "Hero Icon String",
        "th-TH": "Hero Icon String",
        "zh-TW": "Hero Icon String"
    },
    "horizontalAngleOfDirection": {
        "description": {
            "en-US": "The horizontal angle in degrees corresponding to the specified direction vector."
        },
        "args": [
            {
                "name": "direction",
                "description": {
                    "en-US": "The direction vector from which to acquire a horizontal angle in degrees. The vector is unitized before calculation begins."
                },
                "type": "Direction"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000BB2C",
        "en-US": "Horizontal Angle From Direction",
        "es-MX": "Ángulo horizontal desde la dirección",
        "fr-FR": "Angle horizontal depuis une direction",
        "ja-JP": "方向からの水平角",
        "pt-BR": "Ângulo Horizontal a partir da Direção",
        "tr-TR": "Yönden Yatay Açı",
        "zh-CN": "与此方向的水平角度",
        "de-DE": "Horizontal Angle From Direction",
        "es-ES": "Horizontal Angle From Direction",
        "it-IT": "Horizontal Angle From Direction",
        "ko-KR": "Horizontal Angle From Direction",
        "pl-PL": "Horizontal Angle From Direction",
        "ru-RU": "Horizontal Angle From Direction",
        "th-TH": "Horizontal Angle From Direction",
        "zh-TW": "Horizontal Angle From Direction"
    },
    "horizontalAngleTowards": {
        "description": {
            "en-US": "The horizontal angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is on the player's left. Otherwise, the result is zero or negative."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player from whose current facing the angle begins."
                },
                "type": "Player"
            },
            {
                "name": "position",
                "description": {
                    "en-US": "The position in the world where the angle ends.",
                    "de-DE": "Die Position in der Welt bei der der Winkel endet.",
                    "es-ES": "Posición en el mundo donde finaliza el ángulo.",
                    "es-MX": "La posición en el mundo donde finaliza el ángulo.",
                    "fr-FR": "La position dans le monde où l’angle prend fin.",
                    "it-IT": "La posizione nel mondo di gioco dove termina l'angolo.",
                    "ja-JP": "ワールドにおける、角度が終了する位置",
                    "ko-KR": "각 각이 종료되는 월드 내 위치입니다.",
                    "pl-PL": "Pozycja w świecie w której kończy się kąt.",
                    "pt-BR": "A posição no mundo onde o ângulo termina.",
                    "ru-RU": "Точка в игровом мире угол до которой нужно вычислить.",
                    "th-TH": "The position in the world where the angle ends.",
                    "tr-TR": "Açının uç kısmının dünyadaki konumu.",
                    "zh-CN": "测定与地图中此位置的夹角。",
                    "zh-TW": "The position in the world where the angle ends."
                },
                "type": "Position"
            }
        ],
        "return": "float",
        "guid": "00000000B27D",
        "en-US": "Horizontal Angle Towards",
        "es-MX": "Ángulo horizontal en dirección a",
        "fr-FR": "Angle horizontal vers",
        "ja-JP": "水平角の方向: ",
        "pt-BR": "Ângulo Horizontal Rumo a",
        "tr-TR": "Yatay Açı Yönü",
        "zh-CN": "水平方向夹角",
        "de-DE": "Horizontal Angle Towards",
        "es-ES": "Horizontal Angle Towards",
        "it-IT": "Horizontal Angle Towards",
        "ko-KR": "Horizontal Angle Towards",
        "pl-PL": "Horizontal Angle Towards",
        "ru-RU": "Horizontal Angle Towards",
        "th-TH": "Horizontal Angle Towards",
        "zh-TW": "Horizontal Angle Towards"
    },
    "hostPlayer": {
        "description": {
            "en-US": "The player that is currently the host of the custom game. This value will change if the current host player leaves the match."
        },
        "args": null,
        "return": "Player",
        "guid": "00000000CC1E",
        "en-US": "Host Player",
        "es-MX": "Jugador anfitrión",
        "fr-FR": "Joueur hôte",
        "ja-JP": "ホスト・プレイヤー",
        "pt-BR": "Jogador Anfitrião",
        "tr-TR": "Kurucu Oyuncu",
        "zh-CN": "主机玩家",
        "de-DE": "Host Player",
        "es-ES": "Host Player",
        "it-IT": "Host Player",
        "ko-KR": "Host Player",
        "pl-PL": "Host Player",
        "ru-RU": "Host Player",
        "th-TH": "Host Player",
        "zh-TW": "Host Player"
    },
    "iconString": {
        "description": {
            "en-US": "Allows you to use an icon inside of a string up to 4 per string.",
            "de-DE": "Ermöglicht die Verwendung eines Icons innerhalb eines Strings bis zu 4 pro String.",
            "es-ES": "Te permite utilizar un icono dentro de una cadena hasta 4 en cada una.",
            "es-MX": "Te permite usar un ícono dentro de una cadena hasta 4 por cadena.",
            "fr-FR": "Vous permet d’utiliser une icône à l’intérieur d’une chaîne jusqu’à 4 par chaîne.",
            "it-IT": "Ti consente di usare un'icona all'interno di una stringa fino a 4 per stringa.",
            "ja-JP": "ストリング内でアイコンを使用できるようになる（1ストリングあたりアイコンは4つまで）",
            "ko-KR": "문자열 안에 아이콘을 사용할 수 있습니다. 문자열당 최대 4개",
            "pl-PL": "Pozwala używać symbolu wewnątrz ciągu maks. 4 na ciąg.",
            "pt-BR": "Permite que você use um ícone dentro de uma string até 4 por string.",
            "ru-RU": "Позволяет использовать в строке значок не более 4 на строку.",
            "th-TH": "Allows you to use an icon inside of a string up to 4 per string.",
            "tr-TR": "Dizgide simge kullanmana olanak sağlar dizgi başına 4'e kadar.",
            "zh-CN": "可以在字符串中使用图标（每个字符串最多4个图标）。",
            "zh-TW": "Allows you to use an icon inside of a string up to 4 per string."
        },
        "args": [
            {
                "name": "icon",
                "description": {
                    "en-US": "The icon to display."
                },
                "type": "Icon"
            }
        ],
        "isConstant": true,
        "isLiteral": true,
        "canBePutInBoolean": false,
        "return": "String",
        "guid": "00000000CCDC",
        "en-US": "Icon String",
        "es-MX": "Cadena de ícono",
        "fr-FR": "Chaîne d’icône",
        "ja-JP": "アイコンストリング",
        "pt-BR": "String de Ícone",
        "tr-TR": "Simge Dizgisi",
        "zh-CN": "图标字符串",
        "de-DE": "Icon String",
        "es-ES": "Icon String",
        "it-IT": "Icon String",
        "ko-KR": "Icon String",
        "pl-PL": "Icon String",
        "ru-RU": "Icon String",
        "th-TH": "Icon String",
        "zh-TW": "Icon String"
    },
    "isAssemblingHeroes": {
        "description": {
            "en-US": "Whether the match is currently in its assemble heroes phase."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B35C",
        "en-US": "Is Assembling Heroes",
        "es-MX": "En Forma tu equipo",
        "fr-FR": "Phase de choix de héros",
        "ja-JP": "ヒーローを編成中",
        "pt-BR": "É Escolher Heróis",
        "tr-TR": "Kahramanlar Hazırlanıyor",
        "zh-CN": "正在集结英雄",
        "de-DE": "Is Assembling Heroes",
        "es-ES": "Is Assembling Heroes",
        "it-IT": "Is Assembling Heroes",
        "ko-KR": "Is Assembling Heroes",
        "pl-PL": "Is Assembling Heroes",
        "ru-RU": "Is Assembling Heroes",
        "th-TH": "Is Assembling Heroes",
        "zh-TW": "Is Assembling Heroes"
    },
    "isControlPointLocked": {
        "description": {
            "en-US": "Whether the point is locked in control mode."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B37B",
        "en-US": "Is Control Mode Point Locked",
        "es-MX": "Punto bloqueado en el modo Control",
        "fr-FR": "Point de contrôle verrouillé",
        "ja-JP": "コントロール・モードでポイントがロックされている",
        "pt-BR": "É Ponto Bloqueado do Modo de Controle",
        "tr-TR": "Kontrol Modu Noktası Kilitli",
        "zh-CN": "占领要点模式占领点解锁",
        "de-DE": "Is Control Mode Point Locked",
        "es-ES": "Is Control Mode Point Locked",
        "it-IT": "Is Control Mode Point Locked",
        "ko-KR": "Is Control Mode Point Locked",
        "pl-PL": "Is Control Mode Point Locked",
        "ru-RU": "Is Control Mode Point Locked",
        "th-TH": "Is Control Mode Point Locked",
        "zh-TW": "Is Control Mode Point Locked"
    },
    "isFlagAtBase": {
        "description": {
            "en-US": "Whether a specific team's flag is at its base in capture the flag."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose flag to check."
                },
                "type": "Team"
            }
        ],
        "return": "bool",
        "guid": "00000000B3A1",
        "en-US": "Is Flag At Base",
        "es-MX": "La bandera está en la base",
        "fr-FR": "Drapeau à la base",
        "ja-JP": "フラッグが陣地にある",
        "pt-BR": "É Bandeira na Base",
        "tr-TR": "Bayrak Üste",
        "zh-CN": "旗帜是否在基地中",
        "de-DE": "Is Flag At Base",
        "es-ES": "Is Flag At Base",
        "it-IT": "Is Flag At Base",
        "ko-KR": "Is Flag At Base",
        "pl-PL": "Is Flag At Base",
        "ru-RU": "Is Flag At Base",
        "th-TH": "Is Flag At Base",
        "zh-TW": "Is Flag At Base"
    },
    "isFlagBeingCarried": {
        "description": {
            "en-US": "Whether a specific team's flag is being carried by a member of the opposing team in capture the flag."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose flag to check."
                },
                "type": "Team"
            }
        ],
        "return": "bool",
        "guid": "00000000B3A2",
        "en-US": "Is Flag Being Carried",
        "es-MX": "La bandera está siendo transportada",
        "fr-FR": "Drapeau transporté",
        "ja-JP": "フラッグが運ばれている",
        "pt-BR": "É Bandeira Sendo Carregada",
        "tr-TR": "Bayrak Taşınıyor",
        "zh-CN": "是否有人携带旗帜",
        "de-DE": "Is Flag Being Carried",
        "es-ES": "Is Flag Being Carried",
        "it-IT": "Is Flag Being Carried",
        "ko-KR": "Is Flag Being Carried",
        "pl-PL": "Is Flag Being Carried",
        "ru-RU": "Is Flag Being Carried",
        "th-TH": "Is Flag Being Carried",
        "zh-TW": "Is Flag Being Carried"
    },
    "isGameInProgress": {
        "description": {
            "en-US": "Whether the main phase of the match is in progress during which time combat and scoring are allowed.",
            "de-DE": "Ob die Hauptphase des Matches aktuell läuft die Zeit in der Kämpfe und Punkte erlaubt sind.",
            "es-ES": "Si la partida está en su fase principal periodo durante el cual están permitidos el combate y la puntuación.",
            "es-MX": "Verifica si la fase principal de la partida está en progreso durante este período el combate y la anotación de puntos están permitidos.",
            "fr-FR": "Si la phase principale de la partie pendant laquelle le combat et le calcul des points est autorisé est en cours.",
            "it-IT": "Specifica se la fase principale della partita è in atto durante la quale i combattimenti e l'avanzamento del punteggio è permesso.",
            "ja-JP": "マッチのメインフェーズが進行しているかどうか（戦闘およびスコア集計が可能な時間）",
            "ko-KR": "경기의 주요 단계전투 및 점수 산정이 허용되는 시기가 진행 중인지 여부입니다.",
            "pl-PL": "Czy główna faza meczu jest w toku kiedy walka i zdobywanie punktów są dozwolone.",
            "pt-BR": "Se a fase principal da partida está em andamento ou não o tempo durante o qual combate e pontuação são permitidos.",
            "ru-RU": "Определяет находится ли матч в основной фазе в которой ведется бой и набираются очки.",
            "th-TH": "Whether the main phase of the match is in progress during which time combat and scoring are allowed.",
            "tr-TR": "Maçın ana safhasının çatışma ve skor kazanmaya izin verilen süre devam edip etmediği.",
            "zh-CN": "此比赛是否正在主要阶段（可以进行战斗并获得分数的阶段）。",
            "zh-TW": "Whether the main phase of the match is in progress during which time combat and scoring are allowed."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B35E",
        "en-US": "Is Game In Progress",
        "es-MX": "Partida en curso",
        "fr-FR": "Partie en cours",
        "ja-JP": "ゲームが進行中",
        "pt-BR": "É Jogo em Andamento",
        "tr-TR": "Oyun Devam Ediyor",
        "zh-CN": "游戏正在进行中",
        "de-DE": "Is Game In Progress",
        "es-ES": "Is Game In Progress",
        "it-IT": "Is Game In Progress",
        "ko-KR": "Is Game In Progress",
        "pl-PL": "Is Game In Progress",
        "ru-RU": "Is Game In Progress",
        "th-TH": "Is Game In Progress",
        "zh-TW": "Is Game In Progress"
    },
    "isInLoS": {
        "description": {
            "en-US": "Whether two positions have line of sight with each other.",
            "de-DE": "Ob zwei Positionen sich gegenseitig im Sichtfeld haben.",
            "es-ES": "Si dos posiciones tienen línea de visión entre sí.",
            "es-MX": "Verifica si las dos posiciones tienen línea de visión mutua.",
            "fr-FR": "Si les deux positions partagent une ligne de vue.",
            "it-IT": "Controlla se due posizioni hanno linea di tiro tra esse.",
            "ja-JP": "2つの位置でお互い射線が通っているかどうか",
            "ko-KR": "두 위치가 서로 보이는지 여부입니다.",
            "pl-PL": "Czy dwie pozycje znajdują się w swoim polu widzenia.",
            "pt-BR": "Se duas posições têm ou não linha de visão uma com a outra.",
            "ru-RU": "Определяет находятся ли две точки в прямой видимости друг у друга.",
            "th-TH": "Whether two positions have line of sight with each other.",
            "tr-TR": "İki konumun birbirinin görüş alanında olup olmadığı.",
            "zh-CN": "两个位置是否在彼此的视线内。",
            "zh-TW": "Whether two positions have line of sight with each other."
        },
        "args": [
            {
                "name": "startPos",
                "description": {
                    "en-US": "The start position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": [
                    "Position",
                    "Player"
                ]
            },
            {
                "name": "endPos",
                "description": {
                    "en-US": "The end position for the line-of-sight check. If a player is provided, a position 2 meters above the player's feet is used."
                },
                "type": [
                    "Position",
                    "Player"
                ]
            },
            {
                "name": "barriers",
                "description": {
                    "en-US": "Defines how barriers affect line of sight. When considering whether a barrier belongs to an enemy, the allegiance of the player provided to start pos (if any) is used."
                },
                "type": "BarrierLos",
                "default": "PASS_THROUGH_BARRIERS"
            }
        ],
        "return": "bool",
        "guid": "00000000B1EC",
        "en-US": "Is In Line of Sight",
        "es-MX": "En la línea de visión",
        "fr-FR": "Dans la ligne de vue",
        "ja-JP": "射線が通っている",
        "pt-BR": "É Na Linha de Visão",
        "tr-TR": "Görüş Alanında",
        "zh-CN": "在视线内",
        "de-DE": "Is In Line of Sight",
        "es-ES": "Is In Line of Sight",
        "it-IT": "Is In Line of Sight",
        "ko-KR": "Is In Line of Sight",
        "pl-PL": "Is In Line of Sight",
        "ru-RU": "Is In Line of Sight",
        "th-TH": "Is In Line of Sight",
        "zh-TW": "Is In Line of Sight"
    },
    "isInSetup": {
        "description": {
            "en-US": "Whether the match is currently in its setup phase."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B35D",
        "en-US": "Is In Setup",
        "es-MX": "En preparación",
        "fr-FR": "Dans les paramètres",
        "ja-JP": "セットアップ中",
        "pt-BR": "É em Organização",
        "tr-TR": "Kurulumda",
        "zh-CN": "正在设置",
        "de-DE": "Is In Setup",
        "es-ES": "Is In Setup",
        "it-IT": "Is In Setup",
        "ko-KR": "Is In Setup",
        "pl-PL": "Is In Setup",
        "ru-RU": "Is In Setup",
        "th-TH": "Is In Setup",
        "zh-TW": "Is In Setup"
    },
    "isInSuddenDeath": {
        "description": {
            "en-US": "Whether the current game of capture the flag is in sudden death."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B3A4",
        "en-US": "Is CTF Mode In Sudden Death",
        "es-MX": "Modo CLB en muerte súbita",
        "fr-FR": "Capture du drapeau en mort subite",
        "ja-JP": "キャプチャー・ザ・フラッグ・モードがサドンデス中",
        "pt-BR": "É Modo CaB em Morte Súbita",
        "tr-TR": "Ani Ölüm'de Bayrak Kapmaca Modu",
        "zh-CN": "在夺旗模式中开始绝杀局",
        "de-DE": "Is CTF Mode In Sudden Death",
        "es-ES": "Is CTF Mode In Sudden Death",
        "it-IT": "Is CTF Mode In Sudden Death",
        "ko-KR": "Is CTF Mode In Sudden Death",
        "pl-PL": "Is CTF Mode In Sudden Death",
        "ru-RU": "Is CTF Mode In Sudden Death",
        "th-TH": "Is CTF Mode In Sudden Death",
        "zh-TW": "Is CTF Mode In Sudden Death"
    },
    "isMatchBetweenRounds": {
        "description": {
            "en-US": "Whether the match is between rounds.",
            "de-DE": "Ob das Match aktuell zwischen zwei Runden ist.",
            "es-ES": "Si la partida está entre rondas.",
            "es-MX": "Verifica si la partida está entre rondas.",
            "fr-FR": "Si la partie est en transition entre deux manches.",
            "it-IT": "Specifica se la partita si trova tra un round e l'altro.",
            "ja-JP": "マッチがラウンドの間かどうか",
            "ko-KR": "경기 중 라운드 전환 시기인지 여부입니다.",
            "pl-PL": "Czy mecz jest między rundami.",
            "pt-BR": "Se a partida está entre rodadas ou não.",
            "ru-RU": "Определяет происходит ли смена раундов в матче.",
            "th-TH": "Whether the match is between rounds.",
            "tr-TR": "Maçın turlar arasında olup olmadığı.",
            "zh-CN": "此比赛是否正在两个回合之间。",
            "zh-TW": "Whether the match is between rounds."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B35F",
        "en-US": "Is Between Rounds",
        "es-MX": "Entre rondas",
        "fr-FR": "Entre deux manches",
        "ja-JP": "ラウンドの間",
        "pt-BR": "É Entre Rodadas",
        "tr-TR": "Turlar Arasında",
        "zh-CN": "处于回合之间",
        "de-DE": "Is Between Rounds",
        "es-ES": "Is Between Rounds",
        "it-IT": "Is Between Rounds",
        "ko-KR": "Is Between Rounds",
        "pl-PL": "Is Between Rounds",
        "ru-RU": "Is Between Rounds",
        "th-TH": "Is Between Rounds",
        "zh-TW": "Is Between Rounds"
    },
    "isMatchComplete": {
        "description": {
            "en-US": "Whether the match has finished.",
            "de-DE": "Ob das Match beendet wurde.",
            "es-ES": "Si la partida ha finalizado.",
            "es-MX": "Verifica si la partida ha finalizado.",
            "fr-FR": "Si la partie est terminée.",
            "it-IT": "Specifica se la partita è terminata.",
            "ja-JP": "マッチが終了したかどうか",
            "ko-KR": "경기가 완료되었는지 여부입니다.",
            "pl-PL": "Czy mecz się zakończył.",
            "pt-BR": "Se a partida terminou ou não.",
            "ru-RU": "Определяет завершен ли матч.",
            "th-TH": "Whether the match has finished.",
            "tr-TR": "Maçın sona erip ermediği.",
            "zh-CN": "此比赛是否已经结束。",
            "zh-TW": "Whether the match has finished."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B360",
        "en-US": "Is Match Complete",
        "es-MX": "Partida Completada",
        "fr-FR": "Partie terminée",
        "ja-JP": "マッチが完了している",
        "pt-BR": "É Partida Concluída",
        "tr-TR": "Maç Tamamlandı",
        "zh-CN": "比赛结束",
        "de-DE": "Is Match Complete",
        "es-ES": "Is Match Complete",
        "it-IT": "Is Match Complete",
        "ko-KR": "Is Match Complete",
        "pl-PL": "Is Match Complete",
        "ru-RU": "Is Match Complete",
        "th-TH": "Is Match Complete",
        "zh-TW": "Is Match Complete"
    },
    "isObjectiveComplete": {
        "description": {
            "en-US": "Whether the specified objective has been completed. Results in false if the game mode is not assault, escort, or hybrid."
        },
        "args": [
            {
                "name": "number",
                "description": {
                    "en-US": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index.",
                    "de-DE": "Der Index des zu berücksichtigenden Zielpunkts ab 0 gezählt. Jeder Kontrollpunkt Fracht-Checkpoint und Frachtzielpunkt hat seinen eigenen Index.",
                    "es-ES": "Índice del objetivo que se considera empezando a contar desde 0. Cada punto del modo control punto de control de la carga y destino de la carga tiene su propio índice.",
                    "es-MX": "El índice del objetivo que se considerará la cuenta comienza de 0 en adelante. Cada punto de captura punto de control de la carga y destino de la carga tiene su propio índice.",
                    "fr-FR": "L’index de l’objectif à prendre en compte débutant à 0 et progressant. Chaque point de contrôle point de contrôle de convoi et destination de convoi possède son propre index.",
                    "it-IT": "L'indice dell'obiettivo da considerare che incrementa a partire da 0. Ogni punto di controllo checkpoint del carico e destinazione del carico ha il suo indice specifico.",
                    "ja-JP": "検討される目標のインデックス。カウントは0から開始される。各コントロール・ポイント、ペイロード・チェックポイント、ペイロード目的地にはそれぞれにインデックスがある",
                    "ko-KR": "고려해야 하는 목표의 인덱스로서 0에서 시작하여 증가합니다. 각 거점 화물 경유지 화물 목적지에는 각기 고유의 인덱스가 있습니다.",
                    "pl-PL": "Indeks zadania do uwzględnienia zaczynając od 0 i licząc w górę. Każdy punkt kontrolny punkt kontrolny ładunku i miejsce docelowe ładunku posiadają własny indeks.",
                    "pt-BR": "O índice do objetivo a ser considerado iniciando em 0 e somando. Cada ponto de controle ponto de verificação de carga e destino de carga tem seu próprio índice.",
                    "ru-RU": "Индекс рассматриваемой задачи от 0 и выше. Каждая контрольная точка объект контрольная или конечная точка доставки груза имеют свой индекс.",
                    "th-TH": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index.",
                    "tr-TR": "Dikkate alınacak hedefin 0'dan başlanarak hesaplanan indeksi. Her kontrol noktasının navlun kontrol noktasının ve navlun varış noktasının indeksi vardır.",
                    "zh-CN": "考察的目标点的索引，从0开始逐渐累加。每个控制点、运载目标检查点、运载目标目的地都有其独自的索引。",
                    "zh-TW": "The index of the objective to consider starting at 0 and counting up. Each control point payload checkpoint and payload destination has its own index."
                },
                "type": "unsigned int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "return": "bool",
        "guid": "00000000B378",
        "en-US": "Is Objective Complete",
        "es-MX": "Objetivo completado",
        "fr-FR": "Objectif accompli",
        "ja-JP": "目標をクリアした",
        "pt-BR": "É Objetivo Concluído",
        "tr-TR": "Hedef Tamamlandı",
        "zh-CN": "目标是否完成",
        "de-DE": "Is Objective Complete",
        "es-ES": "Is Objective Complete",
        "it-IT": "Is Objective Complete",
        "ko-KR": "Is Objective Complete",
        "pl-PL": "Is Objective Complete",
        "ru-RU": "Is Objective Complete",
        "th-TH": "Is Objective Complete",
        "zh-TW": "Is Objective Complete"
    },
    "isTeamOnDefense": {
        "description": {
            "en-US": "Whether the specified team is currently on defense. Results in false if the game mode is not assault, escort, or hybrid."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose role to check."
                },
                "type": "Team"
            }
        ],
        "return": "bool",
        "guid": "00000000B359",
        "en-US": "Is Team On Defense",
        "es-MX": "Equipo defensor",
        "fr-FR": "Équipe en défense",
        "ja-JP": "防衛側のチーム",
        "pt-BR": "É Equipe na Defensa",
        "tr-TR": "Takım Savunmada",
        "zh-CN": "正在防守",
        "de-DE": "Is Team On Defense",
        "es-ES": "Is Team On Defense",
        "it-IT": "Is Team On Defense",
        "ko-KR": "Is Team On Defense",
        "pl-PL": "Is Team On Defense",
        "ru-RU": "Is Team On Defense",
        "th-TH": "Is Team On Defense",
        "zh-TW": "Is Team On Defense"
    },
    "isTeamOnOffense": {
        "description": {
            "en-US": "Whether the specified team is currently on offense. Results in false if the game mode is not assault, escort, or hybrid."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose role to check."
                },
                "type": "Team"
            }
        ],
        "return": "bool",
        "guid": "00000000B354",
        "en-US": "Is Team On Offense",
        "es-MX": "Equipo atacante",
        "fr-FR": "Équipe en attaque",
        "ja-JP": "攻撃側のチーム",
        "pt-BR": "É Equipe no Ataque",
        "tr-TR": "Takım Hücumda",
        "zh-CN": "作为进攻队伍",
        "de-DE": "Is Team On Offense",
        "es-ES": "Is Team On Offense",
        "it-IT": "Is Team On Offense",
        "ko-KR": "Is Team On Offense",
        "pl-PL": "Is Team On Offense",
        "ru-RU": "Is Team On Offense",
        "th-TH": "Is Team On Offense",
        "zh-TW": "Is Team On Offense"
    },
    "isWaitingForPlayers": {
        "description": {
            "en-US": "Whether the match is waiting for players to join before starting."
        },
        "args": [],
        "return": "bool",
        "guid": "00000000B35B",
        "en-US": "Is Waiting For Players",
        "es-MX": "Esperando jugadores",
        "fr-FR": "En attente de joueurs",
        "ja-JP": "ほかのプレイヤーを待っている",
        "pt-BR": "É Aguardando Jogadores",
        "tr-TR": "Oyuncular Bekleniyor",
        "zh-CN": "正在等待玩家",
        "de-DE": "Is Waiting For Players",
        "es-ES": "Is Waiting For Players",
        "it-IT": "Is Waiting For Players",
        "ko-KR": "Is Waiting For Players",
        "pl-PL": "Is Waiting For Players",
        "ru-RU": "Is Waiting For Players",
        "th-TH": "Is Waiting For Players",
        "zh-TW": "Is Waiting For Players"
    },
    "len": {
        "description": {
            "en-US": "The number of elements in the specified array. For strings, use `strLen`."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose elements will be counted.",
                    "de-DE": "Das Array dessen Elemente gezählt werden.",
                    "es-ES": "Matriz cuyos elementos se cuentan.",
                    "es-MX": "La matriz cuyos elementos serán contados.",
                    "fr-FR": "Le tableau dont les éléments seront comptés.",
                    "it-IT": "L'array i cui elementi saranno contati.",
                    "ja-JP": "要素がカウントされる配列",
                    "ko-KR": "요소의 개수를 셀 배열입니다.",
                    "pl-PL": "Tabela której elementy zostaną policzone.",
                    "pt-BR": "A Matriz cujos elementos serão contados.",
                    "ru-RU": "Массив количество элементов в котором нужно подсчитать.",
                    "th-TH": "The array whose elements will be counted.",
                    "tr-TR": "Unsurların sayılacağı dizin.",
                    "zh-CN": "计算此数组的元素个数。",
                    "zh-TW": "The array whose elements will be counted."
                },
                "type": "Array"
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "00000000B26E",
        "en-US": "Count Of",
        "es-MX": "Conteo de",
        "fr-FR": "Décompte de",
        "ja-JP": "カウント: ",
        "pt-BR": "Contagem de",
        "tr-TR": "Miktar",
        "zh-CN": "数量",
        "de-DE": "Count Of",
        "es-ES": "Count Of",
        "it-IT": "Count Of",
        "ko-KR": "Count Of",
        "pl-PL": "Count Of",
        "ru-RU": "Count Of",
        "th-TH": "Count Of",
        "zh-TW": "Count Of"
    },
    "localPlayer": {
        "description": {
            "en-US": "The player being controlled on the end user's computer. This value is different for each end user and thus can only be accessed in actions which affect visuals or the HUD. This value cannot be stored in variables."
        },
        "args": null,
        "return": "Player",
        "guid": "000000012BB1",
        "en-US": "Local Player",
        "es-MX": "Jugador local",
        "fr-FR": "Joueur local",
        "ja-JP": "ローカルプレイヤー",
        "pt-BR": "Jogador Local",
        "tr-TR": "Yerel Oyuncu",
        "zh-CN": "本地玩家",
        "de-DE": "Local Player",
        "es-ES": "Local Player",
        "it-IT": "Local Player",
        "ko-KR": "Local Player",
        "pl-PL": "Local Player",
        "ru-RU": "Local Player",
        "th-TH": "Local Player",
        "zh-TW": "Local Player"
    },
    "localVector": {
        "description": {
            "en-US": "The vector in local coordinates corresponding to the provided vector in world coordinates."
        },
        "args": [
            {
                "name": "worldVector",
                "description": {
                    "en-US": "The vector in world coordinates that will be converted to local coordinates."
                },
                "type": "Vector"
            },
            {
                "name": "relativePlayer",
                "description": {
                    "en-US": "The player to whom the resulting vector will be relative."
                },
                "type": "Player"
            },
            {
                "name": "transformation",
                "description": {
                    "en-US": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities)."
                },
                "type": "Transform"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000B342",
        "en-US": "Local Vector Of",
        "es-MX": "Vector local de",
        "fr-FR": "Vecteur local de",
        "ja-JP": "ローカルのベクトル: ",
        "pt-BR": "Vetor Local de",
        "tr-TR": "Yerel Vektör",
        "zh-CN": "本地矢量",
        "de-DE": "Local Vector Of",
        "es-ES": "Local Vector Of",
        "it-IT": "Local Vector Of",
        "ko-KR": "Local Vector Of",
        "pl-PL": "Local Vector Of",
        "ru-RU": "Local Vector Of",
        "th-TH": "Local Vector Of",
        "zh-TW": "Local Vector Of"
    },
    "magnitude": {
        "description": {
            "en-US": "The magnitude (length) of the specified vector"
        },
        "args": [
            {
                "name": "vector",
                "description": {
                    "en-US": "The vector to calculate the magnitude of."
                },
                "type": "Vector"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "000000011F55",
        "en-US": "Magnitude Of",
        "es-MX": "Magnitud de",
        "fr-FR": "Ampleur de",
        "ja-JP": "変化の大きさ:",
        "pt-BR": "Magnitude de",
        "th-TH": "ขนาดของ",
        "tr-TR": "Büyüklüğü",
        "zh-CN": "幅值",
        "de-DE": "Magnitude Of",
        "es-ES": "Magnitude Of",
        "it-IT": "Magnitude Of",
        "ko-KR": "Magnitude Of",
        "pl-PL": "Magnitude Of",
        "ru-RU": "Magnitude Of",
        "zh-TW": "Magnitude Of"
    },
    "max": {
        "guid": "00000000C418",
        "description": {
            "en-US": "The maximum of two numbers. Note: this function can take an infinite amount of arguments."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number."
                },
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number."
                },
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "return": "float",
        "en-US": "Max",
        "es-MX": "Máximo",
        "fr-FR": "Maximum",
        "ja-JP": "最大",
        "pt-BR": "Máx.",
        "tr-TR": "Maks.",
        "zh-CN": "较大",
        "de-DE": "Max",
        "es-ES": "Max",
        "it-IT": "Max",
        "ko-KR": "Max",
        "pl-PL": "Max",
        "ru-RU": "Max",
        "th-TH": "Max",
        "zh-TW": "Max"
    },
    "min": {
        "guid": "00000000C416",
        "description": {
            "en-US": "The minimum of two or more numbers. Note: this function can take an infinite amount of arguments."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The left-hand operand. May be any value that results in a number."
                },
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "value",
                "description": {
                    "en-US": "The right-hand operand. May be any value that results in a number."
                },
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "isConstant": true,
        "return": "float",
        "en-US": "Min",
        "es-MX": "Mínimo",
        "fr-FR": "Minimum",
        "ja-JP": "最小",
        "pt-BR": "Mín.",
        "tr-TR": "Min.",
        "zh-CN": "较小",
        "de-DE": "Min",
        "es-ES": "Min",
        "it-IT": "Min",
        "ko-KR": "Min",
        "pl-PL": "Min",
        "ru-RU": "Min",
        "th-TH": "Min",
        "zh-TW": "Min"
    },
    "nearestWalkablePosition": {
        "description": {
            "en-US": "The position closest to the specified position that can be stood on and is accessible from a spawn point.",
            "de-DE": "Die der festgelegten Position nächstliegende Position auf der Spieler stehen können und die von einem Erscheinungspunkt aus zu erreichen ist.",
            "es-ES": "Posición más cercana a la posición especificada sobre la que se puede estar de pie y es accesible desde un punto de aparición.",
            "es-MX": "La posición más cercana a la posición especificada en la que los jugadores pueden caminar y a la que pueden acceder desde un punto de reaparición.",
            "fr-FR": "La position la plus proche de celle spécifiée sur laquelle il est possible de se tenir et qui est accessible depuis un point d’apparition.",
            "it-IT": "La posizione più vicina a quella specificata in cui è possibile trovarsi eo è accessibile da un'area di partenza.",
            "ja-JP": "歩行可能かつスポーン地点から進入可能な指定位置に最も近い位置",
            "ko-KR": "서 있을 수 있고 생성 지점에서 접근 가능하며 지정된 위치에서 가장 가까운 위치입니다.",
            "pl-PL": "Pozycja najbliżej określonej pozycji na której można stanąć i jest dostępna z punktu startowego.",
            "pt-BR": "A posição mais próxima da posição especificada onde se pode ficar de pé e à qual se pode chegar saindo de um ponto de ressurgimento.",
            "ru-RU": "Ближайшее к указанной точке место на котором можно стоять и которое доступно с точки возрождения.",
            "th-TH": "ตำแหน่งที่ใกล้กับตำแหน่งที่ระบุที่สุดที่สามารถยืนอยู่ได้และเข้าถึงได้จากจุดเกิด",
            "tr-TR": "Üzerinde durulabilen ve başlangıç noktasından erişilebilen belirli konuma en yakın konum.",
            "zh-CN": "与指定位置最接近的、可以站立且能够从一个重生点到达的位置。",
            "zh-TW": "The position closest to the specified position that can be stood on and is accessible from a spawn point."
        },
        "args": [
            {
                "name": "position",
                "description": {
                    "en-US": "The position from which to search for the nearest walkable position.",
                    "de-DE": "Die Position deren nächstgelegene begehbare Position gesucht wird.",
                    "es-ES": "Posición desde la que se busca la posición más cercana por la que se pueda andar.",
                    "es-MX": "La posición desde la cual se buscará la posición caminable más cercana.",
                    "fr-FR": "La position à partir de laquelle déterminer la surface la plus proche sur laquelle il est possible de marcher.",
                    "it-IT": "La posizione dalla quale cercare la più vicina posizione accessibile.",
                    "ja-JP": "最も近い歩行可能な位置の検索を行う位置",
                    "ko-KR": "가장 가까운 도보 가능 위치를 검색할 대상 위치입니다.",
                    "pl-PL": "Pozycja z której należy szukać najbliższej pozycji do której można dojść.",
                    "pt-BR": "A posição de onde buscar a posição transitável mais próxima.",
                    "ru-RU": "Точка от которой нужно искать ближайшую проходимую точку.",
                    "th-TH": "The position from which to search for the nearest walkable position.",
                    "tr-TR": "Yürünebilir en yakın konumun aranacağı konum.",
                    "zh-CN": "寻找此位置附近最近的可行走位置。",
                    "zh-TW": "The position from which to search for the nearest walkable position."
                },
                "type": "Position"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Position",
        "guid": "00000000C324",
        "en-US": "Nearest Walkable Position",
        "es-MX": "Posición caminable más cercana",
        "fr-FR": "Position la plus proche en marchant",
        "ja-JP": "最も近い歩行可能な位置",
        "pt-BR": "Posição Transitável Mais Próxima",
        "th-TH": "ตำแหน่งที่เดินได้ที่ใกล้ที่สุด",
        "tr-TR": "Yürünebilir En Yakın Konum",
        "zh-CN": "最近的可行走位置",
        "de-DE": "Nearest Walkable Position",
        "es-ES": "Nearest Walkable Position",
        "it-IT": "Nearest Walkable Position",
        "ko-KR": "Nearest Walkable Position",
        "pl-PL": "Nearest Walkable Position",
        "ru-RU": "Nearest Walkable Position",
        "zh-TW": "Nearest Walkable Position"
    },
    "normalize": {
        "description": {
            "en-US": "The unit-length normalization of a vector."
        },
        "args": [
            {
                "name": "vector",
                "description": {
                    "en-US": "The vector to normalize."
                },
                "type": "Vector"
            }
        ],
        "canBePutInBoolean": false,
        "isConstant": true,
        "return": "Vector",
        "guid": "00000000C344",
        "en-US": "Normalize",
        "es-MX": "Normalizar",
        "fr-FR": "Normalisation",
        "ja-JP": "正規化",
        "pt-BR": "Normalizar",
        "tr-TR": "Normalleştir",
        "zh-CN": "归一化",
        "de-DE": "Normalize",
        "es-ES": "Normalize",
        "it-IT": "Normalize",
        "ko-KR": "Normalize",
        "pl-PL": "Normalize",
        "ru-RU": "Normalize",
        "th-TH": "Normalize",
        "zh-TW": "Normalize"
    },
    "null": {
        "description": {
            "en-US": "The absence of a player. Used when no player is desired for a particular input. Equivalent to the real number 0 for the purposes of comparison and debugging."
        },
        "args": null,
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Player",
        "guid": "00000000B594",
        "en-US": "Null",
        "es-MX": "Nulo",
        "fr-FR": "Non applicable",
        "ja-JP": "NULL",
        "pt-BR": "Nulo",
        "tr-TR": "Geçersiz",
        "zh-CN": "空",
        "de-DE": "Null",
        "es-ES": "Null",
        "it-IT": "Null",
        "ko-KR": "Null",
        "pl-PL": "Null",
        "ru-RU": "Null",
        "th-TH": "Null",
        "zh-TW": "Null"
    },
    "random.choice": {
        "description": {
            "en-US": "A random value from the specified array."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array from which to randomly take a value. If a non-array value is provided, the result is simply the provided value."
                },
                "type": "Array"
            }
        ],
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000000B599",
        "en-US": "Random Value In Array",
        "es-MX": "Valor aleatorio en matriz",
        "fr-FR": "Valeur aléatoire dans le tableau",
        "ja-JP": "配列内のランダムな値",
        "pt-BR": "Valor Aleatório na Matriz",
        "tr-TR": "Dizindeki Rastgele Bir Değer",
        "zh-CN": "数组随机取值",
        "de-DE": "Random Value In Array",
        "es-ES": "Random Value In Array",
        "it-IT": "Random Value In Array",
        "ko-KR": "Random Value In Array",
        "pl-PL": "Random Value In Array",
        "ru-RU": "Random Value In Array",
        "th-TH": "Random Value In Array",
        "zh-TW": "Random Value In Array"
    },
    "random.randint": {
        "description": {
            "en-US": "A random integer between the specified min and max, inclusive."
        },
        "args": [
            {
                "name": "min",
                "description": {
                    "en-US": "The smallest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer."
                },
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "max",
                "description": {
                    "en-US": "The largest integer allowed. If a real number is provided to this input, it is rounded to the nearest integer."
                },
                "type": "int",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "return": "int",
        "guid": "00000000B59B",
        "en-US": "Random Integer",
        "es-MX": "Número entero aleatorio",
        "fr-FR": "Nombre entier aléatoire",
        "ja-JP": "ランダムな整数",
        "pt-BR": "Inteiro Aleatório",
        "tr-TR": "Rastgele Tam Sayı",
        "zh-CN": "随机整数",
        "de-DE": "Random Integer",
        "es-ES": "Random Integer",
        "it-IT": "Random Integer",
        "ko-KR": "Random Integer",
        "pl-PL": "Random Integer",
        "ru-RU": "Random Integer",
        "th-TH": "Random Integer",
        "zh-TW": "Random Integer"
    },
    "random.shuffle": {
        "description": {
            "en-US": "A copy of the specified array with the values in a random order."
        },
        "args": [
            {
                "name": "array",
                "description": {
                    "en-US": "The array whose copy will be randomized.",
                    "de-DE": "Das Array dessen Kopie zufällig erstellt wird.",
                    "es-ES": "Matriz cuya copia se hará aleatoria.",
                    "es-MX": "La matriz cuya copia será aleatorizada.",
                    "fr-FR": "Le tableau dont la copie sera randomisée.",
                    "it-IT": "L'array la cui copia sarà ordinata casualmente.",
                    "ja-JP": "ランダムなコピーを作成する配列",
                    "ko-KR": "무작위 복사본을 만들 배열입니다.",
                    "pl-PL": "Tabela której kopia ma kolejność losową.",
                    "pt-BR": "A matriz cuja cópia será randomizada.",
                    "ru-RU": "Массив копия которого будет создана со значениями в случайном порядке.",
                    "th-TH": "อาร์เรย์ที่จะถูกสุ่มสําเนา",
                    "tr-TR": "Kopyası rastgele olacak dizin.",
                    "zh-CN": "对此数组的复制进行随机排列。",
                    "zh-TW": "The array whose copy will be randomized."
                },
                "type": "Array"
            }
        ],
        "return": "Array",
        "guid": "00000000B598",
        "en-US": "Randomized Array",
        "es-MX": "Matriz aleatorizada",
        "fr-FR": "Tableau aléatoire",
        "ja-JP": "ランダム化された配列",
        "pt-BR": "Matriz Randomizada",
        "tr-TR": "Rastgele Dizin",
        "zh-CN": "随机数组",
        "de-DE": "Randomized Array",
        "es-ES": "Randomized Array",
        "it-IT": "Randomized Array",
        "ko-KR": "Randomized Array",
        "pl-PL": "Randomized Array",
        "ru-RU": "Randomized Array",
        "th-TH": "Randomized Array",
        "zh-TW": "Randomized Array"
    },
    "random.uniform": {
        "description": {
            "en-US": "A random real number between the specified min and max."
        },
        "args": [
            {
                "name": "min",
                "description": {
                    "en-US": "The smallest real number allowed."
                },
                "type": "float"
            },
            {
                "name": "max",
                "description": {
                    "en-US": "The largest real number allowed."
                },
                "type": "float"
            }
        ],
        "return": "float",
        "guid": "00000000B59A",
        "en-US": "Random Real",
        "es-MX": "Número real aleatorio",
        "fr-FR": "Nombre réel aléatoire",
        "ja-JP": "ランダムな実数",
        "pt-BR": "Real Aleatório",
        "tr-TR": "Rastgele Gerçek Sayı",
        "zh-CN": "随机实数",
        "de-DE": "Random Real",
        "es-ES": "Random Real",
        "it-IT": "Random Real",
        "ko-KR": "Random Real",
        "pl-PL": "Random Real",
        "ru-RU": "Random Real",
        "th-TH": "Random Real",
        "zh-TW": "Random Real"
    },
    "rgb": {
        "description": {
            "en-US": "A custom color with the specified red, green, blue and alpha values."
        },
        "args": [
            {
                "name": "red",
                "description": {
                    "en-US": "The red component of a color, from 0 to 255."
                },
                "type": "unsigned int"
            },
            {
                "name": "green",
                "description": {
                    "en-US": "The green component of a color, from 0 to 255."
                },
                "type": "unsigned int"
            },
            {
                "name": "blue",
                "description": {
                    "en-US": "The blue component of a color, from 0 to 255."
                },
                "type": "unsigned int"
            },
            {
                "name": "alpha",
                "description": {
                    "en-US": "The alpha component of a color. 255 is perfectly opaque while 0 is perfectly invisible."
                },
                "type": "unsigned int",
                "default": 255
            }
        ],
        "canBePutInBoolean": true,
        "isConstant": true,
        "isLiteral": true,
        "return": "Color",
        "guid": "000000011DA2",
        "en-US": "Custom Color",
        "es-MX": "Color personalizado",
        "fr-FR": "Couleur personnalisée",
        "ja-JP": "カスタム・カラー",
        "pt-BR": "Cor Personalizada",
        "tr-TR": "Özel Renk",
        "zh-CN": "自定义颜色",
        "de-DE": "Custom Color",
        "es-ES": "Custom Color",
        "it-IT": "Custom Color",
        "ko-KR": "Custom Color",
        "pl-PL": "Custom Color",
        "ru-RU": "Custom Color",
        "th-TH": "Custom Color",
        "zh-TW": "Custom Color"
    },
    "sin": {
        "description": {
            "en-US": "Sine of the specified angle in radians."
        },
        "args": [
            {
                "name": "angle",
                "description": {
                    "en-US": "Angle in radians.",
                    "de-DE": "Winkel in Radiant.",
                    "es-ES": "Ángulo en radianes.",
                    "es-MX": "Ángulo en radianes.",
                    "fr-FR": "Angle en radians.",
                    "it-IT": "L'Angolo in radianti.",
                    "ja-JP": "ラジアンの角度",
                    "ko-KR": "각단위: Rad입니다.",
                    "pl-PL": "Kąt w radianach.",
                    "pt-BR": "Ângulo em radianos.",
                    "ru-RU": "Угол в радианах.",
                    "th-TH": "Angle in radians.",
                    "tr-TR": "Radyan cinsinden açı.",
                    "zh-CN": "角度，以弧度为单位。",
                    "zh-TW": "Angle in radians."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C340",
        "en-US": "Sine From Radians",
        "es-MX": "Seno en radianes",
        "fr-FR": "Sinus en radians",
        "ja-JP": "ラジアンのサイン",
        "pt-BR": "Seno de Radianos",
        "tr-TR": "Radyan Cinsinden Sinüs",
        "zh-CN": "弧度的正弦值",
        "de-DE": "Sine From Radians",
        "es-ES": "Sine From Radians",
        "it-IT": "Sine From Radians",
        "ko-KR": "Sine From Radians",
        "pl-PL": "Sine From Radians",
        "ru-RU": "Sine From Radians",
        "th-TH": "Sine From Radians",
        "zh-TW": "Sine From Radians"
    },
    "sinDeg": {
        "description": {
            "en-US": "Sine of the specified angle in degrees."
        },
        "args": [
            {
                "name": "angle",
                "description": {
                    "en-US": "Angle in degrees.",
                    "de-DE": "Winkel in Grad.",
                    "es-ES": "Ángulo en grados.",
                    "es-MX": "Ángulo en grados.",
                    "fr-FR": "Angle en degrés.",
                    "it-IT": "L'Angolo in gradi.",
                    "ja-JP": "度単位の角度",
                    "ko-KR": "각단위: 도입니다.",
                    "pl-PL": "Kąt w stopniach.",
                    "pt-BR": "Ângulo em graus.",
                    "ru-RU": "Угол в градусах.",
                    "th-TH": "Angle in degrees.",
                    "tr-TR": "Derece cinsinden açı.",
                    "zh-CN": "角度，以角度为单位。",
                    "zh-TW": "Angle in degrees."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C33C",
        "en-US": "Sine From Degrees",
        "es-MX": "Seno en grados",
        "fr-FR": "Sinus en degrés",
        "ja-JP": "度のサイン",
        "pt-BR": "Seno de Graus",
        "tr-TR": "Derece Cinsinden Sinüs",
        "zh-CN": "角度的正弦值",
        "de-DE": "Sine From Degrees",
        "es-ES": "Sine From Degrees",
        "it-IT": "Sine From Degrees",
        "ko-KR": "Sine From Degrees",
        "pl-PL": "Sine From Degrees",
        "ru-RU": "Sine From Degrees",
        "th-TH": "Sine From Degrees",
        "zh-TW": "Sine From Degrees"
    },
    "sqrt": {
        "description": {
            "en-US": "The square root of the specified value."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The real number value whose square root will be computed. Negative values result in zero."
                },
                "type": "unsigned float"
            }
        ],
        "isConstant": true,
        "return": "unsigned float",
        "guid": "00000000C356",
        "en-US": "Square Root",
        "es-MX": "Raíz cuadrada",
        "fr-FR": "Racine carrée",
        "ja-JP": "平方根",
        "pt-BR": "Raiz Quadrada",
        "th-TH": "รากที่สอง",
        "tr-TR": "Karekök",
        "zh-CN": "平方根",
        "de-DE": "Square Root",
        "es-ES": "Square Root",
        "it-IT": "Square Root",
        "ko-KR": "Square Root",
        "pl-PL": "Square Root",
        "ru-RU": "Square Root",
        "zh-TW": "Square Root"
    },
    "strContains": {
        "description": {
            "en-US": "Whether the specified string contains the specified substring."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "The string in which to search for the specified substring."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            },
            {
                "name": "substring",
                "description": {
                    "en-US": "The substring for which to search."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            }
        ],
        "isConstant": true,
        "return": "bool",
        "guid": "000000012070",
        "en-US": "String Contains",
        "es-MX": "La cadena contiene",
        "fr-FR": "Contenu de la chaîne",
        "ja-JP": "含む文字列",
        "pt-BR": "String Contém",
        "tr-TR": "Dizgi İçeriği",
        "zh-CN": "字符串包含",
        "de-DE": "String Contains",
        "es-ES": "String Contains",
        "it-IT": "String Contains",
        "ko-KR": "String Contains",
        "pl-PL": "String Contains",
        "ru-RU": "String Contains",
        "th-TH": "String Contains",
        "zh-TW": "String Contains"
    },
    "strLen": {
        "description": {
            "en-US": "The length in characters of the provided string."
        },
        "args": [
            {
                "name": "string",
                "description": {
                    "en-US": "The string whose characters to count."
                },
                "type": "String",
                "canReplaceEmptyStringByEmptyArray": true
            }
        ],
        "isConstant": true,
        "return": "unsigned int",
        "guid": "0000000124A2",
        "en-US": "String Length",
        "es-MX": "Longitud de la cadena",
        "fr-FR": "Longueur de la chaîne",
        "ja-JP": "文字列の長さ",
        "pt-BR": "Tamanho da String",
        "tr-TR": "Dizgi Uzunluğu",
        "zh-CN": "字符串长度",
        "de-DE": "String Length",
        "es-ES": "String Length",
        "it-IT": "String Length",
        "ko-KR": "String Length",
        "pl-PL": "String Length",
        "ru-RU": "String Length",
        "th-TH": "String Length",
        "zh-TW": "String Length"
    },
    "tan": {
        "description": {
            "en-US": "Tangent of the specified angle in radians."
        },
        "args": [
            {
                "name": "angle",
                "description": {
                    "en-US": "Angle in radians.",
                    "de-DE": "Winkel in Radiant.",
                    "es-ES": "Ángulo en radianes.",
                    "es-MX": "Ángulo en radianes.",
                    "fr-FR": "Angle en radians.",
                    "it-IT": "L'Angolo in radianti.",
                    "ja-JP": "ラジアンの角度",
                    "ko-KR": "각단위: Rad입니다.",
                    "pl-PL": "Kąt w radianach.",
                    "pt-BR": "Ângulo em radianos.",
                    "ru-RU": "Угол в радианах.",
                    "th-TH": "Angle in radians.",
                    "tr-TR": "Radyan cinsinden açı.",
                    "zh-CN": "角度，以弧度为单位。",
                    "zh-TW": "Angle in radians."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7FD",
        "en-US": "Tangent From Radians",
        "es-MX": "Tangente en radianes",
        "fr-FR": "Tangente en radians",
        "ja-JP": "ラジアンのタンジェント",
        "pt-BR": "Tangente de Radianos",
        "tr-TR": "Radyan Cinsinden Tanjant",
        "zh-CN": "弧度的正切值",
        "de-DE": "Tangent From Radians",
        "es-ES": "Tangent From Radians",
        "it-IT": "Tangent From Radians",
        "ko-KR": "Tangent From Radians",
        "pl-PL": "Tangent From Radians",
        "ru-RU": "Tangent From Radians",
        "th-TH": "Tangent From Radians",
        "zh-TW": "Tangent From Radians"
    },
    "tanDeg": {
        "description": {
            "en-US": "Tangent of the specified angle in degrees."
        },
        "args": [
            {
                "name": "angle",
                "description": {
                    "en-US": "Angle in degrees.",
                    "de-DE": "Winkel in Grad.",
                    "es-ES": "Ángulo en grados.",
                    "es-MX": "Ángulo en grados.",
                    "fr-FR": "Angle en degrés.",
                    "it-IT": "L'Angolo in gradi.",
                    "ja-JP": "度単位の角度",
                    "ko-KR": "각단위: 도입니다.",
                    "pl-PL": "Kąt w stopniach.",
                    "pt-BR": "Ângulo em graus.",
                    "ru-RU": "Угол в градусах.",
                    "th-TH": "Angle in degrees.",
                    "tr-TR": "Derece cinsinden açı.",
                    "zh-CN": "角度，以角度为单位。",
                    "zh-TW": "Angle in degrees."
                },
                "type": "float"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000C7F8",
        "en-US": "Tangent From Degrees",
        "es-MX": "Tangente en grados",
        "fr-FR": "Tangente en degrés",
        "ja-JP": "度のタンジェント",
        "pt-BR": "Tangente de Graus",
        "tr-TR": "Derece Cinsinden Tanjant",
        "zh-CN": "角度的正切值",
        "de-DE": "Tangent From Degrees",
        "es-ES": "Tangent From Degrees",
        "it-IT": "Tangent From Degrees",
        "ko-KR": "Tangent From Degrees",
        "pl-PL": "Tangent From Degrees",
        "ru-RU": "Tangent From Degrees",
        "th-TH": "Tangent From Degrees",
        "zh-TW": "Tangent From Degrees"
    },
    "isHeroBeingPlayed": {
        "description": {
            "en-US": "Whether a specific hero is being played (either on a team or in the match)."
        },
        "args": [
            {
                "name": "hero",
                "description": {
                    "en-US": "The hero to check for play."
                },
                "type": "Hero"
            },
            {
                "name": "team",
                "description": {
                    "en-US": "The team or teams on which to check for the hero being played."
                },
                "type": "Team"
            }
        ],
        "return": "bool",
        "guid": "00000000B292",
        "en-US": "Is Hero Being Played",
        "es-MX": "Jugando con el héroe",
        "fr-FR": "Héros joué",
        "ja-JP": "ヒーローがプレイされているか",
        "pt-BR": "É o Herói em Jogo",
        "tr-TR": "Oynanan Kahraman",
        "zh-CN": "正在使用英雄",
        "de-DE": "Is Hero Being Played",
        "es-ES": "Is Hero Being Played",
        "it-IT": "Is Hero Being Played",
        "ko-KR": "Is Hero Being Played",
        "pl-PL": "Is Hero Being Played",
        "ru-RU": "Is Hero Being Played",
        "th-TH": "Is Hero Being Played",
        "zh-TW": "Is Hero Being Played"
    },
    "teamScore": {
        "guid": "00000000B353",
        "description": {
            "en-US": "The current score for the specified team. Results in 0 in free-for-all game modes."
        },
        "args": [
            {
                "name": "team",
                "description": {
                    "en-US": "The team whose score to acquire."
                },
                "type": "Team"
            }
        ],
        "return": "int",
        "en-US": "Team Score",
        "es-MX": "Puntuación del equipo",
        "fr-FR": "Score de l’équipe",
        "ja-JP": "チーム・スコア",
        "pt-BR": "Pontuação da Equipe",
        "tr-TR": "Takım Skoru",
        "zh-CN": "团队得分",
        "de-DE": "Team Score",
        "es-ES": "Team Score",
        "it-IT": "Team Score",
        "ko-KR": "Team Score",
        "pl-PL": "Team Score",
        "ru-RU": "Team Score",
        "th-TH": "Team Score",
        "zh-TW": "Team Score"
    },
    "true": {
        "description": {
            "en-US": "The boolean value of true."
        },
        "args": null,
        "isConstant": true,
        "return": "BoolLiteral",
        "guid": "00000000AC39",
        "en-US": "True",
        "es-MX": "Verdadero",
        "fr-FR": "Vrai",
        "th-TH": "จริง",
        "tr-TR": "Doğru",
        "zh-CN": "真",
        "de-DE": "True",
        "es-ES": "True",
        "it-IT": "True",
        "ja-JP": "True",
        "ko-KR": "True",
        "pl-PL": "True",
        "pt-BR": "True",
        "ru-RU": "True",
        "zh-TW": "True"
    },
    "updateEveryFrame": {
        "description": {
            "en-US": "Increases the update frequency of the provided value to once per tick. Useful for smoothing the appearance of certain Values, such as getPosition(), that normally only update every few ticks. Applies to rule conditions as well as reevaluating action parameters. The value is interpolated client-side if the framerate is higher than the tick rate. May increase server load and/or lower frame rate."
        },
        "args": [
            {
                "name": "value",
                "description": {
                    "en-US": "The value that will be updated once per tick."
                },
                "type": [
                    "Object",
                    "Array"
                ]
            }
        ],
        "isConstant": true,
        "return": [
            "Object",
            "Array"
        ],
        "guid": "00000001232B",
        "en-US": "Update Every Frame",
        "es-MX": "Actualizar todos los cuadros",
        "fr-FR": "Actualiser à chaque image",
        "ja-JP": "フレームごとに更新",
        "pt-BR": "Atualizar a Cada Quadro",
        "tr-TR": "Her Kareyi Güncelle",
        "zh-CN": "逐帧更新",
        "de-DE": "Update Every Frame",
        "es-ES": "Update Every Frame",
        "it-IT": "Update Every Frame",
        "ko-KR": "Update Every Frame",
        "pl-PL": "Update Every Frame",
        "ru-RU": "Update Every Frame",
        "th-TH": "Update Every Frame",
        "zh-TW": "Update Every Frame"
    },
    "vect": {
        "guid": "00000000B0F1",
        "description": {
            "en-US": "A vector composed of three real numbers (x, y, z) where x is left, y is up, and z is forward. Vectors are used for position, direction, and velocity."
        },
        "args": [
            {
                "name": "x",
                "description": {
                    "en-US": "The x value of the vector."
                },
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "y",
                "description": {
                    "en-US": "The y value of the vector."
                },
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            },
            {
                "name": "z",
                "description": {
                    "en-US": "The z value of the vector."
                },
                "type": "float",
                "canReplace0ByFalse": true,
                "canReplace1ByTrue": true
            }
        ],
        "canBePutInBoolean": false,
        "isLiteral": true,
        "isConstant": true,
        "return": "Vector",
        "en-US": "Vector",
        "fr-FR": "Vecteur",
        "ja-JP": "ベクトル",
        "pt-BR": "Vetor",
        "tr-TR": "Vektör",
        "zh-CN": "矢量",
        "de-DE": "Vector",
        "es-ES": "Vector",
        "es-MX": "Vector",
        "it-IT": "Vector",
        "ko-KR": "Vector",
        "pl-PL": "Vector",
        "ru-RU": "Vector",
        "th-TH": "Vector",
        "zh-TW": "Vector"
    },
    "vectorTowards": {
        "description": {
            "en-US": "The displacement vector from one position to another."
        },
        "args": [
            {
                "name": "startPos",
                "description": {
                    "en-US": "The position from which the resulting displacement vector begins."
                },
                "type": "Position"
            },
            {
                "name": "endPos",
                "description": {
                    "en-US": "The position at which the resulting displacement vector ends."
                },
                "type": "Position"
            }
        ],
        "isConstant": true,
        "canBePutInBoolean": false,
        "return": "Direction",
        "guid": "00000000B1EB",
        "en-US": "Vector Towards",
        "es-MX": "Vector hacia",
        "fr-FR": "Vecteur vers",
        "ja-JP": "ベクトルの方向: ",
        "pt-BR": "Vetor Rumo a",
        "tr-TR": "Vektör Yönü",
        "zh-CN": "向量",
        "de-DE": "Vector Towards",
        "es-ES": "Vector Towards",
        "it-IT": "Vector Towards",
        "ko-KR": "Vector Towards",
        "pl-PL": "Vector Towards",
        "ru-RU": "Vector Towards",
        "th-TH": "Vector Towards",
        "zh-TW": "Vector Towards"
    },
    "verticalAngleOfDirection": {
        "description": {
            "en-US": "The vertical angle in degrees corresponding to the specified direction vector."
        },
        "args": [
            {
                "name": "direction",
                "description": {
                    "en-US": "The direction vector from which to acquire a vertical angle in degrees. The vector is unitized before calculation begins."
                },
                "type": "Direction"
            }
        ],
        "isConstant": true,
        "return": "float",
        "guid": "00000000BB2B",
        "en-US": "Vertical Angle From Direction",
        "es-MX": "Ángulo vertical desde la dirección",
        "fr-FR": "Angle vertical depuis une direction",
        "ja-JP": "方向からの頂角",
        "pt-BR": "Ângulo Vertical a partir da Direção",
        "tr-TR": "Yönden Dikey Açı",
        "zh-CN": "与此方向的垂直角度",
        "de-DE": "Vertical Angle From Direction",
        "es-ES": "Vertical Angle From Direction",
        "it-IT": "Vertical Angle From Direction",
        "ko-KR": "Vertical Angle From Direction",
        "pl-PL": "Vertical Angle From Direction",
        "ru-RU": "Vertical Angle From Direction",
        "th-TH": "Vertical Angle From Direction",
        "zh-TW": "Vertical Angle From Direction"
    },
    "verticalAngleTowards": {
        "description": {
            "en-US": "The vertical angle in degrees from a player's current forward direction to the specified position. The result is positive if the position is below the player. Otherwise, the result is zero or negative."
        },
        "args": [
            {
                "name": "player",
                "description": {
                    "en-US": "The player from whose current facing the angle begins."
                },
                "type": "Player"
            },
            {
                "name": "position",
                "description": {
                    "en-US": "The position in the world where the angle ends.",
                    "de-DE": "Die Position in der Welt bei der der Winkel endet.",
                    "es-ES": "Posición en el mundo donde finaliza el ángulo.",
                    "es-MX": "La posición en el mundo donde finaliza el ángulo.",
                    "fr-FR": "La position dans le monde où l’angle prend fin.",
                    "it-IT": "La posizione nel mondo di gioco dove termina l'angolo.",
                    "ja-JP": "ワールドにおける、角度が終了する位置",
                    "ko-KR": "각 각이 종료되는 월드 내 위치입니다.",
                    "pl-PL": "Pozycja w świecie w której kończy się kąt.",
                    "pt-BR": "A posição no mundo onde o ângulo termina.",
                    "ru-RU": "Точка в игровом мире угол до которой нужно вычислить.",
                    "th-TH": "The position in the world where the angle ends.",
                    "tr-TR": "Açının uç kısmının dünyadaki konumu.",
                    "zh-CN": "测定与地图中此位置的夹角。",
                    "zh-TW": "The position in the world where the angle ends."
                },
                "type": "Position"
            }
        ],
        "return": "float",
        "guid": "00000000B27E",
        "en-US": "Vertical Angle Towards",
        "es-MX": "Ángulo vertical en dirección a",
        "fr-FR": "Angle vertical vers",
        "ja-JP": "頂角の方向: ",
        "pt-BR": "Ângulo Vertical Rumo a",
        "tr-TR": "Dikey Açı Yönü",
        "zh-CN": "垂直方向夹角",
        "de-DE": "Vertical Angle Towards",
        "es-ES": "Vertical Angle Towards",
        "it-IT": "Vertical Angle Towards",
        "ko-KR": "Vertical Angle Towards",
        "pl-PL": "Vertical Angle Towards",
        "ru-RU": "Vertical Angle Towards",
        "th-TH": "Vertical Angle Towards",
        "zh-TW": "Vertical Angle Towards"
    },
    "victim": {
        "guid": "00000000B330",
        "description": {
            "en-US": "The player that received the damage for the event currently being processed by this rule. May be the same as the attacker or the event player."
        },
        "args": null,
        "canBePutInBoolean": false,
        "return": "Player",
        "en-US": "Victim",
        "es-MX": "Víctima",
        "fr-FR": "Victime",
        "ja-JP": "犠牲者",
        "pt-BR": "Vítima",
        "tr-TR": "Kurban",
        "zh-CN": "被攻击方",
        "de-DE": "Victim",
        "es-ES": "Victim",
        "it-IT": "Victim",
        "ko-KR": "Victim",
        "pl-PL": "Victim",
        "ru-RU": "Victim",
        "th-TH": "Victim",
        "zh-TW": "Victim"
    },
    "worldVector": {
        "description": {
            "en-US": "The vector in world coordinates corresponding to the provided vector in local coordinates."
        },
        "args": [
            {
                "name": "localVector",
                "description": {
                    "en-US": "The vector in local coordinates that will be converted to world coordinates."
                },
                "type": "Vector"
            },
            {
                "name": "relativePlayer",
                "description": {
                    "en-US": "The player to whom the local vector is relative."
                },
                "type": "Player"
            },
            {
                "name": "transformation",
                "description": {
                    "en-US": "Specifies whether the vector should receive a rotation and a translation (usually applied to positions) or only a rotation (usually applied to directions and velocities)."
                },
                "type": "Transform"
            }
        ],
        "canBePutInBoolean": false,
        "return": "Vector",
        "guid": "00000000B33A",
        "en-US": "World Vector Of",
        "es-MX": "Vector global de",
        "fr-FR": "Vecteur mondial de",
        "ja-JP": "ワールド座標のベクトル: ",
        "pt-BR": "Vetor do Mundo de",
        "tr-TR": "Dünya Vektörü",
        "zh-CN": "地图矢量",
        "de-DE": "World Vector Of",
        "es-ES": "World Vector Of",
        "it-IT": "World Vector Of",
        "ko-KR": "World Vector Of",
        "pl-PL": "World Vector Of",
        "ru-RU": "World Vector Of",
        "th-TH": "World Vector Of",
        "zh-TW": "World Vector Of"
    }
}
//end-json
;
