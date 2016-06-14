
 // Modified from Mozilla Developer Tools (MDN)
 //See: https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started

(function() {
    var httpRequest;

    function makeRequest(url) {
        if (window.XMLHttpRequest) { // Mozilla, Safari, ...
            httpRequest = new XMLHttpRequest();
        } else if (window.ActiveXObject) { // IE
            try {
                httpRequest = new ActiveXObject("Msxml2.XMLHTTP");
            }
            catch (e) {
                try {
                    httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
                }
                catch (e) {}
            }
        }

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = insertContents;
        httpRequest.open('GET', url);
        httpRequest.send();
    }

    function insertContents() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                //alert(httpRequest.responseText);

                document.getElementById('htmlDiv').innerHTML = httpRequest.responseText;

            } else {
                alert('There was a problem with the request.');
            }
        }
    }

    function showtheDiv(mydiv) {
        document.getElementById(mydiv).style.visibility = 'visible';
    }

    function hidetheDiv(mydiv) {
        document.getElementById(mydiv).style.visibility = 'hidden';
    }

    document.getElementById("ajaxButton").onclick = function() {
        makeRequest('./test.html');
        hidetheDiv('ajaxButton');
        showtheDiv('linkid');
    };
})();

