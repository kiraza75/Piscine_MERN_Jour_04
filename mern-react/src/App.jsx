import React from 'react';
import './App.css';
import {Register} from "./register";

class App extends React.component{
    constructor(props) {
        super(props);
        this.state ={
            loadReg: true
        }
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h2>Mern J4</h2>
                </header>

                if(this.state.loadReg) {
                return   <Register/>
            }
            </div>
        );
    }
}

export default App;
