import { BasicStrategyFlashCard, Card } from "../lib/types";

type FlashCardProps = {
    details: BasicStrategyFlashCard,
    deck: Card[]
}

const FlashCard: React.FC<FlashCardProps> = ({ details, deck }) => {
    const selectCardFromDeck = (rank) => deck?.find(card => card.rank == rank);

    const dealerCard = selectCardFromDeck(details?.dealer) as Card;
    const playerCardOne = selectCardFromDeck(details?.player[0]) as Card;
    const playerCardTwo = selectCardFromDeck(details?.player[1]) as Card;

    return (
        <div className="flex flex-col items-center justify-between w-3/4 grow">
            <div>
                <div className="bg-gray-200 rounded-lg text-center text-[0.8em] mb-2">
                    Dealer
                </div>
                <div>
                    <img src={dealerCard.imageUrl}/>
                </div>
            </div>
            <div>
                <div className="flex">
                    <img src={playerCardOne.imageUrl} />
                    <img src={playerCardTwo.imageUrl} />
                </div>
                <div className="bg-gray-200 rounded-lg text-center text-[0.8em] mt-2">
                    Player
                </div>
            </div>
        </div>
    )
}

export default FlashCard;