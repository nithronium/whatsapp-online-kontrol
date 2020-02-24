var ilkcevrim = "0";
var soncevrim = "0";
var ilkyaziyor = "0";
var sonyaziyor = "0";
var ilkses = "0";
var sonses = "0";
var langsource = document.getElementsByTagName('html')[0].innerHTML;
langsource = langsource.search("Durum");
if (langsource != -1){
    langsource = "TR";
}
else {
    langsource = "EN";
}


setInterval(function(){
    var d = new Date();
    d.toLocaleTimeString();
    var source = document.getElementsByTagName('html')[0].innerHTML;
    if (langsource = "TR"){
        var foundIndex = source.search("çevrimiçi");
        var foundYaziyor = source.search('<div class="_3Q3ui i1XSV"><span title="yazıyor');
        var foundSes = source.search('title="ses kayd');
    }
    else {
        var foundIndex = source.search("online");
        var foundYaziyor = source.search('<div class="_3Q3ui i1XSV"><span title="typing');
        var foundSes = source.search('<div class="_3Q3ui i1XSV"><span title="voice rec');
    }


    //Çevrimiçi kontrol
    if((foundIndex != -1) || (foundYaziyor != -1) || (foundSes !=-1)){
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


    //Yazıyor kontrol
    if (foundYaziyor != -1){
        if (ilkyaziyor == "0"){
            ilkyaziyor = d;
        }
        else {
            sonyaziyor = d;
        }
    }
    else {
        if((ilkyaziyor !=0) && (sonyaziyor!=0)){
            yaziyorzamani = ilkyaziyor + "'da yazmaya başladı ve " + sonyaziyor + "'da yazmayı bitirdi.";
            console.log(yaziyorzamani);
            ilkyaziyor = 0;
            sonyaziyor = 0;
        }
    }


    //Ses kaydediyor kontrol
    if (foundSes != -1){
        if (ilkses == "0"){
            ilkses = d;
        }
        else {
            sonses = d;
        }
    }
    else {
        if((ilkses !=0) && (sonses!=0)){
            seszamani = ilkses + "'da yazmaya başladı ve " + sonses + "'da yazmayı bitirdi.";
            console.log(seszamani);
            ilkses = 0;
            sonses = 0;
        }
    }

},300);
