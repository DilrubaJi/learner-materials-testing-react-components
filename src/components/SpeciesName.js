const SpeciesName = ( { speciesName, onChangeSpeciesName } ) => {

    return (
        <div> 
            <label for='speciesName'>Species Name:</label> 
            <input id='speciesName' type='text' value={speciesName} onChange={onChangeSpeciesName} /> 
        </div>
    )
}

export default SpeciesName;