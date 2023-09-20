import * as S from "./styles";
import CloseModal from "../../assets/icons/Close.svg";

interface IModalState {
  closeModal: () => void;
}

export function Modal({ closeModal }: IModalState) {
  return (
    <>
      <S.ContentModal>
        <header>
          <div></div>
          <button onClick={() => closeModal()}>
            <img src={CloseModal} alt="" />
          </button>
        </header>

        <div>
          <S.Container>
            <h1>TESTE</h1>
          </S.Container>
          <S.Container><h1>TESTE2</h1></S.Container>
        </div>
      </S.ContentModal>
    </>
  );
}
