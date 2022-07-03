const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.main;
crawler({
    url: url,
    callback() {
        const $ = window.$,
            $item = $('.stu');
        const data = [];
        $item.each((index, item) => {
            const $el = $(item);
            const dataItem = {
                sid: index + 1,
                studentImg: $el.find('.stu-img').prop('src'),
                studentName: $el.find('.stu-img').prop('alt'),
                intro: $el.find('.stu-main-cnt').text(),
                courseName: $el.find('.stu-main-tit').prop('title'),
                coursLink: $el.find('.stu-main-tit').prop('href'),
                studentImgKey: ''
            }
            data.push(dataItem)
        })
        return data
    }
})