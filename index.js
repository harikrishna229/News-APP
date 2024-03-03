var globalresults=[];

var Home="https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=20&language=en&apiKey=3674b188304948e6b8283a4cf7ba72fe";
var Technology="https://newsapi.org/v2/top-headlines?country=in&category=technology&pageSize=20&language=en&apiKey=3674b188304948e6b8283a4cf7ba72fe";
var Business="https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=20&language=en&apiKey=3674b188304948e6b8283a4cf7ba72fe";
var Entertainment="https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=20&language=en&apiKey=3674b188304948e6b8283a4cf7ba72fe";
var Health="https://newsapi.org/v2/top-headlines?country=in&category=health&pageSize=20&language=en&apiKey=3674b188304948e6b8283a4cf7ba72fe";
var sports="https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=20&language=en&apiKey=3674b188304948e6b8283a4cf7ba72fe";





async function hari(currenturl){
 try{
    var res= await fetch(currenturl);
    if (res.status>=200 && res.status<300){
         var json = await res.json();
         globalresults=json;
         console.log(json);
         tiles(json);
    }
 }
 catch(err){
   console.log(err);
 }
   
   
}
hari(Home);

var row=document.querySelector(".row");

function tiles(json){
  row.innerHTML ="";
    json.articles.forEach(element => {
      
        row.innerHTML += `<div class="col-12 col-sm-6 col-md-4 col-lg-3 pb-3 pr-1">
        <div class="card" style="width: 18rem;">
            <img src="${element.urlToImage}" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
              <a href="${element.url}" target="_blank" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>`
    });
   

}


$(document).ready(function() {

$(".Home").click(function (e) { 
  e.preventDefault();
  hari(Home);
  
});
$(".Technology").click(function (e) { 
  e.preventDefault();
  hari(Technology);
  
});
$(".Business").click(function (e) { 
  e.preventDefault();
  hari(Business);
  
});
$(".Entertainment").click(function (e) { 
  e.preventDefault();
  hari(Entertainment);
  
});
$(".Health").click(function (e) { 
  e.preventDefault();
  hari(Health);
  
});
$(".Sports").click(function (e) { 
  e.preventDefault();
  hari(sports);
});
$(".searchbtn").click(function (e) { 
 e.preventDefault();
  var query =$(".searchinput").val();
 // var query="music";
  //var searchquery=`https://newsapi.org/v2/top-headlines?country=in&category=${query}&pageSize=20&language=en&apiKey=3674b188304948e6b8283a4cf7ba72fe`;
  var searchquery=`https://newsapi.org/v2/everything?q=${query}&apiKey=3674b188304948e6b8283a4cf7ba72fe`;
  hari(searchquery);
});


});









