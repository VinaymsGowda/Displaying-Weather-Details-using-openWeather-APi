import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import axios from "axios";
import bodyParser from "body-parser";

const app=express();
const port=3000;
const apiKey=process.env.API_KEY;
const __dirname=dirname(fileURLToPath(import.meta.url));
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
const baseurl="https://api.openweathermap.org";

app.get("/",async (req,res)=>{
    try {

        //geo coding lat and long
        const response=await axios.get(baseurl+`/geo/1.0/direct?q=Chennai,TamilNadu,India&limit=110&appid=${apiKey}`)
        let lat=response.data[0].lat;
        let long=response.data[0].lon;
        const read=await axios.get(baseurl+`/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
        res.render("index.ejs",{content:(read.data),city:(response.data[0])});
    } catch (error) {
            console.log(error);
    }
})

app.post("/show-weather",async(req,res)=>{
    let country=req.body.country;
    let state=req.body.state;
    let city=req.body.city;
    try {
        const response=await axios.get(baseurl+`/geo/1.0/direct?q=${city},${state},${country}&limit=110&appid=${apiKey}`);
        var lat=response.data[0].lat;
        var long=response.data[0].lon;
        const read=await axios.get(baseurl+`/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`);
        res.render("index.ejs",{content:(read.data),city:(response.data[0])});
    } catch (error) {
     console.log(error.message);
    }
});

// lat and long based city name
// app.get("/",async (req,res)=>{

//     try {
//         const response=await axios.get(baseurl+"/data/2.5/weather?lat=12.831595&lon=77.544352&appid=264e528ba50643db8422ef773b713dcb");
//         res.render("index.ejs",{content:JSON.stringify(response.data)});
//         console.log(response.data.name);
//     } catch (error) {
//         console.error(error.response.data);
//     }
// });

app.listen(port,()=>{
    console.log("Server running on port "+port);
})