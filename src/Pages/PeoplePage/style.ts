import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    height: 100vh;

    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1rem;
    }

    

    table {
        width: 90%;
        overflow: auto;
        border-collapse: collapse;
        background-color: #202020;
    }

    th, td {
        text-align: center;
        border: 1px solid #808080;
        white-space: nowrap; 
        overflow: hidden;
        text-overflow: ellipsis; 
    }

    th {
      padding: 0.5rem;

        font-weight: 600;
        background-color: #020617;
        color: #f1f5f9;
        font-family: 'Star Wars', sans-serif;
    }

    td {
      padding: 0.2rem;

        font-weight: 400;
    }

    button {
      width: 2rem;
      height: 2rem;

      border: none;
      border-radius: 5px;


      cursor: pointer;
      background-color: #0f172a;
     
      padding: 0;

    }

    footer {
        display: flex;
        gap: 2rem;

        img {
            cursor: pointer;
        }
    }


    .dot-spinner {
  --uib-size: 2.8rem;
  --uib-speed: .9s;
  --uib-color: #183153;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: var(--uib-size);
  width: var(--uib-size);
}

.dot-spinner__dot {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
}

.dot-spinner__dot::before {
  content: '';
  height: 20%;
  width: 20%;
  border-radius: 50%;
  background-color: var(--uib-color);
  transform: scale(0);
  opacity: 0.5;
  animation: pulse0112 calc(var(--uib-speed) * 1.111) ease-in-out infinite;
  box-shadow: 0 0 20px rgba(18, 31, 53, 0.3);
}

.dot-spinner__dot:nth-child(2) {
  transform: rotate(45deg);
}

.dot-spinner__dot:nth-child(2)::before {
  animation-delay: calc(var(--uib-speed) * -0.875);
}

.dot-spinner__dot:nth-child(3) {
  transform: rotate(90deg);
}

.dot-spinner__dot:nth-child(3)::before {
  animation-delay: calc(var(--uib-speed) * -0.75);
}

.dot-spinner__dot:nth-child(4) {
  transform: rotate(135deg);
}

.dot-spinner__dot:nth-child(4)::before {
  animation-delay: calc(var(--uib-speed) * -0.625);
}

.dot-spinner__dot:nth-child(5) {
  transform: rotate(180deg);
}

.dot-spinner__dot:nth-child(5)::before {
  animation-delay: calc(var(--uib-speed) * -0.5);
}

.dot-spinner__dot:nth-child(6) {
  transform: rotate(225deg);
}

.dot-spinner__dot:nth-child(6)::before {
  animation-delay: calc(var(--uib-speed) * -0.375);
}

.dot-spinner__dot:nth-child(7) {
  transform: rotate(270deg);
}

.dot-spinner__dot:nth-child(7)::before {
  animation-delay: calc(var(--uib-speed) * -0.25);
}

.dot-spinner__dot:nth-child(8) {
  transform: rotate(315deg);
}

.dot-spinner__dot:nth-child(8)::before {
  animation-delay: calc(var(--uib-speed) * -0.125);
}

@keyframes pulse0112 {
  0%,
  100% {
    transform: scale(0);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
}

`;

export const Header = styled.header`

width: 100%;
`

export const Button = styled.button`
  font-family: 'Star Wars', sans-serif;

  width: 7rem;

  margin-left: 2rem;
  margin-top: 1rem;

  padding: 0.5rem;

  font-weight: 600;
  cursor: pointer;

  background-color: #0f172a;
  color: #ffff;

  border: none;
  border-radius: 5px;

`