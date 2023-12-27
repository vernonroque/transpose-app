const baseURL = 'http://127.0.0.1:5001/transpose-app-52b89/us-central1/api';

export const fetchPDF = (value) => {

    console.log("The value>>>",value.size);
    const formData = new FormData();
    //console.log("form Data>>>",formData);

    formData.append('pdfFile',value);
    console.log("form Data after>>>",formData);

    return fetch(`${baseURL}/submitPDF`,{
        method:'POST',
        headers:{
            'Content-Type': 'multipart/form-data', ///had to change content-type to accept pdfs. this fixed the cors error
        },
        body:formData
    })
    .then((response)=>{
        if(response.ok){
            console.log("The response is ok");
            return response;
        }
        else{
            // If not successful, handle the error
            console.log("the response is not ok",response);
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
            
    })
    .catch((error)=>{
        console.log("There is an error>>>",error.meesage);
    })
}