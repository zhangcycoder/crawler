const { startProcess, qiniuUpload } = require('../libs/utils'),
    config = require('../config/config')
class Crawler {
    crawlSliderData() {
        startProcess({
            path: '../crawlers/slider.js',
            async message(data) {
                console.log(1)
                data.map(async (item) => {
                    if (item.imgUrl && !item.key) {
                        const qiniu = config.qiniu;
                        try {
                            const imgData = await qiniuUpload({
                                url: item.imgUrl,
                                bucket: qiniu.buket.tximg.buket_name,
                                ak: qiniu.keys.ak,
                                sk: qiniu.keys.sk,
                                ext: '.jpg'
                            })
                            if (imgData.key) {
                                item.imgKey = imgData.key
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }
                })
                console.log(data, 'data')
            },
            async exit(data) {
                console.log(data)
            },
            async error(data) {
                console.log(data)
            },
        })
    }
}

module.exports = new Crawler();