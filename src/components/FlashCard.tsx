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
        <div className="flex flex-col justify-between h-full w-full">
            <div className="flex w-full flex-col items-center">
                <div className="bg-gray-200 rounded-lg text-center text-[0.8em] mb-2">
                    Dealer
                </div>
                <div>
                    <img className="max-w-[150px] w-[80%] md:w[90%] lg:w-[100%]" data-testid="CardItem" src={dealerCard.imageUrl} />
                </div>
            </div>
            <div className="w-full">
                <div className="flex w-full justify-center">
                    <div>
                        <img className="max-w-[150px] w-[80%] md:w[90%] lg:w-[100%]" data-testid="CardItem" src={playerCardOne.imageUrl} />
                    </div>
                    <div>
                        <img className="max-w-[150px] w-[80%] md:w[90%] lg:w-[100%]" data-testid="CardItem" src={playerCardTwo.imageUrl} />
                    </div>
                </div>
                <div className="bg-gray-200 rounded-lg text-center text-[0.8em] mt-2">
                    Player
                </div>
            </div>
        </div>
    )
}

export default FlashCard;