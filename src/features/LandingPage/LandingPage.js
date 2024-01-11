import React,{useState} from 'react'
import styles from './LandingPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
//import axios from 'axios';
import {storage} from '../../firebase';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage';
import {v4} from 'uuid'

import{loadPDF, selectLandingPage} from './LandingPageSlice';
//import {submitPDF} from './LandingPageSlice';

function LandingPage() {

  const landingPageState = useSelector(selectLandingPage);
  const dispatch = useDispatch();
  const [pdf,setPDF] = useState('');
  const [pdfList, setPDFList] = useState([]);

  //here is where i can determine the file path from google firebase storage
  //const pdfRefList = ref(storage);
  
  const handleChange = (event) => {
    console.log("the file >>>",event.target.files[0]);
    setPDF(event.target.files[0]);
    dispatch(loadPDF(event.target.value));
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    //const baseURL = 'http://127.0.0.1:5001/transpose-app-52b89/us-central1/api';
    const formData = new FormData();
    formData.append("pdfFile", pdf);
    // console.log(Object.fromEntries(formData.entries()))
    // console.log("pdfState>>>",pdf);

    //here i can determine the file path
    const pdfRef = ref(storage, `pdfs/${pdf.name + v4()}`)
    uploadBytes(pdfRef,pdf)
    .then((snapshot)=>{
      getDownloadURL(snapshot.ref)
      .then(url=>{
        alert('pdf submitted');
        setPDFList(prev=> [...prev,url]);
      })
    
    });
  }
  
  console.log('current pdf list', pdfList);
  
  return (
    <>
    <section className ={styles.landingPageContainer}>
      <h1>Landing Page section</h1>
      <h1>Hey Baus</h1>

    <form className={styles.pdfFormSection} onSubmit={handleSubmit} encType="multipart/form-data">
      <input type="file" name="pdfFile" accept="application/pdf" onChange={handleChange}/>
      <button type="submit">Submit File</button>
    </form>
    {pdfList ? pdfList.map((url,i)=>{
     return <iframe key = {i} src = {url} title='pdf' />
    }) :'' }
     
      {/* Render the transposed sheet music here */}
      {landingPageState.status}


    </section>
    </>
  )
}

export default LandingPage