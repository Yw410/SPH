//对于axios进行二次封装
import axios from 'axios'

//引入进度条
import nProgress from 'nprogress';
// start:进度条开始  done:进度条结束
//引入进度条样式
import "nprogress/nprogress.css"

//在模块中引入store
import store from '@/store';

//创建axios
let requests = axios.create({
    //配置对象
    //基础路径 发送请求时路径会出现api
    baseURL:"/api",
    //请求超时时间5s
    timeout:5000,
})

//添加请求拦截器: 在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
requests.interceptors.request.use((config)=>{
    //config:配置对象：对象里面有一个属性很重要，headers请求头
    if(store.state.detail.uuid_token){
        //给请求头加一个字段(userTempId)
        config.headers.userTempId = store.state.detail.uuid_token
    }
    //需要携带token给服务器
    if(store.state.user.token){
        config.headers.token = store.state.user.token
    }
    //进度条开始
    nProgress.start();
    return config;
});


//响应拦截器
requests.interceptors.response.use((res)=>{
    //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情

    //进度条结束
    nProgress.done();
    return res.data
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
})


export default requests;