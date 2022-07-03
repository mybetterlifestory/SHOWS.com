import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { FaBlackTie } from "react-icons/fa";
import { BiSlideshow } from "react-icons/bi";
import { BsFillPersonLinesFill, BsFillBookmarkHeartFill, BsFillBarChartFill } from "react-icons/bs";
import Dashboard from "./Dashboard";
import Users from './Users/AllUsers';
import Shows from '../UserPages/Shows/AllShows';
import Members from '../UserPages/Members/MembersList';
import Subscriptions from '../UserPages/Subscriptions/AllSubscriptions';

function AdminPage(props) {
    return (
        <div className="Profile">
            <Router>
                <div className="Menu">
                    <h2>Welcome {props.data.firstName}</h2>
                    <Nav className="nav flex-column">
                        <Link to="/Dashboard" className="nav-link"><BsFillBarChartFill />&nbsp; Dashboard</Link><br />
                        <Link to="/AllUsers" className="nav-link"><FaBlackTie />&nbsp; Users</Link><br />
                        <Link to="/AllShows" className="nav-link"><BiSlideshow />&nbsp; Shows</Link><br />
                        <Link to="/AllMembers" className="nav-link"><BsFillPersonLinesFill />&nbsp; Members</Link><br />
                        <Link to="/AllSubscriptions" className="nav-link"><BsFillBookmarkHeartFill />&nbsp; Subscriptions</Link><br />
                        <Button style={{ alignSelf: "center" }}>Logout</Button>
                    </Nav>
                </div>
                <Switch>
                    <Route path="/AllUsers" component={Users} />
                    <Route path="/AllShows" component={Shows} />
                    <Route path="/AllMembers" component={Members} />
                    <Route path="/AllSubscriptions" component={Subscriptions} />
                    < >
                        <Dashboard />
                    </>
                </Switch>
            </Router>
        </div>
    );
}

export default withRouter(AdminPage);