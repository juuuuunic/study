document.addEventListener("DOMContentLoaded", function(){

    //정답 확인 변수
    var setData;
    var life = '';
        life += '<ul class="play_life clearfix">';
        life += '<li></li>';
        life += '<li></li>';
        life += '<li></li>';
        life += '</ul>';

    var time = '';
        time += '<ul class="play_time clearfix">';
        time += '<li></li>';
        time += '<li></li>';
        time += '<li></li>';
        time += '</ul>';

    var setData = document.querySelector('.play_data');
    setData.innerHTML = life;

    // var score = document.createElement('div');
    // score.textContent ='Your score : 0';
    // document.body.append(score);

    var lifeData = document.querySelectorAll('.play_life > li');
    var lifeLeng = lifeData.length;
    var lifeTotal = lifeData.length;
    var timeData = document.querySelectorAll('.play_time > li');
    var timeLeng = timeData.length;
    var word = document.querySelector('.word');
    var input = document.querySelector('.nWord');
    var f = document.forms['word-chain']

    //정답 확인
    function checkAnswer(){
        if(word.textContent[word.textContent.length - 1] == input.value[0])
        {  
            word.textContent = input.value;
            if(lifeLeng < 6) {
                fadeIn(lifeData[lifeLeng])
                lifeLeng++
            }
            // score.textContent = "Your score :" + ++scoreData;
        }
        else
        { 
            
            --lifeLeng;
            fadeOut(lifeData[lifeLeng])            
            if(lifeLeng < 0)
            {
                alert("Out of life");
                //window.location.reload();
                fadeOut(document.querySelector('.submit'))
                fadeIn(document.querySelector('.reStart'))
                return false;
            }
            // score.textContent =  "Your score : "+ --scoreData;
            // life.textContent = 'Your life : ' + lifeLeng;
        }
        input.value = null;

    }

    //버튼클릭시 발생하는 이벤트
    var start = false;
    f.addEventListener('submit', function callBack(e)
    {        
        e.preventDefault();
        if(input.value == '') {
            alert('We can\'t find the word.')
        } else if(word.textContent.includes('제시해주세요') && input.value !== '') {
            word.textContent = input.value;
            input.value = null;
        } 
        
        else if(!word.textContent.includes('제시해주세요') && input.value !== '') {
            checkAnswer();
        }
    });

    document.querySelector('.reStart').onclick = function() {
        window.location.reload();
    }

    document.querySelector('.start').onclick = function() {
        if(document.querySelector('.people').value == '') {
            alert('How many people participate in the game:3')
        } else if(document.querySelector('.people').value < 2) {
            alert('We need more than one:(');
            document.querySelector('.people').value = '';
        }

        if(document.querySelector('.people').value !== '' && document.querySelector('.people').value > 1) {
            document.querySelector('.set-up').style.display = "none";
            document.querySelector('.set-play').style.display = "block";
        }
    }

//onkeyup enter key
// function enterKey()
// {
//     if(window.event.keyCode == 13)
//         
// }

});

function fadeOut(el){
    if(el !== undefined) {
        el.style.opacity = 1;
      
        (function fade() {
          if ((el.style.opacity -= .05) < 0) {
            el.style.display = "none";
          } else {
            requestAnimationFrame(fade);
          }
        })();
    }
};

  
function fadeIn(el, display){
    el.style.opacity = 0;
    el.style.display = display || "block";
  
    (function fade() {
      var val = parseFloat(el.style.opacity);
      if (!((val += .1) > 1)) {
        el.style.opacity = val;
        requestAnimationFrame(fade);
      }
    })();
};