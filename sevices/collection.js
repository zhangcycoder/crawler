const CollectionModel = require('../db/modules/collection');

class CollectionService {
    async addCollection(data) {
        const cid = data.cid;
        const result = await CollectionModel.findOne({
            where: { cid }
        })
        if (result) {
            return await CollectionModel.update(data, { where: { cid } })
        } else {
            return await CollectionModel.create(data)
        }
    }
}
module.exports = new CollectionService();