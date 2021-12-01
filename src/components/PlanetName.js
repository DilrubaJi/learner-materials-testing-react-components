const PlanetName = ( { planetName, onChangePlanetName } ) => {

    return (
        <div> 
            <label htmlFor='planetName'>Planet Name:</label> 
            <input id='planetName' type='text' value={planetName} onChange={onChangePlanetName} /> 
        </div>
    )
}

export default PlanetName;