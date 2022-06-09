import Header from "../../components/header/Header";
import Main from "../../components/main/Section";
import Footer from "../../components/footer/Footer";
import "../homepage/homepage.css";

export default function Homepage({ userName, nickName }) {
  return (
    <>
      <Header userName={userName} nickName={nickName} />
      <Main />
      <Footer />
    </>
  );
}
