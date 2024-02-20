const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }

  return <Course course={course} />
}

const Course = ({course}) => {
  const name = course.name
  const parts = course.parts

  return (
    <>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts}/>
    </> 
  );
}

const Header = ({name}) => <h1> {name} </h1>  

const Content = ({parts}) => {
  return(
    <>
      {parts.map(part => <Part part={part} key={part.id}/>)}
    </>
  )
}

const Part = ({part, myKey}) => <p key={myKey}>{part.name} {part.exercises}</p>

const Total = ({parts}) => {
  // const exec = parts.map(a => a.exercises) // get exercises
  // const sum = exec.reduce((a,b) => a + b) // sum with reduce
  const sum2 = parts.reduce((a, b) => a + b.exercises,0) // initial val req

  return(
    <b>total of {sum2} exercises</b>
  )
}
 


 
export default App