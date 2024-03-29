import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import noteServices from './services/notes'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [people, setPeople] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState(0)
  const [sysMessage, setMessage] = useState({message: null, type: true})

  useEffect(() => {
    noteServices
      .getAll()
      .then(res => {
        updatePop(res)
      })
  },[])

  const updatePop = newPop => {
    setPeople(newPop)
    setPersons(newPop)
  }

  const addNewName = (event) => {
    event.preventDefault()
    let personFound = persons.find(p => p.name.toLowerCase() === newName.toLowerCase()) // returns object
    // console.log(personFound ? personFound : false)
    
    // person already exists
    if(personFound){
      if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
        let newP = {...personFound, number:newNum}
        
        noteServices
          .updateNum(newP)
          .then(res => {
            console.log(res)
            const newPopu = persons.map(p =>
              p.id === res.data.id 
              ? { ...p, number: res.data.number } 
              : p
            );
            
            updatePop(newPopu)
            
            // setTimeout(() => {setMessage(null)}, 5000)
          })
      }
    }
    // ADD NEW PERSON
    else {
      const newPerson = {name:newName, number:newNum}

      noteServices
        .create(newPerson)
        .then( res =>{
          console.log(res)
          updatePop(persons.concat(res))

          setMessage({message: `Added ${res.name}`, type: true})
          setTimeout(() =>setMessage(null), 5000)
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
    const userID = event.target.value
    const p = persons.find(p => p.id === userID)
    
    if(window.confirm(`Delete ${p.name}`)){
      noteServices
      .remove(userID) // value of button
      .then(res => { // returns what you delete
        const newPersons = persons.filter(p => p.id !== res.data.id)
        updatePop(newPersons)
      })
      .catch(e => {
        console.log(`Error message ${e}`)
        setMessage({message:`Information of ${p.name} has already been removed from server`, type: false})

        setTimeout(() => {setMessage(null)},5000)
      })
    } else
      console.log(`Delete cancelled.`)
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
      <Notification message={sysMessage}/>
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