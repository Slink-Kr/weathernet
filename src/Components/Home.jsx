import React, { Component } from 'react';
import './../sass/Home.scss'
import ubidots from './../api/ubidots.js'

export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            temperatures: [],
            lastTemp    : 0,
            humidities  : [],
            lastHum     : 0,

        }
    }

    componentDidMount() {
        ubidots.getTemperature((data) => {
            debugger
            this.setState({
                temperatures:   data.results,
                lastTemp:       data.results[data.results.length - 1].value,
            })
        });

        ubidots.getHumidity((data) => {
            debugger
            this.setState({
                humidities :   data.results,
                lastHum:       data.results[data.results.length - 1].value,
            })
        });
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
                        <div className='station'>
                            Temperature: {this.state.lastTemp}˚C
                            Humidity:    {this.state.lastHum}%
                        </div>
                    </div>
                    <div className='info-container'>
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