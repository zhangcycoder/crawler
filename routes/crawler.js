const router = require('koa-router')();
const crawlerController = require('../controllers/Crawler')

router.prefix('/crawler')//增加默认前缀
router.get('/crawl_slider_data', crawlerController.crawlSliderData)
router.get('/crawl_agency_info', crawlerController.crawlAgencyInfo)
router.get('/crawl_recom_course', crawlerController.crawlRecomCourse)
router.get('/crawl_collection', crawlerController.crawlCollection)
router.get('/teacher', crawlerController.crawlTeacher)
router.get('/student', crawlerController.crawlStudent)
router.get('/courseTab', crawlerController.crawlCourseTab)
module.exports = router