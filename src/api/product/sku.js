//sku模块
import request from '@/utils/request';
//sku列表的接口
///admin/product/list/{page}/{limit}
export const reqSkuList = (page,limit)=>request({url:`http://gmall-h5-api.atguigu.cn/admin/product/list/${page}/${limit}`,method:'get'}); 

//上架
///admin/product/onSale/{skuId}
export const reqSale = (skuId)=>request({url:`http://gmall-h5-api.atguigu.cn/admin/product/onSale/${skuId}`,method:'get'});

//下架
///admin/product/cancelSale/{skuId}
export const reqCancel = (skuId)=>request({url:`http://gmall-h5-api.atguigu.cn/admin/product/cancelSale/${skuId}`,method:'get'});

//获取SKU详情的接口
///admin/product/getSkuById/{skuId}  get
export const reqSkuById = (skuId)=>request({url:`http://gmall-h5-api.atguigu.cn/admin/product/getSkuById/${skuId}`,method:'get'});