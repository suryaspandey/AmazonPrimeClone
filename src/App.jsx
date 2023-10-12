import { useEffect, useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import Home from "./Pages/Home";
import WatchDetails from "./Pages/WatchDetails/WatchDetails";
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
import KidsAll from "./Components/Kids/KidsAll";
import UserMoodsModal from "./Components/UserMoodsModel/UserMoodsModal";
import CreateNewPassword from "./Components/CreateNewPassword/CreateNewPassword";
import MysteryThrillerMain from "./Components/AllCategories/MysteryThrillerMain";
import DocumentaryMain from "./Components/AllCategories/DocumentaryMain";
import ComedyMain from "./Components/AllCategories/ComedyMain";
import DramaMain from "./Components/AllCategories/DramaMain";
import FantasyMain from "./Components/AllCategories/FantasyMain";
import HorrorMain from "./Components/AllCategories/HorrorMain";
import RomanceMain from "./Components/AllCategories/RomanceMain";
import MobileNavbar from "./Components/Navbar/MobileNavbar";
import MobileMenuDropDown from "./Components/Navbar/MobileMenuDropDown";
import SciFiMain from "./Components/AllCategories/SciFiMain";
import WatcDetailsMobile from "./Pages/WatchDetails/WatcDetailsMobile";
// import { EpisodeNoContent } from "./EpisodeNoContent";

function App() {
  // const isAuthenticated = true;
  const isLoginOrRegister =
    window.location.pathname === "/login" ||
    window.location.pathname === "/register";

  const isVideoPlayerPage = window.location.pathname.includes("/TVShow");

  // const [isLoginOrRegister, setIsLoginOrRegister] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 414);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

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
        {!isLoginOrRegister &&
          !isVideoPlayerPage &&
          (isMobile ? <MobileNavbar /> : <Navigator />)}

        <Routes>
          <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/loginpassword" element={<LoginPassword />} />
            <Route path="/register" element={<Register />} />
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Home/UserMoods" element={<UserMoodsModal />} />
            <Route path="/Home/AllMovies" element={<Home_Corousel />} />
            <Route path="/Home/AllTVShows" element={<AllTVShows />} />
            <Route path="/Home/KidsAll" element={<KidsAll />} />

            <Route path="/watchDetails/:id" element={<WatchDetails />} />
            {isMobile && (
              <Route
                path="/watchDetailsMob/:id"
                element={<WatcDetailsMobile />}
              />
            )}
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
              path="/Categories/ActionAdventure/:subheading"
              element={<ActionAndAdventureMain />}
            />
            <Route
              path="/Categories/MysteryAndThriller/:subheading"
              element={<MysteryThrillerMain />}
            />
            <Route
              path="/Categories/Comedy/:subheading"
              element={<ComedyMain />}
            />
            <Route
              path="/Categories/Documentary/:subheading"
              element={<DocumentaryMain />}
            />
            <Route
              path="/Categories/Drama/:subheading"
              element={<DramaMain />}
            />
            <Route
              path="/Categories/Fantasy/:subheading"
              element={<FantasyMain />}
            />

            <Route
              path="/Categories/Horror/:subheading"
              element={<HorrorMain />}
            />

            <Route
              path="/Categories/Romance/:subheading"
              element={<RomanceMain />}
            />
            <Route
              path="/Categories/SciFi/:subheading"
              element={<SciFiMain />}
            />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Live TV" element={<LiveTV />} />
            <Route path="/comingSoon" element={<ComingSoon />} />

            <Route path="/Search/:phrase" element={<Search />} />
            <Route path="/Subscription" element={<Subscription />} />

            {/* <Route path="/menu" element={<MobileMenuDropDown />} /> */}
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/TVShow/:id" element={<VideoPlayer />} />
            <Route path="/myStuff/Watchlist" element={<AddToWatchList />} />
            <Route path="/manageprofiles" element={<Profiles />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/createNewPassword" element={<CreateNewPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {!isLoginOrRegister && !window.location.pathname.includes("/TVShow") && (
        <Footer />
      )}
      {/* <Footer /> */}
    </>
    // </EpisodeNoContent>
  );
}

export default App;
