const PersonForm = ({indiv, handlers}) => {
    return ( 
        <form>
        <div>
          name: <input 
          value={indiv.name} 
          onChange={handlers.nameChange}/>
        </div>
        <div>
          number: <input 
          value={indiv.num}
          onChange={handlers.numChange}/>
        </div>
        <div>
          <button 
          type="submit"
          onClick={handlers.addIndiv}>
            add
          </button>
        </div>
      </form>
     );
}
 
export default PersonForm;