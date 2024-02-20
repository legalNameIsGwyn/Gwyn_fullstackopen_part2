import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNum, setNewNum] = useState(0)

  const addNewName = (event) => {
    event.preventDefault()
    let personExists = persons.find(p => p.name === newName) // returns object
    // console.log(personExists ? personExists : false)

    if(personExists)
      window.alert(`${newName} is already added to phonebook`)
    else {
      const pTemp = [...persons]
      setPersons(pTemp.concat({name:newName, number:newNum}))
    }
  }

  const handleNameChage = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNum = (event) => setNewNum(event.target.value)

  return (
    <div>
      <h2>Phonebook</h2>
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