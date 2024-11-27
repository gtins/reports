const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

// Rotas para lidar com os relatórios
router.post('/create', reportController.createReport);
router.get('/list', reportController.listReports);
// Adicione outras rotas conforme necessário

module.exports = router;
