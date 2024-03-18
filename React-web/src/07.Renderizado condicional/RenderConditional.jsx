import React from "react";
import { Tasks } from "./Tasks";

const RenderConditional = () => {
  return (
    <>
      <h2>Lista de equipaje</h2>
      <ul>
        <Tasks Tarea="tarea 1" isFinalize={true} />
        <Tasks Tarea="tarea 2" isFinalize={true} />
        <Tasks Tarea="tarea 3" isFinalize={false} />
        <Tasks Tarea="tarea 4" />
      </ul>
    </>
  );
};

export default RenderConditional;
