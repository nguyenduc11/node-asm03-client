import axiosClient from './axiosClient';

const HistoryAPI = {
  getUserHistory: (query) => {
    const url = `/history/user/${query}`;
    return axiosClient.get(url);
  },

  getDetail: (id) => {
    const url = `/history/${id}`;
    return axiosClient.get(url);
  },
};

export default HistoryAPI;
