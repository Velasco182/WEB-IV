import {useState} from 'react'
import  { BrowserRouter,  Routes , Route, Link} from 'react-router-dom'
import { Home, Landing, DashBoard, Analytics, Admin } from './pages'

import { ProtectedRoute } from './components/ProtectedRoute'
function App() {

// Simulacion de login
    const [user, setUser] = useState(null)

    const logIn = () =>{
        //request dom
        setUser({
            id: 1,
            name: "Jhon", 
            ///usuario tiene permiso de analizar, viene desde el backend
            permissions: ['analize'],
            roles: ['admin']
        })
    }

    const loginOut = () =>{
        //request dom
        setUser(null)
    }
    
  return (
    <BrowserRouter>
        {/* Enlazo la funcion con el browser router */}
        <Navigation/>

        {
            user ? (
                <button onClick={loginOut}>Logout</button>
            ) : (
                <button onClick={logIn}>Login</button>

            )
        }
        
        <Routes>
            {/* Ruta inicial */}
            <Route index element={<Landing/>}/>

            <Route path='/landing' element={<Landing/>}/>

            {/* Transforma la variable en boolean (!!), si user existe en true, sino es false*/}
            <Route element={ <ProtectedRoute isAllowed={!!user} /> }/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/dashboard' element={<DashBoard/>}/>                
            <Route/>

            <Route path='/analytics' element={
                // Compruebo si el usuario exite e inclute analize
                <ProtectedRoute 
                    isAllowed={!!user && user.permissions.includes('analize')} 
                    redirectTo='/home'>

                    <Analytics/>

                </ProtectedRoute>

            }/>
            
            <Route path='/admin' element={
            
                <ProtectedRoute 
                    isAllowed={!!user && user.roles.includes('admin')}
                    redirectTo='/home'>

                    <Admin/>

                </ProtectedRoute> 

            }/>


        </Routes>
    
    </BrowserRouter>
  )
}

function Navigation(){
    return <nav>
        <ul>
            <li>
                <Link to="/landing">Landing</Link>
            </li>

            <li><Link to="/home">Home</Link></li>
            <li><Link to="/dashboard">DashBoard</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><Link to="/admin">Admin</Link></li>
        </ul>
    </nav>
}

export default App