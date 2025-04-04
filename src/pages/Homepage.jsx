import Jumbotron from "../components/Jumbotron"
import ChiSono from "../components/ChiSono"
import Progetti from "../components/Progetti"

export default function Homepage() {
    return (
        <div>
            <main>
                <Jumbotron />
                <div className="container">
                    <ChiSono />
                    <Progetti />
                </div>
            </main>
        </div>
    )
}