import Axios from "./Axios";

class FollowAPI {

    static saveFollow = (idUser,idFilm) => {
        const url = 'follows/'+idUser+'/'+idFilm;
        return Axios.post(url);
    }

    static getListFollow = (idUser) => {
        const url = 'follows/'+idUser;
        return Axios.get(url);
    }

    static unFollow = (idUser,idFilm) => {
        const url = 'follows/'+idUser+'/'+idFilm;
        return Axios.delete(url);
    }
}

export default FollowAPI;