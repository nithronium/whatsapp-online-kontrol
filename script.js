var ilkcevrim = "0";
var soncevrim = "0";

setInterval(function(){
    var d = new Date();
    d.toLocaleTimeString();
    var source = document.getElementsByTagName('html')[0].innerHTML;
    var foundIndex = source.search("çevrimiçi");
    if(foundIndex != -1){
        if (ilkcevrim == "0"){
            ilkcevrim = d;
        }
        else {
            soncevrim = d;
        }
    }
    else {
        if ((ilkcevrim != 0) && (soncevrim != 0)){
            cevrimzamani = ilkcevrim + "'da çevrimiçi oldu ve " + soncevrim + "'da çevrimdışı oldu.";
            console.log(cevrimzamani);
            ilkcevrim = 0;
            soncevrim = 0;
        }
    }
},300);
