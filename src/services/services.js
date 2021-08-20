import {urlConfig} from '../config/config'
import axios from "axios";

function errorHandler(reject,error){
    console.dir(error);
    reject("operation error");
}

function getPostData (){
    return new Promise(function onThen(resolve, reject){
        axios
        .get(
            `${urlConfig.apiUrl}/posts`,
            {
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application.json"
                },
            }
        )
    .then(function (response){
        if(response!==null){
            return resolve(response.data)
        }
    })
    .catch(function(error){
        errorHandler(reject,error);
        return null;
    })
    })
}

const webService = {
    getPostData
};
export default webService;