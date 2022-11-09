import { AxiosResponse } from 'axios';
import { Disease } from '../types';
import getAxiosInstance from '../http/axiosInstance';

const axiosInstance = getAxiosInstance(`http://${window.location.hostname}:4000/`);

export function searchDiseases(queryParams?: { q: string }): Promise<AxiosResponse<Disease[]>> {
  return axiosInstance.get('/sick', {
    params: queryParams,
  });
}
