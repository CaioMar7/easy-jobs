import { useForm } from "react-hook-form";
import { ActionLinkBtn } from "../../components/ActionLinkBtn";
import { Header } from "../../components/Header";
import { CompanyFields, Container, FormButtons, JobFields, NewJobForm } from "./styles";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const schemaForm = z.object({
    cnpj: z.string().min(11, "O campo CNPJ deve possuir no minimo 11 caracteres."),
    email: z.string().min(1, { message: "O campo email precisa ser preenchido." }),
    job: z.string().min(1, { message: "O campo cargo precisa ser preenchido." }),
    salary: z.string().min(1, { message: "O campo salário precisa ser preenchido." }),
    locate: z.string().min(1, { message: "O campo localização precisa ser preenchido." }),
    journey: z.string().min(1, { message: "O campo jornada precisa ser preenchido." }),
    jobtype: z.string().min(1, { message: "Uma modalidade precisa ser escolhida." }),
})

export function NewJob() {

    const { handleSubmit, register, formState: { errors } } = useForm(
        {
            criteriaMode: "all",
            mode: "all",
            resolver: zodResolver(schemaForm)
        }
    )

    const handleFormSubmit = (data: any) => {
        console.log(data)
    }

    return (
        <Container>
            <Header />
            <NewJobForm onSubmit={handleSubmit(handleFormSubmit)}>
                <CompanyFields>
                    <label htmlFor="cnpj">
                        CNPJ
                        <input type="text" placeholder="Insira aqui o CNPJ da empresa" {...register('cnpj')} id="cnpj"></input>
                        {
                            errors.cnpj?.message &&
                            <p> {errors.cnpj?.message} </p>
                        }
                    </label>

                    <label htmlFor="email">
                        Email para contato
                        <input type="text" placeholder="Insira aqui o email para contato" {...register('email')} id="email"></input>
                        {
                            errors.cnpj?.message &&
                            <p> {errors.cnpj?.message} </p>
                        }
                    </label>
                </CompanyFields>

                <JobFields>
                    <div>
                        <label htmlFor="job">
                            Cargo
                            <input type="text" placeholder="ex: Auxiliar Administrativo" id="job" {...register('job')}></input>
                            {
                                errors.cnpj?.message &&
                                <p> {errors.cnpj?.message} </p>
                            }
                        </label>

                        <label htmlFor="locate">
                            Localização
                            <input type="text" placeholder="ex: Rio de Janeiro, Centro" {...register('locate')} id="locate"></input>
                            {
                                errors.cnpj?.message &&
                                <p> {errors.cnpj?.message} </p>
                            }
                        </label>

                        <label htmlFor="salary">
                            Salário
                            <input type="number" placeholder="ex: R$ 2354,92" {...register('salary')} id="salary"></input>
                            {
                                errors.cnpj?.message &&
                                <p> {errors.cnpj?.message} </p>
                            }
                        </label>

                        <label htmlFor="journey">
                            Jornada
                            <input type="text" placeholder="ex: Segunda a sexta, das 9h as 18h" {...register('journey')} id="journey"></input>
                            {
                                errors.cnpj?.message &&
                                <p> {errors.cnpj?.message} </p>
                            }
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