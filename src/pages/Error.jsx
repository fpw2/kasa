import "../styles/error.css"
import { Link } from "react-router-dom"
import Footer from "../components/Footer"

export default function Error() {
    return (
        <div className="error">
            <p className="error-title">404</p>
            <h2 className="error-describe">Oups! La page que vous demandez n'existe pas.</h2>
            <h4 className="error-redirection"><Link to="/">Retournez sur la page d'accueil</Link></h4>
            <Footer />
        </div>
    )
}