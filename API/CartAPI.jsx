import axiosClient from './axiosClient';

const CartAPI = {
  getUserCarts: (query) => {
    const url = `/carts/${query}`;
    return axiosClient.get(url);
  },

  postAddToCart: (data) => {
    const url = `/carts/add`;
    return axiosClient.post(url, data);
  },

  deleteToCart: (query) => {
    const url = `/carts/delete/${query}`;
    return axiosClient.delete(url);
  },

  putToCart: (query) => {
    const url = `/carts/update/${query}`;
    return axiosClient.put(url);
  },
};

export default CartAPI;
