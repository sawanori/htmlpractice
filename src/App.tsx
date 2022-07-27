import React from 'react'
import style from './App.module.scss';
import { Test } from './component/test';

const App = () => {
  return (
    <div className={style.App}>
      App
      <Test />
      <h1>test</h1>
    </div>
  )
}

export default App