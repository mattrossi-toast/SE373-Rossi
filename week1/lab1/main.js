var fileSystem=require('fs'), http=require('http'), url=require('url');
http.createServer((request, response) => {
    var pathName = url.parse(request.url).pathname;
    var fileName = pathName.substr(1);
    var contentType; 
    var reg = /json$/i;
    
    if(reg.test(fileName)){
        contentType="application/json"
    } else{
        contentType="text/html"
    }
    fileSystem.readFile(fileName , (err, data) => {
        if (err){ 
        /* Send the HTTP header
        * HTTP Status: 301 : Moved Permanently
        * Location:'http://' +  'The host of the requested location' + the path to the page that you want to be redirected to.
        */
        response.writeHead(301, {'Location': "http://" + request.headers['host'] + '/index.html' });
        response.end();
        }
        if(data){
        response.writeHead(200, {'Content-Type': contentType}); 
        response.write(data.toString());  
        response.end();
        }
    });
}).listen(3000);