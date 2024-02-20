import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addNewName = (event) => {
    event.preventDefault()
    const pTemp = [...persons]
    setPersons(pTemp.concat({name:newName}))
  }

  const handleNameChage = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
   
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
          <li key={p.name}>
            {p.name}
          </li>
        )}
      </div>
    </div>
  )
}

export default App