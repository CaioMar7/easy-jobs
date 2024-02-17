import styled from "styled-components";

export const Container = styled.div`
    width: 100%;   
`

export const NewJobForm = styled.form`
    margin: 0 auto;

    border: 1px solid black;
    padding: 1rem;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    margin-top: 1rem;

    input, select, textarea {
        font-size: 1rem;

        accent-color: black;
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


    button {
        background-color: ${({theme}) => theme.COLORS.PRIMARY};

        border: 1px solid ${({theme}) => theme.COLORS.PRIMARY};

        transition: all .6s;

        margin-top: 0.8vh;

        color: ${({theme}) => theme.COLORS.SECONDARY};

        display: flex;
        align-items: center;
        justify-content: center;

        min-height: 3rem;
        min-width: 2rem;

        padding: 0 2rem;

        font-size: calc(.7vh + .7rem);

        gap: 1rem;

        svg {
            fill: ${({theme}) => theme.COLORS.SECONDARY};
        }

    &:hover {
        background-color: ${({theme}) => theme.COLORS.SECONDARY};
        cursor: pointer;

        color: ${({theme}) => theme.COLORS.PRIMARY};

        svg {
            fill: ${({theme}) => theme.COLORS.PRIMARY};
        }
    }

    }


    @media (min-width: 821px) {
        width: 50%;
    }


`

export const CompanyFields = styled.fieldset`
    display: flex;
    flex-direction: column;

    padding: 1rem;

    gap: 2rem;

    @media (min-width: 821px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

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
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 821px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .5rem;
    }
`

export const JobDetails = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;
`

export const JobBenefits = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;

    div {
        display: flex;
        justify-content: center;
        align-items: center;

        width: 100%;
    }

    @media (min-width: 821px)  {
        display: grid;
        grid-template-columns: 1fr 1fr;

        div {
            width: 75%;
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



