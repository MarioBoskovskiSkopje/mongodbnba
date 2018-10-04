var express = require('express');
var router = express.Router();
var StatsController = require('../controllers/StatsController.js');

/*
 * GET
 */
router.get('/', StatsController.list);

/*
 * GET
 */
router.get('/:id', StatsController.show);

/*
 * POST
 */
router.post('/', StatsController.create);

/*
 * PUT
 */
router.put('/:id', StatsController.update);

/*
 * DELETE
 */
router.delete('/:id', StatsController.remove);

module.exports = router;
