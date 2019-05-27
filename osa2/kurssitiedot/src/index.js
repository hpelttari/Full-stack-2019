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
            {props.part} {props.exercise}
            </p>
        </div>
    )
}

const Content = ({ parts }) => 
    parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises}/>)

const Course = ({ course })=> {
  return (
    <div>
      <Header course = {course.name} />
        <Content parts = {course.parts}/>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack -sovelluskehitys',
    parts: [
      {
        name: 'Reactin perusteet',
        exercises: 10,
        id: 1
      },
      {
        name: 'Tiedonvälitys propseilla',
        exercises: 7,
        id: 2
      },
      {
        name: 'Komponenttien tila',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))