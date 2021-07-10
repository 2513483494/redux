import { useState, useEffect } from 'react'
import store from './store'
import { add, del } from './action'
import A from './pages/A'
import B from './pages/B'
import { Provider } from 'react-redux'

function App() {

  return (
    //Provider包裹根组件，内部用了react的context传递数据，store必须
    <Provider store={store}>
      <div className="App">
        <A></A>
        <B></B>
      </div>
    </Provider>

  );
}

export default App;
