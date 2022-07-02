module.exports = {
    mysql: {
        base: {
            host: 'localhost',
            dialect: 'mysql',
            poll: {
                max: 5,
                min: 0,
                idle: 10000
            }
        },
        conf: ['txclass', 'root', 'zxc123456']
    }
}
