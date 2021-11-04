import request from '@/utils/request'
const baseURL = location.protocol + '//browser.TINK.io/browser-api'
//链数据
export function getchainDetail(data) {
  return request({
      baseURL,
      url: '/v1/getHeader',
      method: 'get',
      data,
  })
}


export function getTransferDetail(data) {
  return request({
      baseURL,
      url: '/v1/blockHeightAndNumberOfTaskChains',
      method: 'post',
      data,
  })
}
