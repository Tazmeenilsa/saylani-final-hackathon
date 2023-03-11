import { saveDataInPhone } from "../../../utilities/Localstore";
import { apiService } from "../../../utilities/apiService";

const LoginUser = async (data) => {
    return new Promise((resolve, reject) => {
        apiService('post', '/loginUser', data).then(
            res => {
                let responseData = res.data;
                resolve(responseData);
                if (responseData?.success == true) {
                    saveDataInPhone("Token", responseData.token)
                    saveDataInPhone("userData", JSON.stringify(responseData))
                }
            },
            err => {
                let errorResponse = err;
                reject(errorResponse);
            },
        );
    })
};

const CreateUser = async (data) => {
    return new Promise((resolve, reject) => {
        apiService('post', '/createUser', data).then(
            res => {
                let responseData = res.data;
                resolve(responseData);
            },
            err => {
                let errorResponse = err.response.data;
                reject(errorResponse);
                alert(errorResponse?.non_field_errors[0]);
            },
        );
    }).catch(err => {
        console.log(err)
    });
};


export { LoginUser, CreateUser };