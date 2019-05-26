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

const Statistics = ({ good, bad, neutral}) => {
  if (good+bad+neutral >0) {
  return (
  <div>
  <Statistic text = "hyvä" value = {good} ending="" />
  <Statistic text = "neutraal" value = {neutral} ending=""/>
  <Statistic text = "huono" value = {bad} ending=""/>
  <Statistic text = "yhteensä" value = {good+bad+neutral} ending=""/>
  <Statistic text = "keskiarvo" value = {(good+bad+neutral)/3} ending=""/>
  <Statistic text = "positiivisia" value = {good/(good+bad+neutral)*100} ending="%"/>
  </div>
  )}
    else return (
      <div>Ei yhtään palautetta annettu</div>
    )
}

const Statistic = ({ text, value, ending }) => (
  <div><Display text = {text} value = {value} ending={ending} /></div>
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
        <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  )
}
ReactDOM.render(<App />, 
  document.getElementById('root')
)