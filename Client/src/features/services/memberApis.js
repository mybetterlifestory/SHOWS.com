import axios from "axios";

const getAllMembers = (member) => {
    return axios.post("http://localhost:9999/member/login", member)
}

const memberLogin = async (member) => {
    const loginData = await getAllMembers(member);
    const memberData = loginData.data.member;
    return memberData;
}

export default { memberLogin, getAllMembers }