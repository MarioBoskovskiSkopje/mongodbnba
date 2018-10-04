var TeamsModel = require("../models/TeamsModel.js");

/**
 * TeamsController.js
 *
 * @description :: Server-side logic for managing Teamss.
 */
module.exports = {
  /**
   * TeamsController.list()
   */
  list: function(req, res) {
    TeamsModel.find(function(err, Teamss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Teams.",
          error: err
        });
      }
      return res.json(Teamss);
    });
  },

  /**
   * TeamsController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    TeamsModel.findOne({ _id: id }, function(err, Teams) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Teams.",
          error: err
        });
      }
      if (!Teams) {
        return res.status(404).json({
          message: "No such Teams"
        });
      }
      return res.json(Teams);
    });
  },

  /**
   * TeamsController.create()
   */
  create: function(req, res) {
    req.forEach(element => {
      console.log("req", element);
      let Teams = new TeamsModel({
        Name: element.Name,
        SeasonRecord: element.SeasonRecord,
        Conference: element.Conference,
        Ranking: element.Ranking,
        Logo: element.Logo
      });
      //   Teams.save(function(err, Teams) {
      //     if (err) {
      //       return res.status(500).json({
      //         message: "Error when creating Teams",
      //         error: err
      //       });
      //     }
      //     return res.status(201).json(Teams);
      //   });

      Teams.save();
    });
  },

  /**
   * TeamsController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    TeamsModel.findOne({ _id: id }, function(err, Teams) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Teams",
          error: err
        });
      }
      if (!Teams) {
        return res.status(404).json({
          message: "No such Teams"
        });
      }

      Teams.Name = req.body.Name ? req.body.Name : Teams.Name;
      Teams.SeasonRecord = req.body.SeasonRecord
        ? req.body.SeasonRecord
        : Teams.SeasonRecord;
      Teams.Conference = req.body.Conference
        ? req.body.Conference
        : Teams.Conference;
      Teams.Ranking = req.body.Ranking ? req.body.Ranking : Teams.Ranking;
      Teams.Logo = req.body.Logo ? req.body.Logo : Teams.Logo;

      Teams.save(function(err, Teams) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Teams.",
            error: err
          });
        }

        return res.json(Teams);
      });
    });
  },

  /**
   * TeamsController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    TeamsModel.findByIdAndRemove(id, function(err, Teams) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Teams.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
