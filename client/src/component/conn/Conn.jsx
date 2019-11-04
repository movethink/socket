import React, { Component } from "react"
import { Form, Button, Input,Icon } from "antd"
import "./Conn.css"

const { TextArea } = Input

class ConnForm extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    componentDidMount() {
        this.connSocket()
    }
    connSocket = () => {
        let socket = new WebSocket("ws://localhost:9000")
        socket.onopen = event => {
            socket.send("hello webSocket")
        }
        socket.onmessage = function(event) {
            console.log(event.data)
        }
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log("Received values of form: ", values)
            }
        })
    }
    render() {
        const {getFieldDecorator} = this.props.form
        return (
            <div className="input-form">
                <Form onSubmit={this.handleSubmit} className="form">
                    <Form.Item>
                        {getFieldDecorator("username", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ],
                        })(
                            <Input
                                prefix={
                                    <Icon
                                        type="user"
                                        style={{ color: "rgba(0,0,0,.25)" }}
                                    />
                                }
                                placeholder="Username"
                            />
                        )}
                    </Form.Item>
                    <Form.Item>
                    {getFieldDecorator("username", {
                            rules: [
                                {
                                    required: true,
                                    message: "Please input your username!",
                                },
                            ],
                        })(
                            <TextArea row={4} placeholder="discription"></TextArea>
                        )}
                        
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className="show-box">
                    <TextArea row={8}></TextArea>
                </div>
            </div>
        )
    }
}

const Conn = Form.create({ name: 'conn' })(ConnForm);

export { Conn }
