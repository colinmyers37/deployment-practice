module.exports = {
    getHomePage: (req, res) => {
        res.sendFile(path.join(__dirname, '../client/index.html'))
    }
}