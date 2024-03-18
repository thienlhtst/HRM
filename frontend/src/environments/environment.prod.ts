import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apisignar:'http://localhost:3333',
  apiurl : 'http://localhost:3333/api',
  CURRENT_TOKEN_ID: 'CURRENT_TOKEN_ID',
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};
 