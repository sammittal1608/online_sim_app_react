import axios from 'axios';

const apiUrl = 'http://localhost:5000';

export const getUserPoints = () => axios.get(`${apiUrl}/user/points`);
export const rechargeWallet = (amount) => axios.post(`${apiUrl}/wallet/recharge`, { amount });
export const getAllUsers = () => axios.get(`${apiUrl}/admin/users`);
export const addPointsToUser = (userId, points) => axios.post(`${apiUrl}/admin/add-wallet`, { userId, points });
