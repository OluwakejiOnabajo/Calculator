function val(val){
    value =  document.getElementById("result").value;
    var status = document.getElementById("status").value;

    if (value == 0) {
        document.getElementById("result").value = '';
    }

    if (status == 1) {
        document.getElementById("result").value = '';
        document.getElementById("status").value="0";
    }

    document.getElementById("result").value += val;
}

function evalCalc(){
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = " = " + y;
    document.getElementById("status").value="1";
}
 
function switchCalc(){
    var option = document.getElementById("switch").innerHTML;
if (option == 'ON') {
    document.getElementById("switch").innerHTML = 'OFF';
}else{
    document.getElementById("switch").innerHTML = 'ON';
}
}

function dele(){
    var option = document.getElementById("result").value;
   document.getElementById("result").value = option.slice(0, -1);
}

function clr(){
    document.getElementById("result").value = 0;
}