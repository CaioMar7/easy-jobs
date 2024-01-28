import styled from "styled-components";

export const Container = styled.div `


    section {
        width: 100%;
        height: 100%;

        margin: 0 auto;

        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;

        transform:translate(0,30%);


        form {
            height: 100%;
            width: 50%;

            display: flex;
            flex-direction: column;

            align-items: center;

            gap: 2rem;

            border: 1px solid black;

            padding: 1rem;

            div {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            button { 
                width: 50%;
            }

            fieldset {
                display: flex;
                flex-direction: column;
                gap: 1rem;
                border: none;

                label {
                    font-size: 1.6rem;
                    display: flex;
                    flex-direction: column;
                    

                    text-transform: uppercase;
                }

                input {
                    width: 100%;
                    height: 3rem;

                    padding: 0 1rem;
                }
                
            }
        }
    }

`