import { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Input, Label } from 'reactstrap';
import { BiSlideshow } from "react-icons/bi";
import { getDashShows } from '../../../features/dashShows/dashShowsSlice';
import ShowDetails from './AllShowsDetails';
import AddNewShow from './AllShowsNewShow';

function AllShows() {
    const dispatch = useDispatch();
    const shows = useSelector(state => state.dashShows.dashShows);//state.reducerName.sliceName
    const [add, setAdd] = useState(false);
    const [searchShow, setSearchShow] = useState("");

    const onClick = () => {
        setAdd(current => !current)
    }

    const showsList = shows.filter((val) => {
        if (searchShow === "") {
            return val;
        } else if (
            val.name.toLowerCase().includes(searchShow.toLowerCase())) {
            return val;
        }
    }).map((show, i) => {
        return (
            <ShowDetails key={i} data={show}/>
        );
    })

    const closeAddShow = () => {
        setAdd(current => !current)
    }    

    useEffect(() => {
        dispatch(getDashShows());
    }, [shows], []);

    return (
        <div className="center">
            <div className="ViewAll">
                <div className="option">
                    <h4><BiSlideshow />&nbsp; Shows</h4>
                    <div>
                        <Link to="/Dashboard">Back to Dashboard</Link>&nbsp;&nbsp;
                        <Link to="/AllShows" onClick={onClick}>Add New Show</Link>
                    </div>
                </div>
                <div>
                    {add === true && (
                        <AddNewShow closeAddShow={closeAddShow} />
                    )}
                </div>
                <div className="Inputs">
                    <Label>Total <b>{shows.length}</b> Shows</Label>
                    <div>
                        <Label>Sort by: </Label>&nbsp;
                        <select>
                            <option value="topShows">Top Shows</option>
                            <option value="recentlyAdded">Recently Added</option>
                            <option value="leastAdded">Least Added</option>
                            <option value="a-z">A-Z By Show Name</option>
                            <option value="z-a">Z-A By Show Name</option>
                        </select>
                    </div>
                    <Input type="search" placeholder="Search" name="search" onChange={(e) => { setSearchShow(e.target.value) }} />
                </div>
                <div>{showsList}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps)(AllShows);