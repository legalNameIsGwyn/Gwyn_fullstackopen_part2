import { useState } from 'react'

import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [people, setPeople] = useState(persons)
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState(0)

  const addNewName = (event) => {
    event.preventDefault()
    let personExists = persons.find(p => p.name.toLowerCase() === newName.toLowerCase()) // returns object
    // console.log(personExists ? personExists : false)

    if(personExists)
      window.alert(`${newName} is already added to phonebook`)
    else {
      const pTemp = [...persons,{name:newName, number:newNum}]
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