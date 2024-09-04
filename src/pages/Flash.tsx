import { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import useCardDeck from "../hooks/useCardDeck";
import { FaPlayCircle } from "react-icons/fa";
import { BasicStrategyFlashCard } from "../lib/types";
import useFlashCardDeck from "../hooks/useFlashCardDeck";

function Flash() {
    const [deck] = useCardDeck(1);
    const [started, setStarted] = useState(false);
    const [currentFlashCard, setCurrentFlashCard] = useState<BasicStrategyFlashCard>()
    const [flashCards, resetFlashCards, setFlashCards] = useFlashCardDeck();

    const startPractice = () => {
        setStarted(true);
        setCard();
    }

    const setCard = () => {
        let flashCard = flashCards.shift();
        setCurrentFlashCard(flashCard);
    }

    const initialStartButton = !started &&
        <Button className="flex animate-pulse bg-emerald-200 rounded-full w-20 h-20 p-0 m-0" onClick={startPractice}>
            <FaPlayCircle className="w-full h-full" />
        </Button>

    let flashCardSection = <div className="flex w-full h-3/4">
        <FlashCard details={currentFlashCard} deck={deck} />
    </div>

    return (
        <>
            <div>Flash</div>
            {/* {
                deck.length && 
                    <FlashCard deck={deck} details={{player:['A', 'K'], dealer: 'A', play: GameAction.Hit}} /> } */}
            {started && currentFlashCard && flashCardSection}

            <div>
                {initialStartButton} 
            </div>
        </>
    )
}

export default Flash;