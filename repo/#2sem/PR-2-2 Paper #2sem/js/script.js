$(document).ready(function(){
    $('#go11').click(function(){
        alert('lol');
        $('.bloc11').animate({
            width:'50%',
            height:'50px',
        }, 1500 );
    });
    $('#reload').click(function() {
        location.reload();
    });
    $('.column1-img2').hide();
    $('.column1-img, .column1-img2').click(function (e) {
        $('.column1-img').toggle('display');
        $('.column1-img2').toggle('display');
    });
    $('#ctx2').hide();
    $('#ctx1').click(function (e) { 
        $('#ctx2').toggle('display');
    });
    $('#ctx3').click(function (e) { 
        $('#ctx3').css('color','red')
        $('#ctx3').css('font-style','bold')
        $('#ctx3').css('font-family','Arial, Helvetica, sans-serif')
    });
    $('#ctx4').click(function (e) { 
        $('#ctx4').hide();
    });
    $('#ctx5').click(function (e) { 
        $('#ctx5').hide();
    });
    $('input[type="submit"]').click(function(){
        $(this).toggleClass('red');
    });
    $('.header').click(function (e) { 
        $('.header').animate({
        opacity:0,
    }, 2000 );
    $('.header').animate({
        opacity:1,
    }, 8000 );
    });
    $('.column3-img').click(function (e) { 
        $('.column3-img').animate({
        opacity:0,
    }, 2000 );
    $('.column3-img').animate({
        opacity:1,
    }, 4000 );
    });
    $('.star1').animate({
        opacity:0,
    }, 4000 );
    $('.star2').animate({
        fontSize:'100px',
    }, 4000 );
    $('.star2').toggleClass('redStar');
    /*$('.star3').pulse({
        opacity: [0,1]
    }, {
         duration: 100,
         times: 50,
         easing: 'linear',
        });*/
        function Pulse(target, State) {
            //Every 750ms, fade between half and full opacity
            $(target).fadeTo(750, State?1:.5, function() {Pulse(target, !State)});
        }
    
        $(".star3").hover(function () {
            $(this).stop()
            Pulse(this);
        }, function () {
            $(this).stop(false, true).fadeTo(200, 1); //200ms to return to full opacity on mouse out
        });
});