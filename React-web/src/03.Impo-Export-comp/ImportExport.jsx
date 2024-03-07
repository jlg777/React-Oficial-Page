/*
Hay dos formas fundamentales de exportar valores con JavaScript: exports por defecto y exports con nombre. Hasta ahora nuestros ejemplos solo han usado exports por defecto. Pero puedes usar uno o ambos en el mismo archivo. Un archivo no puede tener más de un export por defecto, pero puede tener tantos exports con nombre como desees.

Exports por defecto y con nombre
Cómo exportas tu componente dicta la forma en que debes importarlo. ¡Tendrás un error si intentas importar un export por defecto de la misma forma que lo harías con un export con nombre! Este cuadro te puede ayudar a recordarlo:

Sintaxis	Sentencia export	Sentencia import
Por defecto	export default function Button() {}	import Button from './Button.js';
Con nombre	export function Button() {}	import { Button } from './Button.js';
Cuando escribes un import por defecto puedes poner cualquier nombre después de import. Por ejemplo, podrías escribir en su lugar import Banana from './Button.js' y aun así te daría el mismo export por defecto. En cambio, con los imports con nombre, tiene que haber una correspondencia con los nombres en ambos lados. ¡Por eso se llaman exports con nombre!

Las personas a menudo utilizan exports por defecto si el archivo solo exporta un componente, y usan exports con nombre si exporta varios componentes y valores. Independientemente del estilo de codificación que prefieras, siempre proporciona nombres con sentido a las funciones de tus componentes y a los archivos que las contienen. Componentes sin nombre como export default () => {} no se recomiendan, porque hacen que la depuración sea más difícil.
*/
