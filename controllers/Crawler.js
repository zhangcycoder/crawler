const { startProcess, qiniuUpload } = require('../libs/utils'),
    config = require('../config/config'),
    { addAgencyInfo } = require('../sevices/AgencyInfo'),
    { addRecomCourse } = require('../sevices/recomCourse'),
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
    async crawlRecomCourse() {
        startProcess({
            path: '../crawlers/recomCourse.js',
            async message(data) {
                console.log(data, 'data')
                const qiniu = config.qiniu;
                try {
                    data.map(async (item) => {
                        if (item.posterUrl && !item.posterKey) {
                            const posterData = await qiniuUpload({
                                url: item.posterUrl,
                                bucket: qiniu.buket.tximg.buket_name,
                                ext: '.jpg'
                            })
                            if (posterData.key) {
                                item.posterKey = posterData.key
                            }
                        }
                        if (item.teacherImg && !item.teacherImgKey) {
                            const teacherImgData = await qiniuUpload({
                                url: item.teacherImg,
                                bucket: qiniu.buket.tximg.buket_name,
                                ext: '.jpg'
                            })
                            if (teacherImgData.key) {
                                item.teacherImgKey = teacherImgData.key
                            }
                        }
                        const result = await addRecomCourse(item)
                        if (result) {
                            console.log('addRecomCourse data Create  Ok')
                        } else {
                            console.log('addRecomCourse error')
                        }
                    })
                } catch (e) {
                    console.log('catchError', e)
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