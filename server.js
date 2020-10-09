const app = require('./src/app')

const PORT = 7070

app.listen(PORT, (request, response) => {
    console.log(`O server-reprograma-blog está rodando na porta ${PORT}`)
})