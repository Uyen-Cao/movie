import * as ActionType from "./constants";

const initialState = {
  loading: false,
  data: null,
  error: null,
};

const movieScheduleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.MOVIE_SCHEDULE_REQUEST: {
      state.loading = true;
      state.data = null;
      state.error = null;
      return { ...state };
    }
    case ActionType.MOVIE_SCHEDULE_SUCCESS: {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
      return { ...state };
    }
    case ActionType.MOVIE_SCHEDULE_FAILED: {
      state.loading = false;
      state.data = null;
      state.error = action.payload;
      return { ...state };
    }

    default:
      return { ...state };
  }
};

export default movieScheduleReducer;
