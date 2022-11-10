import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Disease } from '../types';

export const DiseaseSearchService = (axiosInstance: AxiosInstance) => ({
  searchDiseases(config: AxiosRequestConfig): Promise<AxiosResponse<Disease[]>> {
    return axiosInstance.get('/sick', config);
  },
});

// { params }: { params: { q: string } }
