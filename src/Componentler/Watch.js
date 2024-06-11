import React from "react";
import { useSelector } from "react-redux";
import { store } from "./redux/store";
import WathcListShow from "./WathcListShow";

const Watch = () => {
  const { watchList } = useSelector((store) => store.films);
  console.log("yallah bismillah izleneceklerrrr:", watchList);

  return (
    <div>
      <h1>İzlencek Filmler </h1>
      {watchList &&
        watchList.map((film, index) => {
          return <WathcListShow key={index} film={film} />;
        })}
    </div>
  );
};

export default Watch;
