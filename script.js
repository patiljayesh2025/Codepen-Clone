onload = function() {



    var code = document.querySelectorAll('textarea');
    var iframe = document.querySelector("iframe");

    for (var i = code.length - 1; i >= 0; i--) {
        if (code[i].addEventListener) {
            code[i].addEventListener('input', function() {

                iframe.srcdoc = code[0].value + '<style>' +
                    code[1].value + '</style>' + '<script>' +
                    code[2].value + '<\/script>';
            }, false);
        } else if (code[i].attachEvent) {
            code[i].attachEvent('onpropertychange', function() {

                iframe.srcdoc = code[0].value + '<style>' +
                    code[1].value + '</style>' + '<script>' +
                    code[2].value + '</script>';
            });
        }
    }
}