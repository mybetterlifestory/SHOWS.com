import Users from './Users/DashUsers';
import Shows from '../UserPages/Shows/DashShows';
import Members from '../UserPages/Members/DashMembers';
import Subscriptions from '../UserPages/Subscriptions/DashSubscriptions';

function Dashboard(props) {
    return (
        <div className="Dashboard">
            <Users />
            <Shows />
            <Members />
            <Subscriptions />
        </div>
    );
}

export default Dashboard;