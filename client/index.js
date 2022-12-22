/*
-----------------------------------------------------------------------
IMPORTS AND DECLARATIONS
-----------------------------------------------------------------------
*/
const express = require("express")      // Loading the express library
const app = express()                   // Creation of the express instance
const path = require("path")            // Import path library

/*
-----------------------------------------------------------------------
SERVER HOSTING
-----------------------------------------------------------------------
*/

// Serve static files on Express
app.use(express.static('public'));

// API Routing
app.get("/", (req, res) => {
    res.sendFile("./public/login.html", { root: __dirname })
})

app.get("/profile", (req, res) => {
    res.sendFile("./public/profile.html", { root: __dirname })
})

app.get("/login", (req, res) => {
    res.sendFile("./public/login.html", { root: __dirname })
})

app.get("/searchflights", (req, res) => {
    res.sendFile("./public/searchflights.html", { root: __dirname })
})

app.get("/flightdetails", (req, res) => {
    res.sendFile("./public/flightdetails.html", { root: __dirname })
})

app.get("/signup", (req, res) => {
    res.sendFile("./public/signup.html", { root: __dirname })
})

app.get("/admin", (req, res) => {
    res.sendFile("./public/admin.html", { root: __dirname })
})

app.get("/transferflights", (req, res) => {
    res.sendFile("./public/transfers.html", { root: __dirname })
})

app.get("/cart", (req, res) => {
    res.sendFile("./public/cart.html", { root: __dirname })
})

app.get("/booking", (req, res) => {
    res.sendFile("./public/booking.html", { root: __dirname })
})

app.get("/browseFlights", (req, res) => {
    res.sendFile("./public/flights.html", { root: __dirname })
})

app.get("/promotions", (req, res) => {
    res.sendFile("./public/promotions.html", { root: __dirname })
})

app.get("/bookingHistory", (req, res) => {
    res.sendFile("./public/bookinghistory.html", { root: __dirname })
})

app.get("/request", (req, res) => {
    res.sendFile("./public/request.html", { root: __dirname })
});

app.get("*", (req, res) => {
  res.sendFile("./public/404.html", { root: __dirname });
});

const PORT = 3000
app.listen(PORT, () => {
    console.log('Server listening http://localhost:%s', PORT);
})
