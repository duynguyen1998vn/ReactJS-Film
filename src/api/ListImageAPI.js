import Axios from "./Axios";

export default class ListImageAPI {
    static getListImage = () => {
        const url = '/images';
       return Axios.get(url);
    }
}
