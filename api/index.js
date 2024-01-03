//当前这个模块：API进行统一管理
import requests from "./request";
import mockRequest from "./mockAjax"
import { get, method } from "lodash";
import request from "./mockAjax";
//三级联动接口
//api/product/getBaseCategoryList get 无参数
//发送请求：axios发送返回结果Promise对象
export const reqCategoryList = () => requests({url: '/product/getBaseCategoryList' ,method: 'get'});
//当前函数执行需要把服务器返回结果返回

//获取banner数据 (首页轮播图)
export const reqGetBannerList = () => mockRequest.get('/banner')

//获取floor数据
export const reqGetFloorList = () => mockRequest.get('/floor')

//获取搜索模块数据  请求方式POST  带参数
export const reqGetSearchInfo = (params) => requests({url: '/list' ,method: 'post',data:params});

//获取商品详情模块数据 /api/item/{ skuId }  请求方式get 带参数
export const reqGetDetail = (skuId) => requests({url:`/item/${skuId}`,method:'get'})

//将产品添加到购物车中或者更新购物车某一产品数量
export const reqAddOrUpdata = (skuId,skuNum) => requests({url:`/cart/addToCart/${skuId}/${skuNum}`,method:'post'})

//获取购物车数据
export const reqGetCarList = () => requests({url:'/cart/cartList',method:'get'})


//删除购物车数据
export const reqdeleteCar = (skuId) => requests({url:`/cart/deleteCart/${skuId}`,method:'delete'})

//更改商品的状态 选中和未选中
export const reqChecked = (skuId,isChecked) => requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'})

//获取验证码 /api/user/passport/sendCode/{phone}  get
export const reqGetCode = (phone) => requests({url:`/user/passport/sendCode/${phone}`,method:'get'})

//注册新用户 /api/user/passport/register    phone   password    code
export const reqUserRegister = (data) => requests({url:`/user/passport/register`,data:data,method:'post'})

//用户登录          /api/user/passport/login
export const reqUserLogin = (data) => requests({url:`/user/passport/login`,data:data,method:'post'})

//校验token 需要带着用户的token向服务器要客户信息(夹在请求头里)        /api/user/passport/auth/getUserInfo
export const reqUserInfo = () => requests({url:'/user/passport/auth/getUserInfo',method:'get'})

//退出登录  /api/user/passport/logout
export const reqLogiout = () => requests({url:'/user/passport/logout',method:'get'})

// 获取用户地址信息       /api/user/userAddress/auth/findUserAddressList   get
export const reqFindUserAddressList = () => requests({url:'/user/userAddress/auth/findUserAddressList',methond:'get'})

//获取商品清单 /api/order/auth/trade
export const reqAddressInfo = () => requests({url:'/order/auth/trade',method:'get'})

//提交订单                  /api/order/auth/submitOrder?tradeNo={tradeNo}           (不在vuex中存储数据)
export const reqSubmitOrder = (tradeNo,data) => requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,method:'post',data:data})

//获取支付信息      /api/payment/weixin/createNative/{orderId}
export const reqPayInfo = (orderId) => requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'})

//获取订单支付状态 /api/payment/weixin/queryPayStatus/{orderId}
export const reqPayStatus = (orderId) =>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'}) 

//获取我的订单列表      /api/order/auth/{page}/{limit}
export const reqMyOrder = (page,limit) => requests({url:`/order/auth/${page}/${limit}`,method:'get'})
 