$(document).ready(function(){
  var $shutter = $('#cameraShutter');
  
  var photoImg = document.getElementsByClassName("info-photo");

  var timer = setTimeOut(function(){
      photoImg.src = "./images/tequila-sunrise.jpg";
    }, 2000);
  
  function printPhoto() {
    $('.info-content').toggleClass('animate');
    $('.camera .glass').toggleClass('active');

    photoImg.onload = function () {
      clearTimeOut(timer);
      timer = null;
    }
  }
  
  $shutter.on('click', printPhoto);

  setTimeout(printPhoto, 500);

  console.log('© zchen9 🙋 2015-' + (new Date()).getFullYear());
  console.log('特别鸣谢zchen9小仙女的精彩主题，希望大家去逛逛她的github：https://github.com/zchen9');
  
});
