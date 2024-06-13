import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard";
import { useDispatch } from "react-redux";
import { useGetFilmByNameQuery } from "./redux/api/filmApi";

const Add = (async) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const [inputValue, setinputValue] = useState([]);

  const { data } = useGetFilmByNameQuery(inputValue); //

  let data2;
  if (data) {
    data2 = data;
  } else {
    data2 = []; // eğer boş gelirse data2.results tanımsız bir değer olur bu yüzden tanımsız olmaması için boş array gönderdik geriye
  }

  const searching = (event) => {
    setinputValue(event.target.value);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <img
            style={{ width: "100%", height: "506px", borderRadius: "25px" }}
            src="https://img.goodfon.com/original/3888x2592/1/f2/film-projector-film-light.jpg"
            alt=""
          />
          <div className="titles">
            <h1>Hoş Geldiniz...</h1>
            <h2>
              {" "}
              Milyonlarca film dizi tv show ve keşfedilecek kişiler... Şimdi
              keşfedin...
            </h2>
            <div className="input-wrapper">
              <input
                onChange={searching}
                type="text"
                value={inputValue}
                placeholder="dizi, film , tv show"
              />
            </div>
          </div>
        </div>

        {data2.results &&
          data2.results.map((film, index) => {
            return <FilmCard key={index} film={film} />;
          })}
      </div>
    </div>
  );
};

export default Add;
