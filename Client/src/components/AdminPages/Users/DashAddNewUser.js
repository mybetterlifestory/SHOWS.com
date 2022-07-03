import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form } from 'react-bootstrap';
import { Input, Label } from 'reactstrap';
import { createDashUser } from '../../../features/dashUsers/dashUsersSlice';

function DashAddNewUser({ closeAdd }) {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        userId: 0,
        userFirstName: "",
        userLastName: "",
        userUsername: "",
        userRole: "",
        userEmail: "",
        userPassword: ""
    })

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        dispatch(createDashUser(formData));
        closeAdd()
    }

    const cancel = () => {
        closeAdd()
    }

    return (
        <div className="AddingNew" >
            <h3>Adding New User</h3>
            <Form onSubmit={onSubmit}>
                <div>
                    <Label>User ID:</Label>
                    <Input type="text" name="userId" placeholder="user ID" onChange={onChange} />
                </div>
                <div>
                    <Label>User First Name:</Label>
                    <Input type="text" name="userFirstName" placeholder="User First Name" onChange={onChange} />
                </div>
                <div>
                    <Label>User Last Name:</Label>
                    <Input type="text" name="userLastName" placeholder="User Last Name" onChange={onChange} />
                </div>
                <div>
                    <Label>User Username:</Label>
                    <Input type="text" name="userUsername" placeholder="User Username" onChange={onChange} />
                </div>
                <div>
                    <Label>User Role:</Label>
                    <Input type="select" name="userRole" onChange={onChange}>
                        <option value="">Choose A Role</option>
                        <option value="ADMIN">Admin</option>
                        <option value="USER">User</option>
                    </Input>
                </div>
                <div>
                    <Label>User Email:</Label>
                    <Input type="text" name="userEmail" placeholder="User Email" onChange={onChange} />
                </div>
                <div>
                    <Label>User Password:</Label>
                    <Input type="text" name="userPassword" placeholder="User Password" onChange={onChange} />
                </div>
                <Button type="submit">Add The User</Button>&nbsp;&nbsp;
                <Button onClick={cancel}>Cancel</Button>
            </Form>
        </div>
    );
}

export default DashAddNewUser;