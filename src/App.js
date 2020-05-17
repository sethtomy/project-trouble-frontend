import React, { Component } from 'react';
import './App.css';
import Upload from './components/Upload';
import BorderLinearProgress from './components/ProgressBar';

class App extends Component {
    render() {
        return(
            <div className="centerize">
                <BorderLinearProgress 
                    variant='determinate'
                    value={56}
                    />
                <Upload />
            </div>
        )
    }
}

export default App;