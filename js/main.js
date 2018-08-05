pageVisited = function (evt) {
    mixpanel.track("Page Opened");
}

if(window.attachEvent) {
    window.attachEvent('onload', pageVisited);
} else {
    if(window.onload) {
        var curronload = window.onload;
        var newonload = function(evt) {
            curronload(evt);
            pageVisited(evt);
        };
        window.onload = newonload;
    } else {
        window.onload = pageVisited;
    }
}