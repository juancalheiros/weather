const app = require("./app")

const PORT = 5000
const HOST = "0.0.0.0"

app.listen(PORT, HOST,() => {
    console.log("Serve rodando na porta 8080")
})