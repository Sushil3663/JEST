import React, { useState } from 'react';


const Count = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count/</button>

            <p>{count}  </p>
        </div>
    )
}

export default Count
