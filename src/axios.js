import axios from "axios";

const instance = axios.create({
    baseURL:'http:127.0.0.1:5001/clone-bfd8a/us-central1/api'   //here is where you put the base URL that google firebase gives you
});

//https://us-central1-clone-bfd8a.cloudfunctions.net/api
//http://127.0.0.1:5001/clone-bfd8a/us-central1/api    <<<<<< Use this for debugging purposes
export default instance;