import styled from "styled-components";

export const Container = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;

    section {
        display: flex;

        padding-top: 3rem;
        
    }

`

export const AsideMenu = styled.aside`
    width: 30%;
    height: 82vh;

`

export const FilterForm = styled.form`
    max-width: 80%;
    height: 50vh;

    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-evenly;

    gap: 2rem;

    padding: 2rem;

    border: 1px solid black;
    border-radius: 1rem;

    margin: 0 auto;

    button {
        width: 50%;


        svg {
            fill: white;
        }
    }
`

export const SearchInput = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .5rem;

        width: 100%;

        input {
            max-width: 80%;

            height: 2rem;
            
            padding: 0 1rem;

            border-radius: 1rem;
        }

`

export const SelectInput = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;

    
    select {
            width: 100%;
            height: 3rem;

            padding: 0 .5rem;

            border-radius:.5rem;
    }

    fieldset {
        display: flex;

        border: none;

        border-radius: 1rem;

        gap: 1rem;
    }

`


export const JobsList = styled.ul`
    flex: 1;

    max-width: 60%;

    padding: 1rem;
    
    border: 1px solid black;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    background-color: black;


    li {

        border: 1px solid black;
        border-radius: 1rem;

        padding: 1rem;

        display: flex;
        flex-direction: column;

        background-color: white;

        gap: .5rem;

        a {
            display: flex;
            align-items: center;

            gap: 1rem;

            text-transform: uppercase;

        }
    }

`

export const DateJob = styled.p`
    font-size: .7rem;
    font-style: italic;

    text-transform: uppercase;

    flex: 1;

    text-align: end;

    padding-right: 3rem;
`

export const LocateText = styled.p`
    width: 20%;
    
    color: black;
    
    font-size: 1rem;

    svg {
        fill: black;
    }
`

export const JobType = styled.p`
    background-color: black;
    color: white;
    padding: .7rem;

    font-size: .8rem;

    border-radius: .5rem;
`

export const Salary = styled.p`
    text-transform: uppercase;
    font-size: 1rem;

    span {
        font-size: 1rem;
    }

`

export const Journey = styled.p`
    text-transform: uppercase;
    font-size: 1rem;

    span {
        font-size: 1rem;
        text-transform: lowercase;
    }
    
`

export const Benefits = styled.p`
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;

        
        ul {
            width: 100%;
            display: flex;
            gap: .3rem;

            margin-top: .5rem;

            li {
                background-color: black;
                color: white;
                padding: .7rem;

                font-size: .8rem;

                border-radius: .5rem;
            }
        }
    }

`