import axios from 'axios';

export const fetchCurrencyData = async (date) => {
  const response = await axios.get(`/api/rss/get_rates.cfm?fdate=${date}`);
  return response.data;
};

