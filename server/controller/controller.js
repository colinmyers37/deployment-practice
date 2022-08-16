const path = require("path")

module.exports = {
    getHomePage: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/index.html'))
    },
    getCss: (req, res) => {
        res.sendFile(path.join(__dirname, '../../client/style.css'))
    }
}