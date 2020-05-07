import React from "react";
import axios from 'axios';

export class Register extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            login: "",
            email: "",
            pass: "",
            passConfirm: "",
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
            pass: this.state.pass,
            passConfirm: this.state.passConfirm
        };

        axios.post('http://localhost:4242/inscription', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
            console.log(error)
        });
        this.setState({ login: '', email: '', pass: '', passConfjrm: "" });
    }

    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group">
                        <label>Login</label>
                        <input type="text" id="login" onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" id="email" onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" id="pass" onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" id="passConfirm" onChange={this.inputChange} className="form-control" />
                    </div>
                    <div className="form-group">
                        <button  className="btn btn-success btn-block" onClick={this.onSubmit} >Inscription</button>
                    </div>
                </form>
            </div>
        )
    }

}