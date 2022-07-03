import { useSelector } from 'react-redux';
import AdminPage from '../components/AdminPages/AdminPage';
import ShowsUserPage from '../components/UserPages/UserShows/ShowsUserPage';
import MembersUserPage from '../components/UserPages/UserMembers/MembersUserPage';
import MemberPage from '../components/MemberPages/MemberPage';

const Profile = () => {
    const user = useSelector(state => state.user.user);
    const member = useSelector(state => state.member.member);

    if (user.role === 'ADMIN' && user.permission === 'ADMIN') {
        return <AdminPage key={user.id} data={user} />
    }

    else if (user.role === 'USER' && user.permission === 'SHOWS') {
        return <ShowsUserPage key={user.id} data={user} />
    }

    else if (user.role === 'USER' && user.permission === 'MEMBERS') {
        return <MembersUserPage key={user.id} data={user} />
    }

    else if (member.role === 'MEMBER') {
        return <MemberPage key={member.id} data={member}/>
    }

    return (
        <></>
    );
}

export default Profile;