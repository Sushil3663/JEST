import React from 'react'
import { useState } from 'react';
import handlesClick from './Helper';

const User = () => {
    const [data, setData] = useState("")
    const handleClick = () => {
        setData("hello")

    };
    return (
        <div>
            <h1>Functional Component Test</h1>
            <button data-testid='btn1' onClick={handleClick}>Click</button>
            <button data-testid='btn2' onClick={handlesClick}>Clcik Now</button>

            <p>{data}</p>
        </div>
    )
}

export default User
