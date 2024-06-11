import React, { useEffect, useState } from "react";
import axios from "axios";
import FilmCard from "./FilmCard";
import { useDispatch } from "react-redux";
import { getInputValue } from "./redux/slice/filmSlice";
import { useGetFilmByNameQuery } from "./redux/api/filmApi";

const Add = (async) => {
  const dispatch = useDispatch();
  const [post, setPost] = useState([]);
  const [inputValue, setinputValue] = useState([]);

  const { data } = useGetFilmByNameQuery(inputValue); // gelen bu değerleri acaba localstorage atsam sonra da çeksem nasıl olur
  // const filmlocal = localStorage.setItem("films", JSON.stringify(data));
  // const result = filmlocal && JSON.parse(localStorage.getItem("films"));
  let data2;
  if (data) {
    data2 = data;
  } else {
    data2 = []; // eğer boş gelirse data2.results tanımsız bir değer olur bu yüzden tanımsız olmaması için boş array gönderdik geriye
  }

  // console.log("yallah bismillah   add data:", data2.results);

  // console.log("Result: ...", result);
  // console.log("yallah bismillah  getFilmByName :", data.results);
  // console.log("yallah bismillah  disSucces :", isSuccess);
  // console.log("yallah bismillah  isLoading :", isLoading);
  // console.log("yallah bismillah  isError :", isError);

  // const newArray = data.results;
  // console.log("yallah bismillah newArray", newArray);

  const searching = (event) => {
    // input değerini bir state e ata
    setinputValue(event.target.value);
  };

  useEffect(() => {
    // getAllData();
    dispatch(getInputValue(inputValue));
  }, [inputValue]);

  // async function getAllData() {
  //   await axios
  //     .get(
  //       `https://api.themoviedb.org/3/search/movie?query=${inputValue}&api_key=5d527e668551b9b5558736c1885969c6`
  //     )
  //     // .get(`http://www.omdbapi.com/?apikey=1a1c20a9&s=${inputValue}`)
  //     .then((response) => {
  //       // console.log(" state öncesi gelen dizi: ");
  //       // console.log(response.data.results);
  //       setPost(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }
  // console.log("state içindeki posts:", post);
  // console.log("postvalues: ");
  // console.log(post);

  // console.log("input değerleri :", inputValue);
  // console.log("post değerleri :", post);

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
