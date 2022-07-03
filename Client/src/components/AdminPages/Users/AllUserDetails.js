import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { updateDashUser, deleteDashUser } from '../../../features/dashUsers/dashUsersSlice';

function DashUserDetails(props) {
    const { data } = props;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(false);

    const [formData, setFormData] = useState({
        id: data._id,
        userId: data.userId,
        userFirstName: data.firstName,
        userLastName: data.lastName,
        userUsername: data.username,
        userRole: data.role,
        userEmail: data.email
    });

    const onClick = () => {
        setEdit(current => !current);
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(updateDashUser(formData));
        setEdit(current => !current);
    }

    const deleteUser = async () => {
        dispatch(deleteDashUser(formData.id));
        setEdit(current => !current);
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
                <Button onClick={onClick}>Edit User</Button>
            </div>
            <div>
                {edit === true && (
                    <div className="AddingNew">
                        <h3>Edit {data.firstName} {data.lastName} </h3>
                        <Form onSubmit={onSubmit} >
                            <div>
                                <Label>User First Name:</Label>
                                <Input type="text" name="userFirstName" defaultValue={data.firstName} onChange={onChange} />
                            </div>
                            <div>
                                <Label>User Last Name:</Label>
                                <Input type="text" name="userLastName" defaultValue={data.lastName} onChange={onChange} />
                            </div>
                            <div>
                                <Label>User Username:</Label>
                                <Input type="text" name="userUsername" defaultValue={data.username} onChange={onChange} />
                            </div>
                            <Button type="submit">Update User</Button>&nbsp;&nbsp;
                            <Button onClick={deleteUser}>Delete User</Button>&nbsp;&nbsp;
                            <Button onClick={cancel}>Cancel</Button>
                        </Form>
                    </div>
                )}
            </div>
        </div>
    );
}

export default DashUserDetails;