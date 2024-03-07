require ('express');
const department = require('../Models/department');

async function listDepartments(req, res) {
    try {
        await department.findAll({
            attributes: [
                'DepartmentId',
                'DepartmentName'
            ],
            order: ['DepartmentName']
        }).then(function (data) {
            return res.status(200).json({
                data: data
            });
        }).catch(error => {
            return res.status(400).json({
                error: error
            });
        });
    } catch (error) {
        return res.status(400).json({
            error: error
        });
    }
}