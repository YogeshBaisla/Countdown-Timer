import logo from './logo.svg';
import './App.css';

function App() {
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("submitted")
  }
  return (
    <form onSubmit={(e)=>{handleSubmit(e)}}>
    <div className='Container'>
      <h1>Countdown <span className='heading'>Timer</span></h1>
      <input type="datetime-local" required/>
      <button type='submit'>Start Timer</button>
      <div className='Countercontainer'>
        <div className='Counter'>Days</div>
        <div className='Counter'>Hours</div>
        <div className='Counter'>Minutes</div>
        <div className='Counter'>Seconds</div>
      </div>
    </div>
    </form>
  );
}

export default App;
