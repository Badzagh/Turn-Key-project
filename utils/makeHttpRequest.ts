import axios, { AxiosRequestConfig, Method } from "axios";
import { Cookies } from "react-cookie";

// const apiUrl = process.env.REACT_APP_API_URL;
// console.log(apiUrl);
// const apiUrl = 'https://localhost:7285';
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

export const makeHttpRequest = async (
    method: Method,
    url: string,
    data?: any,
    token?: string,
    ContentType?: string,
    type?: string
) => {
    const cookies = new Cookies();
    const config: AxiosRequestConfig = {
        method,
        url: apiUrl + '/api/v1' + url,
        data,
        headers: {
            'Accept-Language': 'ka'
        }
    };

    if (token) {
        config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`
        }
    }

    if (ContentType) {
        config.headers = {
            ...config.headers,
            "Content-Type": ContentType
        }
    }

    try {
        const response = await axios(config);
        if(response.data.data){
            return response.data.data
        } else {
            return response.data
        }
    } catch (error: any) {
        switch (error.response.status) {
            case 401:
                cookies.remove("token")
                break;
            default:
                throw new Error("Unhandled error status");
                break;
        }

    }
}