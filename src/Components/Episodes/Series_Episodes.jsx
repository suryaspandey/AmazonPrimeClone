import React, { useState } from "react";
import { Episodes_details } from "./Episodes_details";

export const Series_Episodes = ({ imgdata, id }) => {
  return (
    <>
      <Episodes_details imgdata={imgdata} episodeNo={1} id={id} />
      <Episodes_details imgdata={imgdata} episodeNo={2} id={id} />
    </>
  );
};
