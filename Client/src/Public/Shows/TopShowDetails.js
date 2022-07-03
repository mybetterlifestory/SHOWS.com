function TopShowDetails(props) {
    const { data } = props;

    return (
        <div>
            <div className="cardShow">
                    <div className="cardTop" >
                        <img src={data.image.medium} alt={data.name} />
                    </div>
                <div className="cardInfo">
                    <h4>{data.name}</h4>
                    {/* <label>Status: {data.status}</label> */}
                </div>
            </div>
        </div>
    );
}

export default TopShowDetails;