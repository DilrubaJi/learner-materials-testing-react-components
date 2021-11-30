const NumberOfBeings = ( { numberOfBeings, onChangeNumberOfBeings } ) => {

    return (
        <div> 
            <label for='numberOfBeings'>Number of beings:</label> 
            <input id='numberOfBeings' type='text' value={numberOfBeings} onChange={onChangeNumberOfBeings} /> 
        </div>
    )
}

export default NumberOfBeings;