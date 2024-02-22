import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [people, setPeople] = useState(persons)
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState(0)
  const url = `http://localhost:3002/persons`

  useEffect(() => {
    axios
      .get(url)
      .then(response => {
        setPeople(response.data)
        setPersons(response.data)
      })
  },[])

  const addNewName = (event) => {
    event.preventDefault()
    let personExists = persons.find(p => p.name.toLowerCase() === newName.toLowerCase()) // returns object
    // console.log(personExists ? personExists : false)

    if(personExists)
      window.alert(`${newName} is already added to phonebook`)
    else {
      const newPerson = {name:newName, number:newNum}
      const pTemp = persons.concat(newPerson)

      axios
        .post(url, newPerson)

      setPersons(pTemp)
      setPeople(pTemp)
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
      let pTemp = [...people]
      let newPersons = pTemp.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      console.log(newPersons)
      setPersons(newPersons)
    } else
      setPersons(people)
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
        persons={persons}/>

    </div>
  )
}

export default App