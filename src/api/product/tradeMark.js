import request from '@/utils/request'

export const reqTradeMarkList = (page, limit) =>
    request({ url: `http://gmall-h5-api.atguigu.cn/admin/product/baseTrademark/${page}/${limit}`, method: 'get' })

export const reqAddOrUpdateTradeMark = (tradeMark) => {
    //带给服务器数据携带ID---修改
    if (tradeMark.id) {
        return request({ url: 'http://gmall-h5-api.atguigu.cn/admin/product/baseTrademark/update', method: 'put', data: tradeMark });
    } else {
        //新增品牌
        return request({ url: 'http://gmall-h5-api.atguigu.cn/admin/product/baseTrademark/save', method: 'post', data: tradeMark });
    }
}
//删除品牌
///admin/product/baseTrademark/remove/{id}  delete

export const reqDeleteTradeMark = (id)=>request({url:`http://gmall-h5-api.atguigu.cn/admin/product/baseTrademark/remove/${id}`,method:'delete'});

