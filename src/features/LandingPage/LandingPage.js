import React from 'react'
import styles from './LandingPage.module.css';
import { useSelector, useDispatch } from 'react-redux';

import{loadPDF,submitPDF,selectLandingPage} from './LandingPageSlice';


function LandingPage() {

  const landingPageState = useSelector(selectLandingPage);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

  }
  
  
  return (
    <>
    <section className ={styles.landingPageContainer}>
      <h1>Landing Page section</h1>
      <h1>Hey Baus</h1>

    <form className={styles.pdfFormSection} onSubmit={handleSubmit}>
      <input type="file" accept=".pdf" onChange={handleChange} />
      <button type="submit">Submit File</button>

    </form>
     
      {/* Render the transposed sheet music here */}

    </section>
    </>
  )
}

export default LandingPage