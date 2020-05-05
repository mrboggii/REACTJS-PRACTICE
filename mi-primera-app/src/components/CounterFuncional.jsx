import React, { useState } from 'react';
const Counter = props => {
    const [state, setState] = useState({
        count: props.inicial,
        isRed: false
    })
    const increment = () => {
        setState({ count: state.count + 1, isRed: !state.isRed })
    }
    return (
        <div onClick={increment} style={{ color: state.isRed ? 'red' : 'white' }}>
            {state.count}
        </div>
    )
}
export default Counter;