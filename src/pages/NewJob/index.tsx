import { useForm } from "react-hook-form";
import { ActionLinkBtn } from "../../components/ActionLinkBtn";
import { Header } from "../../components/Header";
import { CompanyFields, Container, FormButtons, JobBenefits, JobDetails, JobFields, JobInfos, NewJobForm } from "./styles";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";

const schemaForm = z.object({
    cnpj: z.string().min(11, "O campo CNPJ deve possuir no minimo 11 caracteres."),
    email: z.string().min(1, { message: "O campo email precisa ser preenchido." }),
    jobname: z.string().min(1, { message: "O campo nome do cargo precisa ser preenchido." }),
    salary: z.string().min(1, { message: "O campo salário precisa ser preenchido." }),
    locate: z.string().min(1, { message: "O campo localização precisa ser preenchido." }),
    journey: z.string().min(1, { message: "O campo jornada precisa ser preenchido." }),
    jobtype: z.string().min(1, { message: "Uma modalidade precisa ser escolhida." }),
    description: z.string().optional(),
    required: z.string().optional(),
    benefits: z.array(z.string()).optional()
})

const benefitsList = ["Vale Refeição", "Vale Alimentação", "Vale Transporte", "Plano de Saúde", "Plano Odontológico"]

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
        alert("Enviado com sucesso!")
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
                            errors.cnpj &&
                            <p> {errors.cnpj?.message?.toString()} </p>
                        }
                    </label>

                    <label htmlFor="email">
                        Email para contato
                        <input type="text" placeholder="Insira aqui o email para contato" {...register('email')} id="email"></input>
                        {
                            errors.email &&
                            <p> {errors.email?.message?.toString()} </p>
                        }
                    </label>
                </CompanyFields>

                <JobFields>
                    <JobInfos>
                        <label htmlFor="jobname">
                            Cargo
                            <input type="text" placeholder="ex: Auxiliar Administrativo" id="jobname" {...register('jobname')}></input>
                            {
                                errors.jobname &&
                                <p> {errors.jobname?.message?.toString()} </p>
                            }
                        </label>

                        <label htmlFor="locate">
                            Localização
                            <input type="text" placeholder="ex: Rio de Janeiro, Centro" {...register('locate')} id="locate"></input>
                            {
                                errors.locate &&
                                <p> {errors.locate?.message?.toString()} </p>
                            }
                        </label>

                        <label htmlFor="salary">
                            Salário
                            <input type="number" placeholder="ex: R$ 2354,92" {...register('salary')} id="salary"></input>
                            {
                                errors.salary &&
                                <p> {errors.salary?.message?.toString()} </p>
                            }
                        </label>

                        <label htmlFor="journey">
                            Jornada
                            <input type="text" placeholder="ex: Segunda a sexta, das 9h as 18h" {...register('journey')} id="journey"></input>
                            {
                                errors.journey &&
                                <p> {errors.journey?.message?.toString()} </p>
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
                    </JobInfos>

                    <JobDetails>
                        <label htmlFor="description">
                            Descrição
                            <textarea placeholder="ex: Utilizará ferramentas XYZ para..." {...register('description')} id="description"></textarea>
                        </label>

                        <label htmlFor="required">
                            Requisitos
                            <textarea placeholder="ex: Ensino superior completo, excel avançado..." {...register('required')} id="required"></textarea>
                        </label>
                    </JobDetails>

                    <JobBenefits>
                    {
                        benefitsList.map((benefit, index) => 
                        <div key={index}>
                            <label key={index}> {benefit} </label>
                            <input key={benefit} type="checkbox" value={benefit} {...register('benefits')}/>
                        </div>
                        )
                    }                         
                    </JobBenefits>

                </JobFields>



                <FormButtons>
                    <button type="submit"> Publicar vaga </button>
                    <button type="button"> Cancelar publicação </button>
                </FormButtons>


            </NewJobForm>
        </Container>
    )
}