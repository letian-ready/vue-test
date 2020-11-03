export default store => {
    // store初始化的时候，将存储在localStoreage中的状态还原
    if (localStorage) {
        // JSON.parse反序列化
        const user = JSON.parse(localStorage.getItem('user'))
        if (user) {
            store.commit('user/login', user.username)
        }
    }

    // 如果用户相关状态发生状态变化，自动存入localStoreage\
    // subscribe订阅，监听mutation的变化
    store.subscribe((mutation, state) => {
        // {type: 'user/login'}
        // {type: 'user/logout'}
        // {type: 'cart/addCart'}
        if (mutation.type === 'user/login'){
            // stringify序列化
            const user = JSON.stringify(state.user)
            localStorage.setItem('user', user)
        } else if (mutation.type === 'user/logout') {
            localStorage.removeItem('user')
        }
    })
}