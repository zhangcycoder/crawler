const router = require('koa-router')();
const crawlerController = require('../controllers/Crawler')

router.prefix('/crawler')//增加默认前缀
router.get('/crawl_slider_data', crawlerController.crawlSliderData)
module.exports = router