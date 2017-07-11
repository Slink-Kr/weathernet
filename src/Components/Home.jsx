import React, { Component } from 'react';
import './../sass/Home.scss'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className='home'>
                <div className='header'>
                    <h1 className='title'>Home</h1>
                </div>
                <div className='body'>
                    <div className='about'>
                        about
                    </div>
                    <div className='station-container'>
                        station-container
                        <div className='station'>
                            station
                        </div>
                    </div>
                    <div className='info-container'>
                        Info-container
                        <div className='info'>
                            Info
                        </div>
                        <div className='info'>
                            Info
                        </div>
                        <div className='info'>
                            Info
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}