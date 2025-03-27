import Jumbotron from "../components/Jumbotron"
import ChiSono from "../components/ChiSono"
import Progetti from "../components/Progetti"
import Contatti from "../components/Contatti"

export default function Homepage() {
    return (
        <div>
            <Jumbotron />
            <ChiSono />
            <Progetti />
            <Contatti />
        </div>
    )
}