import styled from "styled-components";


export const Container = styled.footer `

    display: flex;
    justify-content: space-between;

    background-color: black;
    
    nav {
        width: 100%;
        padding: 1rem 0;

        display: flex;
        flex-direction: column;
        align-items: center;

        gap: .5rem
    }
    
    ul {
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    h2 {
        width: 100%;
        font-size: 1.2rem;
        color: white;

        text-align: center;

        flex-wrap: wrap;
    }

    li a {
        color: white;
        font-size: .9rem;
    }

    @media (min-width: 820px) {
    }

`