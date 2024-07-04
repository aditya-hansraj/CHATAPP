import React from "react";
import axios from "axios";

const AuthPage = props => {
    const onSubmit = event => {
        event.preventDefault();
        const { value } = event.target[0];
        axios.post(
            'http://localhost:3000/authenticate',
            {username: value}
        ).then(
            response => props.onAuth({...response.data, secret: value})
        ).catch(err => console.log(err));
    };

    return (
        <div className="background">
            <form onSubmit={onSubmit} action="" className="form-card">
                <div className="form-title">Welcome</div>

                <div className="form-subtitle">Set a username to get started: </div>

                <div className="auth">
                    <div className="auth-label">Username</div>
                    <input name="username" type="text" className="auth-input" />
                    <button className="auth-button" type="submit">
                        Enter
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AuthPage;