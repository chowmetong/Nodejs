const http = require('http');
const server = http.createServer((req,res) =>{
    if(req.url === '/'){
        res.end('Welcome Homepage')
       
    }
    else if(req.url === '/about'){
        res.end('Welcome to the About Page')
    }
    else res.end(`<h1> Opsss No page available now</h1>
    <p> The page you are looking for Does not exist please visit our Home page</p>
    <a href="/">Home</a>
    `)
   
})

server.listen(5000)