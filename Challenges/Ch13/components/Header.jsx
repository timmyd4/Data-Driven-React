export default function Header() {
    return (
        <header>
            <img src={`${import.meta.env.BASE_URL}globe.png`} alt="globe icon" />
            <h1>my travel journal.</h1>
        </header>
    )
}