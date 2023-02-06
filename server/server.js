const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
    //console.log(req.url, req.method); 

    // set header content type
    //res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about': 
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me': 
            res.statusCode = 301;// redirect 
            res.setHeader('Location', './about');
            res.end();
            break;
        default: 
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);
            // res.end();
            // res.statusCode = 200;  // to check status 
            res.end(data); // if we are using once 
        }
    });

    // res.write('<h2>Engineer Brother.</h2>');
    // res.write('<p>hello from omar.</p>');
    //res.end();
});

server.listen(3000, 'localhost', ()=>{
    console.log('listening for requests on port 3000');
});
