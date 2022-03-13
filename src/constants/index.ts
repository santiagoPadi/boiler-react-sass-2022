export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isLocal = process.env.REACT_APP_MODE === 'local';

export const BASE_URL: string = isLocal ? 'http://localhost:3000/' : '';

export const dateTimeSQLFormat = 'yyyy-LL-dd, HH:mm';
