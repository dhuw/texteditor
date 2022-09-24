const path = require('path');

module.exports = (app) =>
    app.get('/', (req, res) =>
        res.sendFiles(path.join(__dirname, '../client/dist/index.html'))
    );

//back to normal