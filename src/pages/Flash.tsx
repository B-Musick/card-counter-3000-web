import { useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import useCardDeck from "../hooks/useCardDeck";
import { FaPlayCircle } from "react-icons/fa";
import { BasicStrategyFlashCard } from "../lib/types";
import useFlashCardDeck from "../hooks/useFlashCardDeck";
import ActionButtonDisplay from "../components/ActionButtonDisplay";
import { clone, convertTableTypeEnumToString, getEnumValsAsString } from "../lib/helpers";
import { BasicStrategyChartType, BasicStrategyTable, FlashCardSelection, GameAction } from "../lib/enums";
import { LuCheckSquare } from "react-icons/lu";
import { FiXSquare, FiSquare } from "react-icons/fi";
import CollapsableSidePanel from "../components/CollapsableSidePanel";
import { soft, hard, splits } from "../lib/constants";
import BasicStrategyChart from "../components/BasicStrategyChart";

function Flash() {
    const [deck] = useCardDeck(1);
    const [started, setStarted] = useState(false);
    const [currentFlashCard, setCurrentFlashCard] = useState<BasicStrategyFlashCard>()
    const [flashCards, resetFlashCards, setFlashCards] = useFlashCardDeck();
    const [outcomeIcon, setOutcomeIcon] = useState(<FiSquare className="w-full h-full" />)
    const [charts, setCharts] = useState({ "soft": clone(soft), "hard": clone(hard), "splits": clone(splits) });
    
    let softTable = <BasicStrategyChart chartTitle="Softs" type={BasicStrategyChartType.Stats} data={charts["soft"]} />
    let hardTable = <BasicStrategyChart chartTitle="Hards" type={BasicStrategyChartType.Stats} data={charts["hard"]} />
    let splitTable = <BasicStrategyChart chartTitle="Splits" type={BasicStrategyChartType.Stats} data={charts["splits"]} />

    const startPractice = () => {
        setStarted(true);
        setCard();
    }

    const setCard = () => {
        let flashCard = flashCards.shift();
        setCurrentFlashCard(flashCard);
    }

    const initialStartButton = <Button className="flex animate-pulse bg-emerald-200 rounded-full w-20 h-20 p-0 m-0" onClick={startPractice}>
            <FaPlayCircle className="w-full h-full" />
        </Button>

    let flashCardSection = <div className="flex w-full h-3/4">
        {currentFlashCard && <FlashCard details={currentFlashCard} deck={deck} />}
    </div>

    const checkAction = (action) => {
        if (action === currentFlashCard?.play) {
            setOutcomeIcon(<LuCheckSquare className="w-full h-full" />);
            updateChart(currentFlashCard, FlashCardSelection.Correct);
        } else {
            setOutcomeIcon(<FiXSquare className="w-full h-full" />);
            updateChart(currentFlashCard, FlashCardSelection.Incorrect);
        }

        if (flashCards.length > 0) {
            setCard();
        } else {
            setCurrentFlashCard(undefined)
        }
    }

    let updateChart = (currentFlashCard, selectionOutcome) => {
        let { player, table, dealer } = currentFlashCard;
        dealer = dealer === 'A' ? 11 : dealer;

        charts[convertTableTypeEnumToString(table)][table == BasicStrategyTable.Hard ? parseInt(player[0]) + parseInt(player[1]) : player][dealer - 2].stats = selectionOutcome;
        setCharts(charts);
    }

    return (
        <div className="h-full bg-emerald-100">
            {started && <div className="flex h-full w-full">
                <div className="flex items-center h-full w-full">
                    {flashCardSection}
                    <ActionButtonDisplay
                        buttons={getEnumValsAsString(GameAction)}
                        handleActionClick={checkAction}
                        omit={['DontSplit']}
                        disableButtonsCallback={!started}
                    />
                </div>
                <CollapsableSidePanel toggleButton={outcomeIcon}>
                    {softTable}
                    {hardTable}
                    {splitTable}
                </CollapsableSidePanel>
            </div>}
            {! started && <div className="w-full h-full flex justify-center items-center">
                {initialStartButton}
            </div>}
        </div>
    )
}

export default Flash;