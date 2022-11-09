import { AxiosResponse } from 'axios';
import { Disease } from '.';

export type DiseaseSearchProviderProps = {
  children: React.ReactNode;
  DiseaseSearchService: {
    searchDiseases(queryParams?: { q: string }): Promise<AxiosResponse<Disease[]>>;
  };
};

export type DiseaseSearchConfig = {
  diseases: Disease[] | undefined;
  getDiseases: (() => undefined) | ((params: { q: string }) => Promise<void>);
};
