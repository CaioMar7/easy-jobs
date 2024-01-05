import styled from "styled-components";

export const Container = styled.header `
    width: 100%;
    height: 4rem;

    border-bottom-width: 1px;
    border-bottom-color: black;
    border-bottom-style: dotted;

    nav {
        display: flex;
        height: 100%;
        
        justify-content: space-between;
        align-items: center;
        
        padding: 0 4rem;
    }

    nav h1 {
        text-transform: uppercase;
    }

    nav ul {
        display: flex;
        gap: 1rem;
    }

    nav ul li {
        padding: 1rem;
    }

    .rounded-btn {
        border: 1px solid black;

        border-radius: 1rem;
    }
`