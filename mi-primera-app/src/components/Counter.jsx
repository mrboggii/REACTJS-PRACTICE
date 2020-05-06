import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: this.props.inicial,
            isRed: false,
            movies:[{},{},{}]
        }
    }
    componentDidMount(){
        console.log('componente montado',this.props.inicial)
    }
    componentDidUpdate(){
        console.log(this.state.count)
    }
    increment = () => {
        if(this.state.count>15){
            return  this.setState({count:this.props.inicial});
        }
        this.setState({ count: this.state.count + 1, isRed: !this.state.isRed })
    }
    deleteMovie = (movie_id)=>{
        const filteredMovies =this.state.movies.filter(movie=>movie.id !== movie_id);
        this.setState({movies:filteredMovies})
    }
    render() {
        return (
            <div onClick={this.increment} 
            style={{ color: this.state.isRed ? 'red' : 'white' }}>
                {this.state.count}
            </div>
        )
    }
}