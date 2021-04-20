
import axios from "axios";

class RestGetClient {

    static  GetRequest(getURL){
       return axios.get(getURL)
            .then(response=>{
                return response.data;
            }).catch(error=>{
                return null;
            })
    }

    static  postRequest(postURL,postJSONData){
        let config={
            headers:{'Content-Type':'application/x-www-form-urlencoded',}
        }

        return axios.post(postURL,postJSONData,config)
            .then(response=>{
                return response.data;
            }).catch(error=>{
                return null;
            })
    }



}

export default RestGetClient;