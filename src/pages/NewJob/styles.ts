import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
`

export const NewJobForm = styled.form`
    width: 50%;
    margin: 0 auto;

    border: 1px solid black;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    gap: 2rem;

    margin-top: 3rem;

    input {
        font-size: 1.2rem;
    }

    label {
        font-size: 1.6rem;
    }

    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

`

export const CompanyFields = styled.fieldset`

    display: flex;
    align-items: center;

    padding: 1rem;

    gap: 1.5rem;

    
    label {
        width: 100%;
        font-size: 1.6rem;

        display: flex;
        flex-direction: column;
        gap: .5rem;

        input {
            height: 2rem;
            width: 80%;

            padding: 0 0.5rem;
        }
    }

`

export const JobFields = styled.fieldset`
    display: grid;
    grid-template-columns: 1fr 1fr;

    padding: 1rem;

    gap: 1.5rem;

    label {
        display: flex;
        flex-direction: column;

        gap: .5rem;

        input, select {
            height: 2rem;
            width: 80%;

            padding: 0 0.5rem;
        }

    }

`

export const FormButtons = styled.div `
    display: flex;
    gap: 2rem;

    button {
        width: 100%;

        text-transform: uppercase;
    }

`