import axios from 'axios';

export const getColor = async () => {
  const response = await axios.get('http://localhost:7878/color');
  return response.data.color;
}