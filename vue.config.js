module.exports = {
    devServer:{
        before(app) {
            // app是一个Express实例
            app.get('/api/courses', (req, res) => {
                setTimeout(() => {
                    res.json([{name: 'ruby语言', price: 999}, {name: 'php语言', price: 999}])
                }, 1000);
            })
        },
        // proxy: 'http://localhost:3000'
    }
}