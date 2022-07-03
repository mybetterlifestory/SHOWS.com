import Shows from '../Shows/DashShows';
import Subscriptions from '../Subscriptions/DashSubscriptions';

function DashboardShows() {
    return (
        <div className="UserDashboard">
            <Shows/>
            <Subscriptions/>
        </div>
    );
}

export default DashboardShows;