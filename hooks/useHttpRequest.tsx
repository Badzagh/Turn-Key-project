import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { Cookies, useCookies } from 'react-cookie';

// const apiUrl = 'https://localhost:7285';
const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

const useHttpRequest = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [cookies, setCookies, removeCookie] = useCookies(["token"]);

    const makeRequest = async (
        method: Method,
        url: string,
        data?: any,
        token?: string
    ) => {
        setLoading(true);
        setError(null);

        const config: AxiosRequestConfig = {
            method,
            url: apiUrl + '/api/v1' + url,
            data,
            headers: {
                'Accept-Language': 'ka',
            },
        };

        if (token) {
            config.headers = {
                ...config.headers,
                Authorization: `Bearer ${token}`,
            };
        }

        try {
            const response = await axios(config);
            setLoading(false);
            if(response.data.data){
                return response.data.data
            } else {
                return response.data
            }
        } catch (error: any) {
            setLoading(false);
            setError(error);
            console.log(error)
            switch (error.response?.status) {
                case 401:
                    removeCookie('token', { path: '/' });
                    break;
                default:
                    throw new Error('Unhandled error status');
            }
        }
    };

    return { makeRequest, loading, error };
};

export default useHttpRequest;