import React from 'react'

const NameQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
    return (
        <form onSubmit={onStepChange}>
            <label htmlFor="nameInput">What's your name?</label>
            <input 
                id="nameInput"
                type="text"
                placeholder="Type name here..."
                value={nameInput}
                onChange={onNameInputChange}
                required
            />
            <button type="submit">Let's find your style of yoga!</button>
        </form>
    )
}

export default NameQuestion 