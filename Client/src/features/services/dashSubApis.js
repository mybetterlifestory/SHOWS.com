import axios from "axios";

const getAllSubs = () => {
    return axios.get('http://localhost:9999/subscriptions');
}

const createNewSub = (newSubscription) => {
    return axios.post(`http://localhost:9999/subscriptions/`, newSubscription);
}

const updateSub = async  (subToUpdate) => {
    return axios.put(`http://localhost:9999/subscriptions/${subToUpdate.id}`, subToUpdate);
}

const deleteSub = (id) => {
    return axios.delete(`http://localhost:9999/subscriptions/${id}`)
}

export default { getAllSubs, createNewSub, updateSub, deleteSub }