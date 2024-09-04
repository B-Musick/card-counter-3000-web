import useCardDeck from "../hooks/useCardDeck";

function Flash() {
    const [deck] = useCardDeck(1);
    console.log(deck)
    return (
        <>
            <div>Flash</div>
            <img src={deck[0].imageUrl}></img>
        </>
    )
}

export default Flash;