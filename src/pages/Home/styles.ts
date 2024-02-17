import styled from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: self-end;

    max-height: 100vh;
    height: 100vh;

    position: relative;

`

export const FirstSection = styled.section `
    width: 100%;

    overflow-x: hidden;

    position: relative;


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
            font-size: calc(1rem + 2.3vh);
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
                
                width: 70%;
                align-self: center;
            }
        }
    }

    .herobanner {
        width: 100%;   
        display: flex;
        justify-content: center;
        align-items: center; 
    }

    .herobanner img {
        height: 40vh;

        max-width: 100%;
        object-fit: contain;
    }

    .blob {
        display: none;
    }

    @media (min-width: 821px) {
        display: flex;
        flex-direction: row-reverse;
        justify-content: space-between;

        overflow-y: hidden;

        gap: 1rem;

        .herotext {
            text-align: justify;

            width: 60%;

            display: flex;
            flex-direction: column;

            align-items: end;
            justify-content: center;

            h1 {
                max-width: 70%;
                font-size: 2.5rem;
            }

            p {
                max-width: 70%;
                font-size: 1.4rem;
            }

            div {                
                max-width: 70%;
                width: 100%;

                button {
                    padding: 1rem 2rem;

                    align-self: center;
                }
            }
        }

        .herobanner {
            width: 100%;    
        }

        .herobanner img {
            height: 89vh;

            max-width: 100%;
            object-fit: contain;
        }


        .blob {
            display: block;
            position: absolute;

            width: 40%;

            bottom: -10%;
            left: -20%;
        }

       
    }

`