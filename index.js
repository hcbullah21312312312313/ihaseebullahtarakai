const express = require("express");
const app = express();
app.use(express.static("public"))
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html")
})
const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});