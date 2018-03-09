const path = require('path');

module.exports = {
    entry: {
        login: './Content/Scripts/Login.js'
    },
    output: {
        path: path.resolve(__dirname, 'wwwroot', 'scripts'),
        filename: '[name].js'
    }
};