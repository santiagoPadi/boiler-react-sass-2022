export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isLocal = process.env.REACT_APP_MODE === 'local';

export const BASE_URL: string = isLocal ? 'http://localhost:3000/' : '';

export const dateTimeSQLFormat = 'yyyy-LL-dd, HH:mm';
export const emailPattern =
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

