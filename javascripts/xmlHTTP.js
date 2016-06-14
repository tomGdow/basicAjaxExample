var xmlFileName = "./xmlfile.xml";

if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest();
}
else {
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.open("GET", xmlFileName, false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

x = xmlDoc.getElementsByTagName("person");

function displayUser() {

    var display_fname = (
        x[0].getElementsByTagName("fname")[0].childNodes[0].nodeValue);
    var display_lname = (
        x[0].getElementsByTagName("lname")[0].childNodes[0].nodeValue);

    document.getElementById("fname").innerHTML = display_fname;
    document.getElementById("lname").innerHTML = display_lname;
}

//add Event Handlers
//document.getElementById('buttonId').onclick = function () {
//    displayUser();
//    showDivs('linkid');
//
//
//};

document.getElementById('buttonId').addEventListener("click", function  () {
    displayUser();
    showDivs('ajaxButton');
    hideDivs('buttonId')
}, false);

function showDivs(mydiv) {
    document.getElementById(mydiv).style.visibility = 'visible';
}

function hideDivs(mydiv) {
    document.getElementById(mydiv).style.visibility = 'hidden';
}
