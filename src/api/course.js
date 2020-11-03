import axios from 'axios'

// // 模拟异步数据的调用
// export function getCourses(){
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve([{name: 'ruby语言从入门到精通', price: 999}, {name: 'php语言快速建站', price: 999}])
//         }, 2000);
//     })
// }

export function getCourses() {
    return axios.get('/api/courses').then( res => res.data)
}