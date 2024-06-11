import React from "react";
import { useSelector } from "react-redux";
import WatchedShow from "./WatchedShow";

const Whatced = () => {
  const { watched } = useSelector((store) => store.films);

  return (
    <div>
      <h1>İzlediğim Filmler </h1>

      {watched &&
        watched.map((film, index) => {
          return <WatchedShow key={index} film={film} />;
        })}
    </div>
  );
};

export default Whatced;
