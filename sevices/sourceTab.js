const SourceModel = require('../db/modules/courseTab')
class SourceService {
    async addSourceTabData(data) {
        const cid = data.cid;
        const result = await SourceModel.findOne({
            where: { cid }
        })
        if (result) {
            return await SourceModel.update(data, {
                where: { cid }
            })
        } else {
            return await SourceModel.create(data)
        }

    }
}
module.exports = new SourceService();