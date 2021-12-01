const ReasonForSparing = ( { reasonForSparing, onChangeReasonForSparing } ) => {

    return (
        <div> 
            <label htmlFor='reasonForSparing'>Reason for sparing: </label> 
            <textarea id='reasonForSparing' value={reasonForSparing} onChange={onChangeReasonForSparing} /> 
        </div>
    )
}

export default ReasonForSparing;