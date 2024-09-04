import { GameAction } from "./enums";

export function convertGameActionToString(action: GameAction) {
    switch (action) {
        case GameAction.Double:
            return 'D';
        case GameAction.DoubleElseStand:
            return 'Ds';
        case GameAction.Hit:
            return 'H';
        case GameAction.Split:
            return 'Y';
        case GameAction.DontSplit:
            return 'N';
        case GameAction.Stand:
            return 'S';
    }
}

export const getEnumValsAsString = (enumType) => {
    return Object.keys(enumType).filter((v) => isNaN(Number(v)));
}

export function shuffleArray(list: Array<any>) {
    const listSize = list.length;

    for (let i = 0; i < listSize; i++) {
        // Random for remaining positions.
        let r = i + (Math.floor(Math.random() * (listSize - i)));
        let tmp = list[i];
        list[i] = list[r];
        list[r] = tmp;
    }

    return list;
}