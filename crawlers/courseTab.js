const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.course;

crawler({
    url,
    callback() {
        const $ = window.$,
            $item = $('.course-tab-filter li');
        const data = [];
        $item.each((index, item) => {
            const $el = $(item),
                $itemLK = $el.find('.course-tab-filter-item');
            const dataItem = {
                cid: $itemLK.attr('data-id'),
                title: $itemLK.text().replace('促', '')
            }
            data.push(dataItem)
        })
        return data;
    }
})