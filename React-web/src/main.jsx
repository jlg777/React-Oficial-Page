import React from "react";
import ReactDOM from "react-dom/client";
//import App from "./App.jsx";
import "./index.css";
//import { PrimerCom } from "./01.Descubriendo-UI/PrimerCom.jsx";
//import Desafio01 from "./02.Tu-Primer-Componente/Desafio01.jsx";
//import Desafio02 from "./02.Tu-Primer-Componente/Desafio02.jsx";
//import Gallery from "./02.Tu-Primer-Componente/Desafio03.jsx";
//import Bio from "./04.Marcado jsx/Desafio-01.jsx";
//import TodoList from "./05.JSX-con.llaves/Desafio01.jsx";
//import Props from "./06.Props y componentes/Props.jsx";
import RenderConditional from "./07.Renderizado condicional/RenderConditional.jsx";
import PackingList from "./07.Renderizado condicional/Desafio1.jsx";
import PackingList1 from "./07.Renderizado condicional/Desafio2.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PackingList1 />
  </React.StrictMode>,
);
