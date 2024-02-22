import React, { useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(0)

    const handleCount = (count) => {
        setCount(count + 1)
    }
  return (

    <div>
        <h1 data-testid='count'>Count: {count}</h1>
        <button onClick={handleCount}>increase</button>
    </div>
  )
}

export default Count