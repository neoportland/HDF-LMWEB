import React from "react";
import { useDispatch } from "react-redux";
import { addToWatchList, deleteWathcedListById } from "./redux/slice/filmSlice";

const WatchedShow = ({ film }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="card" style={{ margin: "10px" }}>
        <h2> {film.original_title} </h2>
        <h2> {film.release_date} </h2>
        <h3> {film.popularity} </h3>
        <img
          style={{ width: "120px", height: "177px" }}
          src={`https://image.tmdb.org/t/p/w200${film.poster_path}`}
          alt=""
        />
        <div>
          <button
            onClick={() => dispatch(deleteWathcedListById(film.id))}
            className="del-button1"
          >
            Sil
          </button>
          <button
            onClick={() => dispatch(addToWatchList(film))}
            className="del-button2"
          >
            {" "}
            add to WathcList{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchedShow;
