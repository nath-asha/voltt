import * as dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
const cors = require('cors');
import projectRoutes from "./routes/projectsRoutes";
import serviceRoutes from "./routes/servicesRoutes";
import testimonialRoutes from "./routes/testimonialRoutes";
import contactRoutes from "./routes/contactRoutes";
import userRoutes from "./routes/usersRoute";
import routers from "./routes/aboutRoutes";
import faqRoutes from "./routes/faqRoutes";
// import { authenticateJWT, CustomRequest } from './routes/auth.middleware';
import { Request, Response, NextFunction } from 'express'; 
import jwt from 'jsonwebtoken';
import cors from 'cors'; 
// import {upload} from './routes/mutler';
import multer, { Multer } from 'multer';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

const SECRET_KEY = process.env.SECRET_KEY;
const REFRESH_SECRET_KEY = process.env.REFRESH_SECRET_KEY;
// const app = express();
// const port = 3000;

app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001' }));
const mongoURI = process.env.MONGO;

mongoose
  .connect(mongoURI as string)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.use("/papi", projectRoutes);
app.use("/sapi", serviceRoutes);
app.use("/tapi", testimonialRoutes);
app.use("/capi", contactRoutes);
app.use("/api", userRoutes);
app.use("/api",userRoutes);
app.use("/api", userRoutes);
app.use("/api",routers);
app.use("/api",faqRoutes);

app.post('/refresh-token', (req: Request, res: Response) => {

  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ error: 'Refresh token missing' });
  }

  try {
    
    const decoded = jwt.verify(refreshToken, REFRESH_SECRET_KEY as jwt.Secret);

    interface JwtPayload {
      userId: string;
    }    
    
    const payload = { userId: (decoded as JwtPayload).userId };

    const newAccessToken = jwt.sign(payload, SECRET_KEY as jwt.Secret, { expiresIn: '15m' });


    res.status(200).json({ accessToken: newAccessToken });
  } catch (error) {
    
    return res.status(401).json({ error: 'Invalid refresh token' });
  }
});


// app.use('/projects', authenticateJWT, serviceRoutes); 
// // app.use('/auth', authRoutes); 
// app.use('/upload', (upload as any).single('file'));



app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
