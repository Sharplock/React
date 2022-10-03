
import { useState } from 'react';
import './App.css';

function App() {
const [age, setAge] = useState('')
const [rate, setRate] = useState('')
const [rate2,setRate2] = useState('')

function Calculate(e) {
  e.preventDefault()
  const Upper = (220 - age) * 0.85
  const Lower = (220 - age) * 0.65
  setRate(Lower)
  setRate2(Upper)
}

  return (
    <div id="content">
      <h3>Heart rate limits calculator</h3>
      <form onSubmit={Calculate}>
        <div>
          <label>Age</label>
        </div>
        <div>
          <input value={age} onChange={e=> setAge(e.target.value)}/>
        </div>
        <div>
        <label>Heart rate limits</label>
        </div>
        <div>
        <output>{rate}-{rate2}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  
  );
}

export default App;
