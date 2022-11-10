import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { Disease } from '.';

export type DiseaseSearchProviderProps = {
  children: React.ReactNode;
  DiseaseSearchService: {
    searchDiseases(config: AxiosRequestConfig): Promise<AxiosResponse<Disease[]>>;
  };
};

export type DiseaseSearchConfig = {
  diseases: Disease[] | undefined | unknown;
  getDiseases: (config: AxiosRequestConfig) => void;
  searchValue: string;
};
