const express = require("express")
const weather = require("./api/weather")
const router = express.Router()
const path = "localhost:8080"


router.get("/", (req,res) => {
    return res.json({menssage :"hello, application is running!!!"})
})

router.get("/search", async (req, res) => {
    const url =  new URL(path + req.url)
    city = url.searchParams.get("city")

    return res.json(await weather(city))
})

module.exports = router