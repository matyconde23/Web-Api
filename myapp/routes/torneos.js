var express = require('express');
var router = express.Router();
var torneoController = require('../controllers/torneo')

router.get('/', torneoController.torneo_list);
router.get('/create', torneoController.torneo_create_get)
router.post('/create', torneoController.torneo_create_post)
router.post(':id/delete', torneoController.torneo_delete_post)
router.get('/:id/update', torneoController.torneo_update_get)
router.post('/:id/update', torneoController.torneo_update_post)

module.exports = router;