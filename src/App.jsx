import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Router } from "@material-ui/icons";
import Home from "./Components/Home";

function App() {
    const [count, setCount] = useState(0);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <div className="main">Amazon Prime Video</div>
        </BrowserRouter>
    );
}

export default App;
