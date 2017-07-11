import React, { Component } from 'react'
import './sass/Home.scss'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}