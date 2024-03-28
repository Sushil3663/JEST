import React, { useState } from 'react'

const Button = () => {
    const [data, setData] = useState("")

    const handleClick = (e) => {
        setData("Button Clicked")

    }
    return (
        <div>
            <h1>Button Event </h1>
            <button onClick={handleClick}>Change</button>
            {
                data
            }

        </div>
    )
}

export default Button
