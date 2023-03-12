const {apiService} =require("../../../utilities/apiService")

const getAllProduct = async (data) => {
    return new Promise((resolve, reject) => {
        apiService('get', '/getProducts', data).then(
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
export {getAllProduct}
