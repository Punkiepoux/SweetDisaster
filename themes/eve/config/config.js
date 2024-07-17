const jsonfile = require('jsonfile');
const path = require('path');

const configPath = path.resolve(__dirname, 'config.json');
const config = jsonfile.readFileSync(configPath);

module.exports = config;