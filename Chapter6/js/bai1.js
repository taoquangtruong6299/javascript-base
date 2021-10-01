window.addEventListener("load",function(){
  var text = document.querySelector('h3');
  var div = document.querySelector('div#load');
  var num = document.querySelector('h5');
  var trangthai = "motcham";
  var x = 0;
  var w = 0;
  var loading = setInterval(cham,300);
  var numberplus = setInterval(chay,20);
  var divplus = setInterval(daira,20);
  function cham(){
    if(trangthai == 'motcham'){
      text.innerHTML = 'Loading' + '.';
      trangthai = 'haicham';
    }
    else if(trangthai == 'haicham'){
            text.innerHTML = 'Loading' + '..';
            trangthai = 'bacham';
          }
    else if(trangthai == 'bacham'){
            text.innerHTML = 'Loading' + '...';
            trangthai = 'motcham';
          }
    if(x == 100 && trangthai == 'motcham'){
      clearInterval(loading);
    }
  }
  function chay() {
    x++;
    num.innerHTML = x + '%';
    if(x == 100){
      clearInterval(numberplus);
    }
  }
  function daira(){
    w += 1;
    div.style.width = w +'px';
    if(w == 100){
      clearInterval(divplus);
    }
  }

})
