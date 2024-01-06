import styled from "styled-components";

export const Container = styled.div `
    width: 100%;

    display: grid;
    grid-template-rows: auto 80% auto;

    height: 100%;

`

export const FirstSection = styled.section `
    width: 100%;


    .herotext {
        text-align: justify;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        margin-bottom: 3rem;

        width: 100%;
        max-width: 90%;

        gap: 1rem;

        padding: 0 1rem;

        h1 {
            max-width: 90%;
            font-size: 2rem;
        }

        p {
            max-width: 90%;
            font-size: 1.2rem;
        }

        div {
            width: 100%;

            display: flex;
            justify-content: center;

            button {
                font-weight: 700;

                border: none;

                padding: 1rem 2rem;

                align-self: center;
            }
        }
    }

    .herobanner {
        width: 100%;    
    }

    .herobanner img {
        height: 40vh;

        max-width: 100%;
        object-fit: contain;
    }

    @media (min-width: 820px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;

        gap: 1rem;

        .herotext {
            text-align: justify;

            width: 60%;

            display: flex;
            flex-direction: column;

            align-items: end;
            justify-content: center;

            h1 {
                max-width: 50%;
                min-width: 25rem;
                font-size: 2.5rem;
            }

            p {
                min-width: 25rem;
                max-width: 50%;
                font-size: 1.4rem;
            }

            div {
                max-width: 50%;
                width: 100%;

                button {
                    font-weight: 700;

                    border: none;

                    padding: 1rem 2rem;

                    align-self: center;
                }
            }
        }

        .herobanner {
            width: 100%;    
        }

        .herobanner img {
            height: 90vh;

            max-width: 100%;
            object-fit: contain;
        }
    }

`