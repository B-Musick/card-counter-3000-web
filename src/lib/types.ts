import { GameAction } from "./enums"

export type BasicStrategyChartCell = {
    action: GameAction,
    deviation: string,
    stats: number | null
}