
import './App.css';
import {useState} from 'react';
function App() {

  const [count,changeCount] = useState(100) // hook which takes array such as it will
  // hold the state

  const gainCount = () => {
    changeCount(count+1);
  }
  const decreaseCount = () => {
    changeCount(count-1);
  }
    
  
  return (

    <div className="App"> 
        <h1>{count}</h1>
        <button onClick={gainCount}>Change count</button>
        <button onClick={decreaseCount}>Decrease it!!</button>
    </div>
  );
}

export default App;
