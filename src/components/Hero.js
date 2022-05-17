const Hero = ({ h1Text, pText }) => {
    return (
        <main className="hero--container">
            <h1 className="hero--heading">{h1Text}</h1>
            <p className="hero--paragraph">{pText}</p>
        </main>
    )
}

export default Hero;