import axios from "axios";
import { getDataFromPhone } from "./Localstore";
const baseUrl = 'https://backend-hackathon-production-a08b.up.railway.app/user';

let Authorization = "";
export async function apiService(method, uri, data, params) {
    await getDataFromPhone('authToken').then((res) => { Authorization = res })
    console.log(arguments);
    console.log('Authorization', Authorization);
    let query = {
        method: method,
        url: uri ? baseUrl + uri : baseUrl,
        headers:
            Authorization
                ?
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    // "Content-Type": "multipart/form-data",
                    "Authorization": `Token ${Authorization}`,
                }
                : {
                    "Content-type": "application/json; charset=UTF-8",
                    "access-control-allow-origin": "*",
                },
    };

    if (params !== null) {
        query.params = params;
    }

    if (
        method === 'post' ||
        method === 'put' ||
        method === 'delete' ||
        method === 'patch'
    ) {
        query.data = data;
    }


    return axios(query);
}