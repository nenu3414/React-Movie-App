import axios from "axios";
import {
  movieDetailsURL,
  movieReviewURL,
  recommendationsMovieURL,
} from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(movieDetailsURL(id));
  const reviewData = await axios.get(movieReviewURL(id));
  const recommendationData = await axios.get(recommendationsMovieURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      movie: detailData.data,
      review: reviewData.data,
      recommendation: recommendationData.data,
    },
  });
};
