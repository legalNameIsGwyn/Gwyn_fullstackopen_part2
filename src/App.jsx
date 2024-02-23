import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteServices from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([])
  const [people, setPeople] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState(0)

  useEffect(() => {
    noteServices
      .getAll()
      .then(res => {
        setPersons(res)
        setPeople(res)
      })
  },[])

  const addNewName = (event) => {
    event.preventDefault()
    let personNotExists = persons.find(p => p.name.toLowerCase() === newName.toLowerCase()) // returns object
    // console.log(personExists ? personExists : false)

    if(personNotExists)
      window.alert(`${newName} is already added to phonebook`)
    else {
      const newPerson = {name:newName, number:newNum}

      noteServices
        .create(newPerson)
        .then( res =>{
          console.log(res)
          setPersons(persons.concat(res))
          setPeople(people.concat(res))
        })
    }
  }

  const handleNameChange = (event) => 
    setNewName(event.target.value)

  const handleNewNum = (event) => 
    setNewNum(event.target.value)

  const handleFilter = (event) =>{
    let input = event.target.value
    setFilter(input)

    if(input !== ''){
      let pTemp = [...persons]
      let newPersons = pTemp.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      setPersons(newPersons)
    } else
      setPersons(people)
  }

  const deleteHandler = (event) => {
    noteServices
      .remove(event.target.value) // value of button
      .then(res => { // returns what you delete
        const newPersons = persons.filter(p => p.id !== res.data.id)
        setPersons(newPersons)
        setPeople(newPersons)
      })
  }

  let indiv = {
    name: newName,
    num: newNum
  }

  let indivHandler ={
    nameChange: handleNameChange,
    numChange: handleNewNum,
    addIndiv: addNewName
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
        filter={filter} 
        handleFilter={handleFilter}/>

      <h2>add a new</h2>

      <PersonForm 
        indiv={indiv} 
        handlers={indivHandler}/>

      <h2>Numbers</h2>

      <Persons 
        persons={persons}
        deleteHandler={deleteHandler}/>

    </div>
  )
}

export default App