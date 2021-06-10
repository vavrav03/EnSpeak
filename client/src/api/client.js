import axios from "axios";

export const createAxiosInstance = (
   baseURL = `${window.location.origin}/api`,
   timeout = 20_000
) => {
   return axios.create({
      baseURL: baseURL,
      timeout: timeout,
   });
};

export const defaultClient = createAxiosInstance();

export default defaultClient;
