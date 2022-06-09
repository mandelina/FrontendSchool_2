import "./header.css";
import Menu from "../menu/Menu.js";

export default function Header({ userName, nickName }) {
  return (
    <div className="test">
      header, {userName}
      {nickName} 님 반갑습니다.
      <Menu />
    </div>
  );
}
