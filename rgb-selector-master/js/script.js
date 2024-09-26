window.addEventListener('load', start);

function start() {
  document.body.onclick = function () {
    var range = event.target;
    switch (range.id) {
      case 'redRange':
        var colorValue = document.getElementById('redValue');
        let cyan = redRange.value;
        break;
      case 'greenRange':
        var colorValue = document.getElementById('greenValue');
        let magenta = greenRange.value
        break;
      case 'blueRange':
        var colorValue = document.getElementById('blueValue'); 
        let yellow = blueRange.value
        break;
      case 'blackRange':
        var colorValue = document.getElementById('blackValue');
        let black = blackRange.value
        break;
      default:
      colorValue = false;
        
    }

    if (colorValue) {
      function updateColorValue() {
        colorValue.innerHTML = range.value;
        var colorContent = document.querySelectorAll('.colorContent');
        changeColorBox(colorContent);
      }
      function changeColorBox(colorContent) {
        function changeColorBackground(r,g,b,k) {  
          switch (range.id) {
            case 'redRange':
              var colorBackground = [r, 0, 0];
              break;
            case 'greenRange':
              var colorBackground = [0, g, 0];
              break;
            case 'blueRange':
              var colorBackground = [0, 0, b];
              break;
            case 'blackRange':
              var colorBackground = [0,0,0,k];
              break;
              colorValue = false;
          }
          range.style.background = 'rgb(' + colorBackground.join(',') + ')';

        }

          k = colorContent[3].textContent;
          k = parseInt(k)
          subk = 255
        r = colorContent[0].textContent;
        r = parseInt(r)
        subr = 255
        for(i = 0; i<=r; i++){
            if(i % 2 == 0){
              subr = subr - 2
              subk = subk - 2

            }else if(i % 2 != 0){
              subr = subr - 3
              subk = subk - 3
            } 

        }
          
        r = subr
        //r = colorContent[0].textContent;
        g = colorContent[1].textContent;
        g = parseInt(g)
        subg = 255
        for(i = 0; i<=g; i++){
          if(i % 2 == 0){
            subg = subg -2
          }else if(i % 2 !=0){
            subg = subg-3
          }

        }
        g = subg
        b = colorContent[2].textContent;
        b = parseInt(b)
        subb = 255
        for(i = 0; i<=b; i++){
          if(i % 2 == 0){
            subb = subb - 2
          }else{
            subb = subb-3
          }
        }
        b = subb

        console.log(r,b,g)

  

        

        colorBox.style.backgroundColor = 'rgb(' + [r, g, b].join(',') + ')';
        /*
        document.getElementById('myName').style.color =
          'rgb(' + [r, g, b].join(',') + ')';
        changeColorBackground(r, g, b);
        */
      }

      colorValue.innerHTML = range.value;
      range.addEventListener('input', updateColorValue);
    }
  };
}
