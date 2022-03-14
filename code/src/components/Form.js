import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')

    return (
        <form>
            <h1 className="user-name">What's your name?</h1>
            <input
            type="text"
            onChange={event => setName(event.target.value)}
            value={name}
            />
        </form>
    )
}

export default Form