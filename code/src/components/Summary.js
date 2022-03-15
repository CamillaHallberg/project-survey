import React from 'react'

const Summary = ({ nameInput, wantInput, ageInput }) => {
  return (
    <section>
      <h2>Here is the yoga style recommendation for you:</h2><br />
      <p>Thank you for completing this form, <strong>{nameInput}</strong>!<br />
            You are in the age group of <strong>{ageInput}</strong> and based on your selection
            we recommend you to try out:<br /><strong>{wantInput}</strong>.<br />
            Namaste.
      </p>
    </section>
  )
}

export default Summary