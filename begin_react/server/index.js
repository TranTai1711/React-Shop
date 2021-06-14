import express from "express";
import cors from "cors";
import posts from "./routes/posts.js"
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 5000;

const URL = 'mongodb+srv://sa:0937854171@cluster0.a1pef.mongodb.net/beginReact?retryWrites=true&w=majority';

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Connect");
        app.listen(PORT, () => {
            console.log("Server run");
        })
    })
    .catch((err) => {
        console.log("err", err)
    })

app.use('/post', posts);

