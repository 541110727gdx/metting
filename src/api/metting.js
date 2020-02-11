import request from '@/router/axios';

// 登录
export const login = (data) => {
    return request({
        url: "api/user/login",
        method: 'post',
        params: data
    })
}
//价格管理左侧类型列表
export const getGoodsType = () => {
    return request({
        url: '/api/price/goodsType',
        method: 'get',
    })
};
//价格管理右侧商品列表
export const getGoodsList = (data) => {
    return request({
        url: '/api/price/sellGoods',
        method: 'get',
        params: data
    })
};

// 主页数据price/sell
export const getHome = () => {
    return request({
        url: '/api/price/sell',
        method: 'get',
    })
};

//销售统计数据
export const getSalesData = (data) => {
    console.log(data)
    return request({
        url: '/api/price/marketCount',
        method: 'get',
        params: data
    })
};
//营业额走势数据
export const getTurnover = (data) => {
    console.log(data)
    return request({
        url: '/api/price/turnover',
        method: 'get',
        params: data
    })
};
//毛利走势及其数据
export const getMlCount = (data) => {
    return request({
        url: '/api/price/MlCount',
        method: 'get',
        params: data
    })
};
//订单列表
export const getOrderList = (data) => {
    return request({
        url: '/api/price/count',
        method: 'get',
        params: data
    })
};
//订单详情
export const orderDetail = (data) => {
    return request({
        url: '/api/price/orderDetail',
        method: 'get',
        params: data
    })
};
//退单列表
export const getChargebackList = (data) => {
    return request({
        url: '/api/price/returnCount',
        method: 'get',
        params: data
    })
};
//退单详情
export const chargebackDetail = (data) => {
    return request({
        url: '/api/price/orderDetail',
        method: 'get',
        params: data
    })
};
//商品价格修改
export const goodsSubmit = (data) => {
    return request({
        url: '/api/price/goodsSubmit',
        method: 'post',
        data
    })
};


// /price/memberCount 会员统计
export const memberCount = () => {
    return request({
        url: '/api/price/memberCount',
        method: 'get',
    })
};
//price/topSeller 畅销商品
export const topSeller = (data) => {
    return request({
        url: '/api/price/topSeller',
        method: 'get',
        params: data
    })
};
//price/per客单价
export const passengerPrice = (data) => {
    return request({
        url: '/api/price/per',
        method: 'get',
        params: data
    })
};

// 客流量 price/detailsCount
export const passengerFlow = (data) => {
    return request({
        url: '/api/price/detailsCount',
        method: 'get',
        params: data
    })
};