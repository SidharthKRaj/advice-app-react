import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'

function App() {
  
  const [advice, setState] = useState('');

  useEffect(() => {
    fetchAdvice();
  }, [])

  const fetchAdvice = () => {
    axios.get(`https://api.adviceslip.com/advice`)
    .then((response) => {
      setState(response.data.slip)
      console.log(advice);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">
          {advice.advice}
        </h1>
        <Button variant='contained' color='primary' className='button' onClick={fetchAdvice}>
          Fetch Advice
        </Button>
      </div>
    </div>
  );
}

export default App;
