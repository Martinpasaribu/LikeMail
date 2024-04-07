import express  from "express";
import dotenv from "dotenv";
// add
import path from 'path'
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'


import { mongodb } from './config/mongodb.js'
import cookieParser from "cookie-parser";
import { app, server } from './socket/socket.js'


const __dirname = path.resolve();

dotenv.config();

const PORT = process.env.PORT || 5000



app.use(express.json());
app.use(cookieParser())

// app.get("/", (req,res) => {
//     res.send(" main server ")
// })


app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// add
app.use(express.static(path.join(__dirname,'/client/dist')))

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});



server.listen(PORT, () => console.log(` Server Berjalan ${PORT} `))