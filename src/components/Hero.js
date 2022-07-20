import grid from "../images/photo-grid.png"

export default function Hero(){
    return (
        <section className="Hero">
            <img src={grid} className="hero-photo"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join uniqie interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
        </section>
    )
}