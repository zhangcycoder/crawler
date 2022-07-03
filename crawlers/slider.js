const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.main;
crawler({
    url: url,
    callback() {
        const $ = window.$,
            $item = $('.agency-big-banner-ul .agency-big-banner-li');

        const data = [];
        $item.each((index, item) => {
            const $el = $(item),
                $elLink = $el.find('.js-banner-btnqq');

            const dataItem = {
                cid: $elLink.attr('data-id'),
                href: $elLink.prop('href'),
                title: $elLink.prop('title'),
                imgUrl: $elLink.find('img').prop('src'),
                imgKey: ''
            }
            data.push(dataItem)
        })
        return data;
    }
})