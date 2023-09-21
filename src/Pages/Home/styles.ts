import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 100vh;

  button {
    width: 50%;



    border: 1px solid  #FFE919;
    background-color: #000000;
    color: #f1f5f9;

    border-radius: 0.5rem;
    cursor: pointer;
  }

  button:hover {
    background-color: #FFE919;
    transition: 0.5s;

    color: #000000;
  }
`;
