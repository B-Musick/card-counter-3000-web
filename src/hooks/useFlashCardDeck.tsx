import { cardCombinations, hard, soft, splits } from "../lib/constants";
import { BasicStrategyTable, GameAction } from "../lib/enums";
import { shuffleArray } from "../lib/helpers";
import { BasicStrategyFlashCard } from "../lib/types";
import { useEffect, useState } from "react";

export default function useFlashCardDeck() {
    const [flashCards, setFlashCards] = useState<BasicStrategyFlashCard[]>([])

    useEffect(() => {
        setFlashCards(shuffleArray(createFlashCardDeck()));
    }, [])

    const createFlashCardDeck = () => {
        let flashCards = [] as BasicStrategyFlashCard[];

        flashCards = addFlashCardsToArray(flashCards, BasicStrategyTable.Hard, hard, cardCombinations);
        flashCards = addFlashCardsToArray(flashCards, BasicStrategyTable.Soft, soft);
        flashCards = addFlashCardsToArray(flashCards, BasicStrategyTable.Splits, splits);

        return flashCards;
    }

    const addFlashCardsToArray = (flashCards: BasicStrategyFlashCard[], tableLocation: BasicStrategyTable, table: Object, cardCombinations: Object | null) => {
        Object.keys(table).forEach(key => {
            for (let i = 2; i <= 11; i++) {
                let dealerHand = i !== 11 ? i.toString() : 'A';

                flashCards.push({
                    player: cardCombinations ? cardCombinations[key][0] : key.split(','),
                    dealer: dealerHand,
                    play: tableLocation == BasicStrategyTable.Splits ? setAction(splits[key][i - 2].action, key.split(','), i - 2) : setAction(table[key][i - 2].action),
                    table: tableLocation
                });
            }
        })

        return flashCards;
    }

    const setAction = (play, playerCards, dealerIndex) => {
        if (play === GameAction.DontSplit) {
            let cardTotal = parseInt(playerCards[0]) + parseInt(playerCards[1])
            if (cardTotal > 17) return GameAction.Stand;
            else if (cardTotal < 8) return GameAction.Hit;
            else return setAction(hard[cardTotal][dealerIndex].action, playerCards, dealerIndex);
        } else {
            return play;
        }
    }

    const resetFlashCards = () => {
        setFlashCards(shuffleArray(createFlashCardDeck()));
    }

    return [flashCards, resetFlashCards, setFlashCards]
}