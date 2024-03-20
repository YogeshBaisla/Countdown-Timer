import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
function App() {
  const [dayCounter,setDayCounter] = useState(0)
  const [hourCounter,setHourCounter] = useState(0)
  const [minCounter,setMinCounter] = useState(0)
  const [secCounter,setSecCounter] = useState(0)
  const [timer,setTimer] = useState(false)
  
  const timerCalculator = ()=>{
    let millisec = new Date(localStorage.getItem("timerdate")) - new Date();
    if(millisec >=0){
    let sec = millisec / 1000;
    let min = Math.floor(sec / 60);
    let hour = Math.floor(min / 60);
    let day = Math.floor(hour / 24);

    sec = Math.floor(sec % 60);
    min = Math.floor(min % 60);
    hour = Math.floor(hour % 24);

    setDayCounter(day);
    setHourCounter(hour);
    setMinCounter(min);
    setSecCounter(sec);}
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    setTimer(!timer)
    if(!timer){
    let value = e.target[0].value
    localStorage.setItem("timerdate",value)
    localStorage.setItem("startTime",new Date())
    timerCalculator()} 
  }
  useEffect(()=>{
    let intervalId
    if(timer){
      intervalId = setInterval(() => {
        setSecCounter(prevSecCounter => {
          if (prevSecCounter === 0) {
            timerCalculator();
          }
          return prevSecCounter >0 ? prevSecCounter - 1:0;
        });
      }, 1000);
    } else {
      clearInterval(intervalId);
      setDayCounter(0)
      setHourCounter(0)
      setMinCounter(0)
      setSecCounter(0)
    }
    return () => {
      clearInterval(intervalId);

    }
  },[timer])
  return (
    <div>
    <div className='Container'>
      <h1>Countdown <span className='heading'>Timer</span></h1>
      <form class="formClass"onSubmit={(e)=>{handleSubmit(e)}}>
      <input id="enteredDate" className='Input' type="datetime-local" required/>
      <button className='Input' type='submit'>Start Timer</button>
      </form>
      <div className='Countercontainer'>
        <div className='Counter'>
          <div>{dayCounter}</div>
          <div>Days</div></div>
        <div className='Counter'>
        <div>{hourCounter}</div>
        <div>Hours</div></div>
        <div className='Counter'>
        <div>{minCounter}</div>
        <div>Minutes</div></div>
        <div className='Counter'>
        <div>{secCounter}</div>
        <div>Seconds</div></div>
        <button className='Counter'>Stop Timer</button>
      </div>
    </div>
    </div>
  );
}

export default App;
