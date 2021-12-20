import { configureStore } from "@reduxjs/toolkit";
import heroesReducer from "../features/heroes/heroesSlice";

export default configureStore({
  reducer: {
    heroes: heroesReducer,
  },
});
