import * as S from "./styles";
import Logo from "../../assets/icons/Logo.svg";

export function Sidebar() {
  return (
    <S.SidebarComponent>
      <img src={Logo} alt="Logo" />

      <div>teste</div>
      <div></div>
    </S.SidebarComponent>
  );
}
