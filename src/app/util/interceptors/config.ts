export interface Config {
  apiUrl: string;
  authApiUrl: string;
  fileServerHttpsUrl?: string;
  fileServerHttpUrl?: string;
  spinnerDelay?: number;
  companyId?: number;
  renewGuestToken?: boolean;
}
