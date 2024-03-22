import React from "react";

function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

function handleClick() {
  alert("¡Me hiciste clic!");
}

const ControllerEvent = () => {
  return (
    <>
      <button
        onClick={function handleClick() {
          alert("¡Me hiciste clic!");
        }}
      >
        {" "}
        Evento en linea
      </button>
      <button onClick={handleClick}>Evento funcion</button>
      <button
        onClick={() => {
          alert("¡Me hiciste clic!");
        }}
      >
        fUNCION ANONIMA
      </button>
      <button onClick={alert("¡Me hiciste clic!")}>aUTO LLAMADA</button>
      <button onClick={() => alert("¡Me hiciste clic!")}>
        PASANDO UNA FUNCION
      </button>
      <AlertButton message="¡Reproduciendo!">Reproducir película</AlertButton>
      <AlertButton message="¡Subiendo!">Subir imagen</AlertButton>
    </>
  );
};

export default ControllerEvent;
