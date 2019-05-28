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
        <Total parts = {course.parts} />
    </div>
  )
}

const Courses = ({ courses }) => 
  courses.map(course => <Course key={course.id} course = {course}/>)

const Total = ({ parts }) => {
  return (
    <div>yhteensä {parts.map(part => part.exercises).reduce( (s, p) => s + p )} tehtävää</div>
  )
}


const App = () => {
  const courses = [
    {
      name: 'Half Stack -sovelluskehitys',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewaret',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
    <div>
      <h1>Opetusohjelma</h1>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))