import { GameAction } from "./enums"

export type BasicStrategyChartCell = {
    action: GameAction,
    deviation: string,
    stats: number | null
}

export interface Card {
    suit: string,
    rank: string,
    count: number,
    imageUrl: string
}