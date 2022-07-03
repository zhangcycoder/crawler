const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.course;

crawler({
    url,
    callback() {
        const $ = window.$,
            $item = $('.course-card-list-multi-wrap .course-card-list li');
        let data = [];
        $item.each((index, item) => {
            const $el = $(item),
                $itemLK = $el.find('.item-img-link');
            const dataItem = {
                cid: $itemLK.attr('data-id'),
                href: $itemLK.prop('href'),
                posterUrl: $itemLK.find('.item-img').prop('src'),
                courseName: $itemLK.find('.item-img').prop('title'),
                price: $el.find('.item-price').text(),
                // price: $el.find('.item-price').text() === '免费' ? 0 : parseFloat($el.find('.item-price').text().slice(1)).toFixed(2),
                // description: $el.find('.item-status-step').text(),
                studentCount: parseInt($el.find('.item-user').text()),
                field: -1,
                posterKey: '',

            }
            console.log(dataItem, 'dataItem')
            data.push(dataItem)
        })
        return data;
    }
})