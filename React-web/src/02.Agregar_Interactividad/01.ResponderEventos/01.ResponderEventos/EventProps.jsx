import React from "react";

function UploadButton() {
  return <Button onClick={() => alert("¡Subiendo!")}>Subir imagen</Button>;
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`¡Reproduciendo ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Reproducir "{movieName}"</Button>;
}

const EventProps = () => {
  return (
    <div>
      <PlayButton movieName="DBZ" />
      <UploadButton />

      <div
        className="Toolbar"
        onClick={() => {
          alert("¡Hiciste clic en la barra de herramientas!");
        }}
      >
        <button onClick={() => alert("¡Reproduciendo!")}>
          Reproducir película
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert("¡Subiendo!");
          }}
        >
          Subir imagen
        </button>
      </div>
    </div>
  );
};

export default EventProps;
