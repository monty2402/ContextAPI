import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import { useContext } from 'react';
import counterContext from './Context/CounterContext'

function App(){
  const counterState = useContext(counterContext)

  return(
    <div>
      <h1>count = {counterState.count} </h1>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  )
}

export default App;
