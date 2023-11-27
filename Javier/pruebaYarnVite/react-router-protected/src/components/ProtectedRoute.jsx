import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({children, isAllowed, redirectTo="/landing"}) =>{

    if(!isAllowed){
       return <Navigate to={redirectTo}/>
    }
// Multiples rutas protegidas por una misma logica gracias a Outlet
//Si existe un children devuelve un children sino devuelve un outlet, operador ternario
    return children ? children : <Outlet/>
}