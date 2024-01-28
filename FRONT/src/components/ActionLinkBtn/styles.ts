import styled from "styled-components";

export const Container = styled.button`
 
    min-height: 3rem;
    min-width: 4rem;

    background-color: ${({theme}) => theme.COLORS.PRIMARY};

    border: 1px solid ${({theme}) => theme.COLORS.PRIMARY};

    transition: all .6s;

    margin-top: 0.8vh;

    a {
        height: 100%;
        width: 100%;

        color: ${({theme}) => theme.COLORS.SECONDARY};

        font-size: calc(.7vh + .7rem);
    }

    &:hover {
        background-color: ${({theme}) => theme.COLORS.SECONDARY};
        cursor: pointer;

        a {
            color: ${({theme}) => theme.COLORS.PRIMARY};
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