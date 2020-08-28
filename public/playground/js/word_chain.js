document.addEventListener("DOMContentLoaded", function(){

    

    //정답 확인 변수
    var setData;
    var life = '';
        life += '<ul class="clearfix">';
        life += '<li></li>';
        life += '<li></li>';
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

    var setData = document.querySelector('.info-life');
    setData.innerHTML = life;

    // var score = document.createElement('div');
    // score.textContent ='Your score : 0';
    // document.body.append(score);

    var lifeData = document.querySelectorAll('.info-life > li');
    var lifeTotal = lifeData.length;
    var lifeLeng = lifeTotal-2;
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
            if(lifeLeng < lifeTotal) {
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

    //button EVENT
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

    document.querySelector('.next').onclick = function() {
        window.scrollTo(0, 0);  
        var inpt__people = document.querySelector('input[name=people]');
        if(inpt__people.value == '') {
            alert('How many people participate in the game:3')
            inpt__people.focus();

            return false;
        }        

        var color = document.querySelectorAll('.content .set-up .how-to ol > li span');
        for (var i=0; i<color.length; i++) {
            color[i].style.color = "#7860c4";
        }        

        removeClassList(document.querySelector('.who-is'), 'hidden')
        removeClassList(this, this.className, this.value); 
        addClassList(document.querySelector('.how-many'), 'hidden')       
        addClassList(this, 'start', 'START');   
        
        return true;
    }

    document.querySelector('.start').onclick = function() {
        window.scrollTo(0, 0);  
        var inpt__next = document.querySelectorAll('input[name=nickname]');
        for(var i = 0; i < inpt__next.length; i++) {
            var $this = inpt__next[i];
            if($this.value == '') { 
                alert('We need players Nickname:(');
                $this.focus();
                return;
            }   
        }    
        removeClassList(this, this.className, this.value);
        removeClassList(document.querySelector('.set-play'), 'hidden');
        addClassList(this, 'submit', 'ENTER'); 
        addClassList(document.querySelector('.set-up'), 'hidden');
        this.type = submit;
        return true;
    }

    document.querySelector('.reStart').onclick = function() {
        window.location.reload();
    }


});

//onkeyup enter key
function enterKey()
{
    if(window.event.keyCode == 13) {
        
    }
        
}

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

function addClassList(el, className, classValue)
{
    if (el.classList) {
        el.classList.add(className);
        el.value = classValue;
    }
    else if (!hasClass(el, className, classValue)) {
        el.className += " " + className;
        el.value += " " + classValue;
    }
}

function removeClassList(el, className, classValue)
{
    if (el.classList) {
        el.classList.remove(className)
        el.value = '';
    }
    else if (hasClass(el, className, classValue))
    {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
        el.value = '';
    }
}


//NickName input
var obj__NickName = {
    createEl : function(obj__Num,el){    
        for(var i = 0; i < obj__Num; i++){        
            var setPlyr = '';
                setPlyr += '<div class="input-row player-row">';
                setPlyr += '<label for="player' +i+ '">PLAYER. ' +i+ '</label>';
                setPlyr += '<input type="text" id="player' +i+ '" name="nickname" placeholder="ENTER PLAYER.' +i+ ' NICKNAME">';
                setPlyr += '</div>';
            var plyr = document.createElement(setPlyr);
            el.innerHTML = setPlyr;
        } 
    },
}

//NickName Check
var plyr__num = document.querySelector('input[name=people]');
var chk__arrNick = [];
var plyr__nick = [];
var inpt__nick = document.querySelectorAll('input[name=name]');
var nick__wrap = document.querySelector('.who-is');
var word = document.querySelector('.word');
function chk__NickName(){
    var start = Number(plyr__num.value);
    chk__arrNick = plyr__nick.filter(function(element){
      return element.replace(/(\s*)/g, "");  // 빈공간 빼고 배열에 담는다.
    });

    if(chk__arrNick.length !== plyr__nick.length) {
        plyr__nick = [];
        chk__arrNick = [];
        alert('We need players Nickname:(');
        inpt__people.focus();

        return false;
    }
    var color = document.querySelectorAll('.content .set-up .how-to ol > li span');
    for (var i=0; i<color.length; i++) {
        color[i].style.color = "#7860c4";
    }        

    removeClassList('who-is', 'hidden')
    removeClassList(this, this.className, this.value); 
    addClassList('how-many', 'hidden')       
    addClassList(this, 'start', 'START');   
    vis__NickName();
    openGame();
    word.innerText = `${plyr__nick[0]}`+ '님, 시작단어를 \n제시해주세요';
    makeLifeInput(start);

    return true;
}

//NickName Visible
function vis__NickName(){
    propertySet.bundle(nick__wrap, '', null, plyr__nick, null);
}  

//NickName Array
function arr__NickName(){
    var inpt__nick = document.querySelectorAll('input[name=nickname]');
    inpt__nick.each(function(input) {
        plyr__nick.push(input.value);
    });
    chk__NickName();
}

//Make NickName input
function make__Input(num){
    obj__NickName.createEl(num, nick__wrap);
}

//Player Number Check
function chk__plyrNum(){
    var start = Number(plyr__num.value);
    if(start < 2 || isNaN(start)) {
      propertySet.bundle(player_nickname_Box,null,null,'2명 이상 플레이 가능! RESET버튼!');
    }else {
      makeNicknameInput(start);
    }
}

let toggleResetBtn = true;
function SwitchToggle(){
    (toggleResetBtn) ? (chk__plyrNum(), propertySet.trueToggle()) : propertySet.falseToggle();
}

//Player number Save
document.querySelector('.next').addEventListener('click', SwitchToggle);

//NickName Save
document.querySelector('.start').addEventListener('click', arr__NickName);
