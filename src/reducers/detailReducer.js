const initState = {
  movie: {},
  review: {},
  recommendation: {},
  isLoading: true,
};

const detailReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        movie: action.payload.movie,
        review: action.payload.review,
        recommendation: action.payload.recommendation,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return { ...state };
  }
};

export default detailReducer;
