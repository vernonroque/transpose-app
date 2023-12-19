const baseURL = 'http://127.0.0.1:5001/transpose-app-52b89/us-central1/api';

export const fetchPDF = (value) => {

    const formData = new FormData();

    formData.append('pdfFile',value );


    return fetch(`${baseURL}/submitPDF`,{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:formData
    })
    .then(()=>{

    })

}