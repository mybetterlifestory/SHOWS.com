import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { getDashShows } from '../../features/dashShows/dashShowsSlice';
import TopShowDetails from './TopShowDetails';

function TopFive(props) {
    const dispatch = useDispatch();
    const shows = useSelector(state => state.dashShows.dashShows);//state.reducerName.sliceName

    const TopShows = shows.map((show, i) => {
        return (
            <TopShowDetails key={i} data={show} />
        )
    }).slice(0, 5);

    useEffect(() => {
        dispatch(getDashShows());
    }, [shows]);

    return (
        <div >
            <h3>Our Top Shows:</h3><br/>
            <div className="showContainer">
                {TopShows}
            </div><br/>
            <Link to="/shows">View All Shows</Link>
        </div>
    );
}

export default TopFive;