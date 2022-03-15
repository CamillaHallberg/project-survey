import React from 'react'

const AgeQuestion = ({ ageInput, onAgeInputChange, onStepChange }) => {
  return (
    <form onSubmit={onStepChange}>
      <fieldset>
        <legend>
          <strong>What age are you?</strong>
        </legend>
        <label htmlFor="15-25">
          <input
            type="radio"
            id="15-25"
            value="15-25"
            name="age"
            required
            onChange={onAgeInputChange}
            checked={ageInput === '15-25'} />
                    15-25 yrs
        </label>
        <label htmlFor="26-45">
          <input
            type="radio"
            id="26-45"
            value="26-45"
            name="age"
            onChange={onAgeInputChange}
            checked={ageInput === '26-45'} />
                    26-45 yrs
        </label>
        <label htmlFor="46-65">
          <input
            type="radio"
            id="46-65"
            value="46-65"
            name="age"
            onChange={onAgeInputChange}
            checked={ageInput === '46-65'} />
                    46-65 yrs
        </label>
        <label htmlFor="66-100">
          <input
            type="radio"
            id="66-100"
            value="66-100"
            name="age"
            onChange={onAgeInputChange}
            checked={ageInput === '66-100'} />
                    66-100 yrs
        </label>
      </fieldset>
      <button type="submit">Result</button>
    </form>
  )
}

export default AgeQuestion