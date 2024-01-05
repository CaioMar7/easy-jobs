import styled from "styled-components";

export const Container = styled.header `
    width: 100%;
    height: 4rem;

    nav {
        display: flex;
        height: 100%;
        
        justify-content: space-between;
        align-items: center;
        
        padding: 0 4rem;
    }

    nav h1 {
        text-transform: uppercase;
        font-family: 'Rubik Glitch', system-ui;;
    }

    nav ul {
        display: flex;
        gap: 1rem;
    }

    nav ul li {
        padding: 1rem;
        font-weight: 400;

        transition: all .6s;
    }

    nav ul li:hover {
        cursor: pointer;

        font-size: 1.4rem;
    }

    .rounded-btn {
        border: 1px solid black;

        border-radius: 1rem;

        font-weight: 700;
    }
`