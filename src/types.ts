export enum country {
  ph = 'philippines'
}

interface ISelectOption {
  value: number | string,
  label: string
}

export interface ISelectProps {
  label: string;
  value: string | number | undefined;
  options: ISelectOption[];
  onChange?: (value: string | number) => void
}

export interface IAPIResponse {
  id: number,
  value: string
}

export interface ICountry extends IAPIResponse { }
export interface ICountryState extends IAPIResponse { }