const Persons = ({persons, deleteHandler}) => {
    return ( 
        <div>
            {persons.map(p => 
                <span key={p.id}>
                    {p.name} {p.number} 
                    <button 
                        value={p.id}
                        onClick={deleteHandler}>
                        delete
                    </button>
                <br/></span>
            )}
        </div>
     );
}
 
export default Persons;