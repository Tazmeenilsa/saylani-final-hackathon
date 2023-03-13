import { apiService } from "../../../../utilities/apiService";

const Uploadproducts= async (data) => {
    return new Promise((resolve, reject) => {
        apiService('post', '/productsCatalogue', data).then(
            res => {
                let responseData = res.data;
                resolve(responseData);
                console.log(responseData, 'res');
            },
            err => {
                let errorResponse = err;
                reject(errorResponse);
                console.log(errorResponse, 'err');
            },
        );
    })
};

export { Uploadproducts };