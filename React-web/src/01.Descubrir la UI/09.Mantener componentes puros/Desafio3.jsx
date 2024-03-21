import React from "react";
import stories from "./stories.js";

const Desafio3 = () => {
  let storiesToDisplay = stories.slice();
  storiesToDisplay.push({
    id: "create",
    label: "Crear historia",
  });

  return (
    <ul>
      {storiesToDisplay.map(
        (
          story, // Cambiado de "stories" a "storiesToDisplay"
        ) => (
          <li key={story.id}>{story.label}</li>
        ),
      )}
    </ul>
  );
};

export default Desafio3;
