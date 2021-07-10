import { useState, useEffect } from 'react'
import store from './store'
import { add, del } from './action'

function App() {
  const [n, setn] = useState(0)
  useEffect(() => {
    store.subscribe(() => {
      setn(store.getState())
    })
  })
  const add1 = () => {
    store.dispatch(add(n))
  }
  const del1 = () => {
    store.dispatch(del(n))
  }
  return (
    <div className="App">
      <button onClick={add1}>+</button>
      <button onClick={del1}>-</button>
      <div>{n}</div>
    </div>
  );
}

export default App;
