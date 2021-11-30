const ReasonForSparing = ( { reasonForSparing, onChangeReasonForSparing } ) => {

    return (
        <div> 
            <label for='reasonForSparing'>Number of beings:</label> 
            <textarea id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing} /> 
        </div>
    )
}

export default ReasonForSparing;