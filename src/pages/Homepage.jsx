import Jumbotron from "../components/Jumbotron"
import ChiSono from "../components/ChiSono"
import Progetti from "../components/Progetti"
import Contatti from "../components/Contatti"

export default function Homepage() {
    return (
        <div>
            <main className="container">
                <Jumbotron />
                <ChiSono />
                <Progetti />
                <Contatti />
            </main>
        </div>
    )
}