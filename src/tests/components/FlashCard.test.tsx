import { render, screen } from '@testing-library/react'
import FlashCard from '../../components/FlashCard';
import { BasicStrategyTable, GameAction } from '../../lib/enums';
import useCardDeck from '../../hooks/useCardDeck';
import { BasicStrategyFlashCard, Card } from '../../lib/types';
import { renderHook } from '@testing-library/react'

describe('FlashCard', () => {
    it("should render 3 CardItem components onto the flash card", ()=>{
        const {result} = renderHook(() => useCardDeck(6) as Card[]);
        const deck = result.current[0] as Card[]
        const details = {
            player: ['2', '3'],
            dealer: 'A',
            play: GameAction.Hit,
            table: BasicStrategyTable.Hard
        } as BasicStrategyFlashCard

        render(<FlashCard details={details} deck={deck}/>)

        const cards = screen.queryAllByTestId("CardItem");

        [...details.player, details.dealer].forEach((card, index)=>{
            expect(cards[index]).toBeInTheDocument()
        })
    });
})