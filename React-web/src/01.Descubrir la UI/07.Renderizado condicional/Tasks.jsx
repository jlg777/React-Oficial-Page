import React from "react";

export const Tasks = ({ Tarea, isFinalize }) => {
  return (
    <>
      {/*<li>{isFinalize ? <p>{Tarea + "⭕"}</p> : <p>{Tarea + "❌"}</p>}</li> */}
      <li>
        {Tarea} {isFinalize && "✔"}
      </li>
    </>
  );
};
