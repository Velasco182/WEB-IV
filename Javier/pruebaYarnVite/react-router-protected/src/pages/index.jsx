// Acceso para cualquiera
export const Landing = () => <h2>Landing Page (Public)</h2>

export const Home = () => {
    return <h2>Home Page (Private)</h2>
} 


export const DashBoard = () => <h2>DashBoard Page (Private)</h2>

export const Analytics = () => <h2>Analytics Page (Private, Permission: Analize)</h2>

export const Admin = () => <h2>Admin Page (Private, Permission: Admin)</h2>