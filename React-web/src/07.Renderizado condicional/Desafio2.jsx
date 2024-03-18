/*Desafío 2 de 3: Mostrar la importancia del elemento con && 
En este ejemplo, cada «elemento» recibe una «importancia» numérica. Utiliza el operador && para mostrar «(Importancia: X)» en cursiva, pero sólo para los elementos que tienen una importancia distinta de cero. Tu lista de elementos debería tener este aspecto:

Traje de vuelo (Importancia: 9)
Casco con dorado a la hoja
Fotografía de Tam (Importancia: 6)
¡No olvides añadir un espacio entre las dos etiquetas!*/

function Item({ name, importance }) {
  return (
    <li className="item">
      {name}
      {importance > 0 && <i> ({importance})</i>}
    </li>
  );
}

export default function PackingList1() {
  return (
    <section>
      <h1>Lista de equipaje de Sally Ride</h1>
      <ul>
        <Item importance={9} name="Traje de vuelo" />
        <Item importance={0} name="Casco con dorado a la hoja" />
        <Item importance={6} name="Fotografía de Tam" />
      </ul>
    </section>
  );
}
