import React from "react";
import WatchCardsImage from "../Home_Comp/WatchCardsImage";
import { Link } from "react-router-dom";
import MobileSubNavbar from "../Navbar/MobileSubNavbar";

const MobileWatchCard = () => {
  // <MobileSubNavbar noShow={false} />;
  return (
    <>
      <div className="mobile-watchcard-container">
        {actualData.map((item, index) => (
          <>
            <div className="mob-watchcards-img-container">
              <Link
                to={
                  `/watchDetailsMob/${item._id}`
                  // `/watchDetails/${item._id}`
                }
                state={{ projectId: projectId }}
              >
                <img
                  // className="banner-img"
                  src={item.thumbnail}
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 10,
                    borderRadius: "0.2rem",
                  }}
                />
              </Link>
            </div>
            {/* <WatchCardsImage
              item={item}
              projectId={projectId}
              watchlistStatus={watchlistStatus}
              isloggedIn={isloggedIn}
              addtowatchlist={addtowatchlist}
              isInWatchList={isInWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              actualData={actualData}
              // isHovered={isHovered}
            /> */}
            <WatchCardsDescription
              item={item}
              projectId={projectId}
              watchlistStatus={watchlistStatus}
              isloggedIn={isloggedIn}
              addtowatchlist={addtowatchlist}
              isInWatchList={isInWatchList}
              handleRemoveFromWatchList={handleRemoveFromWatchList}
              actualData={actualData}
            />
          </>
        ))}
      </div>
    </>
  );
};

export default MobileWatchCard;
