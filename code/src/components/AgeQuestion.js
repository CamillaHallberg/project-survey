import React from 'react'

const AgeQuestion = ({ ageInput, onAgeInputChange, onStepChange }) => {
    return (
        <form onSubmit={onStepChange}>
            <fieldset>
                <legend>
                    <strong>What age are you?</strong>
                </legend>
                <label htmlFor="">
                    <input 
                        type="radio"
                        value="15-25"
                        onChange={onAgeInputChange}
                        checked={ageInput === "15-25"} 
                    />
                    15-25 yrs
                </label>
                <label htmlFor="">
                    <input 
                        type="radio"
                        value="26-45"
                        onChange={onAgeInputChange}
                        checked={ageInput === "26-45"} 
                    />
                    26-45 yrs
                </label>
                <label htmlFor="">
                    <input 
                        type="radio"
                        value="46-65"
                        onChange={onAgeInputChange}
                        checked={ageInput === "46-65"} 
                    />
                    46-65 yrs
                </label>
                <label htmlFor="">
                    <input 
                        type="radio"
                        value="66-100"
                        onChange={onAgeInputChange}
                        checked={ageInput === "66-100"} 
                    />
                    66-100 yrs
                </label>
            </fieldset>
            <button type="submit">Show me my style of yoga, please!</button>
        </form>
    )
}

export default AgeQuestion 