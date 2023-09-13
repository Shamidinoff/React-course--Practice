import { createAction } from "@reduxjs/toolkit";
import {
  heroesFetching,
  heroesFetched,
  heroesFetchingError,
} from "../components/heroesList/heroesSlice";

export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching);
  request("http://localhost:3001/heroes")
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

export const heroesFetching = () => {
  return {
    type: "HEROES_FETCHING",
  };
};

// export const heroesFetching = createAction("HEROES_FETCHING");

export const heroesFetched = (heroes) => {
  return {
    type: "HEROES_FETCHED",
    payload: heroes,
  };
};

// export const heroesFetched = createAction("HEROES_FETCHED");

export const heroesFetchingError = () => {
  return {
    type: "HEROES_FETCHING_ERROR",
  };
};

// export const heroesFetchingError = createAction("HEROES_FETCHING_ERROR");

export const filtersFetching = () => {
  return {
    type: "FILTERS_FETCHING",
  };
};

// export const filtersFetching = createAction("FILTERS_FETCHING");

export const filtersFetched = (filters) => {
  return {
    type: "FILTERS_FETCHED",
    payload: filters,
  };
};

// export const filtersFetched = createAction("FILTERS_FETCHED");

export const filtersFetchingError = () => {
  return {
    type: "FILTERS_FETCHING_ERROR",
  };
};

// export const filtersFetchingError = createAction("FILTERS_FETCHING_ERROR");

export const activeFilterChanged = (filter) => {
  return {
    type: "ACTIVE_FILTER_CHANGED",
    payload: filter,
  };
};

// export const activeFilterChanged = createAction("ACTIVE_FILTER_CHANGED");

// export const activeFilterChanged = (filter) => (dispatch) => {
//     setTimeout(() => {
//       dispatch({
//         type: "ACTIVE_FILTER_CHANGED",
//         payload: filter,
//       });
//     }, 1000);
//   };

export const heroCreated = (hero) => {
  return {
    type: "HERO_CREATED",
    payload: hero,
  };
};

// export const heroCreated = createAction("HERO_CREATED");

export const heroDeleted = (id) => {
  return {
    type: "HERO_DELETED",
    payload: id,
  };
};

// export const heroDeleted = createAction("HERO_DELETED");
