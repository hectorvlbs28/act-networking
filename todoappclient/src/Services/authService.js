import axiosInstance from './axiosInstance';

export const getDefaultImage = async (pokemonUrl) => {
  try {
    const pokemonUrlSplit = pokemonUrl.split('/');
    const response = await axiosInstance.get(`pokemon/${pokemonUrlSplit[6]}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
