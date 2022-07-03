const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.main;

crawler({
    url,
    callback() {
        const $ = window.$,
            $item = $('.agency-recommend-course');
        let data = [];
        $item.each((index, item) => {
            const $el = $(item);
            let dataItem = {
                cid: index + 1,
                title: $el.find('.recommend-course-title span').eq(0).text().replace(/(\s|更多)/gim, ''),
                info: $el.find('.rec-group-info').text(),
                qqQunLink: $el.find('.rec-group-join').prop('href'),
                posterUrl: $el.find('.rec-group-mask').css('background-image').match(/\("(.+?)"\)/)[1],
                courseIdList: '',
                posterKey: ''
            }
            let _idList = []
            const $courseItem = $el.find('.course-card-item');
            $courseItem.each((index, item) => {
                const $elem = $(item)
                _idList.push($elem.find('.item-img-link').attr('data-id'));
            })
            dataItem.courseIdList = _idList.toString()
            data.push(dataItem)
        })
        return data;
    }
})