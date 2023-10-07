import React from "react";

export const ShowDetails = ({ director, cast }) => {
  return (
    <div className="showDetails-container">
      <h4
        style={{
          color: "white",
          fontSize: "25px",
          paddingLeft: "20px",
          margin: "0px",
        }}
      >
        More Info
      </h4>
      <div className="mini-details">
        <h4 className="showDetails-headings">Content advisory</h4>
        <h3 className="dummy-txt">
          Violence, sexual content, foul language, nudity, alcohol use,
          substance use, smoking
        </h3>
      </div>
      <div className="mini-details">
        <h4 className="showDetails-headings">Audio languages</h4>
        <h3 className="dummy-txt">
          ಕನ್ನಡ, हिन्दी, हिन्दी [ऑडियो विवरण], മലയാളം, తెలుగు, தமிழ்
        </h3>
      </div>

      <div className="mini-details">
        <h4 className="showDetails-headings">Subtitles</h4>
        <h3 className="dummy-txt">
          English, हिन्दी [CC], ಕನ್ನಡ, മലയാളം, தமிழ், తెలుగు
        </h3>
      </div>

      <div className="mini-details">
        <h4 className="showDetails-headings">Director</h4>
        <h3 className="dummy-txt">{director}</h3>
      </div>

      <div className="mini-details">
        <h4 className="showDetails-headings">Starring</h4>
        <div className="cast-list">
          {cast.map((item, key) => (
            <li
              className="dummy-txt"
              style={{ color: "white", listStyleType: "none" }}
            >
              {cast[key]}
            </li>
          ))}
        </div>
      </div>

      <div className="mini-details">
        <h4 className="showDetails-headings">Studio</h4>
        <h3 className="dummy-txt">Amazon Clone Studios</h3>
      </div>
    </div>
  );
};
