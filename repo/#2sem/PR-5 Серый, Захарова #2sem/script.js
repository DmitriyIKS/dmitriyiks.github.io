let arr = [];
let arr1 = [];
let arr2 = [];
let arr3 = [];
//1 input area
function next1() {
    //$("#k > input").nextAll("input, textarea")[0].focus();
    $('#input-in1')[0].disabled = true;    
}
function play1() {
    arr.push((document.querySelector('.input-in1').value).split(' '));
    arr1.push((document.querySelector('.input-in1').value).split(' '));
    console.log(arr, arr1);
}
function del1() {
    $('#input-in1')[0].disabled = false;
    document.getElementById('input-in1').value=''
}
//2 input area
function next2() {
    //$("#k > input").nextAll("input, textarea")[0].focus();
    $('#input-in2')[0].disabled = true;   
}
function play2() {
    arr.push((document.querySelector('.input-in2').value).split(' '));
    arr2.push((document.querySelector('.input-in2').value).split(' '));
    console.log(arr, arr2);
}
function del2() {
    $('#input-in2')[0].disabled = false;
    document.getElementById('input-in2').value=''
}
//3 input area
function next3() {
    //$("#k > input").nextAll("input, textarea")[0].focus();
    $('#input-in3')[0].disabled = true;    
}
function play3() {
    arr.push((document.querySelector('.input-in3').value).split(' '));
    arr3.push((document.querySelector('.input-in3').value).split(' '));
    console.log(arr, arr3);
}
function del3() {
    $('#input-in3')[0].disabled = false;
    document.getElementById('input-in3').value=''
}
//buttons result
function visable() {
    //massiv 1
    document.getElementById('0-0').innerHTML=arr1[0][0];
    document.getElementById('0-1').innerHTML=arr1[0][1]
    document.getElementById('0-2').innerHTML=arr1[0][2]
    document.getElementById('0-3').innerHTML=arr1[0][3]
    document.getElementById('0-4').innerHTML=arr1[0][4]
    //massiv2
    document.getElementById('1-0').innerHTML=arr2[0][0];
    document.getElementById('1-1').innerHTML=arr2[0][1]
    document.getElementById('1-2').innerHTML=arr2[0][2]
    document.getElementById('1-3').innerHTML=arr2[0][3]
    document.getElementById('1-4').innerHTML=arr2[0][4]
    //massiv3
    document.getElementById('2-0').innerHTML=arr3[0][0];
    document.getElementById('2-1').innerHTML=arr3[0][1]
    document.getElementById('2-2').innerHTML=arr3[0][2]
    document.getElementById('2-3').innerHTML=arr3[0][3]
    document.getElementById('2-4').innerHTML=arr3[0][4]
    //sum
    document.getElementById('3-0').innerHTML=(parseFloat(arr1[0][0]))+(parseFloat(arr2[0][0]))+(parseFloat(arr3[0][0]));
    document.getElementById('3-1').innerHTML=(parseFloat(arr1[0][1]))+(parseFloat(arr2[0][1]))+(parseFloat(arr3[0][1]));
    document.getElementById('3-2').innerHTML=(parseFloat(arr1[0][2]))+(parseFloat(arr2[0][2]))+(parseFloat(arr3[0][2]));
    document.getElementById('3-3').innerHTML=(parseFloat(arr1[0][3]))+(parseFloat(arr2[0][3]))+(parseFloat(arr3[0][3]));
    document.getElementById('3-4').innerHTML=(parseFloat(arr1[0][4]))+(parseFloat(arr2[0][4]))+(parseFloat(arr3[0][4]));
    //massives
    document.getElementById('resultMass').innerHTML=arr;
}
function sum() {
    document.getElementById('resultSum').innerHTML=(parseFloat(arr1[0][0]))+(parseFloat(arr2[0][0]))+(parseFloat(arr3[0][0]))+(parseFloat(arr1[0][1]))+(parseFloat(arr2[0][1]))+(parseFloat(arr3[0][1]))+(parseFloat(arr1[0][2]))+(parseFloat(arr2[0][2]))+(parseFloat(arr3[0][2]))+(parseFloat(arr1[0][3]))+(parseFloat(arr2[0][3]))+(parseFloat(arr3[0][3]))+(parseFloat(arr1[0][4]))+(parseFloat(arr2[0][4]))+(parseFloat(arr3[0][4]));
}
function sort() {
    arr[0].sort();
    arr[1].sort();
    arr[2].sort();
    document.getElementById('resultSort').innerHTML=arr[0]+','+arr[1]+','+arr[2];
}
function sort1() {
    const numbers = arr[0];
    const numbers1 = arr[1];
    const numbers2 = arr[2];
    const isOdd = (num) => num % 2 !== 0;
    const odd1 = numbers.filter(isOdd);
    const odd11 = numbers1.filter(isOdd)
    const odd12 = numbers2.filter(isOdd);
    document.getElementById('resultSort1').innerHTML=odd1+','+odd11+','+odd12;
}
function sort2() {
    const numbers2 = arr[0];
    const numbers12 = arr[1];
    const numbers22 = arr[2];
    const isOdd2 = (num) => num % 2 == 0;
    const odd2 = numbers2.filter(isOdd2)
    const odd21 = numbers12.filter(isOdd2)
    const odd22 = numbers22.filter(isOdd2);
    document.getElementById('resultSort2').innerHTML=odd2+','+odd21+','+odd22;
}
//delAll
function delAll() {
    document.getElementById('input-in1').value='';
    document.getElementById('input-in2').value='';
    document.getElementById('input-in3').value='';
}
//saves
function save1() {
    var blob = new Blob([(arr[0])],{ type: "text/plain;charset=utf-8" });
    blob += new Blob([(arr[1])],{ type: "text/plain;charset=utf-8" });
    blob += new Blob([(arr[2])],{ type: "text/plain;charset=utf-8" });
    saveAs((blob), "static.txt");
}
function save2() {

}

