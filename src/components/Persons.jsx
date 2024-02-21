const Persons = ({persons}) => {
    return ( 
        <div>
            {persons.map(p => 
                <span key={p.name}>
                    {p.name} {p.number}
                <br/></span>
            )}
        </div>
     );
}
 
export default Persons;