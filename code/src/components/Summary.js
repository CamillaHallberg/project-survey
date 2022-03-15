import React from 'react'

const Summary = ({ nameInput, wantInput, ageInput }) => {
    return (
        <section>
            <h2>Here's the yoga style recommendation for you:</h2><br />
            <p>Thank you for completing this form, {nameInput}!<br />
            You are in the age group of {ageInput} and based on your selection
            we recommend you to try out {wantInput}.
            </p>
        </section>
    )
}

export default Summary