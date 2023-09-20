import * as S from "./styles";

import { useNavigate } from "react-router-dom";

export function CardsHome() {
  const navigate = useNavigate();

  function OpenPeoplePage() {
    navigate("/PeoplePage");
  }
  return (
    <S.Container>
      <S.Cards onClick={OpenPeoplePage}>
        <img
          src="https://img.freepik.com/fotos-premium/uma-nave-espacial-voando-sobre-uma-area-rochosa-generative-ai_837759-224.jpg?w=360"
          alt=""
        />
      </S.Cards>
    </S.Container>
  );
}
