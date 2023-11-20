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
            name: "Jhon"
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

            <Route path='/home' element={
                    <ProtectedRoute user={user} redirectTo='/'>
                        <Home/>
                    </ProtectedRoute>
                }/>

            <Route path='/dashboard' element={
                    <ProtectedRoute user={user} redirectTo='/'>
                        <DashBoard/>
                    </ProtectedRoute>
                }/>

            <Route path='/analytics' element={<Analytics/>}/>

            <Route path='/admin' element={<Admin/>}/>
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