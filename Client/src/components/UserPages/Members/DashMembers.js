import { useState, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
import { Input, Label } from 'reactstrap';
import { Link } from "react-router-dom";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { getDashMembers } from '../../../features/dashMembers/dashMembersSlice';
import DashMemberDetails from './DashMemberDetails';
import AddNewMember from './AddNewMember';

function DashMembers() {
    const dispatch = useDispatch();
    const members = useSelector(state => state.dashMembers.dashMembers);
    const [add, setAdd] = useState(false);
    const [searchMember, setSearchMember] = useState("");

    const membersList = members.filter((val) => {
        if (searchMember === "") {
            return val;
        } else if (
            val.firstName.toLowerCase().includes(searchMember.toLowerCase()) ||
            val.lastName.toLowerCase().includes(searchMember.toLowerCase())) {
            return val;
        }
    }).map((member, i) => {
        return (
            <DashMemberDetails key={i} data={member} />
        );
    }).slice(0, 3)

    const onClick = () => {
        setAdd(current => !current)
    }

    const closeAdd = () => ((
        setAdd(current => !current)
    ))

    useEffect(() => {
        dispatch(getDashMembers());
    }, [members]);

    return (
        <div className="ViewContainer">
            <div className="option">
                <h4>&nbsp;<BsFillPersonLinesFill />&nbsp; Members</h4>
                <div>
                    <Link to="/AllMembers">View All Members</Link>&nbsp;&nbsp;
                    <Link to="/Dashboard" onClick={onClick} >Create New Member</Link>
                </div>
            </div>
            <div>
                {add === true && (
                    <AddNewMember closeAdd={closeAdd} />
                )}
            </div>
            <div className="Inputs">
                <Label>Total <b>{members.length}</b> Members</Label>
                <div>
                    <Label>Sort by: </Label>&nbsp;
                    <select>
                        <option value="recentlyAdded">Recently Sumbit</option>
                        <option value="leastAdded">Least Sumbits</option>
                        <option value="a-zFisrt">A-Z By Member First Name</option>
                        <option value="z-aFirst">Z-A By Member First Name</option>
                        <option value="a-zLast">A-Z By Member Last Name</option>
                        <option value="z-aLast">Z-A By Member Last Name</option>
                        <option value="a-zUser">A-Z By Member Username</option>
                        <option value="z-aUser">Z-A By Member Username</option>
                    </select>
                </div>
                <Input type="search" placeholder="Search" name="search" onChange={(e) => { setSearchMember(e.target.value) }}></Input>
            </div>
            <div>{membersList}</div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { data: state }
}

export default connect(mapStateToProps)(DashMembers);