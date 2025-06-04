const http = require('http');
const url = require('url');
const fs = require('fs');

const myServer = http.createServer( (req, res) => {
    if(req.url === '/favicon.ico') return res.end();
    const log = `${Date.now()} : ${req.url} New Request Received...\n`;
    const myUrl = url.parse(req.url, true);
    console.log("My Url : ", myUrl);
    fs.appendFile('log.txt', log, (err, data) => {
        // if (err) return console.log('Error!', err);

        switch(myUrl.pathname){
            case "/": 
                    res.end("Homepage");
                    break;
            case "/about": 
                    const username = myUrl.query.myname;
                    const age = myUrl.query.age;
                    // res.end("About Page");
                    res.end(`Hi, ${username} - age : ${age}`);
                    break;
            default: res.end("404 Not Found!");
        }
    });
});

const port = 3000;
myServer.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
