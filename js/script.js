

/*  we define which function will apply on the change of each input*/

document.getElementById("centimeterPart").onchange = function() {inputVal("centimeterPart", "inchesPart")};
document.getElementById("inchesPart").onchange = function() {inputVal("inchesPart", "centimeterPart" )};

/* convertion function */
function inputVal(fId,sId){
    var x = document.getElementById(fId);
    var y = document.getElementById(sId);
    if (fId === "centimeterPart"){
        y.value = (x.value/2.54).toFixed(8);
    }
    else{
        y.value = (x.value*2.54).toFixed(8);
    }
}

