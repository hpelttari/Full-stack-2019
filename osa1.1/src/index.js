import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
            <h1> {props.course}</h1>
        </div>
    )
}

const Part = (props) => {
    return (
        <div>
            <p>
            {props.part} {props.excercise}
            </p>
        </div>
    )
}

const Content = (props) => {
    return (
        <div>
            <Part part={props.part1} excercise={props.excercise1}/>
            <Part part={props.part2} excercise={props.excercise2}/>
            <Part part={props.part3} excercise={props.excercise3}/>
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
        <Content part1={part1} excercise1={exercises1}
                part2={part2} excercise2={exercises2}
                part3={part3} excercise3={exercises3}/>
      <Total tot={exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))