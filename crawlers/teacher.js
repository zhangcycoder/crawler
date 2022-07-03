const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.teacher;
crawler({
    url: url,
    callback() {
        const $ = window.$,
            $item = $('.tea');
        const data = [];

        $item.each((index, item) => {
            const $el = $(item);
            const dataItem = {
                tid: index + 1,
                href: $el.find('.tea-face').prop('href'),
                tacherName: $el.find('.tea-face').prop('title'),
                teacherImg: 'http:' + $el.find('.tea-img').attr('lazy-src'),
                courseCount: parseInt($el.find('.tea-main-sub span').eq(0).text().replace(/[^0-9]/ig, '')),
                studentCount: parseInt($el.find('.tea-main-num').text().replace(/[^0-9]/ig, '')),
                intro: $el.find('.tea-main-cnt').prop('title'),
                imgkey: ''
            }
            data.push(dataItem)
        })
        return data
    }
})