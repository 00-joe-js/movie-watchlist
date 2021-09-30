const express = require("express");
const app = express();

const PORT = 8080;

const dbConnection = require("./db");

const startServer = async () => {
    await dbConnection.sync();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}!~`);
    });
};
startServer();


app.get("/", (req, res) => {
    res.send("Hello :)");
});