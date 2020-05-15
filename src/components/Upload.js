import React, { Component } from 'react';
import axios from 'axios'

import trouble from '../res/trouble.jpg';

class Upload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: trouble,
            isLoaded: true,
            error: null,
            items: [
                {
                    "German shepherd, German shepherd dog, German police dog, alsatian": 0.30196078431372547
                },
                {
                    "bucket, pail": 0.15294117647058825
                },
                {
                    "tub, vat": 0.10980392156862745
                },
                {
                    "malinois": 0.09411764705882353
                },
                {
                    "ashcan, trash can, garbage can, wastebin, ash bin, ash-bin, ashbin, dustbin, trash barrel, trash bin": 0.047058823529411764
                }
            ],
        };
        this.handleChange = this.handleChange.bind(this);
        this.classify = this.classify.bind(this);
    }

    classify(formData) {
        console.log('Fetching classification.');
        console.log(formData);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            }
        }
        axios.post('http://192.168.50.117:5000/predict', formData, config)
            .then(res => {
                console.log('Success fetching classification.')
                console.log(res.data)
                this.setState({
                    isLoaded: true,
                    items: res.data,
                });  
            },
            error => {
                console.log('Error fetching classification.')
                console.log(error.status + ': ' + error.message)
                this.setState({
                    isLoaded: true,
                    error: error
                })
            })
    }

    handleChange(event) {
        const formData = new FormData();
        formData.append('image', event.target.files[0]);
        this.setState({
            file: URL.createObjectURL(event.target.files[0]),
            isLoaded: false
        });
        this.classify(formData);
    }

    render() {
        const { error, isLoaded, items } = this.state;
        let classesDisplay;
        if(error) {
            classesDisplay = <div>Error: {error.message}</div>;
        } else if(!isLoaded) {
            classesDisplay = <div>Loading...</div>;
        } else {
            classesDisplay = 
                items.map(item => (<li key={Object.keys(item)[0]}>
                    {Object.keys(item)[0]} {Object.values(item)[0]}
                </li>))
        }
        return(
            <div>
                <img 
                    alt='Heckin Good Woofr'
                    src={this.state.file}
                    style={{width: 300, height: 300}}
                />
                <input type='file' onChange={this.handleChange} />
                {classesDisplay}
            </div>
        )
    }
}

export default Upload;