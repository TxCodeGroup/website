import request from '@/utils/request'

//新闻列表
export function getNewsList(data) {
	return request({
		url: '/v2/news/list',
		method: 'post',
		data,
	})
}

//获取单一新闻(新闻详情)
export function newsDetail(id) {
	return request({
		url: '/v2/news/get/' + id,
		method: 'get',
	})
}

//共建社区提交
export function addShareWorld(data) {
	return request({
		url: '/v1/shareWorld/add',
		method: 'post',
		data
	})
}
