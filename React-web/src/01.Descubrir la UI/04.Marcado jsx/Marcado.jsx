/*
Eliminación de importaciones React no utilizadas
Debido a que la nueva transformación de JSX importará automáticamente las funciones react/jsx-runtime necesarias, React no necesitará estar dentro del alcance cuando use JSX. Esto podría dar lugar a importaciones de React no utilizadas en tu código. No está de más conservarlas, pero si deseas eliminarlas, te recomendamos que ejecutes un script “codemod” para eliminarlas automáticamente:

cd your_project
npx react-codemod update-react-imports
*/
