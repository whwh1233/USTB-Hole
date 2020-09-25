import { request } from './request'

export  const user = request ({
  method:'GET',
  url:'/apii/user'
})