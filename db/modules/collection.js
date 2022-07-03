const seq = require('../connect/mysql_connect'),
    { STRING, INT } = require('../../config/db_type_config')

const Collection = seq.define('collection', {
    cid: {
        comment: 'collection ID',
        type: INT,
        allowNull: false,
        unique: true
    },
    title: {
        comment: 'collection title',
        type: STRING,
        allowNull: false
    },
    info: {
        comment: 'collection information',
        type: STRING,
        allowNull: false
    },
    qqQunLink: {
        comment: 'the link to open  QQ  communication',
        type: STRING,
        allowNull: false
    },
    posterUrl: {
        comment: 'poster Image URL',
        type: STRING,
        allowNull: false
    },
    courseIdList: {
        comment: 'the collection for  containing course IDs',
        type: STRING,
        allowNull: false
    },
    posterKey: {
        commen: "Qiniu poster image name",
        type: STRING,
        allowNull: false
    }
})

module.exports = Collection;