const Submit = ( { submit, onclickSubmit, showResults } ) => {
    
    return (
        <div> 
            <label htmlFor={submit}>Submit</label> 
            <input id={submit} type={submit} value={submit} onClick={onclickSubmit} />
        </div>
    )
}

export default Submit;