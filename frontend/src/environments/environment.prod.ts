import packageInfo from '../../package.json';

export const environment = {
  appVersion: packageInfo.version,
  production: true,
  ApiUrl : 'http://localhost:3333/api'
};
