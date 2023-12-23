const express = require('express')
const http  = require('http')
const app = express()
const path  = require('path')
const server  = http.createServer(app)
const cors = require('cors')

const corsOptions = {
    origin : '0.0.0.0',
}

app.use(cors(corsOptions));




const _dirname = path.dirname("")
const buildPath = path.join(_dirname  , "../client/build");

app.use(express.static(buildPath))

app.get("/*", function(req, res){

    res.sendFile(
        path.join(__dirname, "../client/build/index.html"),
        function (err) {
          if (err) {
            res.status(500).send(err);
          }
        }
      );

})




server.listen(5000 , () => console.log('Listening to port 5000'))