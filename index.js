import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import RecipeRoute from "./Routers/RecipeRoute.js";


//dotenv config

dotenv.config();

//express initialization

const app = express();

//default middleware

app.use(express.json());

app.use(cors());

//default route

app.get("/", (req, res) => {
  res.status(200).send("Welcome to Backend");
});

//custom routes

app.use("/api/Recipe", RecipeRoute);

//port

const port = process.env.PORT || 5000;

//server starting

app.listen(port, () => {
  console.log("server started");
});