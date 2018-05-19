function GetURLParameters(whichParam) {
    var pageURL = window.location.search.substring(1);
    var pargeURLVariables = pageURL.split('&');
    for(var i = 0; i < pargeURLVariables.length; i++) {
        var parameterName = pargeURLVariables[i].split('=');
        if (parameterName[0] == whichParam) {
            return parameterName[1];
        }
    }
}

var username = GetURLParameters('username');

if('undefined' == typeof username || !username) {
    username = 'Anonymous_'+Math.random();
}

$('#messages').append('<h4>' +GetURLParameters('username')+'</h4>')