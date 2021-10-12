//made with redux toolkit

import React from "react"
import classes from './Counter.module.css';
import { useSelector, useDispatch } from "react-redux"
import { counterAction } from "../Store/index2"


const Counter2 = () => {

    const counter = useSelector(state => state.counter);
    const show = useSelector(state => state.showCounter);

    const dispatch = useDispatch();

    const toggleCounterHandler = () => {
        dispatch(counterAction.toggle())
    };

    const incHandler = () => {
        dispatch(counterAction.increment(5))
    }

    const decHandler = () => {
        dispatch(counterAction.decrement())
    }

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <button onClick={incHandler}>Increment 5++</button>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
            <button onClick={decHandler}>Decrement --</button>
        </main>
    );
};

export default Counter2;
