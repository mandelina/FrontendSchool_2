import "./App.css";
// import Header from "./components/header/Header";
// import Section from "./components/main/Section";
// import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";

function App3() {
  // 주석입니다.
  const user = {
    login: true,
    name: "mandelina",
    id: "mandelina@weniv.com",
    nickname: "dellina",
  };
  let login = true;
  const name = "delina";
  return (
    <div>
      {login ? (
        <Homepage userName={user.name} nickName={user.nickname} />
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App3;
