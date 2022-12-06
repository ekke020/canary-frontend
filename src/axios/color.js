import axios from 'axios';

export const getColor = async () => {
  const response = await axios.get('/color');
  console.log(response);
  return response.data.color;
}