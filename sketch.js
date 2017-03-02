/*  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
    edited by Cathy Chan - ADD DATA
*/


function setup() {
  //set Canvas to size of window
  createCanvas(windowWidth, windowHeight);

  //Introduction Page
    background(250);
    
  //create Button object 1 (London)
  button1 = createButton('London');
  button1.position(25, 20);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (New York)
  button2 = createButton('New York');
  button2.position(85, 20);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22New%20York%2C%20New%20York%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (Hong Kong)
  button3 = createButton('Hong Kong');
  button3.position(156, 20);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Kowloon%2C%20Hong%20Kong%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (Seoul)
  button4 = createButton('Seoul');
  button4.position(235, 20);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Seoul%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (Melbourne)
  button5 = createButton('Melbourne');
  button5.position(285, 20);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22Melbourne%2C%20Melbourne%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  //var windDirectionCardinal = data.query.results.channel.wind.direction.cardinal;
  var date = data.query.results.channel.item.condition.date;
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

// HOW to get avarage of tempD2H+tempD2L?!?!
//var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
//print(temp);
//print(windSpeed);
print(tempD2H);
print(tempD2L);
//print(date);
//print(tempforcast1);


  background(229,246,255);

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(15);
  textFont("Gill Sans");
  textAlign(CENTER);
     
    fill(255)
    text(windSpeed, 30, windowHeight - 50);
    fill(255,198,131);
    text(temp, 30, windowHeight - 30);
    fill(127,157,255);
    text(windDirection, 30, windowHeight - 10);
    fill(0)
    text(date, 320, windowHeight -10  )
    
    //code by Marcel Fetten, 2013(c)  
    //edited by Cathy Chan 
    
    //var x =0
    //var y=0
    
    //function WindDirectionToCardinal($degree) 
    //{   
    // if($degree === 0) $direction = '';
    //  if($degree >= 348.75 && $degree <=  11.25) $direction = 'N';
    //  if($degree >   11.25 && $degree <=  33.75) $direction = 'NNE';
    //  if($degree >   33.75 && $degree <=  56.25) $direction = 'NE';
    //  if($degree >   56.25 && $degree <=  78.75) $direction = 'ENE';
    //  if($degree >   78.75 && $degree <= 101.25) $direction = 'E';
    //  if($degree >  101.25 && $degree <= 123.75) $direction = 'ESE';
    //  if($degree >  123.75 && $degree <= 146.25) $direction = 'SE';
    //  if($degree >  146.25 && $degree <= 168.75) $direction = 'SSE';
    //  if($degree >  168.75 && $degree <= 191.25) $direction = 'S';
    //  if($degree >  191.25 && $degree <= 213.75) $direction = 'SSW';
    //  if($degree >  213.75 && $degree <= 236.25) $direction = 'SW';
    //  if($degree >  236.25 && $degree <= 258.75) $direction = 'WSW';
    //  if($degree >  258.75 && $degree <= 281.25) $direction = 'W';
    //  if($degree >  281.25 && $degree <= 303.75) $direction = 'WNW';
    //  if($degree >  303.75 && $degree <= 326.25) $direction = 'NW';
    //  if($degree >  326.25 && $degree <  348.75) $direction = 'NNW';
        
    //    return $direction;
    //}
    
    //fill(0)
    //text(WindDirectionCardinal, x.$degree.position, y.degree.position )
    
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(255);
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, windSpeed * 10, windSpeed * 10);
  
   //create ellipse and set width and height of the ellipse to temp data
  noFill();
  strokeWeight(4);
  stroke(255,198,131);
  ellipse(windowWidth / 4, windowHeight / 2, temp * 2, temp * 2);
  
  
  //create rect and set rotation of rect to windDirection
  translate(windowWidth / 2, windowHeight / 2);
  fill(127,157,255);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  rect(0, 0, 150, 5);
  
}