import { styled } from 'styled-components';


export const Container = styled.main`
  display: flex;
  gap: 1rem;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;

  height: 70vh;
  width: 16rem;
  background-color: #242222;
  border-radius: 5px;

  cursor: pointer;
  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: 100%; /* Apenas a altura é modificada */
    transition: height 1s;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
