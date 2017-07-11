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
            debugger
            this.setState({
                temperatures:   data.results,
                lastTemp:       data.results[data.results.length - 1].value,
            })
        });

        ubidots.getHumidity((data) => {
            debugger
            this.setState({
                humidities:    data.results,
                lastHum:       data.results[data.results.length - 1].value,
            })
        });

        ubidots.getLight((data) => {
            debugger
            this.setState({
                lights :       data.results,
                lastLight:     data.results[data.results.length - 1].value,
            })
        });

        ubidots.getDust((data) => {
            debugger
            this.setState({
                dusts :        data.results,
                lastDust:      data.results[data.results.length - 1].value,
            })
        });

        ubidots.getRain((data) => {
            debugger
            this.setState({
                rains :        data.results,
                lastRain:      data.results[data.results.length - 1].value,
            })
        });

        ubidots.getPressure((data) => {
            debugger
            this.setState({
                pressures :   data.results,
                lastPressure:       data.results[data.results.length - 1].value,
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
                                Nhiệt độ: {this.state.lastTemp}˚C
                            </div>

                            <div className='Hum'>
                                Độ ẩm không khí: {this.state.lastHum}%            
                            </div>

                            <div className='Light'>
                                Light:       {this.state.lastLight}lux
                            </div>

                            <div className='Dust'>
                                Mật độ bụi: {this.state.lastDust}mm3
                            </div>

                            <div className='Rain'>
                                Mưa: {this.state.lastRain}            
                            </div>

                            <div className='Pressure'>
                                Áp suất khí quyển:{this.state.lastPressure}Pascal
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