import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
import { PrimerCom } from "./01.Descubriendo-UI/PrimerCom.jsx";
import Desafio01 from "./02.Tu-Primer-Componente/Desafio01.jsx";
import Desafio02 from "./02.Tu-Primer-Componente/Desafio02.jsx";
import Gallery from "./02.Tu-Primer-Componente/Desafio03.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Gallery />
  </React.StrictMode>
);
