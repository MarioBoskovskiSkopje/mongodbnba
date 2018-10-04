const axios = require("axios");
const TeamsController = require("./controllers/TeamsController");
const PlayersController = require("./controllers/PlayersController");

const getTeams = () => {
  axios
    .get(
      "https://raw.githubusercontent.com/shebinho/nba-lister/master/nba.json"
    )
    .then(function(response) {
      //   console.log(response.data.teams);
      let teamsArr = [];

      let teams = response.data.teams.map(el => {
        console.log(el.players[0]);
        const team = {
          Name: el.name,
          SeasonRecord: el["season-record"],
          Conference: el.conference,
          Ranking: el.ranking,
          Logo: el.logo
        };
        teamsArr.push(team);
      });

      //let players = teams[0].map(el => el.players);
      // TeamsController.create(teamsArr);
      //console.log(teamsArr);
    })
    .catch(function(error) {
      console.log(error);
    });
};

// getTeams();

const getPlayers = () => {
  axios
    .get(
      "https://raw.githubusercontent.com/shebinho/nba-lister/master/nba.json"
    )
    .then(function(response) {
      let playersArr = [];
      //   console.log(response.data.teams);
      let teams = response.data.teams;

      teams.forEach(el => {
        let players = el.players;

        players.map(el => {
          let playersData = {
            Name: el.name,
            Position: el.position,
            Img: el.img,
            Age: el.age,
            Nationality: el.nationality
          };
          playersArr.push(playersData);
        });
        PlayersController.create(playersArr);
      });
    });
};

getTeams();

module.exports = { getTeams, getPlayers };
