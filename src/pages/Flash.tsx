import { useEffect, useState } from "react";
import Button from "../components/Button";
import FlashCard from "../components/FlashCard";
import useCardDeck from "../hooks/useCardDeck";
import { FaChartBar, FaInfoCircle, FaPlayCircle } from "react-icons/fa";
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
import useLocalStorage from "../hooks/useLocalStorage";
import { Box, Modal } from "@mui/material";
import { NavLink } from "react-router-dom";

function Flash() {
    const [deck] = useCardDeck(1);
    const [started, setStarted] = useState(false);
    const [currentFlashCard, setCurrentFlashCard] = useState<BasicStrategyFlashCard>()
    const [flashCards, resetFlashCards, setFlashCards] = useFlashCardDeck();
    const [outcomeIcon, setOutcomeIcon] = useState(<FiSquare className="w-full h-full" />)
    const [charts, setCharts] = useState({ "soft": clone(soft), "hard": clone(hard), "splits": clone(splits) });
    const [showContinueProgressModal, setShowContinueProgressModal] = useState(false)

    const [flashData, saveFlashData] = useLocalStorage('flashTableData')
    const [currentFlashGame, saveCurrentFlashGame, clearCurrentGame] = useLocalStorage('currentFlashGame')

    let softTable = <BasicStrategyChart chartTitle="Softs" type={BasicStrategyChartType.Stats} data={charts["soft"]} />
    let hardTable = <BasicStrategyChart chartTitle="Hards" type={BasicStrategyChartType.Stats} data={charts["hard"]} />
    let splitTable = <BasicStrategyChart chartTitle="Splits" type={BasicStrategyChartType.Stats} data={charts["splits"]} />

    const startPractice = () => {
        setStarted(true);
        setCard();
    }

    useEffect(()=>{
        if (localStorage.getItem('currentFlashGame')) {
            setShowContinueProgressModal(true)
        }
    }, [])

    const loadProgress = () => {
        let {flashCards, currentFlashCard, charts} = currentFlashGame;
        setShowContinueProgressModal(false)
        setFlashCards(flashCards)
        setCurrentFlashCard(currentFlashCard)
        setCharts(charts);
        setStarted(true);
    }

    let continueProgressModal = <Modal
        open={showContinueProgressModal}
        onClose={() => setShowContinueProgressModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
    >
        <Box className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">
            <div className="flex flex-col w-full h-full bg-white rounded-xl p-4 z">
                <div className="mb-5">Continue uninished game or start fresh?</div>
                <div className="w-full h-full flex justify-evenly">
                    <Button primary rounded className="w-1/3" onClick={loadProgress}>Continue</Button>
                    <Button success rounded className="w-1/3" onClick={() => {setShowContinueProgressModal(false); clearCurrentGame();}}>New</Button>
                </div>
            </div>
        </Box>
    </Modal>

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
            saveProgress();
        } else {
            setCurrentFlashCard(undefined)
            saveFlashData({
                "score": getScore().score,
                "total": getScore().total,
                "results": {
                    "hards": charts.hard,
                    "softs": charts.soft,
                    "splits": charts.splits
                },
                "created_at": new Date()
            })
        }
    }

    const saveProgress = () => {
        saveCurrentFlashGame({
            'flashCards': flashCards,
            'currentFlashCard': currentFlashCard,
            'charts': charts
        }, true)
   
    }

    let getScore = () => {
        let outcome = { score: 0, total: 0 }

        getTableScore(charts.hard, outcome)
        getTableScore(charts.soft, outcome)
        getTableScore(charts.splits, outcome)

        return outcome;
    }

    const getTableScore = (table, outcome) => {
        Object.keys(table).forEach((key) => {
            table[key].forEach(cell => {
                outcome.total += 1;
                outcome.score += cell.stats
            })
        })

        return outcome;
    }

    let updateChart = (currentFlashCard, selectionOutcome) => {
        let { player, table, dealer } = currentFlashCard;
        dealer = dealer === 'A' ? 11 : dealer;

        charts[convertTableTypeEnumToString(table)][table == BasicStrategyTable.Hard ? parseInt(player[0]) + parseInt(player[1]) : player][dealer - 2].stats = selectionOutcome;
        setCharts(charts);
    }

    return (
        <div className="h-full bg-emerald-100 relative">
            <div className="absolute">
                <NavLink to="/flash/stats">
                    <Button className="rounded-full bg-white p-3 m-2"><FaChartBar /></Button>
                </NavLink>
                {/* This will show modal with info on how to use */}
                <Button className="rounded-full bg-white p-3 m-2"><FaInfoCircle /></Button>
            </div>
            {showContinueProgressModal && continueProgressModal}
            {started && <div className="flex h-full">
                <div className="flex items-center h-full">
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