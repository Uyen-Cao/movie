import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const cinemaPlaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CINEMA_PLACE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.CINEMA_PLACE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.CINEMA_PLACE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default cinemaPlaceReducer;
