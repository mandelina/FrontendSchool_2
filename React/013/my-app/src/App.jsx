import React, { useState } from "react";
import reset from "styled-reset";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import Document from "./Components/Document";
import Preparation from "./Components/Preparation";
import Community from "./Components/Community";
import Blog from "./Components/Blog";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  ${reset}
  a{
    text-decoration : none;
    color : inherit;
  }

  button{
    border : none;
    cursor : pointer;
  }

 * {
  box-sizing: border-box;
  }
`;

const Support = styled.p`
  text-align: center;
  padding: 15px;
  font-size: 15px;
  color: white;
  background-color: #16181d;
`;

const Span = styled.span`
  color: #61dafb;
`;

const Nav = styled.nav`
  background-color: #20232a;
  color: white;
  padding: 20px;
`;

const Introduction = styled.section`
  background-color: #282c34;
  color: white;
  text-align: center;
  height: 350px;
  font-size: 28px;
`;
const Title = styled.h1`
  padding: 40px 0 30px;
  font-weight: 800;
  color: #61dafb;
  font-size: 55px;
`;

const StartBtn = styled.button`
  background-color: #61dafb;
  padding: 15px 20px;
  font-size: 20px;
  margin-top: 56px;
  &:hover {
    background-color: white;
  }
`;

const ReadPreparation = styled.button`
  background-color: transparent;
  font-size: 20px;
  margin-top: 56px;
  color: #61dafb;

  &:hover {
    color: white;
  }
`;




function App() {
  return (
    <>
      <GlobalStyle />
      <Support>
        <a
          href="https://www.facebook.com/fundraisers/explore/search/charities/?query=ukraine"
          target="_blank"
        >
          <span>Support Ukraine πΊπ¦</span>
          <Span> Help Provide Humanitarian Aid to Ukraine.</Span>
        </a>
      </Support>

      <Nav>
        <BrowserRouter>
          <Link to="" style={{ margin: "0 5px" }}>
            ν
          </Link>
          <Link to="/document" style={{ margin: "0 5px" }}>
            λ¬Έμ
          </Link>
          <Link to="/preparation " style={{ margin: "0 5px" }}>
            μμ΅μ
          </Link>
          <Link to="/blog" style={{ margin: "0 5px" }}>
            λΈλ‘κ·Έ
          </Link>
          <Link to="/community" style={{ margin: "0 5px" }}>
            μ»€λ?€λν°
          </Link>

          <Routes>
            <Route path="/" exact={true} component={App} />
            <Route path="/document" component={Document} />
            <Route path="/preparation" component={Preparation} />
            <Route path="/blog" component={Blog} />
            <Route path="/community" component={Community} />
          </Routes>
        </BrowserRouter>
      </Nav>

      {/* <button>κ²μμ΄λ―Έμ§</button>
      <span>v18.0.0</span>
      <span>Languages</span> */}

      <Introduction>
        <Title>
          <h1>React</h1>
        </Title>
        <p className="intro">
          μ¬μ©μ μΈν°νμ΄μ€λ₯Ό λ§λ€κΈ° μν JavaScript λΌμ΄λΈλ¬λ¦¬
        </p>
        <BrowserRouter>
          <StartBtn>
            <Link to="/start " style={{ margin: "0 5px" }}>
              μμνκΈ°
            </Link>
          </StartBtn>

          <ReadPreparation>
            <Link to="/preparation " style={{ margin: "0 5px" }}>
              μμ΅μ μ½μ΄λ³΄κΈ°
            </Link>
          </ReadPreparation>
        </BrowserRouter>
      </Introduction>

      <Home />
    </>
  );
}

export default App;
