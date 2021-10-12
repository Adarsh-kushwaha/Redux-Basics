//made with redux

import React from "react"
import classes from './Counter.module.css';
import {useSelector, useDispatch} from "react-redux"

const Counter = () => {

  const counter = useSelector(state => state.counter);
  const show = useSelector(state=>state.showCounter);

  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };

  const incHandler = () =>{
    dispatch({type:"inc" , amount:5})
  }

  const decHandler = () =>{
    dispatch({type:"dec"})
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

export default Counter;
