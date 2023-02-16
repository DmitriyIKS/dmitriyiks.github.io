// Функция отказ
function End(){
    alert('Хорошего вам дня, до свидания');
}
var day;
var month;
var year1;
var year;
var x =[] 
function cZod(){
    var y = document.querySelector('.month').value
    y.split('-')
    x=y
    month = x[5]+x[6];
    day = x[8]+x[9];
    if ( month == 1 && day > 20 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы козерог  " + '<br>' + "<img src='img/koz.jpg' width='450' height='450'>";
    } else if ( month == 2 && day <=16) {
        document.getElementById('zodiak-content').innerHTML = "Вы козерог* " + '<br>' + "<img src='img/koz.jpg' width='450' height='450'>";
    } else if ( month == 2 && day > 16 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы водолей " + '<br>' + "<img src='img/vod.jpg' width='450' height='450'>";
    } else if ( month == 3 && day <= 11 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  водолей" + '<br>' + "<img src='img/vod.jpg' width='450' height='450'>";
    } else if ( month == 3 && day > 11) {
        document.getElementById('zodiak-content').innerHTML = "Вы  рыбы" + '<br>' + "<img src='img/ribi.jpg' width='450' height='450'>";
    } else if ( month == 4 && day <= 18) {
        document.getElementById('zodiak-content').innerHTML = "Вы  рыбы" + '<br>' + "<img src='img/ribi.jpg' width='450' height='450'>";
    } else if ( month == 4 && day > 18) {
        document.getElementById('zodiak-content').innerHTML = "Вы овен " + '<br>' + "<img src='img/oven.jpg' width='450' height='450'>";
    } else if ( month == 5 && day <=13 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  овен" + '<br>' + "<img src='img/oven.jpg' width='450' height='450'>";
    } else if ( month == 5 && day > 13   ) {
        document.getElementById('zodiak-content').innerHTML = "Вы телец " + '<br>' + "<img src='img/telec.jpg' width='450' height='450'>";
    } else if ( month == 6 && day <=21 ) {
       document.getElementById('zodiak-content').innerHTML = "Вы телец " + '<br>' + "<img src='img/telec.jpg' width='450' height='450'>";
    } else if ( month == 6 && day > 21 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  Близнецы" + '<br>' + "<img src='img/bliz.jpg' width='450' height='450'>";
    } else if ( month == 7 && day <=20  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  Близнецы" + '<br>' + "<img src='img/bliz.jpg' width='450' height='450'>";
    } else if ( month == 7 && day > 20  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  рак" + '<br>' + "<img src='img/rak.jpg' width='450' height='450'>";
    }else if ( month == 8 && day <= 10  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  рак" + '<br>' + "<img src='img/rak.jpg' width='450' height='450'>";
    }else if ( month == 8  && day > 10 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  лев" + '<br>' + "<img src='img/lev.jpg' width='450' height='450'>";
    }else if ( month == 9  && day <=16   ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  лев" + '<br>' + "<img src='img/lev.jpg' width='450' height='450'>";
    }else if ( month == 9 && day >16  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  дева" + '<br>' + "<img src='img/dev.jpg' width='450' height='450'>";
    }else if ( month == 10  && day <=30  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  дева" + '<br>' + "<img src='img/dev.jpg' width='450' height='450'>";
    }else if ( month == 10 && day >30 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  весы" + '<br>' + "<img src='img/veci.jpg' width='450' height='450'>";
    }else if ( month == 11 && day <= 23  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  весы" + '<br>' + "<img src='img/veci.jpg' width='450' height='450'>";
    }else if ( month == 11 && day > 23  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы  скорпион" + '<br>' + "<img src='img/ckorpion.jpg' width='450' height='450'>";
    }else if ( month == 12 && day <=17 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы скорпион " + '<br>' + "<img src='img/ckorpion.jpg' width='450' height='450'>";
    }else if ( month == 12 && day >17  ) {
        document.getElementById('zodiak-content').innerHTML = "Вы стрелец " + '<br>' + "<img src='img/ctrelec.jpg' width='450' height='450'>";
    }else if ( month == 1 && day <=20 ) {
        document.getElementById('zodiak-content').innerHTML = "Вы стрелец " + '<br>' + "<img src='img/ctrelec.jpg' width='450' height='450'>";
    }
    else {
        document.getElementById('zodiak-content').innerHTML = "Введите корректную дату";
    }
}

