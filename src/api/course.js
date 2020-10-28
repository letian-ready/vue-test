// 模拟异步数据的调用
export function getCourses(){
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([{name: 'ruby语言从入门到精通'}, {name: 'php语言快速建站'}])
        }, 2000);
    })
}