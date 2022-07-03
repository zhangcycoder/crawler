const seq = require('../connect/mysql_connect'),
    { STRING, INT } = require('../../config/db_type_config')

const AgencyInfo = seq.define('agency_info', {
    logoUrl: {
        comment: 'logo img url',
        type: STRING,
        allowNull: false
    },
    name: {
        comment: 'agency name',
        type: STRING,
        allowNull: false
    },
    feedbackRate: {
        comment: 'feedback rate',
        type: STRING,
        allowNull: false
    },
    studentCount: {
        comment: 'student total count',
        type: INT,
        allowNull: false
    },
    description: {
        comment: 'Agency slogan',
        type: STRING,
        allowNull: false
    },
    qqLink: {
        comment: 'QQ infomarion link',
        type: STRING,
        allowNull: false
    },
    logoKey: {
        commen: "Qiniu logo image name",
        type: STRING,
        allowNull: false
    }
})

module.exports = AgencyInfo;