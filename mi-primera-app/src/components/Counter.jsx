import React from 'react';
export default class Contador extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        contador : this.props.inicial
      }
    }
    incrementar = () => {
      this.setState({
        contador: this.state.contador + this.props.mas
      })
    }
    decrementar = () => {
      this.setState({
        contador: this.state.contador - this.props.menos
      })
    }
    render(){
        return(
            <div>
            <h2>{this.state.contador}</h2>
            <button onClick={this.incrementar}>Incrementar</button>
            <button onClick={this.decrementar}>Decrementar</button>
            </div>
        )
    }
}