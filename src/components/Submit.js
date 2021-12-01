const Submit = ( { submit, onclickSubmit, showResults } ) => {
    
    // const showResults = false;
    console.log(showResults);
    return (
        <div> 
            <label for='submit'>Submit</label> 
            <input id='submit' type='submit' value={submit} onClick={onclickSubmit} />
        </div>
    )
}

export default Submit;