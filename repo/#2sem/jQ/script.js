$(document).ready(function () {
    $('h1').css('border', '3px solid red');
    $('p span').css('font-weight', 'bold');
//    $('h1+p').css('color', 'red');
    $('h1').blur(function (e) { 
        e.preventDefault();
        
    });
    $("button").click(function(){
        $("h1").toggle();
    });
    /*
    //filters
    $('p:even').css('color','red')

    $('p:first').css('color','green')
    
    $('p:last').css('color','blue')
    */

    $('p:eq(2)').css('color','blue')

    $('p:has(span)').css('color','blue')

    $('#b1ID').click(function(){
        $(this).css('background-color','red')
        alert('ohayo')
    })
});