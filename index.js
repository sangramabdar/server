const Express = require("express");
const path = require("path");

const app = Express();

app.use(Express.static(path.join(__dirname + "/frontend/build")));

app.use((req, res) => {
    res.json({
        message: "hello",
    });
});

app.listen(3000, () => {
    console.log("server is running");
});