import styled from "styled-components";

export const Container = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;

    section {
        display: flex;
        flex-direction: column;

        gap: 1rem;

        @media (min-width: 821px)  {
            display: flex;
            flex-direction: row;
            
            padding-top: 3rem;
        }
    }

`

export const AsideMenu = styled.aside`
    width: 100%;

    @media (min-width: 821px)  {
        width: 30%;
        height: 82vh;
    }

`

export const FilterForm = styled.form`
    max-width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;

    justify-content: space-evenly;

    gap: .8rem;

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

    @media (min-width: 821px) {
        height: 50vh;
        gap: 2rem;
    }
`

export const SearchInput = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: .5rem;

        width: 100%;

        input {
            max-width: 100%;

            height: 2rem;
            
            padding: 0 1rem;

            border-radius: .5rem;

            outline: black;

            border: 1px solid black;
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

            outline: black;
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

    padding: 1rem;
    
    border: 1px solid black;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;

    gap: 1rem;

    background-color: black;

    @media (min-width: 821px) {
        max-width: 60%;
    }


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

            font-size: 1rem;

            @media (min-width: 821px) {
                font-size: 1.4rem;
            }

        }
    }

`

export const DateJob = styled.p`
    font-size: .6rem;
    font-style: italic;

    text-transform: uppercase;

    flex: 1;

    text-align: end;


    @media (min-width: 821px) {
        font-size: .7rem;
        padding-right: 3rem;
    }
`

export const LocateText = styled.p`

    width: 20%;
    color: black;

    display: flex;
    align-items: end;
    justify-content: center;

    text-wrap: nowrap;

    margin-left: .5rem;

    
    font-size: .6rem;

    svg {
        fill: black;
    }

    @media (min-width: 821px) {
        width: 20%;
        font-size: 1rem;
        gap: .5rem;
    }
`

export const JobType = styled.p`
    background-color: black;
    color: white;
    padding: .7rem;

    font-size: .5rem;

    border-radius: .5rem;

    @media (min-width: 821px) {
        font-size: .8rem;
    }


`

export const Salary = styled.p`
    text-transform: uppercase;
    font-size: .8rem;

    span {
    }

    @media (min-width: 821px) {
        font-size: 1rem;
    }

`

export const Journey = styled.p`
    text-transform: uppercase;
    font-size: .8rem;

    span {
        text-transform: lowercase;
    }
    
    @media (min-width: 821px) {
        font-size: 1rem;
    }
    
`

export const Benefits = styled.div`
    width: 100%;

    font-size: .8rem;

    div {
        display: flex;
        justify-content: space-between;

        
        ul {
            max-width: 80%;
            overflow-x: auto;
            display: flex;
            gap: .3rem;

            margin-top: .5rem;

            li {
                background-color: black;
                color: white;
                padding: .7rem;

                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                font-size: .6rem;

                border-radius: .5rem;
                
            }
        }
    }

    @media (min-width: 821px) {
        font-size: 1.2rem;
    }

`