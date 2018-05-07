import axios, { AxiosPromise } from 'axios';
// 增加默认的请求路径
axios.defaults.baseURL = 'http://localhost:3000';
// 添加响应拦截
axios.interceptors.response.use((res) => {
    // Do something with response data
    return res.data;
  }, (error) => {
    // Do something with response error
    return Promise.reject(error);
});
// 获取轮播图数据，返回的是一个promise对象
export let getSliders = () => {
    return axios.get('/sliders');
};
// 获取热门图书接口
export let getHotBook = () => {
    return axios.get('/hot');
};
// 获取所有图书
export let getBooks = () => {
    return axios.get('/book');
};
// 删除某一本图书
export let removeBook = (id) => {
    return axios.delete(`/book?id=${id}`);
};
// 获取某一本书
export let findOneBook = (id) => {
    return axios.get(`/book?id=${id}`);
};
// 修改图书
/**
 * 
 * @param id 编号
 * @param data 数据 请求体发送
 * @returns {AxiosPromise}
 */
export let updataBook = (id,data) => {
    return axios.put(`/book?id=${id}`, data);
}
export let addBook = (data) => {
    return axios.post(`/book`, data);
}

export let getAll = () => {
    return axios.all([getSliders(), getHotBook()]);
}