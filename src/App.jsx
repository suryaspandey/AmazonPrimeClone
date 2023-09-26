import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./Pages/Home";
import WatchDetails from "./Pages/WatchDetails";
import Navigator from "./Components/Navigator";
import Home_Corousel from "./Components/Home_Comp/Home_Corousel";
import { PlayShow } from "./Components/PlayShow/PlayShow";
import { VideoPlayer } from "./Components/PlayShow/VideoPlayer";

import { PlayShow1 } from "./Components/PlayShow/PlayShow1";
import { CompleteShowList } from "./Pages/CompleteShowList";
import LanguageMoviesAndShows from "./Components/Language/LanguageMoviesAndShows";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/Categories";
import ActionAdventureMovies from "./Components/Home_Comp/ActionAdventure/ActionAdventureMovies";
import ActionAndAdventureMain from "./Components/Home_Comp/ActionAdventure/ActionAndAdventureMain";
import Home from "./Pages/Home";
import AllTVShows from "./Components/AllTVShows/AllTVShows";
import AddToWatchList from "./Components/Watchlist/AddToWatchList";
import Profiles from "./Pages/Profiles";
// import { EpisodeNoContent } from "./EpisodeNoContent";

function App() {
  return (
    // <EpisodeNoContent>
    <>
      <BrowserRouter>
        <Navigator />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Home/AllMovies" element={<Home_Corousel />} />
          <Route path="/Home/AllTVShows" element={<AllTVShows />} />

          {/* <Route path="/homeAll" element={<Home_Corousel />}></Route> */}
          <Route path="/watchDetails/:id" element={<WatchDetails />} />
          <Route path="/TVShow/:id" element={<VideoPlayer />} />
          <Route
            path="/CompleteShowList/:category"
            element={<CompleteShowList />}
          />
          <Route
            path="/WatchInYourLanguage/:language"
            element={<LanguageMoviesAndShows />}
          />
          <Route
            exact
            path="/Categories/ActionAdventure/"
            element={<ActionAndAdventureMain />}
          />
          <Route
            path="/Categories/ActionAdventure/:subheading"
            element={<ActionAndAdventureMain />}
          />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/manageprofiles" element={<Profiles />} />
          <Route path="/myStuff/Watchlist" element={<AddToWatchList />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
    // </EpisodeNoContent>
  );
}

export default App;
