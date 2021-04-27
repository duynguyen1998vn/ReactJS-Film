import Axios from "./Axios";

class User {
    static getIdUser = (account,password) => {
        const url = '/users/'+account+'/'+password;
        return Axios.get(url);
    }

    static createUser  = (account,password) => {
        const url = '/users/'+account+'/'+password;
        return Axios.post(url);
    }
}
export default User;