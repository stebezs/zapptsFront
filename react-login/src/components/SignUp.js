import React, { Component } from "react";
import { GoogleLoginButton } from "react-social-login-buttons";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Novo no Invision?</h3>
                <h3>Crie uma conta.</h3>

                <div className="form-group has-info">
                    <label>Full name</label>
                    <input type="text" className="form-control" placeholder="First name"
                    data-error="Por favor, informe um e-mail correto." required />
                    <div class="help-block with-errors"></div>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" required />
              </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" required/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block" >Register</button>

                <center>Or</center>

                <GoogleLoginButton onClick={() => alert("Hello")} />

                <p className="forgot-password ">
                    Already registered <a href="#">log in?</a>
                </p>
            </form>
        );
    }
}