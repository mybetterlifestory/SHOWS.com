import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllShows } from '../../features/publicShows/showsSlice';
import MovieCard from './MovieCard';

function ShowsList() {
    const dispatch = useDispatch();
    const shows = useSelector(state => state.shows.shows);//state.reducerName.sliceName
    
    const showsList = shows.map((show, index) => {
        return (<MovieCard key={index} data={show} />)
    })

    useEffect(() => {
        dispatch(getAllShows());
    }, [dispatch]);

    return (
        <div>
            <h1>Shows</h1>
            <div className="showList">
                <div className="showContainer">
                    {showsList}
                </div>
                {/* onclick to show detail */}
            </div>
        </div>
    );
}

export default ShowsList;