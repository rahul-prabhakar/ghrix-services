const router = require('express').Router();
const emp_controller = require('../controller/emp.controller');

router.put('/password', emp_controller.changePassword)
router.post('/entry', emp_controller.entry)

module.exports = router;