var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles ={ 
  'article-one' : {
  title : "article-one| anujeet swain",
  heading: "article-one",
  date: "sept 5 2017",
  content: `<p>
                this is my web app.going to add more content.this is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more content
            </p>
            <p>
                this is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more content.
            </p>
            <p>
                this is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more content"
            </p>`   
 },
  'article-two' : {
               title : "article-two| anujeet swain",
               heading: "article-two",
               date: "sept 10 2017",
               content: `<p>
                          this is my web app.going to add more content.this is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app.going to add more contentthis is my web app
                         </p>`
            
},
  'article-three' : {
                title : "article-three| anujeet swain",
                heading: "article-three",
                date: "sept 15 2017",
                content: `<p>
                         this is my web app.going to add more content.this is my web app.goiarticle 3
                         </p>`
          
}
 
};
function createTemplate (data) {
  var title=data.title;
  var date=data.date;
  var heading=data.heading;
  var content=data.content;
  var htmlTemplate =`<html>
    <head>
        <title>${title}
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
     <div class="container">  
        <div>
            <a href="/">HOME</a>
        </div>
        <div>
        
            ${heading}
        </div>
        <div>
            $ {date}
        </div>
        <div>
           ${content}
        </div>
     </div>    
    </body>
</html>

`;    
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName==articleOne
    //articles[articleName]=={} content objectfor article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
