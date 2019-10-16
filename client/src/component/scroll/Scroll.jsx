import React from "react"
import "./Scroll.css"

class Scroll extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
        }
        this.list = []
        this.baseH = 40
    }

    componentDidMount() {
        console.log(this.boxEle, "this.boxEle")
        let data = this.creatListData(100)
        this.setState({
            data,
        })
    }

    creatListData = num => {
        let list = []
        for (let i = 0; i < num; i++) {
            list.push(i)
        }
        return list
    }

    onScroll = (e) => {
        console.log("scrolled")
        this.setState({})
    }

    setHeight = () => {
        const { data } = this.state
        let topHeight = 0
        let middleHeight = 0
        let bottomHeight = 0
        let height = this.boxEle.offsetHeight
        let startIndex = Math.floor(this.boxEle.scrollTop / this.baseH)
        let viewDataLen = Math.ceil(height / this.baseH) + 1

        let end = false
        if (startIndex + viewDataLen >= data.length) {
            viewDataLen -= 1
            end = true
        }

        this.list = data.slice(startIndex, startIndex + viewDataLen)

        const totalHeight = data.length * this.baseH
        topHeight = startIndex * this.baseH
        middleHeight = height + (end ? 0 : this.baseH)
        bottomHeight = totalHeight - topHeight - middleHeight

        return {
            topHeight,
            middleHeight,
            bottomHeight,
        }
    }

    setRef = node => {
        if (!this.boxEle) {
            this.boxEle = node
            this.setState({})
        }
    }

    renderChild = () => {
        if (!this.boxEle) {
            return null
        }
        const { topHeight, middleHeight, bottomHeight } = this.setHeight()
        return [
            <div className="top" key="top" style={{ height: `${topHeight}px` }}></div>,
            <div className="middle" key="middle" style={{ height: `${middleHeight}px` }}>
                {this.list.map((item, index) => {
                    let bgColor = "#fff"
                    if (index % 2 === 0) {
                        bgColor = "#ccc"
                    }
                    return (
                        <div
                            key={index}
                            style={{ height: this.baseH + "px",backgroundColor: bgColor, }}
                        >
                            {item} -> age
                        </div>
                    )
                })}
            </div>,
            <div
                className="bottom"
                style={{ height: `${bottomHeight}px` }}
                key="bottom"
            ></div>,
        ]
    }

    render() {
        console.log(123)

        return (
            <div
                ref={this.setRef}
                className="box"
                onScroll={this.onScroll}
            >
            {
                this.renderChild()
            }
            </div>
        )
    }
}

export { Scroll }
