import express from "express";
const app = express();
import { connect } from "./config/database.js";

const PORT = 8000;

app.use(express.json());
app.use( async (req, res, next) => {
  try {
    await connect();
    next();
  } catch (err) {
    console.log("Error while connecting to database: ", err);
    res.status(500).json({
      error: true,
      msg: "Internal server error",
    });
  }
});

import userRoutes from "./routes/users.js";
import postRoutes from "./routes/post.js";
app.use("/user", userRoutes);
app.use("/post", postRoutes);

app.listen(PORT, () => {
  console.log("server is up and running on port:" + PORT);
});
