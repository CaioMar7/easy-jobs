import { ActionLinkBtn } from "../../components/ActionLinkBtn";
import { Header } from "../../components/Header";
import { Container } from "./styles";

import { useForm } from "react-hook-form";

export function SignUp() {

    const { register } = useForm()

    const onSubmit = () => {

    }


    return (
        <Container>
            <Header/>
            <section>
                <div>
                    <h1> Cadastre sua empresa </h1>
                </div>
                <form>
                    <div>
                        <fieldset>
                            <label htmlFor="cnpj">
                                <span> CNPJ </span>
                                <input type="text" placeholder="Insira seu CNPJ" {...register("cnpj")}/> 
                            </label>
                            <label htmlFor="razaosocial">
                                <span> Razão Social </span>
                                <input type="text" placeholder="Insira a Razão Social" {...register("razaosocial")}/> 
                            </label>
                            <label htmlFor="porte">
                                <span> Porte da empresa </span>
                               <select {...register("porte")}>
                                    <option value="0"> Selecione o porte da sua empresa </option>
                                    <option value="microempresa"> Micro Empresa - até 19 funcionários </option>
                                    <option value="pequenoporte"> Pequeno Porte - até 99 funcionários </option>
                                    <option value="medioporte"> Médio Porte - até 499 funcionários </option>
                                    <option value="grandeporte"> Grande Porte - 500 ou mais funcionários </option>
                               </select>
                            </label>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="email">
                                <span> Email </span>
                                <input type="text" placeholder="Insira seu Email" {...register("email")}/> 
                            </label>
                            <label htmlFor="password">
                                <span> Senha </span>
                                <input type="password" placeholder="Insira a sua Senha" {...register("password")}/> 
                            </label>
                            <label htmlFor="confirm-password">
                                <span> Confirmar Senha </span>
                                <input type="password" placeholder="Insira a Confirmação de Senha" {...register("confirm-password")}/> 
                            </label>
                        </fieldset>
                    </div>
                    <ActionLinkBtn onClick={onSubmit}> Cadastrar </ActionLinkBtn>
                </form>
            </section>
        </Container>
    )
}