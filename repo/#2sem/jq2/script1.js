$(document).ready(function(){
    
    
    $('#go11').click(function(){
        $('#bloc11').animate({
            width:'70%',
            opacity:0.3,
            marginLeft:'0.6in',
            fontSize:'3em'
        }, 1500 );
    });
    $('#go12').click(function(){
        $('#bloc12').animate({
            width:'70%',
            opacity:0.3,
            marginLeft:'0.6in',
            fontSize:'3em'
        }, 1500 );
    });
    $('#go13').click(function(){
        $('#bloc12').animate({
            width:'70%',
            opacity:0.3,
            marginLeft:'0.6in',
            fontSize:'3em'
        }, 1000 )
        $('#bloc11').animate({
            width:'70%',
            opacity:0.3,
            marginLeft:'0.6in',
            fontSize:'3em'
        }, 2000 );
    });
    $('#go14').click(function(){
        $('#block').animate({
            width:'-70%',
            opacity:-0.3,
            marginLeft:'-0.6in',
            fontSize:'-3em'
        }, 1500 );
    });
    
                });