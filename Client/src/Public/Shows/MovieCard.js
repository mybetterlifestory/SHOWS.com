import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';  
import {showById} from '../../features/publicShows/showsSlice';


function MovieCard(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const history = useHistory();

    const onClick = () => {
        // console.log(data._id)
        dispatch(showById(data._id))
        history.push(`/aboutShow/${data._id}`)
    }

    return (
        <div className="cardShow" onClick={onClick}>
            <div className="cardTop">
                <img src={data.image.medium} alt={data.name} />
            </div>
            <div className="cardInfo">
                <h4>{data.name}</h4>
                {/* <label>Status: {data.status}</label> */}
            </div>
        </div>
    );
}

export default MovieCard;