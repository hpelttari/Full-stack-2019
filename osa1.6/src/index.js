import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ text, value}) => (
     <div>{text}: {value}
     <br/>
     </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
        <strong> Anna palautetta </strong>
        <br/>
        <Button handleClick={() => setGood(good + 1)} text="hyvä" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutraali" />
        <Button handleClick={() => setBad(bad + 1)} text="huono" />
        <br/>
        <strong> Statistiikka </strong>
        <br/>
        <Display text = "hyvä" value = {good} />
        <Display text = "neutraal" value = {neutral} />
        <Display text = "huono" value = {bad} />
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)