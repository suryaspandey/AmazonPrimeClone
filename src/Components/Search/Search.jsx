import React from "react";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paramValue = queryParams.get("paramName");
  console.log(paramValue);
  const searchBarFn = () => {
    fetch(
      'https://academics.newtonschool.co/api/v1/ott/show?filter={"title" : "Contagion"}'
    );
  };
  return <div style={{ color: "white", fontSize: "100px" }}>search</div>;
};

export default Search;
