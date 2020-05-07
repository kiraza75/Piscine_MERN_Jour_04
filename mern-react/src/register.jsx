import React from "react";
import axios from 'axios';

export class Register extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            login: "",
            email: "",
            password: "",
            passwordConfirm: "",
            validRegister: false,
        }
    }

    inputChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
        console.log(this.state)
    };
    onSubmit(e) {
        e.preventDefault();

        const userObject = {
            login: this.state.login,
            email: this.state.email,
            password: this.state.password,
            passwordConfirm: this.state.passwordConfirm
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
                        <input type="text" value={this.state.login} onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" value={this.state.email} onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="text" value={this.state.password} onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="text" value={this.state.passwordConfirm} onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <button  className="btn btn-success btn-block" onClick={this.onSubmit} >Inscription</button>
                    </div>
                </form>
            </div>
        )
    }

}