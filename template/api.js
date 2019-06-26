import { request } from '@/utils/request'

/**
 * 获取用户列表
 * @param {object} params
 */
export function getUserList (params) {
  return request({
    url: '{{url}}',
    method: '{{type}}',
    params
  })
}
