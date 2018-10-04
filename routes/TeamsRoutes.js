var express = require('express');
var router = express.Router();
var TeamsController = require('../controllers/TeamsController.js');

/*
 * GET
 */
router.get('/', TeamsController.list);

/*
 * GET
 */
router.get('/:id', TeamsController.show);

/*
 * POST
 */
router.post('/', TeamsController.create);

/*
 * PUT
 */
router.put('/:id', TeamsController.update);

/*
 * DELETE
 */
router.delete('/:id', TeamsController.remove);

module.exports = router;
