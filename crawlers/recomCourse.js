const crawler = require('../libs/crawler'),
    config = require('../config/config');
const url = config.qiniu.crawler.url.main;

crawler({
    url,
    callback() {
        const $ = window.$,
            $item = $('.spread-course-ul li'),
            mainTitle = $('.agency-spread-wrap h4').text();
        const data = [];
        $item.each((index, item) => {
            const $el = $(item),
                $itemLK = $el.find('a');
            const dataItem = {
                href: $itemLK.prop('href'),
                mainTitle,
                title: $itemLK.prop('title'),
                posterUrl: $itemLK.find('.spread-course-cover').prop('src'),
                description: $el.find('.spread-course-des').text(),
                teacherImg: $el.find('.spread-course-face img').prop('src'),
                teacherName: $el.find('.spread-course-face span').eq(0).text(),
                studentCount: $el.find('.spread-course-face span').eq(1).text().replace(/[^0-9]/ig, ''),
                price: $el.find('.spread-course-price').text().slice(1),
                posterKey: '',
                teacherImgKey: ''
            }
            data.push(dataItem)
        })
        return data;
    }
})