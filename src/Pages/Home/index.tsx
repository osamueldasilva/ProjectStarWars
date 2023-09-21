import { useNavigate } from "react-router-dom";
import * as S from "./styles";

export function Home() {
  const navigate = useNavigate();

  function nextTable() {
    navigate("/PeoplePage");
  }

  return (
    <>
      <S.Content>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png?20080824073021"
          alt=""
        />
        <button onClick={nextTable}>
          <h2>View information</h2>
        </button>
      </S.Content>
    </>
  );
}
