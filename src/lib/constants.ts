import { GameAction } from "./enums"

export const suits = ['H', 'C', 'S', 'D'];
export const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const fullDeckSize = 52;

export const cardCombinations = {
    // Card combinations used for the flash cards
    '8': [['5', '3'], ['6', '2']],
    '9': [['5', '4'], ['6', '3'], ['7', '2']],
    '10': [['6', '4'], ['7', '3'], ['8', '2']],
    '11': [['6', '5'], ['7', '4'], ['8', '3'], ['9', '2']],
    '12': [['7', '5'], ['8', '4'], ['9', '3'], ['10', '2']],
    '13': [['7', '6'], ['8', '5'], ['9', '4'], ['10', '3']],
    '14': [['8', '6'], ['9', '5'], ['10', '4']],
    '15': [['8', '7'], ['9', '6'], ['10', '5']],
    '16': [['9', '7'], ['10', '6']],
    '17': [['9', '8'], ['10', '7']],
}

export const soft = {
    'A,9': [
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
    ],
    'A,8': [
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '3+', stats: null },
        { action: GameAction.Stand, deviation: '1+', stats: null },
        { action: GameAction.DoubleElseStand, deviation: '0-', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
    ],
    'A,7': [
        { action: GameAction.DoubleElseStand, deviation: '', stats: null },
        { action: GameAction.DoubleElseStand, deviation: '', stats: null },
        { action: GameAction.DoubleElseStand, deviation: '', stats: null },
        { action: GameAction.DoubleElseStand, deviation: '', stats: null },
        { action: GameAction.DoubleElseStand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    'A,6': [
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    'A,5': [
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    'A,4': [
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    'A,3': [
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    'A,2': [
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ]
}

export const hard = {
    '17': [
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
    ],
    '16': [
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '4+', stats: null },
        { action: GameAction.Hit, deviation: '0+', stats: null },
        { action: GameAction.Hit, deviation: '3+', stats: null },
    ],
    '15': [
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '4+', stats: null },
        { action: GameAction.Hit, deviation: '5+', stats: null },
    ],
    '14': [
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    '13': [
        { action: GameAction.Stand, deviation: '1-', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    '12': [
        { action: GameAction.Hit, deviation: '3+', stats: null },
        { action: GameAction.Hit, deviation: '2+', stats: null },
        { action: GameAction.Stand, deviation: '0-', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Stand, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    '11': [
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
    ],
    '10': [
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '4+', stats: null },
        { action: GameAction.Hit, deviation: '3+', stats: null },
    ],
    '9': [
        { action: GameAction.Hit, deviation: '1+', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Double, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '3+', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ],
    '8': [
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '2+', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
        { action: GameAction.Hit, deviation: '', stats: null },
    ]
}

export const splits = {
    'A,A': [
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null }
    ],
    '10,10': [
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
    '9,9': [
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
    '8,8': [
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null }
    ],
    '7,7': [
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
    '6,6': [
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
    '5,5': [
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
    '4,4': [
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
    '3,3': [
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
    '2,2': [
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.Split, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null },
        { action: GameAction.DontSplit, deviation: '', stats: null }
    ],
}