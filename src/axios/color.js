import axios from 'axios';

export const getColor = async () => {
  const response = await axios.get('http://canary-backend-service:8080/color');
  console.log(response);
  return response.data.color;
}