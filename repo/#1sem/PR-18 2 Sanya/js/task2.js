        let m = 9;
        let inputIn2 = document.querySelector('.input-in2');

        function gotovo() {
            let str = inputIn2.value;
            if (str.length > 9) {
                document.getElementById('rer2').innerHTML = 'Измененный текст: ' + str.substr(0,m) + '...';
            } else {
                document.getElementById('rer2').innerHTML = 'Измененный текст: ' + str.substr(0,m);
            }
        }
        function chitat() {
            let str2 = inputIn2.value;
            document.getElementById('rer2').innerHTML = 'Полный текст: ' + str2;
        }