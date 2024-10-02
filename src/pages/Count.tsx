import { FaPause, FaPlay, FaEye, FaEyeSlash } from "react-icons/fa";
import Button from "../components/Button";
import useCardDeck from "../hooks/useCardDeck";
import { useState } from "react";
import { convertSecondsToMilliseconds } from "../lib/helpers";
import { fullDeckSize } from "../lib/constants";
import { GiCardPlay } from "react-icons/gi";
import { IoIosRefresh } from "react-icons/io";

function Count() {
    let [shoe, count, currCard, deal, getCard, deck, reset] = useCardDeck(1);
    const [automatedInterval, setAutomatedInterval] = useState();
    const [viewDeckDetails, setViewDeckDetails] = useState(false);

    const startCount = () => {
        !automatedInterval && setAutomatedInterval(setInterval(() => {
            deal()
        }, convertSecondsToMilliseconds(30 / fullDeckSize)));
    }

    const pause = () => {
        clearInterval(automatedInterval);
        setAutomatedInterval(undefined);
    }

    const resetRound = () => {
        clearInterval(automatedInterval);
        setAutomatedInterval(undefined);
        reset()
    }

    return (
        <div className="bg-[#01579b] flex flex-col justify-evenly items-center h-full">
            <div className="flex flex-col items-center w-full">
                <div className="flex flex-row w-full justify-center m-3">
                    <Button
                        success
                        className="p-6 rounded-full"
                        onClick={resetRound}>
                        <IoIosRefresh />
                    </Button>
                    <Button
                        success
                        className="p-6 rounded-full"
                        onClick={() => setViewDeckDetails(!viewDeckDetails)}>
                        {viewDeckDetails ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                </div>
                {viewDeckDetails && <div className="w-1/2 bg-emerald text-center">
                    <div>Count: {count || 0}</div>
                    <div>Cards Left: {shoe.length}</div>
                </div>}
            </div>
            {currCard && <img className="max-w-[150px] w-[80%] md:w[90%] lg:w-[100%]" data-testid="CardItem" src={currCard.imageUrl} />}
            <div className="flex">
                <Button
                    success
                    className="p-5 rounded-full"
                    onClick={startCount}
                    disabled={automatedInterval}>
                    <FaPlay />
                </Button>
                <Button
                    secondary
                    className="p-5 rounded-full"
                    disabled={!automatedInterval}
                    onClick={() => { pause() }}>
                    <FaPause />
                </Button>
                <Button
                    secondary
                    className="p-5 rounded-full"
                    onClick={() => { deal() }}>
                    <GiCardPlay />
                </Button>
            </div>
        </div>
    )
}

export default Count;