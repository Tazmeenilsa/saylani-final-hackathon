const {apiService} =require("../../../utilities/apiService")

const getAllProduct = async () => {
    return new Promise((resolve, reject) => {
        apiService('get', `/getProducts`,null).then(
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
