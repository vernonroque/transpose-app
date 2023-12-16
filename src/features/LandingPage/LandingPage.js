import React from 'react'
import styles from './LandingPage.module.css';


function LandingPage() {

  const handleChange = (event) => {
    console.log(event);
  }
  
  
  return (
    <>
    <section className ={styles.landingPage}>
      <h1>Landing Page section</h1>
      <h1>Hey Baus</h1>

      <input type="file" accept=".pdf" onChange={handleChange} />
      {/* Render the transposed sheet music here */}

    </section>
    </>
  )
}

export default LandingPage