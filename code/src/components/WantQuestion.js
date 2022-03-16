import React from 'react'

const WantQuestion = ({ wantInput, onWantInputChange, onStepChange }) => {
  return (
    <form onSubmit={onStepChange}>
      <fieldset>
        <legend>
          <strong>What do you want to achieve?</strong>
        </legend>
        <select
          className="yoga-styles"
          value={wantInput}
          onChange={onWantInputChange}
          required>
          <option value="" disabled>Please, select an option:</option>
          <option value="Vinyasa Yoga">
                        I want to build up strength.
          </option>
          <option value="Restorative Yoga or Yin Yoga">
                        I want to wind down after a long day of coding.
          </option>
          <option value="Bikram Yoga">
                        I want to sweat it out!
          </option>
          <option value="Kundalini Yoga">
                        I want to do some breathwork.
          </option>
        </select>
      </fieldset>
      <button type="submit">Continue</button>
    </form>
  )
}

export default WantQuestion