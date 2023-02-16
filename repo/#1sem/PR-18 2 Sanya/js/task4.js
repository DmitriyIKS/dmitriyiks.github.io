                let ar = [];
                var comma = ',';
                function ar1() {
                    let inputIn4 = document.querySelector('.input-in4');
                    let vInputIn = inputIn4.value;
                    let ar1 = vInputIn.split(comma);
                    console.log(ar1);
                    Array.prototype.push.apply(ar, ar1);
                    console.log(ar);
                }
                function ar2() {
                    let inputIn4 = document.querySelector('.input-in5');
                    let vInputIn = inputIn4.value;
                    let ar2 = vInputIn.split(comma);
                    console.log(ar2);
                    Array.prototype.push.apply(ar, ar2);
                    console.log(ar);
                }
                function ar3() {
                    let inputIn4 = document.querySelector('.input-in6');
                    let vInputIn = inputIn4.value;
                    let ar3 = vInputIn.split(comma);
                    console.log(ar3)
                    Array.prototype.push.apply(ar, ar3);
                    console.log(ar);
                }
                function bubbleSort() {
                            ar.sort();
                            ar.reverse();
                            document.getElementById('rer4').innerHTML = ar.join(' ');
                            console.log(ar)
                }