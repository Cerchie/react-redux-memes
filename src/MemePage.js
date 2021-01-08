import { get } from 'http';
import React from 'react'
import {useSelector, useDispatch} from 'react-redux';

const MemePage = ({meme}) => {
    const dispatch = useDispatch();
    const count = useSelector(store => store.count)
    const increment = ()=> dispatch({type: 'INCREMENT'})
    const decrement = ()=>dispatch({type: 'DECREMENT'})
 
    return (
        <div>
            <h1>MEME</h1>
            <img src={meme}></img>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default MemePage;
