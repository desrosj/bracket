const YEAR = require('../config/year');

const getDataByYear = (desiredYear) => {
  const year = desiredYear || YEAR;

  return {
    choices: require(`../config/${year}/choices.json`),
    competitors: require(`../config/${year}/competitors.json`),
    matchups: require(`../config/${year}/matchups.json`),
    teams: require(`../config/${year}/teams.json`)
  };
}

module.exports = {
  getDataByYear
}
