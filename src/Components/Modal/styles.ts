import styled from "styled-components";

export const ContentModal = styled.main`
    width: 50rem;
    height: 25rem;
    border-radius: 5px;

    background-color: #0f172a;

    header {
        width: 100%;
        margin: 0;
        padding: 0;

        display: flex;
        justify-content: space-between;

        button {
            margin: 0.5rem;
            background-color: #840000;

            img{
                height: 100%;
                width: 100%;
            }
        }

        button:hover {
            background-color: #a10a04;
        }

    }

    div {
        display: flex;
        gap: 0.5rem;

        padding: 0;
    }
`

export const Container = styled.section`
    width: 38rem;
    height: 20rem;
    background-color: red;

    padding: 0.5rem;

`