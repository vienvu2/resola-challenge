import axios from "axios"


const client_id = '4TEPQIVZzz0CV_UORK78qzQi6V10jIo4emmPR_iEqpk'
const baseUrl = `https://api.unsplash.com`;


export const api = {
    get(url, params){
        params = {
            ...params,
            client_id: client_id,
        }
        return axios.get(baseUrl + url + '?' +new URLSearchParams(params))
    }
}