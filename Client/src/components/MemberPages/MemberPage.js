import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import { Nav, Button } from "react-bootstrap";
import { BsFillBarChartFill , BsFillPersonLinesFill, BsFillBookmarkHeartFill} from "react-icons/bs";
import { BiSlideshow } from "react-icons/bi";

function MemberPage(props) {

    return (
        <div className="Profile">
            <Router>
                <div className="Menu">
                    <h2>Hey, {props.data.firstName}</h2>
                    <Nav className="nav flex-column">
                        <Link to="" className="nav-link"><BsFillBarChartFill />&nbsp; Home Page</Link>
                        <Link to="" className="nav-link"><BsFillPersonLinesFill />&nbsp; My Profile</Link>
                        <Link to="" className="nav-link"><BsFillBookmarkHeartFill />&nbsp; My Subscriptions</Link>
                        <Link to="" className="nav-link"><BiSlideshow />&nbsp; More Shows</Link>
                        <Button>Logout</Button>
                    </Nav>
                </div>
                <Switch>
                    <Route path=""/>
                </Switch>
            </Router>
        </div>
    );
}

export default withRouter(MemberPage);