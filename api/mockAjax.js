//对于axios进行二次封装
import axios from 'axios'

//创建axios
let request = axios.create({
    //配置对象
    //基础路径 发送请求时路径会出现api
    baseURL:"/mock",
    //请求超时时间5s
    timeout:5000,
})

//添加请求拦截器: 在发请求之前，请求拦截器可以检测到，可以在请求发出去之前做一些事情
request.interceptors.request.use((config)=>{
    //config:配置对象：对象里面有一个属性很重要，headers请求头

    return config;
});


//响应拦截器
request.interceptors.response.use((res)=>{
    //成功的回调函数：服务器相应数据回来以后，响应拦截器可以检测到，可以做一些事情

    //进度条结束
    return res.data
},(error)=>{
    //响应失败的回调函数
    return Promise.reject(new Error('faile'));
})


export default request;