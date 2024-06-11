import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inputValue: [],
  watchListValue: 0,
  watchedValue: 0,
  watchList: [], // izlediğim filmleri buraya alıp daha sonra watchcomponentinde sergileyebilirim.
  watched: [],
  filmInfo: "there are no info for what you are looking ",
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
    },
    deleteWathcedListById: (state, action) => {
      const newList = state.watched.filter((film) => film.id != action.payload);
      state.watched = newList;
    },

    addfilmToWatchList: (state, action) => {
      //   console.log("button basıldı ");
      //   console.log("state.wathlist içerde ilk:", state.watchList);
      //   console.log("action.payload:", action.payload);
      state.watchList = [...state.watchList, action.payload];
      console.log(
        "film eklem alanından bakıyorum  state.wathlist:",
        state.watchList
      );
      //   console.log("state.wathlist içerde ikinici:", state.watchList);
    },

    addFilmToWatched: (state, action) => {
      state.watched = [...state.watched, action.payload];
      //   console.log("state.watched : ");
      //   console.log(state.watched);
    },

    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addToWatchList,
  increment,
  getInputValue,
  addToWatchedList,
  addfilmToWatchList,
  deleteWathcListById,
  deleteWathcedListById,
  addFilmToWatched,
} = filmSlice.actions;

export default filmSlice.reducer;
