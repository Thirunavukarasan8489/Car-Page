(function() {
      var elem = document.getElementById('id'), pos = 650,
          timer = setInterval(function() {
              pos--;
              elem.style.left = pos+"px";
              if( pos == 2000) clearInterval(timer);
          },25);
  })();