import axios from 'axios';

axios.defaults.baseURL = 'https://64ea5783bf99bdcc8e6781a2.mockapi.io';

export const getAllAdverts = async (page) => {
  const response = await axios.get(`/adverts?page=${page}&limit=12`);
  return response.data;
};

export const getAdvertById = async (advertId) => {
  const response = await axios.get(`/adverts/${advertId}`);
  return response.data;
};

