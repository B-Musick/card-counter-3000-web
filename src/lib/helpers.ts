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