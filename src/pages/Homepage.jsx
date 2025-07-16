import Jumbotron from "../components/Jumbotron"
import ChiSono from "../components/ChiSono"
import Progetti from "../components/Progetti"
import Contatti from "../components/Contatti"

export default function Homepage() {
    return (
        <>
            <Jumbotron />
            <div className="container">
                <div id="chi-sono-section">
                    <ChiSono />
                </div>
                <Progetti />
                <Contatti />
            </div>
        </>
    )
}