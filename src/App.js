import './App.css';
import Header from "./components/Header.js"
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import {useState, useEffect} from "react";
import Home from "./Pages/Home";
import Todolist from "./Pages/Todolist";

import {Link, Routes, Route, Router} from "react-router";

function App() {
    return (
        <article>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/todo">To-do list</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/todo" element={<Todolist />}/>
            </Routes>
        </article>
    )

}

export default App;