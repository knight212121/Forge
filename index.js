const express = require("express");
const app = express();
app.use(express.json());

const noteRoutes = require("./routes/notes.routes");

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.get("/health", (req, res) => {
    res.send("ok");
});

app.use("/notes", noteRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
