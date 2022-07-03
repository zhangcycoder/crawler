const seq = require('../connect/mysql_connect'),
    { STRING, INT } = require('../../config/db_type_config')

const Teacher = seq.define('teacher', {
    tid: {
        comment: 'teacher ID',
        type: INT,
        allowNull: false,
        unique: true,
    },
    href: {
        comment: 'the link to teacher detail pace',
        type: STRING,
        allowNull: false
    },
    tacherName: {
        comment: 'teacher name',
        type: STRING,
        allowNull: false
    },
    teacherImg: {
        comment: 'teacher imageUrl',
        type: STRING,
        allowNull: false
    },
    courseCount: {
        comment: 'course count of the teacher',
        type: INT,
        allowNull: false
    },
    studentCount: {
        comment: 'student count of the teacher',
        type: INT,
        defaultValue: 1,
        allowNull: false
    },
    intro: {
        comment: 'intro  image name',
        type: STRING,
        allowNull: false
    },
    imgkey: {
        comment: 'course status',
        type: STRING,
        defaultValue: 1,
        allowNull: false
    }
})

module.exports = Teacher;