const seq = require('../connect/mysql_connect'),
    { STRING, INT } = require('../../config/db_type_config')

const CourseTab = seq.define('courseTab', {
    cid: {
        comment: 'course category ID',
        type: STRING,
        allowNull: false,
        unique: true
    },
    title: {
        comment: 'course tab item title',
        type: STRING,
        allowNull: false
    },
})

module.exports = CourseTab;