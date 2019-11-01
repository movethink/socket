import React, { Component } from "react"

class Conn extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.connSocket()
    }
    connSocket = () => {
        let socket = new WebSocket("ws://localhost:9000")
        console.log(socket)
        socket.onopen = event => {
            console.log(event, "onopen")
            socket.send("hello webSocket")
        }
        socket.onmessage = function(event) {
            console.log(event.data)
        }
    }
    render() {
        return <div>Conn component</div>
    }
}

export { Conn }
