import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Container, FirstSection } from "./styles";

import heroBanner from "../../assets/equipe.png"

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
                        <button> Cadastre-se </button>
                    </div>
                </div>
            </FirstSection>
            <Footer/>
        </Container>
    )
}