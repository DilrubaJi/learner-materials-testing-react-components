const Submit = ( { submit, onclickSubmit } ) => {

    return (
        <div> 
            <label for='submit'>Submit</label> 
            <input id='submit' type='submit' value={submit} onClick={onclickSubmit} /> 
        </div>
    )
}

export default Submit;