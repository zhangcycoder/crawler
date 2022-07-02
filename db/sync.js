const seq = require('./connect/mysql_connect.js');
require('./modules');

seq.authenticate().then((req) => {
    console.log('MySQL server is connected completely')
}).catch((error) => {
    console.log('MySQL seerver  is failed to be connected. Error info', error)
})

seq.sync({
    force: true
}).then(() => {
    console.log('The table has  been synchronised into database successfully');
    process.exit()
}).catch((e) => {
    console.log('The table error info', e)
})