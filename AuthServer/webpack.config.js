const path = require('path');

const config = {
    entry: {
        login: './Content/Scripts/Login.js'
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot', 'scripts'),
        filename: '[name].js'
    }
};

module.exports = config;