import { useEffect, useState } from "react";
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
import EditProfile from "./Pages/EditProfile";
import Login from "./Pages/Login";
import LoginPassword from "./Pages/LoginPassword";
import Register from "./Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Search from "./Components/Search/search";
import Subscription from "./Pages/Subscription";
import AllShowsType from "./Pages/AllShowsType";
import LiveTV from "./Pages/LiveTV";
import ComingSoon from "../ComingSoon";
import PlanDetailsModal from "./Components/PlanDetailsModal/PlanDetailsModal";
// import { EpisodeNoContent } from "./EpisodeNoContent";

function App() {
  // const isAuthenticated = true;
  const [isLoginOrRegister, setIsLoginOrRegister] = useState(false);
  useEffect(function () {
    const listerFn = function (event) {
      console.log("I am called");
    };
    window.addEventListener("popstate", listerFn);
    return () => {
      window.removeEventListener("popstate", listerFn);
    };
  }, []);

  return (
    // <EpisodeNoContent>
    <>
      <BrowserRouter>
        {!isLoginOrRegister && <Navigator />}

        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/loginpassword" element={<LoginPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Home/AllMovies" element={<Home_Corousel />} />
            <Route path="/Home/AllTVShows" element={<AllTVShows />} />

            <Route path="/watchDetails/:id" element={<WatchDetails />} />
            {/* <Route path="/TVShow/:id" element={<VideoPlayer />} /> */}
            <Route
              path="/CompleteShowList/:category"
              element={<CompleteShowList />}
            />
            <Route path="/AllShowType/:type" element={<AllShowsType />} />
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
            <Route path="/Live TV" element={<LiveTV />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
            <Route path="planDetails" element={<PlanDetailsModal />} />

            <Route path="/Search/:phrase" element={<Search />} />
            <Route path="/Subscription" element={<Subscription />} />
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/TVShow/:id" element={<VideoPlayer />} />
            <Route path="/myStuff/Watchlist" element={<AddToWatchList />} />
            <Route path="/manageprofiles" element={<Profiles />} />
            <Route path="/editProfile" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* {!isLoginOrRegister && <Footer />} */}
      <Footer />
    </>
    // </EpisodeNoContent>
  );
}

export default App;
