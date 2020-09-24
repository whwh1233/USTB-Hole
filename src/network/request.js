import axios from 'axios'

export function request(config) {
    //1.创建axios实例
    const instance = axios.create({
      // baseURL:'http://152.136.185.210:8000/api/z8/',
      baseURL:'http://10.25.20.22:3000/',
      timeout:5000
    })
    //2.发送真正的网络请求
    return instance(config)
}

