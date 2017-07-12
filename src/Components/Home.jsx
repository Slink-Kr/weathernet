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
            lights      : [],
            lastLight   : 0,
            dusts        : [],
            lastDust    : 0,
            rains        : [],
            lastRain    : 0,
            pressures    : [],
            lastPressure: 0,

        }
    }

    componentDidMount() {
        ubidots.getTemperature((data) => {
            this.setState({
                temperatures:   data.results,
                lastTemp:       data.results[data.results.length - 1].value,
            })
        });

        ubidots.getHumidity((data) => {
            this.setState({
                humidities:   data.results,
                lastHum:       data.results[data.results.length - 1].value,
            })
        });

        ubidots.getLight((data) => {
            this.setState({
                lights :   data.results,
                lastLight:       data.results[data.results.length - 1].value,
            })
        });


    }

    render() {
        return (
            <div className='home'>
                <div className='header'>
                    <h1 className='Weahthernet HCMC'>Weahthernet HCMC {"\n"} Mạng lưới trạm quan trắc thời tiết thành phố Hồ Chí Minh</h1>
                </div>
                <div className='body'>
                    <div className='about'>
                        about
                    </div>
                    <div className='station-container'>
                        <div className='station-Corona'>
                            <div className='Temp'>
                                Nhiệt độ: {this.state.lastTemp || 'loading...'} ˚C
                            </div>
                            <div className='Hum'>
                                Độ ẩm không khí: {this.state.lastHum || 'loading...'} %            
                            </div>
                            <div className='Light'>
                                Light:       {this.state.lastLight || 'loading...'} lux
                            </div>
                          
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