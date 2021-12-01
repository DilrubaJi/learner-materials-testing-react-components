const FormResults = ( { speciesName, planetName, numberOfBeings, whatIs, reasonForSparing}) => {
    return(
        <div id="formResults">
            <h2>Form Output Results</h2>
            <p>Speacies Name: {speciesName}</p>
            <p>Planet Name: {planetName}</p>
            <p>Number Of Beings: {numberOfBeings}</p>
            <p>What is 2+2? {whatIs}</p>
            <p>Reason for sparing: {reasonForSparing}</p>
        </div>
    )
}

export default FormResults;