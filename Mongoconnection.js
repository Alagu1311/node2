const express = require("express")
const fs = require("fs")
const { type } = require("os")
const app = express()
const date = new Date()
const time=date.toUTCString.slice(0,17)
const Roomdetails = [{
    Room: "10",
    Roomsize: "40*40sq",
    Roomfacility:"FullAc,2LuxuryBeds",
},
    {
        Room: "8",
        Roomsize: "30*30sq",
         Roomfacility:"FullAc,2LuxuryBeds",
        
    },
     {
        Room: "6",
        Roomsize: "30*30sq",
         Roomfacility:"FullAc,2LuxuryBeds",
        
    },

]

app.get("/", (req, res) => {
    fs.writeFile("/Roomdetails", Roomdetails, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
    res.send(Roomdetails)
   
})
app.listen(9000, () => console.log("Hey its Working Good"))
//http://localhost9000/
const Bookedperdet = [
    {
    Name: "Ramesh",
    idproof: "Aadhar",
    RoomNo:"10",
    },
    {
     Name: "suresh",
    idproof: "Aadhar",
    RoomNo:"8",
    },
    {
     Name: "Chandru",
    idproof: "Voter Id",
    RoomNo:"6",
    }
]
app.get("Roomdetails", (req, res) => {
    fs.appendFile("/Roomdetails", Bookedperdet, (err) => {
        if (err) {
            console.log(err)
        }
    })
    res.send(Roomdetails.push(Bookedperdet,time))

})
app.get("Roomdetails", (req, res) => {
    const { Room } = req.query
    let data = roomdata;
    if (req.query) {
        if (type) {
            data=data.filter((val)=>val.type==Room)
        }
    }
    res.json(data)
})