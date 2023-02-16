let inputIn = document.querySelector('.input-in1');
    function help() {
        let str = inputIn.value;
        document.getElementById('output').innerHTML = 'Измененный текст: ' + str.replace(/(?:^|[^\p{L}])(\p{L})/ug, m => m.toUpperCase());
    }