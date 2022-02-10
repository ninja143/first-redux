
import './App.css';
import React, {useEffect, useState} from 'react';

function App(props) {
  useEffect(()=>{
    console.log('useEffect called on number state : ', props.count)
  }, [props.count, props.number]);
  
  return (
    <div className="App">
      <div>Count Props : {props.count}</div>
      <div>Data Props: {props.number}</div>
    </div>
  );
}

export default App;
