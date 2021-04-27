import Axios from "./Axios";

export default class ListFilmAPI {

    static getListFilm = () => {
        const url = '/films';
        return Axios.get(url);
    }

    static getFilm = (idFilm,episode) => {
        const urlFilm = '/films/'+idFilm+'/'+episode;
        return Axios.get(urlFilm);
    }
}