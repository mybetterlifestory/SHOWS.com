import axios from "axios";

const getAllMembers = () => {
    return axios.get('http://localhost:9999/members');
}

const createNewMember = (newMember) => {
    return axios.post(`http://localhost:9999/members/`, newMember);
}

const updateMember = async  (memberToUpdate) => {
    return axios.put(`http://localhost:9999/members/${memberToUpdate.id}`, memberToUpdate);
}

const deleteMember = (id) => {
    return axios.delete(`http://localhost:9999/members/${id}`)
}

export default { getAllMembers, createNewMember, updateMember, deleteMember }