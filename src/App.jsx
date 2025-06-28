"use client"

import { BrowserRouter as Router } from "react-router"
import './App.css'
import Navbar from './Components/Navbar/Navbar'

function App() {

    return (
        <Router>
            <div className="App bg-white text-black min-h-screen">
                <Navbar></Navbar>
                <main>
                    
                </main>
            </div>
        </Router>
    )
}

export default App
