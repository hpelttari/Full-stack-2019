import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1> {props.course}</h1>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <p>
            {props.part} {props.excercise}
            </p>
        </div>
    )
}

const Total = (props) => {
    return(
        <div>
            <p>yhteensä {props.tot} tehtävää</p>
        </div>
    )
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = 'Reactin perusteet'
  const exercises1 = 10
  const part2 = 'Tiedonvälitys propseilla'
  const exercises2 = 7
  const part3 = 'Komponenttien tila'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
        <Content part={part1} excercise={exercises1}/>
        <Content part={part2} excercise={exercises2}/>
        <Content part={part3} excercise={exercises3}/>
      <Total tot={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))