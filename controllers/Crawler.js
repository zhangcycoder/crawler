const { startProcess, qiniuUpload } = require('../libs/utils'),
    config = require('../config/config'),
    { addAgencyInfo } = require('../sevices/AgencyInfo'),
    { addSliderData } = require('../sevices/slider');
class Crawler {
    crawlSliderData() {
        startProcess({
            path: '../crawlers/slider.js',
            async message(data) {
                data.map(async (item) => {
                    if (item.imgUrl && !item.imgKey) {
                        const qiniu = config.qiniu;
                        try {
                            const imgData = await qiniuUpload({
                                url: item.imgUrl,
                                bucket: qiniu.buket.tximg.buket_name,
                                ext: '.jpg'
                            })
                            if (imgData.key) {
                                item.imgKey = imgData.key
                            }
                            const result = await addSliderData(item)
                            if (result) {
                                console.log('data Create Ok')
                            } else {
                                console.log('data  error')
                            }
                        } catch (e) {
                            console.log(e)
                        }
                    }
                })
            },
            async exit(data) {
                console.log(data)
            },
            async error(data) {
                console.log(data)
            },
        })
    }
    crawlAgencyInfo() {
        startProcess({
            path: "../crawlers/agencyInfo.js",
            async message(data) {
                if (data.logoUrl && !data.key) {
                    const qiniu = config.qiniu;
                    try {
                        const logoData = await qiniuUpload({
                            url: data.logoUrl,
                            bucket: qiniu.buket.tximg.buket_name,
                            ext: '.jpg'
                        })
                        if (logoData.key) {
                            data.logoKey = logoData.key;
                        }
                        const result = await addAgencyInfo(data)
                        if (result) {
                            console.log('agencyInfo data Create  Ok')
                        } else {
                            console.log('addAgencyInfo error')
                        }
                    } catch (error) {
                        console.log('crawlAgencyInfo upload error', error)
                    }
                }

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