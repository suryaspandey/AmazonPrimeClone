import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Router } from "@material-ui/icons";
// import Home from "./Pages/Home";
import WatchDetails from "./Pages/WatchDetails";
import Navigator from "./Components/Navigator";
import Home_Corousel from "./Components/Home_Comp/Home_Corousel";
import { PlayShow } from "./Components/PlayShow/PlayShow";
import { VideoPlayer } from "./Components/PlayShow/VideoPlayer";

import { PlayShow1 } from "./Components/PlayShow/PlayShow1";
import { CompleteShowList } from "./Pages/CompleteShowList";
// import { EpisodeNoContent } from "./EpisodeNoContent";

function App() {
    return (
        // <EpisodeNoContent>
        <>
            <Navigator />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home_Corousel />}></Route>
                    <Route
                        path="/watchDetails/:id"
                        element={<WatchDetails />}
                    />
                    <Route path="/TVShow/:id" element={<VideoPlayer />} />
                    <Route
                        path="/CompleteShowList/:category"
                        element={<CompleteShowList />}
                    />
                </Routes>
            </BrowserRouter>
        </>
        // </EpisodeNoContent>
    );
}

export default App;
