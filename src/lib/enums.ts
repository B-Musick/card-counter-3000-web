export const enum GameAction {
    Stand,
    Hit,
    Double,
    Split,
    DontSplit,
    DoubleElseStand
}

export const enum BasicStrategyTable {
    Soft,
    Hard,
    Splits
}

export const enum BasicStrategyChartType {
    Action,
    Deviation,
    Stats
}

export const enum FlashCardSelection {
    Incorrect,
    Correct
}

export const enum StatisticsView {
    Table,
    Chart
}