import './style.css'
import axios from 'axios';
import {useState, useEffect} from 'react'
 
export default function MyApp(){
  const [count, setCount] = useState('');
  useEffect(() => fetchCount())

  const fetchCount = () => {
    axios
      .get("http://counter-backend-llqx.onrender.com/api/count") // Replace this with the actual API endpoint to get students
      .then((response) => {
        // Filter students with null 'class' field
         const count = response.data
        setCount(count);
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const decrement = () => {
    axios.get("http://counter-backend-llqx.onrender.com/api/count/decrease")
    .then((response) => {
      console.log(response);
      const count = response.data
      setCount(count);
    })
    .catch((error) => {
      console.error(error);
    })
  }

  const increment = () => {
    axios.get("http://counter-backend-llqx.onrender.com/api/count/increase")
    .then((response) => {
      console.log(response);
      const count = response.data
      setCount(count);
    })
    .catch((error) => {
      console.error(error);
    })
  }
  const reset = () => {
    axios.get("http://counter-backend-llqx.onrender.com/api/count/reset")
    .then((response) => {
      console.log(response);
      const count = response.data
      setCount(count);
    })
    .catch((error) => {
      console.error(error);
    })
  }
    return (
        <div class = "top">
            
        <h1> Number of Hours Left</h1>
        <div class="number">{count.hoursremaining }</div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset}>RESET</button>

        </div>
    )
}