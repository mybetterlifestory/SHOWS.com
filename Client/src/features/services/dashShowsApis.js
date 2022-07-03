import axios from "axios";

const getAllShows = () => {
    return axios.get('http://localhost:9999/shows');
}

const createNewShow = (newShow) => {
    return axios.post(`http://localhost:9999/shows/`, newShow);
}

const updateShow = async  (showToUpdate) => {
    return axios.put(`http://localhost:9999/shows/${showToUpdate.id}`, showToUpdate);
}

const deleteShow = (id) => {
    return axios.delete(`http://localhost:9999/shows/${id}`)
}

export default { getAllShows, createNewShow, updateShow, deleteShow }