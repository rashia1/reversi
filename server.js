/* Include the static file webserver library*/
var static = require ('node-static');

/* Include the http server libaray */
var http = require('http');

/* Assume that we are running on Heroku */
var port = process.env.port;
var directory = __dirname + '/public';

/* If we aren't on Heroku, then we need to readjust the port and directory
* information and we know that because port won't be set */
if(typeof port == "undefind' || !port){
    directory = './public';
    port = 8080;
}
*/Set up a static web-server that will deliver files from the filesystem */
var file = new static.Server(directory);

*/ Construct an http server that gets files from the file server */
var app = http.createServer(
    fuction(request,response){
        request.addListener('end',
            fuction(){
                file.server(request,response);
            }.
        ).resume();
    }
).listen(port);