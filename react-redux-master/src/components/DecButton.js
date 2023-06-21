import React from 'react'
import { useDispatch } from 'react-redux';
import { decrement } from '../action'

const MyButton = () => {
    let dispatch = useDispatch();
    return (
        // desenha o botão e seta a action dentro de dispatch
        // <button onClick={() => dispatch(increment(1))}>Increase counter</button>
        <button onClick={() => dispatch(decrement(5))}>Increase counter</button>
    );
}

export default MyButton;
