import {GET_MOVIES, GET_MOVIE_DETAIL, ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM} from './actions';
import {MovieModel} from "../models/MovieModel";

const initialState = {
    movies: [],
    favorites: [],
    currentMovie: {},
};

function moviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return {...state, movies: action.payload};
        case GET_MOVIE_DETAIL:
            return {...state, currentMovie: new MovieModel(action.payload)};
        case ADD_FAVORITE_ITEM:
            return {...state, favorites: [...state.favorites.filter(
                    movie => movie.id !== action.payload.id,
                ), action.payload]};
        case REMOVE_FAVORITE_ITEM:
            return {
                ...state,
                favorites: state.favorites.filter(
                    movie => movie.id !== action.payload.id,
                ),
            };
        default:
            return state;
    }
}

export default moviesReducer;
