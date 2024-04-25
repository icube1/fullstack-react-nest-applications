import { Application } from '../types/Application';
import axios from "axios";

const BASE_URL = 'http://localhost:4000';



export const getApps = async () => {
  try {
    const response = await axios.get<Application[]>(`${BASE_URL}/applications`);
    return response.data;
  } catch (error) {
    throw new Error('Unable to load todos');
  }
};

export const createApp = (
  {
    clientCompanyName,
    carrierName,
    carrierPhone,
    comments,
    status,
    atiCode
  }: Omit<Application, 'id' | 'receivedDate'>,
) => {
  return axios.post<Application>(`${BASE_URL}/applications`,
    {
        clientCompanyName,
        carrierName,
        carrierPhone,
        comments,
        status,
        atiCode
    })
    .then(res => res.data)
    .catch(err => alert(err));
};

export const deleteApp = async (appId: number) => {
  try {
    await axios.delete(`${BASE_URL}/applications/${appId}`);
  } catch (error: any) {
    throw new Error('Unable to delete todo');
  }
};

export const editApp = async (
  {
    id,
    clientCompanyName,
    carrierName,
    carrierPhone,
    comments,
    status,
    atiCode
  }: Application,
) => {
  return await axios.patch<Application>(`${BASE_URL}/applications/${id}`, {
        clientCompanyName,
        carrierName,
        carrierPhone,
        comments,
        status,
        atiCode
  });
};

