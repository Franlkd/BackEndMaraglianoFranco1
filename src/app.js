const express = require('express');

const usersRouter = require("./routes/user.router.js")

const app = express()

const PORT = 8080

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


app.use("/", usersRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

app.get("/bienvenida", (req,res) => {
    const usuario = {
        user: "Franco",
        password: "123"
    }
    res.send(usuario)
})

