const TeacherModel = require('../db/modules/teacher')
class TeacherService {
    async addTeacherata(data) {
        const tid = data.tid;
        const result = await TeacherModel.findOne({
            where: { tid }
        })
        if (result) {
            return await TeacherModel.update(data, {
                where: { tid }
            })
        } else {
            return await TeacherModel.create(data)
        }

    }
}
module.exports = new TeacherService();