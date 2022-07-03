const { startProcess, qiniuUpload } = require('../libs/utils'),
    { qiniu } = require('../config/config'),
    { addAgencyInfo } = require('../sevices/AgencyInfo'),
    { addRecomCourse } = require('../sevices/recomCourse'),
    { addCollection } = require('../sevices/collection'),
    { addTeacherata } = require('../sevices/teacher'),
    { addStudentData } = require('../sevices/student'),
    { addSourceTabData } = require('../sevices/sourceTab'),
    { addCourseData } = require('../sevices/course'),
    { addSliderData } = require('../sevices/slider');
class Crawler {
    crawlSliderData() {
        startProcess({
            path: '../crawlers/slider.js',
            async message(data) {
                data.map(async (item) => {
                    if (item.imgUrl && !item.imgKey) {
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
    crawlCollection() {
        startProcess({
            path: "../crawlers/collection.js",
            async message(data) {
                data.map(async (item, index) => {
                    try {
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
                        const result = await addCollection(item)
                        if (result) {
                            console.log('addRecomCourse data Create  Ok')
                        } else {
                            console.log('addRecomCourse error')
                        }
                    } catch (error) {
                        console.log('catchError', error)
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

    crawlTeacher() {
        startProcess({
            path: "../crawlers/teacher.js",
            async message(data) {
                data.map(async (item, index) => {
                    try {
                        if (item.teacherImg && !item.imgkey) {
                            const teacherImgData = await qiniuUpload({
                                url: item.teacherImg,
                                bucket: qiniu.buket.tximg.buket_name,
                                ext: '.jpg'
                            })
                            if (teacherImgData.key) {
                                item.imgkey = teacherImgData.key
                            }
                        }
                        const result = await addTeacherata(item)
                        if (result) {
                            console.log('addTeacherata data Create  Ok')
                        } else {
                            console.log('addTeacherata error')
                        }
                    } catch (error) {
                        console.log('catchError', error)
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
    crawlStudent() {
        startProcess({
            path: "../crawlers/student.js",
            async message(data) {
                data.map(async (item, index) => {
                    try {
                        if (item.studentImg && !item.studentImgKey) {
                            const studentImgData = await qiniuUpload({
                                url: item.studentImg,
                                bucket: qiniu.buket.tximg.buket_name,
                                ext: '.jpg'
                            })
                            if (studentImgData.key) {
                                item.studentImgKey = studentImgData.key
                            }
                        }
                        const result = await addStudentData(item)
                        if (result) {
                            console.log('addStudentData data Create  Ok')
                        } else {
                            console.log('addStudentData error')
                        }
                    } catch (error) {
                        console.log('catchError', error)
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
    crawlCourseTab() {
        startProcess({
            path: "../crawlers/courseTab.js",
            async message(data) {
                try {
                    data.map(async (item, index) => {
                        const result = await addSourceTabData(item)
                        if (result) {
                            console.log('addSourceTabData data Create  Ok')
                        } else {
                            console.log('addSourceTabData error')
                        }
                    })
                } catch (error) {
                    console.log('catchError', error)
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

    crawlCourseData() {
        startProcess({
            path: "../crawlers/course.js",
            async message(data) {
                try {
                    console.log(data, 'data')
                    data.map(async (item, index) => {
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
                        const result = await addCourseData(item)
                        if (result) {
                            console.log('addCourseData data Create  Ok')
                        } else {
                            console.log('addCourseData error')
                        }
                    })
                } catch (error) {
                    console.log('catchError', error)
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