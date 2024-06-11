import { createSlice } from "@reduxjs/toolkit";

const getStorage = () => {
  if (localStorage.getItem("films"))
    return JSON.parse(localStorage.getItem("films"));
  else {
    return [];
  }
};

const initialState = {
  inputValue: [],
  watchListValue: 0,
  watchedValue: 0,
  watchList: getStorage(),

  watched: [], // sadece watchList için localstorage atıldı watched için yapılmaı dolayısıyla yenilendiğinde değerler gidecek
  filmInfo: "there are no info for what you are looking ",
};

const sentLocal = (event) => {
  localStorage.setItem("films", JSON.stringify(event));
};

export const filmSlice = createSlice({
  name: "film",
  initialState,
  reducers: {
    //input değerlerni aldın şimdi de rtkapisinden linki mi alıyorsun  ya da orada bu fonksiyonu mu kullanıyorsun

    getInputValue: (state, action) => {
      console.log("input değerlerini anlık alabiliyorum");
      state.inputValue = action.payload;
      console.log("son durum  :");
      console.log(state.inputValue);
    },

    addToWatchList: (state, action) => {
      state.watchList = [...state.watchList, action.payload];

      console.log(action.payload);
      const newList = state.watched.filter(
        (film) => film.id != action.payload.id
      );
      state.watched = newList;
    },

    addToWatchedList: (state, action) => {
      state.watched = [...state.watched, action.payload];

      console.log(action.payload);
      const newList = state.watchList.filter(
        (film) => film.id != action.payload.id
      );
      state.watchList = newList;
    },

    deleteWathcListById: (state, action) => {
      console.log("addTowatch sonrası deletewatshc");
      console.log(action.payload);
      const newList = state.watchList.filter(
        (film) => film.id != action.payload
      );
      state.watchList = newList;
      sentLocal(state.watchList);
    },
    deleteWathcedListById: (state, action) => {
      const newList = state.watched.filter((film) => film.id != action.payload);
      state.watched = newList;
    },

    addfilmToWatchList: (state, action) => {
      // bu alanda seçtiğim filmi direk watchliste ekledim bir sorun yok ok . peki ben direk eklemek yerine önce localstroage ekelsem sonra da  ordan watchlisteme eklesem resfresh de veriler kaybolmaz

      state.watchList = [...state.watchList, action.payload];
      sentLocal(state.watchList);
    },

    addFilmToWatched: (state, action) => {
      state.watched = [...state.watched, action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToWatchList,
  getInputValue,
  addToWatchedList,
  addfilmToWatchList,
  deleteWathcListById,
  deleteWathcedListById,
  addFilmToWatched,
} = filmSlice.actions;

export default filmSlice.reducer;
