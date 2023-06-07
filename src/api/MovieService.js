import axios from 'axios';

const BASE_URL = "https://api.themoviedb.org/3/";
const API_KEY = "cd5c21f1292f69d56899b07a576bbdbc";

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`;

export class MovieService{
    static getMovies(){
        return axios(withBaseUrl("movie/popular"));
    }

    static getMovieDetails(id){
        return axios(withBaseUrl(`movie/${id}`));
    }

    static serchMovies(movie){
        return axios(withBaseUrl("search/movie")+`&query=${movie}`)
    }
}



