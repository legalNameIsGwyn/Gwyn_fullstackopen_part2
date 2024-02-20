import { useState } from 'react'

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

  const handleNameChage = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => setNewNum(event.target.value)

  const handleFilter = (event) =>{
    let input = event.target.value
    setFilter(input)

    if(input !== ''){
      console.log(input)
      let pTemp = [...people]
      let newPersons = pTemp.filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      setPersons(newPersons)
    } else
      setPersons(people)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input
        value={filter}
        onChange={handleFilter}>
        </input>
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input 
          value={newName} 
          onChange={handleNameChage}/>
        </div>
        <div>
          number: <input 
          value={newNum}
          onChange={handleNewNum}/>
        </div>
        <div>
          <button 
          type="submit"
          onClick={addNewName}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(p => 
          <span key={p.name}>
            {p.name} {p.number}
          <br/></span>
        )}
      </div>
    </div>
  )
}

export default App