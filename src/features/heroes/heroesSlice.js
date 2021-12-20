import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URI } from "../../app/config";

export const fetchHeroes = createAsyncThunk(
  "heroes/fetchHeroes",
  async (limit) => {
    const response = await fetch(`${BASE_URI}&limit=${limit}&offset=${limit}`, {
      method: "GET",
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    return { heroes: data.data.results };
  }
);

const heroesSlice = createSlice({
  name: "heroes",
  initialState: {
    status: "idle",
    error: null,
    items: [],
    filterItemsName: [],
    filteritemsDuration: [],
    filterItems: [],
  },
  reducers: {
    setFilter: (state, action) => {
      let { name, value } = action.payload;
      state.filterItems = state.items.filter((item) =>
        item[name].toLowerCase().includes(value.toLowerCase())
      );
    },
    updateHeroes: (state, action) => {
      let { id, name, description } = action.payload;
      state.filterItems = state.items.map((item) => {
        if (item.id == id) {
          return {
            name: name,
            description: description,
            modified: item.modified,
            thumbnail: item.thumbnail,
          };
        } else {
          return item;
        }
      });
    },
  },
  extraReducers: {
    [fetchHeroes.pending]: (state, action) => {
      state.status = "loading";
    },

    [fetchHeroes.fulfilled]: (state, action) => {
      state.status = "succeded";
      state.items = action.payload.heroes;
      state.filterItems = state.items;
    },

    [fetchHeroes.error]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { setFilter, updateHeroes } = heroesSlice.actions;
export default heroesSlice.reducer;
