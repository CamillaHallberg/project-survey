import React from 'react'

const WantQuestion = ({ wantInput, onWantInputChange, onStepChange}) => {
    return (
        <form onSubmit={onStepChange}>
            <fieldset>
                <legend>
                    <strong>What do you want to achieve with your practice?</strong>
                </legend>
                <label htmlFor=""></label> 
                <select className="" // find a suitable classname here
                        value={wantInput}
                        onChange={onWantInputChange}
                        required>
                    <option value="" disabled selected>Please, select an option</option>
                    <option value="Vinyasa Yoga">
                        I want to build up strength.
                    </option>
                    <option value="Restorative Yoga">
                        I want to wind down after a LONG day of coding.. zZzZ
                    </option>
                    <option value="Bikram Yoga">
                        I want to sweat it out!
                    </option>
                    <option value="Kundalini Yoga">
                        I want to do breathwork.
                    </option>
                </select>
            </fieldset>
            <button type="submit">Continue</button>
        </form>
    )
}

export default WantQuestion 