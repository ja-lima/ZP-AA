const express = require("express")
const server = express()

//config pasta publica
server.use(express.static("public"))

//template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//caminhos da aplicação
server.get("/", (req, res) => {
    return res.render("index.html")
})

server.get("/quemSomos", (req, res) => {
    return res.render("quemSomos.html")
})

server.get("/servicos", (req, res) => {
    return res.render("servicos.html")
})

//ligar servidor
const port = process.env.PORT || 3000

server.listen(port)