import Members from '../Members/DashMembers';
import Subscriptions from '../Subscriptions/DashSubscriptions';

function DashboardMembers() {
    return (
        <div className="UserDashboard">
            <Members/>
            <Subscriptions/>
        </div>
    )
}

export default DashboardMembers;