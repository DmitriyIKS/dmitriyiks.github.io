$(document).ready(function(){
// Блок №1
    const interval = 10000;
(function tick(){
 setTimeout(function(){$('.head1 > div').toggleClass('red blue')}, 10000);
	setTimeout(tick, interval);
})();
// Блок №2
   $('.head2 > .imgmin:odd').click(function(){
    $(this).toggleClass('size');
    $('.imgmin3').toggleClass('size1');
    $('.imgmin1').toggleClass('size1');
    $('.head2 > i:odd').toggleClass('fa-angle-double-right');
    $('.head2 > i:even').toggleClass('fa-angle-double-left');

   })
// Блок №3
$('.text3 > h2').click(function(){
$('.txt4').slideToggle();
})
// Блок №4
$('.img4').click(function(){
    $('.img4').toggleClass('opacity');
})
// Блок №5
$('.ic > span > i:odd').css('font-family','fantasy')
$('.ic > span').click(function(){
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }
      $('.ic > span > i:odd').text(randomInteger(1,12000));
      
})
// Блок №6
$('.ic2 > h2').click(function(){
$('.ic2>i').fadeToggle(2000);
})

$('.ic3 > h2').click(function(){
    $('.ic3>span>i:even').fadeToggle(2000);
    })
    
$('.ic4 > h2').click(function(){
    $('.ic4>i').fadeToggle(2000);
    })

// Блок №7
$('.ic4 > i').click(function(){
    $('.ic4 > i').toggleClass('fa-spin');
})
// Блок №8
$('.butbox > .sallbox > p:nth-child(1)').click(function(){
    $(this).slideUp(400)
})

$('.butbox > .sallbox > p:nth-child(2)').click(function(){
    $(this).css('color','yellow')
})

$('.butbox > .sallbox > p:nth-child(3)').click(function(){
    $(this).slideUp(400)
})
// Блок №9 
var click = 0
$('.sallbox > img').click(function(){
    click++
    if(click == 1){
    $('.medbox').addClass('color1')
}else if(click == 2){
    $('.medbox').removeClass('color1').addClass('color2')
}else if(click == 3){
    $('.medbox').removeClass('color2').addClass('color3')
}else if(click == 4){
    $('.medbox').removeClass('color3');
    click = 0
}})
// Блок №10
var click1 = 0
$('.butbox > i').click(function(){
    click1++
    if (click1 == 1){
        $(this).addClass('globe2')
    } else if(click1 == 2){
        $(this).removeClass('globe2').addClass('globe3')
    } else if(click1 == 3){
        $(this).removeClass('globe3'); click1 = 0
    }
})
// Блок №11
var click2 = 0
$('.btn4').click(function(){
    click2++
    if(click2 % 2 == 0){
        $('.smbox1').css('height','530px')
    } else if(click2 % 2 != 0){
        $('.smbox1').css('height','auto')
    }
})
// Блок №12
var click7 = 0
$('.abzac1').click(function(){
    click7++
    if(click7<=2){var abzac1 = $('.abzac1').text();
    var abzac1x2 = abzac1.repeat(2);
    $(this).text(abzac1x2);}else{
        alert('Не более 2-х раз!')
    }
})
var click8 = 0
$('.abzac2').click(function(){
    click8++
    if(click8<=2){var abzac2 = $('.abzac2').text();
    var abzac2x2 = abzac2.repeat(2);
    $(this).text(abzac2x2);}else{
        alert('Не более 2-х раз!')
    }
})
var click9 = 0
$('.abzac3').click(function(){
    click9++
    if(click9<=2){var abzac3 = $('.abzac3').text();
    var abzac3x2 = abzac3.repeat(2);
    $(this).text(abzac3x2);}else{
        alert('Не более 2-х раз!')
    }
})
// Блок №13
click4 = 0
$('.zagolovok').click(function(){
    click4++
    if(click4 == 1){$(this).addClass('zagolovokyellow');
    alert('Нажми еще раз!')
} else if (click4 == 2){
    $(this).removeClass('zagolovokyellow');
    click4=0
}})
// Блок №14
$('.spoiler-head').click(function(){
    $(this).next('.spoiler-body').slideToggle(500);
})
// Блок №15

$('.img2').click(function (){
   let swap = document.getElementById('i').src
   document.getElementById('i').src = document.getElementById('i1').src
   document.getElementById('i1').src  = swap;
})

// Блок №16
click6 = 0
$('.ida').click(function(){
    click6++
    if(click6==1){$(this).css('font-size','46px')
}else if(click6==2){
    {$(this).css('font-size','23px')}
    click6=0
}})
// Блок №18
$('#btnl').click(function (){
 let img11 = document.getElementById('sw1').src;
 let img12 = document.getElementById('sw2').src;
    
    document.getElementById('sw2').src = document.getElementById('sw3').src;
    document.getElementById('sw3').src = img11;
    document.getElementById('sw1').src = img12;
})

$('#btnr').click(function (){
    let img11 = document.getElementById('sw1').src;
    let img12 = document.getElementById('sw2').src;
       
       document.getElementById('sw1').src = document.getElementById('sw3').src;
       document.getElementById('sw2').src = img11;
       document.getElementById('sw3').src = img12;
   })
// Блок №17
var h1 = document.getElementsByTagName('h1')[0];
var start = document.getElementById('strt');
var stop = document.getElementById('stp');
var reset = document.getElementById('rst');
var sec = 0;
var min = 0;
var hrs = 0;
var t;
var rand = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];


function tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++ 
        var color = '#' + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + 
        rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)] + rand[Math.ceil(Math.random() * 15)];
        $('.timer').css('color',color);
    }
}

function add() {
    tick();
    h1.textContent = ('Таймер:  ')+(min > 9 ? min : "0" + min)
       		 + ":" + (sec > 9 ? sec : "0" + sec);
    timer();
}
function timer() {
    t = setTimeout(add, 1000);
}
timer();
start.onclick = timer;
stop.onclick = function() {
    clearTimeout(t);
}})

