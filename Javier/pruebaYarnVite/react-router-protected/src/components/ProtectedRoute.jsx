import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({children, user, redirectTo="/landing"}) =>{

    if(!user){
       return <Navigate to={redirectTo}/>
    }
// Multiples rutas protegidas por una misma logica gracias a Outlet
    return <Outlet/>
}