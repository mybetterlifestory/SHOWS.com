import { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { getDashSubs } from '../../../features/dashSubscriptions/dashSubSlice';
import SubDetails from './AllSubDetails';

function AllSubscriptions() {
    const dispatch = useDispatch();
    const subscriptions = useSelector(state => state.dashSubs.dashSubs);
    const [searchSubscription, setSearchSubscription] = useState("");

    const subsList = subscriptions.filter((val) => {
        if (searchSubscription === "") {
            return val;
        } else if (
            val.firstName.toLowerCase().includes(searchSubscription.toLowerCase()) ||
            val.lastName.toLowerCase().includes(searchSubscription.toLowerCase()) ||
            val.shows.name.toLowerCase().includes(searchSubscription.toLowerCase())) {
            return val;
        }
    }).map((sub, i) => {
        return (
            <SubDetails key={i} data={sub} />
        );
    })

    useEffect(() => {
        dispatch(getDashSubs());
    }, [subscriptions]);

    return (
        <div className="center">
            <div className="ViewAll">
                <div className="option">
                    <h4><BsFillBookmarkHeartFill />&nbsp; Subscriptions</h4>
                    <div>
                        <Link to="/Dashboard">Back to Dashboard</Link>&nbsp;&nbsp;
                    </div>
                </div>
                <div className="Inputs">
                    <Label>Total <b>{subscriptions.length}</b> Subscriptions</Label>
                    <div>
                        <Label>Sort by: </Label>&nbsp;
                        <select>
                            <option value="recentlyAdded">Recently Subscribed</option>
                            <option value="leastAdded">Least Subscribed</option>
                            <option value="a-zMemberFirst">A-Z By Member First Name</option>
                            <option value="z-aMemberFirst">Z-A By Member First Name</option>
                            <option value="a-zMemberLast">A-Z By Member Last Name</option>
                            <option value="z-aMemberLast">Z-A By Member Last Name</option>
                            <option value="a-zShow">A-Z By Show Name</option>
                            <option value="z-aShow">Z-A By Show Name</option>
                        </select>
                    </div>
                    <Input type="search" placeholder="Search" name="search" onChange={(e) => { setSearchSubscription(e.target.value) }}></Input>
                </div>
                <div>{subsList}</div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps)(AllSubscriptions);