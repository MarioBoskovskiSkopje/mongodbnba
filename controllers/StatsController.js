var StatsModel = require('../models/StatsModel.js');

/**
 * StatsController.js
 *
 * @description :: Server-side logic for managing Statss.
 */
module.exports = {

    /**
     * StatsController.list()
     */
    list: function (req, res) {
        StatsModel.find(function (err, Statss) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Stats.',
                    error: err
                });
            }
            return res.json(Statss);
        });
    },

    /**
     * StatsController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        StatsModel.findOne({_id: id}, function (err, Stats) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Stats.',
                    error: err
                });
            }
            if (!Stats) {
                return res.status(404).json({
                    message: 'No such Stats'
                });
            }
            return res.json(Stats);
        });
    },

    /**
     * StatsController.create()
     */
    create: function (req, res) {
        var Stats = new StatsModel({
			Points : req.body.Points,
			Assists : req.body.Assists,
			Rebounds : req.body.Rebounds,
			Steals : req.body.Steals,
			Blocks : req.body.Blocks

        });

        Stats.save(function (err, Stats) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Stats',
                    error: err
                });
            }
            return res.status(201).json(Stats);
        });
    },

    /**
     * StatsController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        StatsModel.findOne({_id: id}, function (err, Stats) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Stats',
                    error: err
                });
            }
            if (!Stats) {
                return res.status(404).json({
                    message: 'No such Stats'
                });
            }

            Stats.Points = req.body.Points ? req.body.Points : Stats.Points;
			Stats.Assists = req.body.Assists ? req.body.Assists : Stats.Assists;
			Stats.Rebounds = req.body.Rebounds ? req.body.Rebounds : Stats.Rebounds;
			Stats.Steals = req.body.Steals ? req.body.Steals : Stats.Steals;
			Stats.Blocks = req.body.Blocks ? req.body.Blocks : Stats.Blocks;
			
            Stats.save(function (err, Stats) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Stats.',
                        error: err
                    });
                }

                return res.json(Stats);
            });
        });
    },

    /**
     * StatsController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        StatsModel.findByIdAndRemove(id, function (err, Stats) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Stats.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
