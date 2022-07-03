const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.main;

crawler({
    url: url,
    callback() {
        const $ = window.$,
            $section = $('.agency-head');
        return {
            logoUrl: $section.find('.agency-head-logo').prop('src'),
            name: $section.find('.agency-head-main').text(),
            feedbackRate: $section.find('.ag-info  span').eq(0).text().replace(/[^0-9]/ig, ''),
            studentCount: $section.find('.js-item-num').attr('data-num'),
            description: $section.find('.ag-info-des').text(),
            qqLink: $section.find('.ag-info-btn').prop('href'),
            logoKey: ''
        }
    }
})