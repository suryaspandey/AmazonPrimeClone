import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Router } from "@material-ui/icons";
// import Home from "./Pages/Home";
import Watch from "./Pages/Watch";
import Navigator from "./Components/Navigator";
import Home_Corousel from "./Components/Home_Comp/Home_Corousel";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Navigator />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home_Corousel />}></Route>
                    <Route path="/watch" element={<Watch />}></Route>
                </Routes>
                {/* <div className="main">Amazon Prime Video</div> */}
            </BrowserRouter>
        </>
    );
}

export default App;
