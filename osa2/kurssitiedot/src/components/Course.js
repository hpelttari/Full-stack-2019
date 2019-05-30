import React from 'react'

const Course = ({ course })=> {
    return (
      <div>
        <Header course = {course.name} />
          <Content parts = {course.parts}/>
          <Total parts = {course.parts} />
      </div>
    )
  }

const Header = (props) => {
    return (
        <div>
            <h1> {props.course}</h1>
        </div>
    )
}

const Content = ({ parts }) => 
    parts.map(part => <Part key={part.id} part={part.name} exercise={part.exercises}/>)

const Part = (props) => {
    return (
        <div>
            <p>
            {props.part} {props.exercise}
            </p>
        </div>
    )
}


const Total = ({ parts }) => {
    return (
      <div>yhteensä {parts.map(part => part.exercises).reduce( (s, p) => s + p )} tehtävää</div>
    )
}

export default Course
