const reverse = require('lodash/reverse');
const sortBy = require('lodash/sortBy');

const { computeCompetitorScore } = require('../helpers/compute');
const { getDataByYear } = require('../helpers/data');

const computeResults = (year) => {
  const data = getDataByYear(year);
  return data.competitors.map(competitor => {
    return {
      name: competitor.twitter,
      score: computeCompetitorScore(competitor.twitter, data.choices, data.matchups)
    };
  });
};

const computeOrderedResults = (year) => {
  return reverse(sortBy(computeResults(year), 'score'));
};

module.exports = {
  computeResults,
  computeOrderedResults
};
