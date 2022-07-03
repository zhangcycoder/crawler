const seq = require('../connect/mysql_connect'),
    { STRING, INT } = require('../../config/db_type_config')

const Course = seq.define('course', {
    cid: {
        comment: 'course ID',
        type: STRING,
        allowNull: false,
        unique: true
    },
    href: {
        comment: 'course title',
        type: STRING,
        allowNull: false
    },
    posterUrl: {
        comment: 'course information',
        type: STRING,
        allowNull: false
    },
    courseName: {
        comment: 'the link to open  QQ  communication',
        type: STRING,
        allowNull: false
    },
    price: {
        comment: 'poster Image URL',
        type: STRING,
        allowNull: false
    },
    studentCount: {
        comment: 'the course for  containing course IDs',
        type: STRING,
        allowNull: false
    },
    field: {
        commen: "Qiniu poster image name",
        type: STRING,
        allowNull: false
    },
    posterKey: {
        commen: "Qiniu poster image name",
        type: STRING,
        allowNull: false
    }
})

module.exports = Course;