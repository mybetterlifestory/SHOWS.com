import { useSelector } from 'react-redux';

function ShowInfo() {
    const  info  = useSelector(state => state.shows.show);
    console.log(info.premiered);
    // const premiered = info.premiered.slice(0, 4)

    return (
        <div className="showInfo">
            <div className="flex">
                {/* <img src={showImg} alt={info.name}/> */}
                <div className="IMG">
                    image
                </div>
                <div>
                    <h3><b>{info.name}</b> Info</h3>
                    {/* <h5><b>Network:</b> {info.network.name}</h5> */}
                    <h5><b>Status:</b> {info.status}</h5>
                    <h5><b>Show Type:</b> {info.type}</h5>
                    {/* <h5><b>Genres:</b> {info.genres[0]} | {info.genres[1]} | {info.genres[2]}</h5> */}
                    <h5><b>Language:</b> {info.language}</h5>
                    <h5><b>Premiered:</b> {info.premiered}</h5>
                    {/* <h5><b>Premiered:</b> {info.premiered.slice(0,4)}</h5> */}
                </div>
            </div>
            <div className="showSummary">
                <p>{info.summary}</p>
            </div>
        </div>
    );
}

export default ShowInfo;