const SpeciesName = ( { speciesName, onChangeSpeciesName } ) => {
console.log(speciesName);
    return (
        <div> 
            <label htmlFor='speciesName'>Species Name:</label> 
            <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} /> 
        </div>
    )
}

export default SpeciesName;