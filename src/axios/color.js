import axios from 'axios';

export const getColor = async () => {
  const response = await axios.get('10.44.10.79:8080/color');
  return response.data.color;
}