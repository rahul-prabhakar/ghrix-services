const router = require('express').Router();
const hr_controller = require('../controller/hr.controller');

router.post('/employee', hr_controller.addEmployee);
router.get('/employee/:id', hr_controller.getEmployee);
router.delete('/employee/:id', hr_controller.delEmployee);
router.put('/employee/:id', hr_controller.updateEmployee);
router.get('/employee/', hr_controller.getAllEmployees);
router.post('/employee/searches', hr_controller.searchEmployee);

module.exports = router;