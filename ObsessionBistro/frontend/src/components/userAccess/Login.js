import React from 'react';
import "./LoginForms.css"

function Login({title}) {
    return (
        <div className="container">
            <div className="login-form">
                <div className="form-header">
                    <h3>{title}</h3>
                </div>
                <div className="form-footer">
                    <div className="login">
                        <div className="box-input">
                            <input type="email" className="input-login" name="email" placeholder="Email"/>
                                <i className="ion-ios-email"></i>
                        </div>
                        <div className="box-input">
                            <input type="password" className="input-login" name="password" placeholder="Password"/>
                                <i className="ion-android-lock"></i>
                        </div>
                        <button type="submit" className="btn">{title}</button>
                        {title ==="Login" && <p>Register</p>}
                    </div>
                </div>
            </div>


        </div>
    );
}

export default Login;