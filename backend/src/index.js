import express from "express";
import "dotenv/config";
// import dotenv from "dotenv";
// dotenv.config();
import cors from "cors";
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/db.js";
import { app, server } from "./lib/socket.js";
import path from "path";

const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend" , "dist", "index.html"))
  });
}

server.listen(PORT, () => {
  connectDB();
  console.log(`Server started on port http://localhost:${PORT}`);
});
