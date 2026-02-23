import express, { json } from "express";
const app = express();
app.use(json());

import noteRoutes from "./routes/notes.routes.js";
import authRoutes from "./routes/auth.routes.js";

app.get("/", (req, res) => {
    res.send("Homepage");
});

app.get("/health", (req, res) => {
    res.send("ok");
});

app.use("/notes", noteRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
