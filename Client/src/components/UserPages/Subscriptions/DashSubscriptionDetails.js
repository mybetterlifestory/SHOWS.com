function DashSubscriptionDetails(props) {
    const { data } = props;
    // console.log(data);

    return (
        <div className="dashItem">
            <div className="SpaceBetween">
                <h6>{data.firstName} {data.lastName} Subscribed To "{data.shows[0].name}" </h6>
            </div>
        </div>
    );
}

export default DashSubscriptionDetails;