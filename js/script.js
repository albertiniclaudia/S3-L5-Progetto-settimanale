var num1 = ""
var num2 = ""
var oper = ""
var res = ""

function screenRefresh(){
    let text = num1 + " " + oper + " " + num2;
    document.getElementById("schermo").innerHTML = text;
}

function addNum(n){
    if (oper == "" && res != ""){
        num1 = n
        res = ""

    }else if (oper == "") {
        num1 += n;

    }else{
        num2 += n;
    }
    screenRefresh();
}

function addPunto(){
    if (num1 != "" && !(num1.includes("."))) {
        num1 += '.';

    }else if (num2 != "" && !(num2.includes('.'))) {
        num2 += '.';

    }else{
        return
    }
    screenRefresh();
}

function addOper(n){
    if (num1 == "") return
    oper = n;
    screenRefresh();
}

function cTot(){
    num1 = ""
    num2 = ""
    oper = ""
    screenRefresh();
}

function canc(){
    if (num2 != ""){
        num2 = num2.slice(0, -1)

    } else if (oper != ""){
        oper = oper.slice(0, -1)

    } else if (num1 != ""){
        num1 = num1.slice(0, -1)

    }else{
        return
    }
    screenRefresh()
}

function ris(){
    if (num2 == '') return;

    n1 = parseFloat(num1)  
    n2 = parseFloat(num2)  

    if (oper == '+'){
        res = n1 + n2

    } else if (oper == '-'){
        res = n1 - n2

    } else if (oper == 'x'){
        res = n1 * n2

    } else if (oper == '/'){
        res = n1 / n2

    } else if (oper == '^'){
        res = n1 ** n2
    }
    cTot()
    num1 = res
    screenRefresh()
}
