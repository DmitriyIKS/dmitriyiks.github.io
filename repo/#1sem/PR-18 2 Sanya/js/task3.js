    function select() {
        let inputIn3 = document.querySelector('.input-in3');
        let str = inputIn3.value;
        console.log(inputIn)
        function firstChar(value, index, arr) {
            if (index == 0)  
                return true;  
            else  
                return arr[index - 1] === " ";  
        }  
 
        var array = [].filter.call(str, firstChar);  

        document.getElementById('rer3').innerHTML = 'Полученный массив: ' + array.join(', ');

    }