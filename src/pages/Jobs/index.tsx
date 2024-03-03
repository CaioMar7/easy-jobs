import { Link } from "react-router-dom";
import { ActionLinkBtn } from "../../components/ActionLinkBtn";
import { Header } from "../../components/Header";
import { AsideMenu, Benefits, Container, DateJob, FilterForm, JobType, JobsList, Journey, LocateText, Salary, SearchInput, SelectInput } from "./styles";


import { IoMdPin } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { JobSchema } from "../NewJob";

import axios from "axios";

import { useEffect, useState } from "react";

export function Jobs() {


    const [jobsList, setJobsList] = useState<JobSchema[] | null>([])

    useEffect(() => {

        async function getJobs(): Promise<JobSchema[]> {

            const response = await axios.get("http://localhost:3333/jobs/")

            setJobsList(response.data)

            console.log(response.data)

            return response.data
        }

        getJobs()
    }, [])

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
                    {
                        jobsList && jobsList.map((job, index) => (
                            <li key={index}>
                                <Link to="/">
                                    {job.name}
                                    <JobType>
                                        {job.type}
                                    </JobType>
                                    <DateJob> Publicada em <span> {job.created_at} </span> </DateJob>
                                </Link>

                                <Salary>
                                    Salário: <span> R${job.salary},00 </span>
                                </Salary>

                                <Journey>
                                    Jornada: <span> {job.journey} </span>
                                </Journey>
                                    
                                <Benefits>
                                    Benefícios
                                    <div>
                                        <ul>
                                            {
                                                job.benefits.length > 0 ? job.benefits.map( (benefit) => (
                                                    <li key={benefit.id}> {benefit.name} </li>
                                                )) :
                                                <p> Nenhum beneficio foi informado </p>
                                            }
                                        </ul>
                                        <LocateText>
                                            <IoMdPin />{job.locate}
                                        </LocateText>
                                    </div>
                                </Benefits>
                            </li>
                        ))
                    }

                </JobsList>
            </section>
        </Container>
    )
}