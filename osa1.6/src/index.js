import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = ({ text, value , ending}) => (
     <div>{text}: {value} {ending}
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
  const [average, setAverage] = useState(0)

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
        <Display text = "hyvä" value = {good} ending="" />
        <Display text = "neutraal" value = {neutral} ending=""/>
        <Display text = "huono" value = {bad} ending=""/>
        <Display text = "yhteensä" value = {good+bad+neutral} ending=""/>
        <Display text = "keskiarvo" value = {(good+bad+neutral)/3} ending=""/>
        <Display text = "positiivisia" value = {good/(good+bad+neutral)*100} ending="%"/>
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)