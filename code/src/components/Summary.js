import React from 'react'

const Summary = ({ nameInput, wantInput, ageInput }) => {
  return (
    <section className="summary-wrapper">
      <div className="summary">
        <h2>Yoga Recommendation</h2><br />
        <p>Thank you for completing this form, <strong>{nameInput}</strong>!<br />
            You are in the age group of <strong>{ageInput}</strong> and based on your selection
            we recommend you to try out:<br /><span className="recommended-yoga">{wantInput}</span><br />
          <span className="goodbye-namaste">Namaste</span>
        </p>
      </div>
    </section>
  )
}

export default Summary