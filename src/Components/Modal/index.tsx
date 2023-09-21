import * as S from "./styles";
import CloseModal from "../../assets/icons/Close.svg";
import { useQuery } from "react-query";
import { api } from "../../Service";
import { getJustOneCharacter } from "../../Interface/getJustOneCharacter";
import { Spinner } from "../Spinner";

interface IModalState {
  closeModal: () => void;
  id: string;
}

export function Modal({ closeModal, id }: IModalState) {
  const { data: DataPeopleModal, isLoading } = useQuery(
    ["DataPeopleTable"],
    getDataPeopleModal
  );

  async function getDataPeopleModal() {
    try {
      const { data } = await api.get<getJustOneCharacter>(`/people/${id}`);

      return data;
    } catch (error) {}
  }

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <S.ContentModal>
          <header>
            <div></div>
            <button onClick={() => closeModal()}>
              <img src={CloseModal} alt="" />
            </button>
          </header>

          <div className="Sections">
            <S.Container>
              {DataPeopleModal && (
                <>
                  <h2>Character</h2>
                  <ul>
                    <li>
                      <strong>Name:</strong> {DataPeopleModal.name}.
                    </li>
                    <li>
                      <strong>Birth Year:</strong> {DataPeopleModal.birth_year}.
                    </li>
                    <li>
                      <strong>Gender:</strong> {DataPeopleModal.gender}.
                    </li>
                    <li>
                      <strong>Height:</strong> {DataPeopleModal.height}cm.
                    </li>
                    <li>
                      <strong>Mass:</strong> {DataPeopleModal.mass}Kg.
                    </li>
                    <li>
                      <strong>Eye Color:</strong> {DataPeopleModal.eye_color}.
                    </li>
                    <li>
                      <strong>Hair Color:</strong> {DataPeopleModal.hair_color}.
                    </li>
                    <li>
                      <strong>Skin Color:</strong> {DataPeopleModal.skin_color}.
                    </li>
                  </ul>
                </>
              )}
            </S.Container>
            <S.Container></S.Container>
          </div>
        </S.ContentModal>
      )}
    </>
  );
}
