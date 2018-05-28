function httpRequestPost(uri, datas) {

    var req = new XMLHttpRequest();

    req.open("POST", uri, true);

    req.setRequestHeader('Content-type','application/json; charset=utf-8');
    req.onreadystatechange = function() {

        if (req.readyState === XMLHttpRequest.DONE && req.status == 200) {
            console.log("#" + JSON.parse(req.responseText));

//            var result = JSON.parse(req.responseText);
//            console.log("++" + JSON.stringify(result.user.id));

//            MyContext.saveUser(JSON.stringify(result.user.id), JSON.stringify(result.user.username), mdp.text, JSON.stringify(result.user.mail))

            home1_visibility = false;
            home2_visibility = true;

        }
        else {
            console.log("error: " + req.status);
            home1_visibility = false;
            home_failed = true;

        }
    }
            req.send(JSON.stringify(datas));
}

function httpRequestGet(uri) {

    var req = new XMLHttpRequest();

    req.open("GET", uri, true);

    req.onreadystatechange = function() {

        if (req.readyState === XMLHttpRequest.DONE && req.status == 200) {
            console.log("#" + req.responseText);
        }
        else {
            console.log("error: " + req.status);
        }
    }
    req.send();
}

