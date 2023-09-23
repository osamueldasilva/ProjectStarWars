import styled from "styled-components";


export const Container = styled.main`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .Filters {
      padding: 0;
  
      margin: 0;
      height: 4rem;

      display: flex;
      gap: 1rem;
    }
    .clearFilter {
      background-color: #840000;
    }
    .clearFilter:hover {
                background-color: #a10a04;
            }


            .oneOption {
              background-color: #000000;
            }

    select {
            padding: 10px;
            font-size: 16px;
            border: none;
            background-color: #222;
            color: #fff;
            border-radius: 5px;
        }

        select:focus {
            outline: none;
        }

    div {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    

    table {
        width: 90%;
        overflow: auto;
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

    button:hover {
      background-color: #0f174f;
    }

    footer {
        display: flex;
        gap: 2rem;

        img {
            cursor: pointer;
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