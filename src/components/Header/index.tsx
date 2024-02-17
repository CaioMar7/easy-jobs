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
                    <ActionLinkBtn to="/divulgarvaga">  Divulgue uma vaga </ActionLinkBtn>
                    <ActionLinkBtn to="/vagas"> Encontre uma vaga  </ActionLinkBtn>
                </ul>
            </nav>
        </Container>
    )
}