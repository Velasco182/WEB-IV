import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./helloadso";
import { FirstApp } from "./FirstApp";



ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <FirstApp/>  
    </React.StrictMode>
)


//una arrow function
// const ElSaludo = ({ nombre }) => {
//   return <p>Bienvenido, {nombre}!</p>;
// };

// ReactDOM.createRoot(document.getElementById('noroot')).render(
//   <React.StrictMode>
//     < ElSaludo nombre="ADSOO" />
//   </React.StrictMode>
// );



