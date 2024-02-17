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

    gap: 1rem;

    margin-top: 1rem;

    input, select, textarea {
        font-size: 1rem;
    }

    input, select {
        height: 2rem;
        width: 80%;

        padding: 0 0.5rem;
    }

    select {
        width: 84%;
    }

    label {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        width: 100%;
        
        font-size: 1.2rem;

        p {
            font-size: .8rem;
            color: red;
            margin-bottom: .4rem;
        }
        
    }
    
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);

`

export const CompanyFields = styled.fieldset`

    display: flex;
    align-items: center;

    padding: 1rem;

    gap: .3rem;

`

export const JobFields = styled.fieldset`

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1rem;

    label {
        textarea {
            height: 4rem;
            width: 80%;

            padding: .5rem;

            resize: none;
        }
    }

`

export const JobInfos = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;
`

export const JobDetails = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const JobBenefits = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: .5rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 75%;
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

