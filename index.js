window.onload = function(){
    var hour = document.querySelector(".hour");
    var minute = document.querySelector(".minute");
    var second = document.querySelector(".second");
    var inputTime = +new Date("2022-4-24 12:00:00");
    countDown();
    setInterval(countDown, 1000);
    function countDown() {
      var nowTime = +new Date(); 
      var times = (inputTime - nowTime) / 1000; 
      var d = parseInt(times / 60 / 60 / 24);
      var h = parseInt(times / 60 / 60 % 24);
      if(d!=0){
          h = d*24;
      }else{
        h = h < 10 ? '0' + h : h;
      }
      hour.innerHTML = h;
      var m = parseInt(times / 60 % 60);
      m = m < 10 ? "0" + m : m;
      minute.innerHTML = m;
      var s = parseInt(times % 60);
      s = s < 10 ? "0" + s : s;
      second.innerHTML = s;
    }
}
