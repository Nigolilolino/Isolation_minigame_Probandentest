window.onload = function () {
    console.log('Dokument geladen');
    init();
}

var btn1;
var btn2;
var btn3;
var btn4;
var btn5;
var btn6;
var btn7;

var resetBtn;

var light1;
var light2;
var light3;
var light4;
var light5;
var light6;
var light7;

function init(){
    btn1 = document.getElementById("btn1");
    btn2 = document.getElementById("btn2");
    btn3 = document.getElementById("btn3");
    btn4 = document.getElementById("btn4");
    btn5 = document.getElementById("btn5");
    btn6 = document.getElementById("btn6");
    btn7 = document.getElementById("btn7");

    resetBtn = document.getElementById("resetBtn");

    light1 = document.getElementById("light1");
    light2 = document.getElementById("light2");
    light3 = document.getElementById("light3");
    light4 = document.getElementById("light4");
    light5 = document.getElementById("light5");
    light6 = document.getElementById("light6");
    light7 = document.getElementById("light7");

    btn1.addEventListener (
        'click', 
        function() {          
            distributeSIgnals(btn1.id); 
        }, 
        false
     );

     btn2.addEventListener (
        'click', 
        function() {          
            distributeSIgnals(btn2.id); 
        }, 
        false
     );

     btn3.addEventListener (
        'click', 
        function() {          
            distributeSIgnals(btn3.id); 
        }, 
        false
     );

     btn4.addEventListener (
        'click', 
        function() {          
            distributeSIgnals(btn4.id); 
        }, 
        false
     );
     btn5.addEventListener (
        'click', 
        function() {          
            distributeSIgnals(btn5.id); 
        }, 
        false
     );
     btn6.addEventListener (
        'click', 
        function() {          
            distributeSIgnals(btn6.id); 
        }, 
        false
     );
     btn7.addEventListener (
        'click', 
        function() {          
            distributeSIgnals(btn7.id); 
        }, 
        false
     );

     resetBtn.addEventListener (
        'click', 
        function() {          
            resetButtons(); 
        }, 
        false
     );
  
}

function distributeSIgnals(_btn){

    switch(_btn) {
        case "btn1":
            changeLight(light1, light3, light6);
          break;
        case "btn2":
            changeLight(light1, light2, light5);
          break;
        case "btn3":
            changeLight(light2, light5);
          break;
        case "btn4":
            changeLight(light2, light4, light7);
          break;
        case "btn5":
            changeLight(light4, light5);
          break;
        case "btn6":
            changeLight(light4, light7);
          break;
        case "btn7":
            changeLight(light1, light3, light5, light7);
          break;
        default:
          console.log("Error");
      }

      checkForWin();

}

function checkForWin(){
    var allActivatedLights = document.getElementsByClassName("lightOn");
    var allLights = document.getElementsByClassName("light");

        if(allLights.length == allActivatedLights.length){
            alert("The waterflow has been changed");
        }
}

function changeLight(_firstLight, _secondLight, _thirdLight, _fourthLight){
    if(_firstLight.getAttribute("data-activated") == "false"){
        _firstLight.className = "light lightOn";
        _firstLight.setAttribute("data-activated", "true");
    } else {
        _firstLight.className = "light lightOff";
        _firstLight.setAttribute("data-activated", "false");
    }

    if(_secondLight.getAttribute("data-activated") == "false"){
        _secondLight.className = "light lightOn";
        _secondLight.setAttribute("data-activated", "true");
    } else {
        _secondLight.className = "light lightOff";
        _secondLight.setAttribute("data-activated", "false");
    }

    if(typeof _thirdLight === 'undefined'){
    } else {
        if(_thirdLight.getAttribute("data-activated") == "false"){
            _thirdLight.className = "light lightOn";
            _thirdLight.setAttribute("data-activated", "true");
        } else {
            _thirdLight.className = "light lightOff";
            _thirdLight.setAttribute("data-activated", "false");
        }
    }

    if(typeof _fourthLight === 'undefined'){
    } else {
        if(_fourthLight.getAttribute("data-activated") == "false"){
            _fourthLight.className = "light lightOn";
            _fourthLight.setAttribute("data-activated", "true");
        } else {
            _fourthLight.className = "light lightOff";
            _fourthLight.setAttribute("data-activated", "false");
        }
    }
}

function resetButtons(){
    var allActivatedLights = document.getElementsByClassName("lightOn");

    while(allActivatedLights.length !=0){
        for (var light of allActivatedLights) {
            light.className = "lightOff";
            light.setAttribute("data-activated", "false");
        }
    }

}