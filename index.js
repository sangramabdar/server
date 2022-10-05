const Express = require("express");
const path = require("path");
const cors = require("cors");

const app = Express();

app.use(cors());

app.use(Express.static(path.join(__dirname + "/frontend/build")));

app.use((req, res) => {
    res.json({
        message: "hello",
    });
});

app.listen(4000, () => {
    console.log("server is running");
});