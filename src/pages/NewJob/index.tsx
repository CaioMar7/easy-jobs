import { useForm } from "react-hook-form";
import { ActionLinkBtn } from "../../components/ActionLinkBtn";
import { Header } from "../../components/Header";
import { CompanyFields, Container, FormButtons, JobFields, NewJobForm } from "./styles";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";


interface NewJobData {
    cnpj: string,
    email: string,
    job: string,
    locate: string,
    salary: number,
    journey: string,
    jobtype: string,
    description: string,
    required: string
}

const schemaForm = z.object({
    cnpj: z.string().min(11, "O campo CNPJ deve possuir no minimo 11 caracteres.")
})

export function NewJob() {

    const { handleSubmit, register, formState: {errors}} = useForm(
        {
            criteriaMode: "all",
            mode: "all",
            resolver: zodResolver(schemaForm)
        }
    )

    const handleFormSubmit = (data:any) => {
        console.log(data)
    }
    
    errors.cnpj?.message && console.error(errors.cnpj?.message)


    return (
        <Container>
            <Header />
            <NewJobForm onSubmit={handleSubmit(handleFormSubmit)}>
                <CompanyFields>
                    <label htmlFor="cnpj">
                        CNPJ
                        <input type="text" placeholder="Insira aqui o CNPJ da empresa" {...register('cnpj')} id="cnpj"></input>
                    </label>

                    <label htmlFor="email">
                        Email para contato
                        <input type="text" placeholder="Insira aqui o email para contato" {...register('email')} id="email"></input>
                    </label>
                </CompanyFields>

                <JobFields>
                    <div>
                        <label htmlFor="job">
                            Cargo
                            <input type="text" placeholder="ex: Auxiliar Administrativo" id="job" {...register('job')}></input>
                        </label>

                        <label htmlFor="locate">
                            Localização
                            <input type="text" placeholder="ex: Rio de Janeiro, Centro" {...register('locate')} id="locate"></input>
                        </label>

                        <label htmlFor="salary">
                            Salário
                            <input type="number" placeholder="ex: R$ 2354,92" {...register('salary')} id="salary"></input>
                        </label>

                        <label htmlFor="journey">
                            Jornada
                            <input type="text" placeholder="ex: Segunda a sexta, das 9h as 18h" {...register('journey')} id="journey"></input>
                        </label>

                        <label htmlFor="jobtype">
                            Modalidade
                            <select {...register('jobtype')}>
                                <option value="presencial">Presencial</option>
                                <option value="hibrido">Hibrido</option>
                                <option value="remoto">Remoto</option>
                            </select>
                        </label>
                    </div>

                    <div>
                        <label htmlFor="description">
                            Descrição
                            <textarea placeholder="ex: Utilizará ferramentas XYZ para..." {...register('description')} id="description"></textarea>
                        </label>

                        <label htmlFor="required">
                            Requisitos
                            <textarea placeholder="ex: Ensino superior completo, excel avançado..." {...register('required')} id="required"></textarea>
                        </label>
                    </div>

                </JobFields>



                <FormButtons>
                    <ActionLinkBtn type="submit"> Publicar vaga </ActionLinkBtn>
                    <ActionLinkBtn> Cancelar publicação </ActionLinkBtn>
                </FormButtons>
            </NewJobForm>
        </Container>
    )
}