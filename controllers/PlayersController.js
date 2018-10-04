var PlayersModel = require("../models/PlayersModel.js");
let TeamsModel = require("../models/TeamsModel");

/**
 * PlayersController.js
 *
 * @description :: Server-side logic for managing Playerss.
 */
module.exports = {
  /**
   * PlayersController.list()
   */
  list: function(req, res) {
    PlayersModel.find(function(err, Playerss) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Players.",
          error: err
        });
      }
      return res.json(Playerss);
    });
  },

  /**
   * PlayersController.show()
   */
  show: function(req, res) {
    var id = req.params.id;
    PlayersModel.findOne({ _id: id }, function(err, Players) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Players.",
          error: err
        });
      }
      if (!Players) {
        return res.status(404).json({
          message: "No such Players"
        });
      }
      return res.json(Players);
    });
  },

  /**
   * PlayersController.create()
   */
  create: function(req, res) {
    req.forEach(element => {
      console.log("req", element);
      let Players = new PlayersModel({
        Name: element.Name,
        Position: element.Position,
        Age: element.Age,
        Img: element.Img,
        Nationality: element.Nationality
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
      Players.save();
    });
  },

  /**
   * PlayersController.update()
   */
  update: function(req, res) {
    var id = req.params.id;
    PlayersModel.findOne({ _id: id }, function(err, Players) {
      if (err) {
        return res.status(500).json({
          message: "Error when getting Players",
          error: err
        });
      }
      if (!Players) {
        return res.status(404).json({
          message: "No such Players"
        });
      }

      Players.Name = req.body.Name ? req.body.Name : Players.Name;
      Players.Position = req.body.Position
        ? req.body.Position
        : Players.Position;
      Players.Age = req.body.Age ? req.body.Age : Players.Age;
      Players.Nationality = req.body.Nationality
        ? req.body.Nationality
        : Players.Nationality;
      Players.Img = req.body.Img ? req.body.Img : Players.Img;

      Players.save(function(err, Players) {
        if (err) {
          return res.status(500).json({
            message: "Error when updating Players.",
            error: err
          });
        }

        return res.json(Players);
      });
    });
  },

  /**
   * PlayersController.remove()
   */
  remove: function(req, res) {
    var id = req.params.id;
    PlayersModel.findByIdAndRemove(id, function(err, Players) {
      if (err) {
        return res.status(500).json({
          message: "Error when deleting the Players.",
          error: err
        });
      }
      return res.status(204).json();
    });
  }
};
