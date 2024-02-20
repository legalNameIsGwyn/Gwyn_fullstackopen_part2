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

export default Course