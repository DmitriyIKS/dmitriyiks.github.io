$(document).ready(function(){
    $('#select').click(function (e) { 
        var value = $('#select option:selected').length;
        $('#ida').html('selected: ' + value + ' options')
    })
    $('#btn').click(function (e) { 
        var sll = $('#select option:selected').length;
        var sell = $('#select option:selected').text();

        alert('selected: ' + sll + ' options (' + sell + ')')
    });
});
