//      --libraries--       //
const express = require("express");
const prisma = require("@prisma/client")
const admin = require("firebase-admin")

const firebaseAuth = require("./auth.json")
const firebase = admin.initializeApp({
    credential: admin.credential.cert(firebaseAuth)
});


const app = express();

//      --Middleware--      //
app.use(express.json());

//      --Routes--      //


const convertToRadians = (coord) => {
    return Math.PI / 180 * coord
}

const checkIfInRadius = (lat1, lon1, lat2, lon2, radius) => {
    const earthRadiusKm = 6371;
  
    const dLat = degreesToRadians(lat2-lat1);
    const dLon = degreesToRadians(lon2-lon1);
  
    lat1 = degreesToRadians(lat1);
    lat2 = degreesToRadians(lat2);
  
    const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    return earthRadiusKm * c <= radius;
  }
  


app.get("/get_reports/:radius:longitude:latitude",async (req, res) => {
    const {radius, longitude, latitude, token} = req.params
    //admin.auth().verifyIdToken(token).then(() => res.send(radius))
    const result = await prisma.report.findMany({})
    res.send(result.filter((report) => checkIfInRadius(latitude, longitude, report.latitude, report.longitude, radius)))
})

//      --server start--      //

app.listen(5000, () => {
    console.log("server has started");
})