import axiosClient from './axiosClient';

const CheckoutAPI = {
  postEmail: (data) => {
    const url = `/email`;
    return axiosClient.post(url, data);
  },
};

export default CheckoutAPI;
