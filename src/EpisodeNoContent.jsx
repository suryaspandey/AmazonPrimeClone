import { React, useState, useContext, createContext } from "react";

const EpisodeIdContext = createContext();

const EpisodeNoContent = ({ children }) => {
    const [episodeId, setEpisodeId] = useState(null);
    return (
        <EpisodeIdContext.Provider value={{ episodeId, setEpisodeId }}>
            {children}
        </EpisodeIdContext.Provider>
    );
};
export const useEpisodeId = () => {
    const context = useContext(EpisodeIdContext);
    if (!context) {
        throw new Error(
            "useEpisodeId must be used within an EpisodeIdProvider"
        );
    }
    return context;
};

export default EpisodeNoContent;
