import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { BsFillBarChartFill, BsFillPersonLinesFill, BsFillBookmarkHeartFill } from "react-icons/bs";
import { BiSlideshow } from "react-icons/bi";
import MyProfile from './MyProfile';
import MySubscriptions from './MySubscriptions';
// import Shows from '../../Public/Shows/ShowsMain';
import Dashboard from './MemberDashboard';

function MemberPage(props) {

    return (
        <div className="Profile">
            <Router>
                <div className="Menu">
                    <h2>Hey {props.data.firstName}</h2>
                    <Nav className="nav flex-column">
                        <Link to="/Dashboard" className="nav-link"><BsFillBarChartFill />&nbsp; Home Page</Link><br />
                        <Link to="/MyProfile" className="nav-link"><BsFillPersonLinesFill />&nbsp; My Profile</Link><br />
                        <Link to="/MySubscriptions" className="nav-link"><BsFillBookmarkHeartFill />&nbsp; My Subscriptions</Link><br />
                        <Link to="" className="nav-link"><BiSlideshow />&nbsp; More Shows</Link><br />
                        <Button>Logout</Button>
                    </Nav>
                </div>
                <Switch>
                    <Route path="/MyProfile" component={MyProfile} />
                    <Route path="/MySubscriptions" component={MySubscriptions} />
                    <>
                        <Dashboard />
                    </>
                </Switch>
            </Router>
        </div>
    );
}

export default withRouter(MemberPage);