import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import sequelize from "./db/connect.mjs";
const app = express();
//middleware
import notFoundMiddleware from "./middleware/not-found.mjs";
import authRouter from "./routes/auth.router.mjs";
import { db } from "./models/index.mjs";
import authJWT from "./middleware/auth.jwt.mjs";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./utils/swagger.mjs";
import { readFile } from 'fs/promises';

const myLogger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

//routers
import resRouter from "./routes/res.router.mjs";

const PORT = process.env.PORT || 5000;

app.use(myLogger);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// SwaggerDoc
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/v1/auth/", authRouter);
app.use("/api/v1/restaurant", authJWT, resRouter);

app.use(notFoundMiddleware); 

const start = async () => {
  try {
    await sequelize.connectDB();
    app.listen(PORT, () => {
      console.log(`server is running on port : ${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

// Ready to production
start();
