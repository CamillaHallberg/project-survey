import React from 'react'

const NameQuestion = ({ nameInput, onNameInputChange, onStepChange }) => {
  return (
    <form onSubmit={onStepChange}>
      <p>There are many different types of yoga to choose from, take this
                survey to find out which one suits <strong>YOU</strong> the best!
      </p>
      <label htmlFor="nameInput">What is your name?</label>
      <input
        id="nameInput"
        type="text"
        name="name"
        placeholder="Type name here..."
        value={nameInput}
        onChange={onNameInputChange}
        required />
      <button type="submit">Continue</button>
    </form>
  )
}

export default NameQuestion