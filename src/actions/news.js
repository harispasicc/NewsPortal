import axios from "../axios";
import {
  SET_NEWS_LOADING,
  SET_SOURCE_LOADING,
  GET_NEWS_SOURCE,
  NEWS_SOURCE_ERROR,
  TOP_NEWS_ERROR,
  SET_TOP_NEWS,
  CLEAR_TOP_NEWS,
} from "./types";

let newsApiKey = "1e01640240a543f1ba7fe9128a197150";

export const setSourceLoading = () => {
  return {
    type: SET_SOURCE_LOADING,
  };
};

export const setNewsLoading = () => {
  return {
    type: SET_NEWS_LOADING,
  };
};

export const getNewsSource = () => async dispatch => {
  dispatch(setSourceLoading());
  try {
    const newsSource = await axios.get(`sources?apiKey=${newsApiKey}`);
    if (newsSource) {
      dispatch({
        type: GET_NEWS_SOURCE,
        payload: newsSource.data.sources,
      });
    }
  } catch (error) {
    dispatch({
      type: NEWS_SOURCE_ERROR,
    });
  }
};

export const setTopNews = (url, page) => async (dispatch, getState) => {
  dispatch(setNewsLoading());

  try {
    if (page === 1) {
      dispatch({ type: CLEAR_TOP_NEWS });
    }
    const { pageSize } = getState().news;
    const newsItems = await axios.get(
      `${url}&apiKey=${newsApiKey}&page=${page}&pageSize=${pageSize}`
    );
    if (newsItems) {
      dispatch({
        type: SET_TOP_NEWS,
        payload: newsItems.data,
      });
    }
  } catch (error) {
    dispatch({
      type: TOP_NEWS_ERROR,
    });
  }
};
export const getNews = data => async (dispatch, getState) => {
  try {
    const { pageSize } = getState().news;
    const response = await axios.get(
      `top-headlines?country=gb&category=&sources=&q=&apiKey=${newsApiKey}&page=1&pageSize=${pageSize}`
    );
    if (response.status === 200 && response.data) {
      return response.data;
    }
    return null;
  } catch (error) {
    return error;
  }
};
export const clearTopNews = () => {
  return {
    type: CLEAR_TOP_NEWS,
  };
};
