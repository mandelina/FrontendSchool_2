import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App1 from "./App1";
import UseRef from "./UseRef";
import Blank from "./Blank";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Blank tab="home" />);
