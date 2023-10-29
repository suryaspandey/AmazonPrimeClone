import { useEffect, useState } from "react";
import { BrowserRouter, HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WatchDetails from "./Pages/WatchDetails/WatchDetails";
import Navigator from "./Components/Navigator";
import Home_Corousel from "./Components/Home_Comp/Home_Corousel";
import { VideoPlayer } from "./Components/PlayShow/VideoPlayer";
import { CompleteShowList } from "./Pages/CompleteShowList";
import LanguageMoviesAndShows from "./Components/Language/LanguageMoviesAndShows";
import Footer from "./Components/Footer/Footer";
import Categories from "./Pages/Categories";
import ActionAndAdventureMain from "./Components/Home_Comp/ActionAdventure/ActionAndadventureMain";
import Home from "./Pages/Home";
import AllTVShows from "./Components/AllTVShows/AllTVShows";
import AddToWatchList from "./Components/Watchlist/AddToWatchList";
import Profiles from "./Pages/Profiles";
import EditProfile from "./Pages/EditProfile";
import Login from "./Pages/Login";
import LoginPassword from "./Pages/LoginPassword";
import Register from "./Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Search from "./Components/Search/Search";
import Subscription from "./Pages/Subscription";
import AllShowsType from "./Pages/AllShowsType";
import LiveTV from "./Pages/LiveTV";
import ComingSoon from "./Pages/ComingSoon";
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
import SciFiMain from "./Components/AllCategories/SciFiMain";
import WatcDetailsMobile from "./Pages/WatchDetails/WatcDetailsMobile";
import MobileAddToWatchList from "./Components/Watchlist/MobileAddToWatchList";

function App() {
  const isLoginOrRegister =
    window.location.pathname === "/login" ||
    window.location.pathname === "/register";

  const isVideoPlayerPage = window.location.pathname.includes("/TVShow");

  const [isLoginOrRegisterPage, setIsLoginOrRegisterPage] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // const [isLoginOrRegister, setIsLoginOrRegister] = useState(
  //   window.location.pathname === "/login" ||
  //     window.location.pathname === "/register"
  // );

  useEffect(() => {
    const pathname = window.location.pathname;
    setIsLoginOrRegisterPage(pathname === "/login" || pathname === "/register");
  }, [window.location.pathname]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 415);
    };
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <HashRouter>
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

            {isMobile ? (
              <Route
                path="/watchDetailsMob/:id"
                element={<WatcDetailsMobile />}
              />
            ) : (
              <Route path="/watchDetails/:id" element={<WatchDetails />} />
            )}

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
          </Route>

          <Route element={<PrivateRoute />}>
            <Route path="/TVShow/:id" element={<VideoPlayer />} />
            {isMobile ? (
              <Route
                path="/myStuff/MobWatchlist"
                element={<MobileAddToWatchList />}
              />
            ) : (
              <Route path="/myStuff/Watchlist" element={<AddToWatchList />} />
            )}
            <Route path="/manageprofiles" element={<Profiles />} />
            <Route path="/editProfile" element={<EditProfile />} />
            <Route path="/createNewPassword" element={<CreateNewPassword />} />
          </Route>
        </Routes>
      </HashRouter>
      {/* <Footer /> */}

      {/* {!isVideoPlayerPage && isMobile && <Footer />} */}
      {/* {isVideoPlayerPage ? null : <Footer />} */}

      {/* {!isVideoPlayerPage && isMobile && <Footer />} */}
      {/* {!isLoginOrRegister && <Footer />} */}
      {!isVideoPlayerPage && <Footer />}

      {/* {!isLoginOrRegister && !window.location.pathname.includes("/TVShow") && (
        <Footer />
      )} */}
    </>
  );
}

export default App;
