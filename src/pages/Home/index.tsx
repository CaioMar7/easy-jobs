import { Header } from "../../components/Header";
import { Container, FirstSection } from "./styles";

import heroBanner from "../../assets/equipe.png"
import { ActionLinkBtn } from "../../components/ActionLinkBtn";

export function Home() {
    return (
        <Container>
            <Header/>
            <FirstSection>
                <div className="herobanner">
                    <img src={heroBanner} alt="Foto de diversos trabalhadores reunidos."></img>
                </div>
                <div className="herotext">
                    <h1> O site mais fácil de divulgar e de encontrar vagas! </h1>
                    <p> Nós da EasyJobs prezamos pela simplicidade tanto na divulgação da vaga, quanto na inscrição! Facilitando para você empresa e para você candidato! </p>
                    <div>
                        <ActionLinkBtn to="/signup"> Cadastre sua empresa </ActionLinkBtn>
                    </div>
                </div>
                <svg className="blob" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="#000000" d="M27.8,-41C37.8,-31,48.9,-25.2,57,-15.1C65,-4.9,70.1,9.8,68.8,25.1C67.6,40.5,60.2,56.5,47.7,62.2C35.2,67.9,17.6,63.1,1.1,61.6C-15.4,60.2,-30.8,61.9,-37.5,54.4C-44.2,46.8,-42.2,29.9,-43.5,16.4C-44.8,2.8,-49.4,-7.4,-47.9,-16.7C-46.4,-25.9,-38.7,-34.3,-29.7,-44.6C-20.6,-54.9,-10.3,-67.2,-0.7,-66.2C8.9,-65.2,17.8,-51,27.8,-41Z" transform="translate(100 100)" />
                </svg>
            </FirstSection>

        </Container>
    )
}