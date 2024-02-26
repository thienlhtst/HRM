import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apiurl : 'https://localhost:5088/api',

  CURRENT_TOKEN: 'CURRENT_TOKEN',
};
