import React, { useState, useEffect } from "react";
import { IResultsPeople } from "../../Interface/resultsVeihicles";
import { api } from "../../Service";
import * as S from "./style";
import arrowBack from "../../assets/icons/arrowBack.svg";
import arrowNext from "../../assets/icons/arrowNext.svg";
import View from "../../assets/icons/view.svg";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../Components/Modal";

export function PeoplePage() {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState(1);

  const [characterId, setCharacterId] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const maxPages = 9; // Número máximo de páginas
  const {
    data: DataPeopleTable,
    refetch,
    isLoading,
  } = useQuery(["DataPeopleTable", pagination], getDataPeople);

  async function getDataPeople() {
    try {
      const { data } = await api.get<IResultsPeople>(
        `https://swapi.dev/api/people/?page=${pagination}`
      );
      return data;
    // eslint-disable-next-line no-empty
    } catch (error) {}
  }

  useEffect(() => {
    refetch();
  }, [pagination, refetch]);

  function nextPagination() {
    if (pagination < maxPages) {
      setPagination(pagination + 1);
    }
  }

  function previousPagination() {
    if (pagination > 1) {
      setPagination(pagination - 1);
    }
  }

  function formatDateTime(dataTime: string) {
    const dataHoursObject = new Date(dataTime);
    const day = dataHoursObject.getDate().toString().padStart(2, "0");
    const month = (dataHoursObject.getMonth() + 1).toString().padStart(2, "0");
    const year = dataHoursObject.getFullYear();
    const hour = dataHoursObject.getHours().toString().padStart(2, "0");
    const minute = dataHoursObject.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hour}:${minute}`;
  }

  function backPagination() {
    navigate("/home");
  }

  function handleViewClick(url: string) {
    const parts = url.split("/");
    const characterId = parts[parts.length - 2];
    setCharacterId(characterId);
    setOpenModal(true);
  }

  return (
    <>
      <S.Header>
        <S.Button onClick={backPagination}>Back</S.Button>
      </S.Header>
      <S.Container>
        {isLoading ? (
          <div className="dot-spinner">
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
            <div className="dot-spinner__dot"></div>
          </div>
        ) : (
          <>
            {!openModal ? (
              <>
                <div>
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Date of birth</th>
                        <th>Gender</th>
                        <th>Creation date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DataPeopleTable &&
                        DataPeopleTable.results.map(
                          (
                            { name, birth_year, gender, created, url },
                            index
                          ) => (
                            <tr key={index}>
                              <td>{name}</td>
                              <td>{birth_year}</td>
                              <td>{gender}</td>
                              <td>{formatDateTime(created)}</td>
                              <td>
                                <button onClick={() => handleViewClick(url)}>
                                  <img src={View} alt="" />
                                </button>
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
                <footer>
                  <img
                    src={arrowBack}
                    alt="Previous"
                    onClick={previousPagination}
                    style={{
                      display: pagination > 1 ? "inline-block" : "none",
                    }}
                  />
                  <h1>{pagination} | 9</h1>
                  <img
                    src={arrowNext}
                    alt="Next"
                    onClick={nextPagination}
                    style={{
                      display: pagination < maxPages ? "inline-block" : "none",
                    }}
                  />
                </footer>
              </>
            ) : (
              <Modal closeModal={() => setOpenModal(false)} />
            )}
          </>
        )}
      </S.Container>
    </>
  );
}