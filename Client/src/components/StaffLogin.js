import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Input } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {userInfo} from '../features/profile/userSlice';

function StaffLogin() {
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    let history = useHistory();
    const dispatch = useDispatch();

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        let user = formData;
        dispatch(userInfo(user));   
        history.push('/Dashboard');
    }

    return (
        <div className="Main">
            <div className="Login">
                <Form className="login-form" onSubmit={onSubmit}>
                    <h2><b>Hey You!</b></h2><br />
                    <Input type="text" name='username' placeholder="Enter Username" onChange={onChange} /><br />
                    <Input type="password" name='password' placeholder="Enter Password" onChange={onChange} /><br /><br />
                    <div className="text-center">
                        <Button type="submit">Login</Button><br /><br />
                        <a href="/">Forget Password</a>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default StaffLogin;