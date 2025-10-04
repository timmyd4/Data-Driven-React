export default function Joke(props) {
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            <p className="punchline">Punchline: {props.punchline} <br></br> <span>Likes: {props.likes}</span></p>
            <hr />
        </>
    )
}