const baseURL = 'http://127.0.0.1:5001/transpose-app-52b89/us-central1/api';

export const fetchPDF = (value) => {

    console.log("The value>>>",value);
    const formData = new FormData();
    formData.append('pdfFile',value);
    console.log(Object.fromEntries(formData.entries())) //this is how to console log items in FormData

    return fetch(`${baseURL}/submitPDF`,{
        method:'POST',
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
        console.log("There is an error>>>",error.message);
    })
}