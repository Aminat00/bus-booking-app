import axios from 'axios';
import JsonData from './MOCK_DATA_BUS.json';
export default axios.create({
	baseURL: 'https://localhost:3000/api/MOCK_DATA_BUS.json',
});
