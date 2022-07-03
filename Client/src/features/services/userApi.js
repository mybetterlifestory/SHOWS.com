import axios from "axios";

const getAllUsers = (user) => {
    return axios.post("http://localhost:9876/login", user);
}

const login = async (user) => {
    const loginData = await getAllUsers(user);
    const userData = loginData.data.user;
    return userData;
}

export default {login, getAllUsers};