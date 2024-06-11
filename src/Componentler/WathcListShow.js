import React from "react";
import { addToWatchedList, deleteWathcListById } from "./redux/slice/filmSlice";
import { useDispatch } from "react-redux";

const WathcListShow = ({ film }) => {
  const dispatch = useDispatch();
  //   console.log("izleme lsitemin gelen değrleri:", film);

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
            onClick={() => dispatch(deleteWathcListById(film.id))}
            className="del-button1"
          >
            Sil
          </button>
          <button
            onClick={() => dispatch(addToWatchedList(film))}
            className="del-button2"
          >
            {" "}
            Add To Wathed{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default WathcListShow;
