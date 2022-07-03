import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Input } from 'reactstrap';

function Registration() {
    return (
        <div className="Main">
            <div className="Register">
                <Form className="login-form">
                    <h2>Register to <b>SHOWS.com</b></h2><br />
                    <Input type="text" placeholder="Enter First Name" /><br />
                    <Input type="text" placeholder="Enter Last Name" /><br />
                    <Input type="text" placeholder="Enter Username" /><br />
                    <Input type="text" placeholder="Enter Email" /><br />
                    <Input type="password" placeholder="Enter Password" /><br />
                    <Input type="password" placeholder="Re-enter Password" /><br />
                    <div >
                        <p>By creating an account you agree to our <a href="/">Terms & Privacy</a>.</p>
                        <div>
                            <Button >Register</Button>
                        </div><br />
                        <b>Already have an account?</b> <a href="/login">Sing in</a>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Registration;