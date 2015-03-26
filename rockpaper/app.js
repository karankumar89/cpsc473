
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);


//Variables

var JSONObj= {outcome:"",wins: 0,losses: 0 ,ties: 0};
var win=0;
var loss=0;
var tie=0;
//var game;
//game = express();

// Post Methonds
function CALL(req, res) {
    app.use('/public', express.static(__dirname + '/public'));
    res.sendFile('/public', {
        root: __dirname
    });
    return res;
}
/*app.get('/', function(req, res) {
    res = CALL(req, res);
});*/
app.post('/output', function(req, res) {
    res.json(JSONObj);
});
app.post("/play/rock", function (req, res)
{
        var userChoice='rock';
        var Bot= ["rock","paper","scissor","lizard","spock"];
        var botChoice= Bot[Math.floor(Math.random()*Bot.length)];
        if(userChoice==="rock")
         {
            if(userChoice===botChoice)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res = CALL(req, res);
            }
            else if(botChoice==="paper")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="scissor")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(botChoice==="lizard")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else(botChoice==="spock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
            }
          }   
});

app.post("/play/paper", function (req, res)
{
      var userChoice='paper';
        var Bot= ["rock","paper","scissor","lizard","spock"];
        var botChoice= Bot[Math.floor(Math.random()*Bot.length)];
        if(userChoice==="paper")
         {
            if(userChoice===botChoice)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }

            else if(botChoice==="rock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(botChoice==="scissor")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(botChoice==="lizard")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else(botChoice==="spock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
          }   
      
});

app.post("/play/scissor", function (req, res)
{
  var userChoice='scissor';
        var Bot= ["rock","paper","scissor","lizard","spock"];
        var botChoice= Bot[Math.floor(Math.random()*Bot.length)];
        if(userChoice==="scissor")
         {
            if(userChoice===botChoice)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="rock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="paper")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="lizard")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else(botChoice==="spock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
         }   

});
app.post("/play/lizard", function (req, res)
{
      var userChoice='lizard';
        var Bot= ["rock","paper","scissor","lizard","spock"];
        var botChoice= Bot[Math.floor(Math.random()*Bot.length)];
        if(userChoice==="lizard")
         {
            if(userChoice===botChoice)
            {
              tie=tie+1;
              JSONObj.outcome='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="rock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="scissor")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="paper")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else(botChoice==="spock")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }

         }   
      
});
app.post("/play/spock", function (req, res)
{
  var userChoice='spock';
        var Bot= ["rock","paper","scissor","lizard","spock"];
        var botChoice= Bot[Math.floor(Math.random()*Bot.length)];
        if(userChoice==="spock")
         {
            if(userChoice===botChoice)
            {
              tie=tie+1;
              JSONObj.outcome='tie;'
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
             }
            else if(botChoice==="rock")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="scissor")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else if(botChoice==="lizard")
            {
              loss=loss+1;
              JSONObj.outcome='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
            else(botChoice==="paper")
            {
              win=win+1;
              JSONObj.outcome='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              res=CALL(req,res);
            }
          }   

});

app.listen(3009, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
