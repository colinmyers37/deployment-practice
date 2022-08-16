const express = require("express")
const cors = require("cors")
const path = require("path")
const app = express()

const { getHomePage } = require("./controller/controller")

app.use(cors())
app.use(express.json())
app.use(express.static('client'))

PORT = 4000

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'))
// })
app.get('/', getHomePage)










app.listen(4000,console.log(`Server is running on port ${PORT}`));