import storage from '../../utils/storage'

const api = {
  'localhost:8080': 'http://portal-int.chainopen.cn/api',
  // 'localhost:8080': 'http://www.TINK.io/api'
};

export const baseUrlByEnv = {
  dev: 'http://portal-int.chainopen.cn/api',
  pro: 'http://www.TINK.io/api'
};

export function getAppBaseUrl() {
  return storage.temp('session','baseUrl') || api[location.host] || location.protocol + '//' + location.host + "/api"
}

