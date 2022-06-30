const pt = require('puppeteer');

; (async () => {
    //启动一个浏览器
    const brower = await pt.launch(),
        url = 'https://msiwei.ke.qq.com/#tab=0&category=-1',
        pg = await brower.newPage();//启动一个新页面
    await pg.goto(url, {
        timeout: 30 * 1000,
        waitUntil: 'networkidle2'//500毫米之内没有发起链接了表示爬取完成了
    })//打开这个新页面
    const result = await pg.evaluate(() => {
        // 这个函数内部就是页面的环境; 这个页面上有jquery 所以我们可以用
        const $ = window.$,
            $item = $('.agency-big-banner-ul .agency-big-banner-li');

        let data = [];
        $item.each((index, item) => {
            const el = $(item),
                $elLink = el.find('.js-banner-btnqq');
            const dataItem = {
                cid: $elLink.attr('data-id'),
                href: $elLink.prop('href'),
                imagUrl: $elLink.find('img').prop('src'),
                title: $elLink.prop('title')
            }
            data.push(dataItem)
        })
        return data
    });
    console.log(result, 'result')

    await brower.close();
    process.send(result);
    setTimeout(() => {
        process.exit(0)
    });
})()