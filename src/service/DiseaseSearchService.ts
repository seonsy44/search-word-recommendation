import { AxiosInstance, AxiosResponse } from 'axios';
import { Disease } from '../types';

export const DiseaseSearchService = (axiosInstance: AxiosInstance) => ({
  searchDiseases(queryParams?: { q: string }): Promise<AxiosResponse<Disease[]>> {
    return axiosInstance.get('/sick', {
      params: queryParams,
    });
  },
});
