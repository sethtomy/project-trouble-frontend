import React, { Component } from "react";
import './App.css';
import Upload from "./components/Upload";

class App extends Component {
    render() {
        return(
            <div className="centerize">
                <Upload />
            </div>
        )
    }
}

export default App;