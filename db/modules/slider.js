const seq = require('../connect/mysql_connect'),
    { STRING, INT } = require('../../config/db_type_config')

const Slider = seq.define('slider', {
    cid: {
        comment: 'course id',
        type: STRING,
        allowNull: false,
        unique: true,
    },
    href: {
        comment: 'course detail page lin',
        type: STRING,
        allowNull: false
    },
    title: {
        comment: 'course detail page lin',
        type: STRING,
        allowNull: false
    },
    imgUrl: {
        comment: 'course  name',
        type: STRING,
        allowNull: false
    },
    imgKey: {
        comment: 'qiniu  image name',
        type: STRING,
        allowNull: false
    },
    status: {
        comment: 'course status',
        type: INT,
        defaultValue: 1,
        allowNull: false
    }
})

module.exports = Slider;