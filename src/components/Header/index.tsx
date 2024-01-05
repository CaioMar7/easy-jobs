import { Container } from "./styles";

import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <nav>
                <h1> Logo </h1>
                <ul>
                    <li> <Link to="/"> Encontre uma vaga </Link> </li>
                    <li> <Link to="/"> Login </Link> </li>
                    <li className="rounded-btn"> <Link to="/"> Divulgue uma vaga </Link> </li>
                </ul>
            </nav>
        </Container>
    )
}