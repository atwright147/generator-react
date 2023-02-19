const { camelCase, startCase } = require('lodash');

const isKebabCase = (str) => /^[a-z]+(-[a-z]+)*$/.test(str);

const isCamelCase = (str) => /^[a-z]+(?:[A-Z][a-z]+)*$/.test(str);

const pascalCase = (str) => startCase(camelCase(str)).replace(/ /g, '');

module.exports = {
  isKebabCase,
  isCamelCase,
  pascalCase,
}
