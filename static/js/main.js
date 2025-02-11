function selectOption(option) {
    if (option == 'No') {
        document.getElementById('no').innerText = 'Come On!!!';
        document.getElementById('yes').innerText = 'DI KLIKK >:c';
        
        var yesbutton = document.getElementById('yes');
        var currsize = window.getComputedStyle(yesbutton).getPropertyValue('font-size');
        var newsize = parseFloat(currsize) * 0.1;
        yesbutton.style.fontSize = newsize + 'em';
    }
}

function Hellow() {
    var kucengHello = document.getElementById('sayhello-image');
    var kucinggif = new Image();
    kucinggif.src = 'static/image/海邊探戈-hello.gif';
    kucinggif.onload = function(){
        kucengHello.appendChild(kucinggif);
    };
}

Hellow();

var paper = d3.select("#canvas");
var wsvg = $("#canvas").width();
var hsvg = $("#canvas").height();

var d =Math.ceil((Math.floor(Math.random() * 700) + 100)/10)*10;
var count = 0;

function rNumTime(){
  d = Math.ceil((Math.floor(Math.random() * 600) + 100)/10)*10;
}

setInterval(function(){
  count++;
  var x = Math.floor(Math.random() * (wsvg-100)) + 50;
  var y = Math.floor(Math.random() * (hsvg-100)) + 50;
  var b = paper.append("use").attr("xlink:href", "#heart").attr("id", "h"+count).attr("transform", "translate("+x+", "+y+")");
  setTimeLine();
  rNumTime();
}, d);

function setTimeLine(){
  var s = (Math.random() * (0.7 - 0.2) + 0.5).toFixed(1);
  var heart = $("#h"+count);
  
  var tl = new TimelineMax({repeat:1, yoyo:true});
  
  tl.from(heart, 0.7, {scale: 0, transformOrigin:"50% 50%"})
    .to(heart, 0.7, {scale: s, transformOrigin:"50% 50%"})
    .to(heart, 0.3, {scale: 1, transformOrigin:"50% 50%", opacity: 0});
  setTimeout(function(){
    remove(heart);
  }, 1700);
}

function remove(h){
  h.remove();
}

$(window).on("resize", function(){
  wsvg = $("#canvas").width();
  hsvg = $("#canvas").height();
});
