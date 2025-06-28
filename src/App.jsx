import { BrowserRouter as Router } from "react-router"
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Hero from "./Components/Hero/Hero"
import AboutMe from "./Components/AboutMe/AboutMe"
import Skills from "./Components/Skills/Skills"
import Education from "./Components/Education/Education"

function App() {

    return (
        <Router>
            <div className="bg-black text-white min-h-screen">
                <Navbar></Navbar>
                <main>
                    <Hero></Hero>
                    <AboutMe></AboutMe>
                    <Skills></Skills>
                    <Education></Education>
                </main>
            </div>
        </Router>
    )
}

export default App
