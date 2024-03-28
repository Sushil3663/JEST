import React, { useState } from 'react'

const InputBox = () => {
    const [data, setData] = useState("")

    const handelChange = (e) => {
        setData(e.target.value + "test")
    }
    return (
        <div>

            <input type='text' onChange={handelChange} value={data} />


        </div>
    )
}

export default InputBox
