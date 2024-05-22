import { zippopotamApi } from '../api/zippopotamApi';
import { ZipCode } from '../models/zipCodeModel';

export const getZipCodeInfo = async (countryCode: string, zipCode: string) => {
  const response = await zippopotamApi.get<ZipCode>(`/${countryCode}/${zipCode}`);
  return response.data;
};
