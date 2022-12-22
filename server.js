var app = require('./controller/app.js')        // Import express server from app.js
var port = 8081                                 // Default port for HTTP

// Start the server on port 8081
var server = app.listen(port, () => {
    console.log('Web App Hosted at http://localhost:%s', port);
})