// Функция рассчета года зодиака
function cYear() {
    year1 = document.querySelector('.year').value;
    year = year1 % 12; 
        if ( year ==0  ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Обезьяны  " + '<br>' + "<img src='img/monkey.jpg' width='450' height='450'>";
        } else if ( year == 1 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Петуха " + '<br>' + "<img src='img/petyx.jpg' width='450' height='450'>";
        } else if ( year == 2 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Собики " + '<br>' + "<img src='img/dog.jpg' width='450' height='450'>";
        } else if ( year == 3 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Свиньи " + '<br>' + "<img src='img/pig.jpg' width='450' height='450'>";
        } else if ( year == 4 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Крысы " + '<br>' + "<img src='img/kris.jpg' width='450' height='450'>";
        } else if ( year == 5 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Быка " + '<br>' + "<img src='img/bik.jpg' width='450' height='450'>";
        } else if ( year == 6 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Тигра " + '<br>' + "<img src='img/tigr.jpg' width='450' height='450'>";
        } else if ( year == 7 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Кролика " + '<br>' + "<img src='img/krolik.jpg' width='450' height='450'>";
        } else if ( year == 8 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Дракона " + '<br>' + "<img src='img/drakon.jpg' width='450' height='450'>";
        } else if ( year == 9 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Змеи " + '<br>' + "<img src='img/zmei.jpg' width='450' height='450'>";
        } else if ( year == 10 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Лошади " + '<br>' + "<img src='img/lohad.jpg' width='450' height='450'>";
        } else if ( year == 11 ) {
            document.getElementById('god-content').innerHTML = "Вы родились в год Козы " + '<br>' + "<img src='img/koza.jpg' width='450' height='450'>";
        } else {
            document.getElementById('god-content').innerHTML = "Error";
        }
}


function Open() {
    document.getElementById('vtrBlokId').innerHTML = '<h1>По году или по знаку задиака?</h1>' + '<div class="button-group"><button class="button button3" onclick="openYear()"></button>' + 'По году   ' + '<button class="button button4" onclick="openZod()"></button>' + 'По знаку Зодиака' + '</div>';
}
function openYear() {
    document.getElementById('trtBlokId').innerHTML = '<div class="godina">' + '<p>Введите год рождения</p>' + '<input type="number" min="1900" max="2099" step="1" value="" class="year" /><button class="button button12" onclick="cYear()" >Подтвердить</button>' + '<p id="god-content"></p>' + '<img id="avatarka"></div>';
    document.getElementById('refreshId').innerHTML = '<h1>Хотите новую дату?</h1>' +'<div class="button-group"><button class="button button2" onclick="Clear()"></button>Да' + '<button class="button button1" onclick="End()"></button>Нет</div>';
}
function openZod() {
    document.getElementById('trtBlokId').innerHTML = '<div class="zodiak">' + '<p>Введите дату рождения</p>' + '<input type="date" name="" class="month"><button class="button button21" onclick="cZod()" >Подтвердить</button>' + '<p id="zodiak-content"></p></div>';
    document.getElementById('refreshId').innerHTML = '<div class="NewDate"> <h1>Хотите новую дату?</h1>' +'<div class="button-group"><button class="button button2" onclick="Clear()"></button>Да' + '<button class="button button1" onclick="End()"></button>Нет</div></div>';
}
function Clear() {
    document.getElementById('clearId').innerHTML = '<div class="prvblok"><h1>Хотите знать о себе?</h1>' + '<div class="button-group"><button class="button button1" onclick="Open()" ></button>Да   ' + '<button class="button button2" onclick="End()" ></button>Нет</div></div>' + '<div class="vtrblok" id="vtrBlokId"></div>' + '<div class="trtblok" id="trtBlokId"></div>' + '<div class="refresh" id="refreshId"></div>';
}
