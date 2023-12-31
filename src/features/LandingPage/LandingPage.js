import React from 'react'
import styles from './LandingPage.module.css';
import { useSelector, useDispatch } from 'react-redux';

import{loadPDF,submitPDF,selectLandingPage} from './LandingPageSlice';


function LandingPage() {

  const landingPageState = useSelector(selectLandingPage);
  const dispatch = useDispatch();
  //const [pdf,setPDF] = useState('');

  const handleChange = (event) => {
    dispatch(loadPDF(event.target.files[0]));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(submitPDF(event.target.files[0]));

  }
  
  return (
    <>
    <section className ={styles.landingPageContainer}>
      <h1>Landing Page section</h1>
      <h1>Hey Baus</h1>

    <form className={styles.pdfFormSection} onSubmit={handleSubmit}>
      <input type="file" accept=".pdf" onChange={handleChange}/>
      <button type="submit">Submit File</button>

    </form>
     
      {/* Render the transposed sheet music here */}
      {landingPageState.status}

    </section>
    </>
  )
}

export default LandingPage