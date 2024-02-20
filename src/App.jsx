const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return <Course course={courses} />
}

const Course = ({course}) => {

  return (
    <>
      {course.map(crs => 
          <div key={crs.id}>
            <Header name={crs.name} myKey={crs.id}/>
            <Content parts={crs.parts} myKey={crs.id}/>
            <Total parts={crs.parts} myKey={crs.id}/>
          </div>
        )}
    </> 
  );
}

const Header = ({name, myKey}) => <h2 key={myKey}> {name} </h2>  

const Content = ({parts, myKey}) => {
  return(
    <div key={myKey}>
      {parts.map(part => <Part part={part} key={part.id}/>)}
    </div>
  )
}

const Part = ({part, myKey}) => <p key={myKey}>{part.name} {part.exercises}</p>

const Total = ({parts, myKey}) => {
  // const exec = parts.map(a => a.exercises) // get exercises
  // const sum = exec.reduce((a,b) => a + b) // sum with reduce
  const sum2 = parts.reduce((a, b) => a + b.exercises,0) // initial val req

  return(
    <b key={myKey}>total of {sum2} exercises</b>
  )
}
 


 
export default App