import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled(Link)`
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

    @media (min-width: 821px) {
        min-height: 4rem;
        min-width: 5rem;

        a {
            font-size: calc(.4vw + .7rem);
        }
    }

`