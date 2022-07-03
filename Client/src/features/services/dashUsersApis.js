import axios from "axios";

const getAllUsers = () => {
    return axios.get('http://localhost:9876/users');
}

const createNewUser = (newUser) => {
    return axios.post(`http://localhost:9876/users/`, newUser);
}

const updateUser = async  (userToUpdate) => {
    return axios.put(`http://localhost:9876/users/${userToUpdate.id}`, userToUpdate);
}

const deleteUser = (id) => {
    return axios.delete(`http://localhost:9876/users/${id}`)
}

export default { getAllUsers, createNewUser, updateUser, deleteUser }