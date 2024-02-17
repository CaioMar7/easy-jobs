import { Link } from "react-router-dom";
import { ActionLinkBtn } from "../../components/ActionLinkBtn";
import { Header } from "../../components/Header";
import { AsideMenu, Benefits, Container, DateJob, FilterForm, JobType, JobsList, Journey, LocateText, Salary, SearchInput, SelectInput } from "./styles";


import { IoMdPin } from "react-icons/io";
import { FaSearch } from "react-icons/fa";


export function Jobs() {
    return (
        <Container>
            <Header />
            <section>
                <AsideMenu>
                    <FilterForm>
                        <SearchInput>
                            <p> Pesquise por palavras chaves </p>
                            <input type="text" placeholder="Palavras chaves, ex: Desenvolvedor..." />
                        </SearchInput>
                        <SelectInput>
                            <fieldset>
                                <legend>Selecione a modalidade</legend>
                                <select>
                                    <option value={"none"}>Selecione o Estado</option>
                                    <option value={"RJ"}>Rio de Janeiro</option>
                                    <option value={"SP"}>São Paulo</option>
                                    <option value={"MG"}>Minas Gerais</option>
                                    <option value={"ES"}>Espirito Santo</option>
                                </select>
                            </fieldset>
                        </SelectInput>
                        <SelectInput>
                            <fieldset>
                                <legend>Selecione a modalidade</legend>
                                <select>
                                    <option value={"none"}>Selecione a modalidade</option>
                                    <option value={"presencial"}>Presencial</option>
                                    <option value={"hybrid"}>Hibrido</option>
                                    <option value={"remote"}>Remoto</option>
                                </select>
                            </fieldset>
                        </SelectInput>
                        <ActionLinkBtn to="/"> Pesquisar <span> <FaSearch /> </span> </ActionLinkBtn>
                    </FilterForm>
                </AsideMenu>
                <JobsList>
                    <li>
                        <Link to="/">
                            Desenvolvedor Web
                            <JobType>
                                Remoto
                            </JobType>
                            <DateJob> Publicada em <span> 28/01/2024 </span> </DateJob>
                        </Link>

                        <Salary>
                            Salário: <span> R$3.900,00 </span>
                        </Salary>

                        <Journey>
                            Jornada: <span> segunda a sexta, das 8h às 17h. </span>
                        </Journey>

                        <Benefits>
                            Benefícios
                            <div>
                                <ul>
                                    <li> Vale Refeição </li>
                                    <li> Gympass </li>
                                    <li> Plano de Saúde </li>
                                </ul>
                                <LocateText>
                                    <IoMdPin/> Rio de Janeiro
                                </LocateText>
                            </div>
                        </Benefits>
                    </li>
                    <li>
                        <Link to="/">
                            Analista Financeiro
                            <JobType>
                                Hibrido
                            </JobType>
                            <DateJob> Publicada em <span> 28/01/2024 </span> </DateJob>
                        </Link>

                        <Salary>
                            Salário: <span> R$2.950,00 </span>
                        </Salary>

                        <Journey>
                            Jornada: <span> segunda a sexta, das 8h às 17h. </span>
                        </Journey>

                        <Benefits>
                            Benefícios
                            <div>
                                <ul>
                                    <li> Vale Refeição </li>
                                    <li> Vale Transporte </li>
                                    <li> Plano de Saúde </li>
                                    <li> Plano Odontológico </li>
                                    <li> Convênio Faculdade </li>
                                    
                                </ul>
                                <LocateText>
                                    <IoMdPin/> Rio de Janeiro
                                </LocateText>
                            </div>
                        </Benefits>
                    </li>
                    <li>
                        <Link to="/">
                            Auxiliar de Serviços Gerais
                            <JobType>
                                Presencial
                            </JobType>
                            <DateJob> Publicada em <span> 28/01/2024 </span> </DateJob>
                        </Link>

                        <Salary>
                            Salário: <span> R$1.900,00 </span>
                        </Salary>

                        <Journey>
                            Jornada: <span> segunda a sexta, das 8h às 17h. </span>
                        </Journey>

                        <Benefits>
                            Benefícios
                            <div>
                                <ul>
                                    <li> Vale Alimentação </li>
                                    <li> Vale Transporte </li>
                                </ul>
                                <LocateText>
                                    <IoMdPin/> São Paulo
                                </LocateText>
                            </div>
                        </Benefits>
                    </li>
                    <li>
                        <Link to="/">
                            Assistente Administrativo
                            <JobType>
                                Presencial
                            </JobType>
                            <DateJob> Publicada em <span> 27/01/2024 </span> </DateJob>
                        </Link>

                        <Salary>
                            Salário: <span> R$2.130,00 </span>
                        </Salary>

                        <Journey>
                            Jornada: <span> segunda a sexta, das 8h às 17h. </span>
                        </Journey>

                        <Benefits>
                            Benefícios
                            <div>
                                <ul>
                                    <li> Vale Refeição </li>
                                    <li> Vale Transporte </li>
                                    <li> Convênio Faculdade </li>
                                </ul>
                                <LocateText>
                                    <IoMdPin/> Rio de Janeiro
                                </LocateText>
                            </div>
                        </Benefits>
                    </li>
                    <li>
                        <Link to="/">
                            Desenvolvedor Web
                            <JobType>
                                Presencial
                            </JobType>
                            <DateJob> Publicada em <span> 28/01/2024 </span> </DateJob>
                        </Link>

                        <Salary>
                            Salário: <span> R$1.900,00 </span>
                        </Salary>

                        <Journey>
                            Jornada: <span> segunda a sexta, das 8h às 17h. </span>
                        </Journey>

                        <Benefits>
                            Benefícios
                            <div>
                                <ul>
                                    <li> Vale Refeição </li>
                                    <li> Vale Transporte </li>
                                </ul>
                                <LocateText>
                                    <IoMdPin/> Rio de Janeiro
                                </LocateText>
                            </div>
                        </Benefits>
                    </li>
                    <li>
                        <Link to="/">
                            Desenvolvedor Web
                            <JobType>
                                Presencial
                            </JobType>
                            <DateJob> Publicada em <span> 28/01/2024 </span> </DateJob>
                        </Link>

                        <Salary>
                            Salário: <span> R$1.900,00 </span>
                        </Salary>

                        <Journey>
                            Jornada: <span> segunda a sexta, das 8h às 17h. </span>
                        </Journey>

                        <Benefits>
                            Benefícios
                            <div>
                                <ul>
                                    <li> Vale Refeição </li>
                                    <li> Vale Transporte </li>
                                </ul>
                                <LocateText>
                                    <IoMdPin/> Rio de Janeiro
                                </LocateText>
                            </div>
                        </Benefits>
                    </li>

                </JobsList>
            </section>
        </Container>
    )
}