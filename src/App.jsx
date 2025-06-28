import { BrowserRouter as Router } from "react-router"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero"

function App() {

    return (
        <Router>
            <div className="bg-black text-white min-h-screen">
                <Navbar></Navbar>
                <main>
                    <Hero></Hero>
                </main>
            </div>
        </Router>
    )
}

export default App
