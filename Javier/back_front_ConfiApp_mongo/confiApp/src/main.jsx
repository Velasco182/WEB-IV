import React from "react";
import  ReactDOM  from "react-dom/client";
import { App } from "./holamundo";
import { FirstApp } from "./FirstApp";
import { TutorApp} from "./TutorApp";


//renderizacion:
ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <TutorApp/>
    // </React.StrictMode>
)
