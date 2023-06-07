import axiosClient from './axiosClient';

const UserAPI = {
  getAllUsers: () => {
    const url = '/users/all';
    return axiosClient.get(url);
  },

  getDetailData: (id) => {
    const url = `/users/${id}`;
    return axiosClient.get(url);
  },

  postSignUp: (data) => {
    const url = `/users/signup`;
    return axiosClient.post(url, data);
  },
  postSignIn: (data) => {
    const url = `/users/signin`;
    return axiosClient.post(url, data);
    // return axiosClient.post(url, { withCredentials: true });
  },
  postSignOut: (query) => {
    const url = `/users/signout`;
    return axiosClient.post(url);
  },
};

export default UserAPI;
