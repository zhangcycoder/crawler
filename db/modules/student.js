const seq = require('../connect/mysql_connect'),
    { STRING, INT } = require('../../config/db_type_config')

const Student = seq.define('student', {
    sid: {
        comment: 'student id',
        type: INT,
        allowNull: false,
        unique: true,
    },
    studentImg: {
        comment: 'student detail page lin',
        type: STRING,
        allowNull: false
    },
    studentName: {
        comment: 'student detail page lin',
        type: STRING,
        allowNull: false
    },
    intro: {
        comment: 'student  name',
        type: STRING,
        allowNull: false
    },
    courseName: {
        comment: 'qiniu  image name',
        type: STRING,
        allowNull: false
    },
    coursLink: {
        comment: 'student status',
        type: STRING,
        allowNull: false
    },
    studentImgKey: {
        comment: 'qiniu  image name',
        type: STRING,
        allowNull: false
    }
})

module.exports = Student;