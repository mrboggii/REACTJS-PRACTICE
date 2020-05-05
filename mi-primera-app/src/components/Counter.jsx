import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isRed: false
        }
    }
    componentDidMount(){
            this.setState({count:this.props.inicial});
    }
    // componentDidUpdate(){
    //     console.log(this.state.count)
    // }
    increment = () => {
        if(this.state.count>15){
            return this.componentDidMount();
        }
        this.setState({ count: this.state.count + 1, isRed: !this.state.isRed })
    }
    render() {
        return (
            <div onClick={this.increment} style={{ color: this.state.isRed ? 'red' : 'white' }}>
                {this.state.count}
            </div>
        )
    }
}