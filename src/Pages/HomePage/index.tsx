import { FunctionComponent } from "react"
import signup from "../../assets/singup.png"
import stayupdated from "../../assets/stayupdated.png"
import space from "../../assets/space1.png"
import checkout from "../../assets/checkout1.png"
import musica from "../../assets/musica .png"
import { Link } from "react-router-dom"


interface HomePageProps {}

const HomePage: FunctionComponent<HomePageProps> = () => { 
    return (
        <div>
            <Link to="/sign-up">
            <img src={signup} alt="" width="600rem" />
            <h1>Sign Up</h1>
            </Link>
            <hr />
            <Link to="/stay-updated">
            <img src={stayupdated} alt="" width="600rem" />
            <h1>Stay Updated</h1>
            </Link>
            <hr />
            <Link to="/space">
            <img src={space} alt="" width="600rem" />
            <h1>Space</h1>
            </Link>
            <hr />
            <Link to="/checkout">
            <img src={checkout} alt="" width="600rem" />
            <h1>Checkout</h1>
            </Link>
            <Link to="/artist/:artistName">
            <img src={musica} alt="" width="600rem" />
            <h1>Music</h1>
            </Link>
        </div>
    )
}

export default HomePage;