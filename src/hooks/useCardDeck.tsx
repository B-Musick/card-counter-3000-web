import { useEffect, useState } from "react";
import { suits, ranks, fullDeckSize } from "../lib/constants";
import { Card } from "../lib/types";

function useCardDeck(deckAmount:number) {
    const [shoe, setShoe] = useState<Card[]>([]);
    const [count, setCount] = useState<number>(0);
    const [currCard, setCurrCard] = useState<Card>();
    const [deck, setDeck] = useState<Card[]>([]);

    useEffect(()=>{
        setShoe(shuffleShoe(createShoe()));
        setDeck(shuffleShoe(createDeck()));
    }, [deckAmount])

    const reset = () => {
        setShoe(shuffleShoe(createShoe()));
        setDeck(shuffleShoe(createDeck()));
        setCount(0);
        setCurrCard(undefined)
    }

    const createShoe = () => {
        let shoe: Card[] = [];

        for(let i = 0; i < deckAmount; i++) {
            shoe = [...shoe, ...createDeck()]
        }

        return shoe;
    }

    const createDeck = () => {
        let newDeck: Card[] = []

        suits.forEach(suit=>{
          ranks.forEach(rank=>{
            newDeck.push({suit, rank, count: setCardCountValue(rank), imageUrl: `./cards/${rank}${suit}.svg`} as Card);
          })
        })

        return newDeck;
    }

    const setCardCountValue = (rank: string) => {
        let count = 0;

        if(isNaN(parseInt(rank)) || rank == '10') count = -1;
        else if(parseInt(rank) <= 6) count = 1;
        
        return count;
    }

    const getCard = (rank: string) => {
        return deck?.find(card=>card.rank == rank)
    }
    
    const deal = () => {
        let selectedCard = shoe.pop();

        setCurrCard(selectedCard);
        setCount(count=>count+=selectedCard?.count);
    }

    const shuffleShoe = (cards: Card[]) => {
        const deckSize = cards.length;

        for (let i = 0; i < deckSize; i++) {
            // Random for remaining positions.
            let r = i + (Math.floor(Math.random() * (deckSize - i)));
            let tmp = cards[i];
            cards[i] = cards[r];
            cards[r] = tmp;
        }

        return cards;
    }

    return [shoe, count, currCard, deal, getCard, deck, reset];
}

export default useCardDeck;