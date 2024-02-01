import { ActionLinkBtn } from "../../components/ActionLinkBtn";
import { Header } from "../../components/Header";
import { CompanyFields, Container, FormButtons, JobFields, NewJobForm } from "./styles";

export function NewJob() {
    return (
        <Container>
            <Header />
            <NewJobForm>
                <CompanyFields>
                    <label htmlFor="cnpj">
                        CNPJ
                        <input type="text" placeholder="Insira aqui o CNPJ da empresa" name="cnpj" id="cnpj"></input>
                    </label>

                    <label htmlFor="email">
                        Email para contato
                        <input type="text" placeholder="Insira aqui o email para contato" name="email" id="email"></input>
                    </label>
                </CompanyFields>

                <JobFields>
                    <div>
                        <label htmlFor="job">
                            Cargo
                            <input type="text" placeholder="ex: Auxiliar Administrativo" name="job" id="job"></input>
                        </label>

                        <label htmlFor="locate">
                            Localização
                            <input type="text" placeholder="ex: Rio de Janeiro, Centro" name="locate" id="locate"></input>
                        </label>

                        <label htmlFor="salary">
                            Salário
                            <input type="number" placeholder="ex: R$ 2354,92" name="salary" id="salary"></input>
                        </label>

                        <label htmlFor="journey">
                            Jornada
                            <input type="text" placeholder="ex: Segunda a sexta, das 9h as 18h" name="journey" id="journey"></input>
                        </label>

                        <label htmlFor="journey">
                            Modalidade
                            <select>
                                <option value="presencial">Presencial</option>
                                <option value="hibrido">Hibrido</option>
                                <option value="remoto">Remoto</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="description">
                            Descrição
                            <textarea placeholder="ex: Utilizará ferramentas XYZ para..." name="description" id="description"></textarea>
                        </label>

                        <label htmlFor="required">
                            Requisitos
                            <textarea placeholder="ex: Ensino superior completo, excel avançado..." name="required" id="required"></textarea>
                        </label>
                    </div>

                </JobFields>



                <FormButtons>
                    <ActionLinkBtn> Publicar vaga </ActionLinkBtn>
                    <ActionLinkBtn> Cancelar publicação </ActionLinkBtn>
                </FormButtons>
            </NewJobForm>
        </Container>
    )
}