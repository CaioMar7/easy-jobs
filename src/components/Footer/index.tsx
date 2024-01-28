import { Container } from './styles'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <Container>
            <nav>
                <h2> Redes Sociais </h2>
                <ul>
                    <li> <Link to="/"> Link 1 </Link> </li>
                    <li> <Link to="/"> Link 1 </Link> </li>
                    <li> <Link to="/"> Link 1 </Link> </li>
                </ul>
            </nav>
            <nav>
                <h2> Links Uteis </h2>
                <ul>
                    <li> <Link to="/"> Link 1 </Link> </li>
                    <li> <Link to="/"> Link 1 </Link> </li>
                    <li> <Link to="/"> Link 1 </Link> </li>
                </ul>
            </nav>
            <nav>
                <h2> Sobre Vagas </h2>
                <ul>
                    <li> <Link to="/"> Link 1 </Link> </li>
                    <li> <Link to="/"> Link 1 </Link> </li>
                    <li> <Link to="/"> Link 1 </Link> </li>
                </ul>
            </nav>
        </Container>
    )
}3