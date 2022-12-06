import axios from 'axios';

export const getColor = async () => {
  const response = await axios.get('tcp://10.44.10.79:8080');
  return response.data.color;
}