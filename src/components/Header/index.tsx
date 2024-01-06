import { Container } from "./styles";
import { PiBagFill } from "react-icons/pi";

import { Link } from "react-router-dom";
import { ActionLinkBtn } from "../ActionLinkBtn";

export function Header() {
    return (
        <Container>
            <nav>
                <h1> <Link to="/"> EASYJOBS <PiBagFill /> </Link> </h1>
                <ul>
                    <li> <Link to="/"> Encontre uma vaga </Link> </li>
                    <li> <Link to="/"> Login </Link> </li>
                    <ActionLinkBtn to="/signup"> Divulgue uma vaga </ActionLinkBtn>
                </ul>
            </nav>
        </Container>
    )
}