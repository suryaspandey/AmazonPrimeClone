import React from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

const Search = () => {
  const { phrase } = useParams();
  const searchBarFn = () => {
    fetch(
      'https://academics.newtonschool.co/api/v1/ott/show?filter={"title" : "Contagion"}'
    );
  };
  return <div style={{ color: "white", fontSize: "100px" }}>{phrase}</div>;
};

export default Search;
