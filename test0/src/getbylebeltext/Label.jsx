import React from 'react'

const Label = () => {
    return (
        <div>
            <label htmlFor='check'>Check</label>
            <input type='checkbox' id='check' defaultChecked={true} />


            <label htmlFor='input'>Input</label>
            <input type='text' id='input' defaultValue={"sushil"} />

            <p id='name-id'>Suhil</p>

        </div>
    )
}

export default Label
