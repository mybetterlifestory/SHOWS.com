import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { createDashMember } from '../../../features/dashMembers/dashMembersSlice';

function AddNewMember({ closeAdd }) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        memberId: "",
        memberFirstName: "",
        memberLastName: "",
        memberUsername: "",
        memberEmail: "",
        memberPassword: ""
    })

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(createDashMember(formData));
        closeAdd()
    }

    const cancel = () => {
        closeAdd()
    }

    return (
        <div className="AddingNew" >
            <h3>Adding New Member</h3>
            <Form onSubmit={onSubmit}>
                <div>
                    <Label>Member ID:</Label>
                    <Input type="text" name="memberId" placeholder="Member ID" onChange={onChange} />
                </div>
                <div>
                    <Label>Member First Name:</Label>
                    <Input type="text" name="memberFirstName" placeholder="Member First Name" onChange={onChange} />
                </div>
                <div>
                    <Label>Member Last Name:</Label>
                    <Input type="text" name="memberLastName" placeholder="Member Last Name" onChange={onChange} />
                </div>
                <div>
                    <Label>Member Username:</Label>
                    <Input type="text" name="memberUsername" placeholder="Member Username" onChange={onChange} />
                </div>
                <div>
                    <Label>Member Email:</Label>
                    <Input type="text" name="memberEmail" placeholder="Member Email" onChange={onChange} />
                </div>
                <div>
                    <Label>Member Password:</Label>
                    <Input type="text" name="memberPassword" placeholder="Member Password" onChange={onChange} />
                </div>
                <Button type="submit">Add The Member</Button>&nbsp;&nbsp;
                <Button onClick={cancel}>Cancel</Button>
            </Form>
        </div>
    );
}

export default AddNewMember;