import FlashCard from "../components/FlashCard";
import useCardDeck from "../hooks/useCardDeck";
import { GameAction } from "../lib/enums";

function Flash() {
    const [deck] = useCardDeck(2);

    return (
        <>
            <div>Flash</div>
            {
                deck.length && 
                    <FlashCard deck={deck} details={{player:['A', 'K'], dealer: 'A', play: GameAction.Hit}} /> }
        </>
    )
}

export default Flash;