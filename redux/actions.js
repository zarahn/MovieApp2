import axios from 'axios';
// Define action types
export const GET_MOVIES = 'FETCH_MOVIES';
export const GET_MOVIE_DETAIL = 'FETCH_MOVIE_DETAIL';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

// Construct a BASE URL for API endpoint
const API_KEY = 'ecd9806e785ea935d0119413147d64f7';
const BASE_URL = 'https://api.themoviedb.org/3/movie';
const ADD_KEY = `?api_key=${API_KEY}`

const LIST_URL   = `${BASE_URL}/popular${ADD_KEY}&page=1`;
const DETAIL_URL = `${BASE_URL}`;

export const getMovies = () => {
    try {
        return async dispatch => {
            const res = await axios.get(`${LIST_URL}`);
            if (res.data) {
                dispatch({
                    type: GET_MOVIES,
                    payload: res.data.results,
                });
            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
        // Add custom logic to handle errors
    }
};

export const getMovieDetail = (id) => {
    try {
        return async dispatch => {
            const res = await axios.get(`${DETAIL_URL}/${id}${ADD_KEY}`);
            if (res.data) {
                dispatch({
                    type: GET_MOVIE_DETAIL,
                    payload: res.data,
                });
                console.log('data: ', res.data);
            } else {
                console.log('Unable to fetch');
            }
        };
    } catch (error) {
        // Add custom logic to handle errors
    }
}


export const addFavorite = movie => dispatch => {
    dispatch({
        type: ADD_FAVORITE_ITEM,
        payload: movie,
    });
};
export const removeFavorite = movie => dispatch => {
    dispatch({
        type: REMOVE_FAVORITE_ITEM,
        payload: movie,
    });
};
