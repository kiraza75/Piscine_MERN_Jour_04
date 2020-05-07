import React from "react";
import axios from 'axios';

export class Register extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeUserLogin = this.onChangeUserLogin.bind(this);
        this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
        this.onChangeUserLogin = this.onChangeUserPassword.bind(this);
        this.onChangeUserLogin = this.onChangeUserPasswordConfirm.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            login: "",
            email: "",
            password: "",
            passwordConfirm: "",
            validRegister: false,
        }
    }

    onChangeUserLogin(e) {
        this.setState({ login: e.target.value })
    }

    onChangeUserEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangeUserPassword(e) {
        this.setState( { password: e.target.value})
    }

    onChangeUserPasswordConfirm(e) {
        this.setState({passwordConfirm: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault();

        const userObject = {
            login: this.state.login,
            email: this.state.email,
            password: this.state.password
        };

        axios.post('http://localhost:4242/inscription', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });

        this.setState({ login: '', email: '', password: '', passwordConfirm: '' })
    }

    render() {
        return (
            <div className="wrapper">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" value={this.state.login} onChange={this.onChangeUserLogin} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.onChangeUserEmail} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" value={this.state.password} onChange={this.onChangeUserPassword} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="text" value={this.state.passwordConfirm} onChange={this.onChangeUserPasswordConfirm} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>
                </form>
            </div>
        )
    }

}