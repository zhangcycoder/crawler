const nanoId = require('nanoid')
const cp = require('child_process'),
    { resolve } = require('path'),
    Qiniu = require('qiniu');

module.exports = {
    startProcess(options) {
        const script = resolve(__dirname, options.path),
            child = cp.fork(script, []);
        let invoke = false;

        child.on('message', (data) => {
            options.message(data);
        })

        child.on('exit', (code) => {
            if (invoke) return;
            invoke = true;
            options.exit(code);
        })

        child.on('error', err => {
            if (invoke) return;
            invoke = true;
            options.error(err)
        })
    },
    qiniuUpload(options) {
        const mac = new Qiniu.auth.digest.Mac(options.ak, options.sk),
            conf = new Qiniu.conf.Config(),
            client = new Qiniu.rs.BucketManager(mac, conf),
            key = nanoId.nanoid() + options.ext;
        return new Promise((resolve, reject) => {
            client.fetch(options.url, options.bucket, key, (error, ret, info) => {
                if (error) {
                    reject(error)
                } else {
                    if (info.statusCode === 200) {
                        resolve({ key })
                    } else {
                        reject(info)
                    }
                }
            })
        })
    }
}