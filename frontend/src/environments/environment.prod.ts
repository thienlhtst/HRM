import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  apisignar:'https://localhost:3333',
  apiurl : 'https://localhost:3333/api',
  CURRENT_TOKEN_ID: 'CURRENT_TOKEN_ID',
  CURRENT_TOKEN: 'CURRENT_TOKEN',
};
