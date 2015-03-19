var serverType = require("http");
var title= 'Rock Paper scissors Lizard Spock';
var h1= "Live Long and Prosper!";
var JSONObj= {result:"",wins: 0,losses: 0 ,ties: 0};
var win=0;
var loss=0;
var tie=0;
function onRequest(request, response) 
{
  switch(request.url)
  {
    case '/':
  response.writeHead(200);//, {"Content-Type": "text/html"});
  response.write("<html>");
  response.write("<head>");
  response.write("<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css'>");
  response.write("<title>" +title+ "</title></head>");
  response.write("<body>");
  response.write("<h1>" +h1+ "</h1>");
  response.write("<form method='POST' action='/play/rock'>\n");
  response.write("<input type='submit' class = 'btn btn-success' value='rock'>\n");
  response.write("</form>");
  response.write("<form method='POST' action='/play/paper'>");
  response.write("<input type='submit' class = 'btn btn-success' value='paper'>\n");
  response.write("</form>");
  response.write("<form method='POST' action='/play/scissor'>");
  response.write("<input type='submit' class = 'btn btn-success' value='scissor'>\n");
  response.write("</form>");
  response.write("<form method='POST' action='/play/lizard'>");
  response.write("<input type='submit' class = 'btn btn-success' value='lizard'>\n");
  response.write("</form>");
  response.write("<form method='POST' action='/play/spock'>");
  response.write("<input type='submit' class = 'btn btn-success' value='spock'>\n");
  response.write("</form>");
  response.write("</body>");
  response.write("</html>");
  response.end();
  break;

    case '/play/rock':
    
        var userChoice='rock';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="rock")
         {
            if(rest==="rock")
            {
              response.writeHead(200);
              tie++;
              JSONObj.result='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
            }

            else if(rest==="paper")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
            }

            else if(rest==="scissor")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
            }
            
            else if(rest==="lizard")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else(rest==="spock")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

         }   
      break;

      case '/play/paper':
    
        var userChoice='paper';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        if(userChoice==="paper")
         {
            if(rest==="paper")
            {
              response.writeHead(200);
              tie++;
              JSONObj.result='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="rock")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="scissor")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }
            
            else if(rest==="lizard")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else(rest==="spock")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

         }   
      
      break;

        case '/play/scissor':

        var userChoice='scissor';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        if(userChoice==="scissor")
         {
            if(rest==="scissor")
            {
              response.writeHead(200);
              tie++;
              JSONObj.result='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="rock")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="paper")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }
            
            else if(rest==="lizard")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else(rest==="spock")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

         }   
      
      break;
              

        case '/play/lizard':
      
        var userChoice='lizard';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="lizard")
         {
            if(rest==="lizard")
            {
              response.writeHead(200);
              tie++;
              JSONObj.result='tie';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="rock")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="scissor")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }
            
            else if(rest==="paper")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else(rest==="spock")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

         }   
      
      break;


        case '/play/spock':
    
        
        var userChoice='spock';
        var serverChoice= ["rock","paper","scissor","lizard","spock"];
        var rest= serverChoice[Math.floor(Math.random()*serverChoice.length)];
        
        
        if(userChoice==="spock")
         {
            if(rest==="spock")
            {
              response.writeHead(200);
              tie++;
              JSONObj.result='tie;'
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="rock")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else if(rest==="scissor")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }
            
            else if(rest==="lizard")
            {
              response.writeHead(200);
              loss++;
              JSONObj.result='loss';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

            else(rest==="paper")
            {
              response.writeHead(200);
              win++;
              JSONObj.result='win';
              JSONObj.wins=win;
              JSONObj.losses=loss;
              JSONObj.ties=tie;
              response.write("<html>");
              response.write(JSON.stringify(JSONObj));
              response.write("<br><a href='../'>Play Again</a></br>");
              response.write("</html>");
              response.end();
              
            }

         }   
      
      break;


  }
}
serverType.createServer(onRequest).listen(6999);
console.log("Server has started!");