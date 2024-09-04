import { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import useCardDeck from "../hooks/useCardDeck";
import { FaPlayCircle } from "react-icons/fa";
import { BasicStrategyFlashCard } from "../lib/types";
import useFlashCardDeck from "../hooks/useFlashCardDeck";
import ActionButtonDisplay from "../components/ActionButtonDisplay";
import { getEnumValsAsString } from "../lib/helpers";
import { GameAction } from "../lib/enums";

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

    const checkAction = (action) => {
        // if (action === currentFlashCard?.play) {
        //     setOutcomeIcon('check-square-o');
        //     updateChart(currentFlashCard, FlashCardSelection.Correct);
        // } else {
        //     setOutcomeIcon('minus-square-o')
        //     updateChart(currentFlashCard, FlashCardSelection.Incorrect);
        // }

        if (flashCards.length > 0) {
            setCard();
        } else {
            setCurrentFlashCard(undefined)
        }
    } 

    return (
        <>
        <div className="flex items-center h-full">
                {started && currentFlashCard && flashCardSection}
                {started && <ActionButtonDisplay
                    buttons={getEnumValsAsString(GameAction)}
                    handleActionClick={checkAction}
                    omit={['DontSplit']}
                    disableButtonsCallback={!started}
                />}
        </div>
            {/* {
                deck.length && 
                    <FlashCard deck={deck} details={{player:['A', 'K'], dealer: 'A', play: GameAction.Hit}} /> } */}
            <div>
                {initialStartButton}
            </div>
        </>
    )
}

export default Flash;