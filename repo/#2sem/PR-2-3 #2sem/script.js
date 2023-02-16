function zam(){
    document.getElementById('p1').innerHTML = 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '
}
function zam2(){
    document.getElementById('p2').innerHTML =  'lorem lorem lorem lorem '+ '<p>текст выделить <span style="color: red;">красным цветом </span></p> ' 
}
function zam3(){
    document.getElementById('p3').innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse aut harum corporis lorem lorem lorem lorem lorem lorem lorem lorem . '
}
function zam4(){
    document.getElementById('p4').innerHTML = ''
}
function zam5(){
    var elem = document.getElementById('p5');
    elem.parentNode.removeChild(elem);
}

function zam7(){
    $('.block7').slideUp({
        duration:2000,
        complete: function(){
            $('.block7').delay(4000).slideDown(2000)
        }
    }) 
}
function zam8(){
    $('.block8').addClass('color')
}
function zam9(){
    $('.block9').css('border',0)
}
function zam10(){
    $('.two').addClass('border_red')
}
function zam11(){
    $('.blc').insertAfter('.blc2');
    $('.blc2').css('background', 'red')
    $('.blc').css('background', 'yellow')
}
$(document).ready(function(){
    $('.block6').slideUp('slow')

    $('.all2 > div:odd').click(function(){
      $(this).slideUp(2000)
    })
    $('.all2 > div:even').click(function(){
        $(this).prepend($('<img>',{id:'theImg',src:'mount.jpg' ,width: '200px;',
        height: '200px;'}))
      })
})