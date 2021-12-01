const WhatIs = ( { whatIs, onChangeWhatIs } ) => {

    return (
        <div> 
            <label htmlFor='whatIs'>What is 2+2?</label> 
            <select id='whatIs' value={whatIs} onChange={onChangeWhatIs} >
                <option value="4">4</option> 
                <option value="Not 4">Not 4</option>
            </select>
        </div>
    )
}

export default WhatIs;