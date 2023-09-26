import { createContext, useContext, useState } from "react";

const WatchListContext = createContext();

export const useWatchList = () => {
  return useContext(WatchListContext);
};

export const WatchListProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState([]);

  const addToWatchList = (itemId) => {
    setWatchlist((prevWatchlist) => {
      return [...prevWatchlist, itemId];
    });
  };

  const removefromWatchList = (itemId) => {
    setWatchlist((prevWatchlist) => {
      return prevWatchlist.filter((item) => item !== itemId);
    });
  };
  return (
    <WatchListContext.Provider
      value={{ watchlist, addToWatchList, removefromWatchList }}
    >
      {children}
    </WatchListContext.Provider>
  );
};
