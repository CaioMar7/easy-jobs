import styled from "styled-components";

export const Container = styled.header `
    width: 100%;
    height: 4rem;
    padding: 1rem 0;


    nav {
        display: flex;
        height: 100%;
        
        justify-content: space-between;
        align-items: center;
        
        padding: 0 2rem;
    }

    nav h1 a {

        display: flex;
        justify-content: center;
        align-items: center;

        gap:1rem;

        text-transform: uppercase;

        svg {
            font-size: 2rem;
        }
    }

    nav ul {
        display: none;
        gap: 3rem;
    }

    nav ul li {
        padding: 1rem;
        font-weight: 400;

        transition: all .6s;
    }

    nav ul li:hover {
        cursor: pointer;
    }
    
    @media (min-width: 821px) {

        nav {
            padding: 0 4rem;
        }
        
        nav ul {
            display: flex;
            justify-content: center;
            align-items: center;

            min-height: 5rem;
            width: 50%;
        }

        nav ul li {
            max-width: 40%;
        }

        button {
            width: 30%;
        }
    }
`