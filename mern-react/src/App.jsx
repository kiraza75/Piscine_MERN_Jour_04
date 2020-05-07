import React from 'react';
import './App.css';
import {Register} from "./index.jsx";

class App extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="App">
                <header>
                    <h2>Mern J4</h2>
                </header>

               <div>
                <Register />
               </div>
            </div>
        );
    }
}

export default App;
