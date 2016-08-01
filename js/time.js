var watch = document.querySelector(".watch");
var calendar = document.querySelector(".calendar");
var days = ["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"];

(function(){
  function zero(i){
    return (i<10)? '0'+i:i;
}

function showTextTime(){
  var currentDate = new Date();
  watch.innerHTML="Godzina"+"<br>"+zero(currentDate.getHours())+":"+zero(currentDate.getMinutes())+":"+zero(currentDate.getSeconds());
  calendar.innerHTML=days[currentDate.getDay()]+"<br>"+zero(currentDate.getDate())+"."+zero(currentDate.getMonth()+1)+"."+currentDate.getFullYear();

setTimeout(function(){
  showTextTime()
},1000);
}

showTextTime();
})();