// Packages
import axios, { AxiosInstance } from 'axios';
import { toast } from 'react-toastify';

// Services
import { axiosConstantsService } from './axiosConstantsService';

/**
 * NOTE: This service is using revealing module design pattern.
 * Revealing module pattern is a design pattern, which let you organise your javascript code in modules,
 * and gives better code structure. It gives you power to create public/private variables/methods (using closure),
 * and avoids polluting global scope (If you know how to avoid that).
 *
 * @see: https://medium.com/@Rahulx1/revealing-module-pattern-tips-e3442d4e352#:~:text=Revealing%20module%20pattern%20is%20a,know%20how%20to%20avoid%20that).
 */
export const baseUrl = import.meta.env.VITE_BASE_URL;

// eslint-disable-next-line func-names
export const axiosApiService = (function () {
  const getServicePayload = (axiosInstance: AxiosInstance) => ({
    get: async (url: string, options = {}) =>
      await axiosInstance.get(url, { ...options }),
    post: async (url: string, data: any, options = {}) =>
      await axiosInstance.post(url, data, { ...options }),
    put: async (url: string, data: any, options = {}) =>
      await axiosInstance.put(url, data, { ...options }),
    patch: async (url: string, data: any, options = {}) =>
      await axiosInstance.patch(url, data, { ...options }),
    delete: async (url: string, options = {}) =>
      await axiosInstance.delete(url, { ...options }),
  });

  const apiCoreServiceInstance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  /** We can store token by this way. Showing this just to give an idea of authorization */
  // Request interceptors config
  const apiCoreServiceRequestInterceptor = (axiosConfig: any) => {
    // const userSession = JSON.parse(localStorage.getItem('user') ?? '{}');
    // if (userSession.token) {
    //   axiosConfig.headers.common.Authorization = userSession.token;
    // }
    return axiosConfig;
  };
  const apiCoreServiceRequestErrorInterceptor = async (error: any) =>
    await Promise.reject(error);

  apiCoreServiceInstance.interceptors.request.use(
    apiCoreServiceRequestInterceptor,
    apiCoreServiceRequestErrorInterceptor
  );

  // Response interceptors config
  const apiCoreServiceResponseInterceptor = (response: { data: any }) =>
    response.data;
  const apiCoreServiceResponseErrorInterceptor = async (error: any) => {
    if (
      error?.response &&
      error.response.status === axiosConstantsService.STATUS_ENUMS.TOKEN_EXPIRED
    ) {
      // We can determine refresh token logic over to fetch the new token and set it in headers
    } else if (
      error?.response &&
      error.response.status === axiosConstantsService.STATUS_ENUMS.UNAUTHORIZED
    ) {
      // Any logic which needs to be implemented when user is unauthorized will be handled in this block
      // localStorage.removeItem('user');
    }
    // we can show error toast from here
    toast.error(error?.response?.statusText);

    return await Promise.reject(error?.response?.statusText);
  };

  apiCoreServiceInstance.interceptors.response.use(
    apiCoreServiceResponseInterceptor,
    apiCoreServiceResponseErrorInterceptor
  );

  return {
    coreApi: getServicePayload(apiCoreServiceInstance),
  };
})();
