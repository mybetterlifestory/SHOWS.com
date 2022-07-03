import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
// import { Button } from 'react-bootstrap';

function Header() {
    const user = useSelector(state => state.user.user);
    const member = useSelector(state => state.member.member);

    return (
        <div className="navbar">
            {/* {if (user && member === undefined) {

            }} */}
            <div className="links">
                <Link to="/">Home Page</Link>
                <Link to="/login">Login</Link>
                <Link to="/registration">Registration</Link>
                <Link to="/shows">Shows</Link>
            </div>
            <div className="staff">
                <Link to="/staffLogin">Staff</Link>
                <h2>SHOWS.com</h2>
            </div>
        </div>
    );
}

export default Header;