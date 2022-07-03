import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { updateDashMember, deleteDashMember } from '../../../features/dashMembers/dashMembersSlice';

function MemberDetails(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        id: data._id,
        memberId: data.memberId,
        memberFirstName: data.firstName,
        memberLastName: data.lastName,
        memberUsername: data.username,
        memberEmail: data.email
    })


    const onClick = () => {
        setEdit(current => !current)
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(updateDashMember(formData));
        setEdit(current => !current)
    }

    const deleteMember = async () => {
        dispatch(deleteDashMember(formData.id));
        setEdit(current => !current)    
    }

    const cancel = () => {
        setEdit(current => !current)
    }

    useEffect(() => {
    }, [edit]);

    return (
        <div className="dashItem">
            <div className="SpaceBetween">
                <h5>{data.firstName} {data.lastName}</h5>
                <Button onClick={onClick}>Edit Member</Button>
            </div>
            <div>
                {edit === true && (
                    <div className="AddingNew">
                        <h3>Edit {data.firstName} {data.lastName} </h3>
                        <Form onSubmit={onSubmit} >
                            <div>
                                <Label>Member First Name:</Label>
                                <Input type="text" name="memberFirstName" defaultValue={data.firstName} onChange={onChange} />
                            </div>
                            <div>
                                <Label>Member Last Name:</Label>
                                <Input type="text" name="memberLastName" defaultValue={data.lastName} onChange={onChange} />
                            </div>
                            <div>
                                <Label>Member Username:</Label>
                                <Input type="text" name="memberUsername" defaultValue={data.username} onChange={onChange} />
                            </div>
                            <Button type="submit">Update Member</Button>&nbsp;&nbsp;
                            <Button onClick={deleteMember}>Delete Member</Button>&nbsp;&nbsp;
                            <Button onClick={cancel}>Cancel</Button>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MemberDetails;