require('newrelic');

// add this to the VERY top of the first file loaded in your app
var opbeat = require('opbeat').start({
  appId: 'e41aaf9502',
  organizationId: 'c96472cef5e045f88efa70d2362bfb93',
  secretToken: 'ed4c9c666f5165cd98dfccfa5fe9b05650dc321d'
})
      
opbeat.captureError(new Error('Ups again, something broke again'))

throw err

var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})