import styled from "styled-components";

export const ContentModal = styled.main`
    width: auto;
    max-height: 35rem;
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
.Sections{ 
    width: 100%;
    display: flex;

    gap: 1rem;
}
`

export const Container = styled.section`
    max-width: 38rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;

h2 {
  font-family: 'Star Wars', sans-serif;

}

    ul {
         list-style-type: none;
         display: flex;
         flex-direction: column;

         gap: 1rem;
    }

    img {
        max-height: 25rem;
    }
`
