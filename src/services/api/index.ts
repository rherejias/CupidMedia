import { ICountry, ICountryState } from "../../types";
import apiClient from "./client";

export const getCountry = (): Promise<ICountry[]> => {
  return apiClient.get<ICountry[]>('countries');
};

export const getState = (countryId: number): Promise<ICountryState[]> => {
  return apiClient.get<ICountryState[]>(`countries/${countryId}/states`);
};

