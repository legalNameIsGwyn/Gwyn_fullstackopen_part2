const Persons = ({persons}) => {
    return ( 
        <div>
            {persons.map(p => 
                <span key={p.id}>
                    {p.name} {p.number}
                <br/></span>
            )}
        </div>
     );
}
 
export default Persons;