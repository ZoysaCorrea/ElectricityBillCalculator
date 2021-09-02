
//Inputs
var tWatt = document.getElementById('t-watt');
var rev = document.getElementById('rev');

//Buttons
var calc = document.getElementById('calc');

//Result
var wDay = document.getElementById('w-day');
var kwDay = document.getElementById('kw-day');
var kwMonth = document.getElementById('kw-month');
var tCost = document.getElementById('t-cost');
var profit = document.getElementById('p-month');

var eUnit = document.getElementById('e-unit');
var wUnit = document.getElementById('w-unit');
var fMonth = document.getElementById('f-month');

function calculate(){

    wDay.value = tWatt.value*24;
    kwDay.value = wDay.value/1000;
    kwMonth.value = kwDay.value*30;

    switch(true){
        case (kwMonth.value<=100):
        eUnit.value = 3.05;
        wUnit.value = 1.46;
        fMonth.value = 75;
        break;

        case kwMonth.value>=101 && kwMonth.value<=300: 
        eUnit.value = 5.00;
        wUnit.value = 1.46;
        fMonth.value = 115;
        break;

        case kwMonth.value>=301 && kwMonth.value<=500: 
        eUnit.value = 6.65;
        wUnit.value = 1.46;
        fMonth.value = 115;
        break;

        case kwMonth.value>500: 
        eUnit.value = 7.80;
        wUnit.value = 1.46;
        fMonth.value = 140;
        break;
    }
    
    tCost.value = (kwMonth.value*eUnit.value*wUnit.value)+parseInt(fMonth.value);
    profit.value = (rev.value-tCost.value).toFixed();
}


var dollar = document.getElementById('dollar');
var inr = document.getElementById('inr');
var msg = document.getElementById('msg');
var msgs = document.getElementById('msg2');

function currency(){
    inr.value = (parseFloat(dollar.value*73.94)).toFixed(4);
    msg.innerHTML=dollar.value+ " " + "US dollars equals" + " " +inr.value+ " " + "Indian Rupees";
    var monthly = (30*inr.value).toFixed();
    msgs.innerHTML= '<button onclick="gotoTop();" style="padding:10px; font-size: 15px; background-color: #04AA6D; color: white; border: none">Go to Top</button>';
    rev.value = monthly;
}

function currency2(){
    document.getElementsByClassName('fa-arrow-right').setAttribute("transform", "scaleX(-1)");
    dollar.value = (parseFloat(inr.value)/73.94).toFixed();
    msg.innerHTML=dollar.value+ " " + "Indian Rupees equals" + " " +inr.value+ " " + "US dollars";
}


function gotoTop(){
    document.documentElement.scrollTop = 0;
}
