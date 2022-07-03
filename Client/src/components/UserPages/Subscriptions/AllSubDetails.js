function AllSubDetails(props) {
    const { data } = props;

    return (
        <div className="dashItem">
            <div className="SpaceBetween">
                <h5>{data.firstName} {data.lastName} Subscribed To "{data.shows[0].name}" </h5>
            </div>
        </div>
    );
}

export default AllSubDetails;