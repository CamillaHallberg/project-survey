import React, { useState } from 'react'

import NameQuestion from './NameQuestion'
import WantQuestion from './WantQuestion'
import AgeQuestion from './AgeQuestion'
import Summary from './Summary'

const Form = () => {
  const [nameInput, setNameInput] = useState('')
  const [wantInput, setWantInput] = useState('')
  const [ageInput, setAgeInput] = useState('')
  const [step, setStep] = useState(1)

  const onNameInputChange = (event) => {
    setNameInput(event.target.value)
  }

  const onWantInputChange = (event) => {
    setWantInput(event.target.value)
  }

  const onAgeInputChange = (event) => {
    setAgeInput(event.target.value)
  }

  const onStepChange = () => {
    setStep(step + 1)
  }

  return (
    <div className="form-wrapper">
      <div>
        <h1>Find Your Yoga</h1>
      </div>
      {step === 1
            && <NameQuestion
              nameInput={nameInput}
              onNameInputChange={onNameInputChange}
              onStepChange={onStepChange} />}
      {step === 2
            && <WantQuestion
              wantInput={wantInput}
              onWantInputChange={onWantInputChange}
              onStepChange={onStepChange} />}
      {step === 3
            && <AgeQuestion
              ageInput={ageInput}
              onAgeInputChange={onAgeInputChange}
              onStepChange={onStepChange} />}
      {step === 4
            && <Summary
              nameInput={nameInput}
              wantInput={wantInput}
              ageInput={ageInput} />}
    </div>
  )
}

export default Form
