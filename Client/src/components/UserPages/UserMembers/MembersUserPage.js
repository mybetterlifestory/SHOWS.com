import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { BsFillPersonLinesFill, BsFillBookmarkHeartFill, BsFillBarChartFill } from "react-icons/bs";
import Dashboard from './DashboardMembers';
import Members from '../Members/MembersList';
import Subscriptions from '../Subscriptions/AllSubscriptions';

function MembersUserPage(props) {
    return (
        <div className="Profile">
            <Router>
                <div className="Menu">
                    <h2>Welcome {props.data.firstName}</h2>
                    <Nav className="nav flex-column">
                        <Link to="/Dashboard" className="nav-link"><BsFillBarChartFill />&nbsp; Dashboard</Link><br />
                        <Link to="/AllMembers" className="nav-link"><BsFillPersonLinesFill />&nbsp; Members</Link><br />
                        <Link to="/AllSubscriptions" className="nav-link"><BsFillBookmarkHeartFill />&nbsp; Subscriptions</Link><br />
                        <Button style={{ alignSelf: "center" }}>Logout</Button>
                    </Nav>
                </div>
                <Switch>
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

export default withRouter(MembersUserPage);