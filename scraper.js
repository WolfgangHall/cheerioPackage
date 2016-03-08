var request = require('request');
var cheerio = require('cheerio');


request("https://youtube.com", function (error, response, html) {
  var $ = cheerio.load(html);
  var result = [];
  $("h3.yt-lockup-title").each(function(i, element){
     var a = $(this).text();

     result.push({
      a : a
     })

    //scrape some stuff, put it in an object and add it to the result array

    });
  console.log(result);
});