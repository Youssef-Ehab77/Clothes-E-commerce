function getCookie(cookieName) {
    var name = cookieName + "=";

    var Arrofcookie = document.cookie.split(';');

    for (var i = 0; i < Arrofcookie.length; i++) {
        var v = Arrofcookie[i].trim();

        if (v.indexOf(name) === 0) {
            return v.substring(name.length, v.length);
        }
    }
    return "";
}

function setCookie(cookieName, cookieValue, expiryDate) {
    if (expiryDate && isDate(expiryDate)) {
        document.cookie = cookieName + "=" + cookieValue + ";" + "expires=" + expiryDate + ";";
    } else
        document.cookie = cookieName + "=" + cookieValue + ";";
}

function deleteCookie(cookieName) {
    document.cookie = cookieName + "=" + ";" + "expires=" + new Date() + ";";
}

function allCookieList() {
    let cookiesList = new Map;
    let newCookie = document.cookie;
    let cookieParts = newCookie.replaceAll(";", "").split(" ");
    for (let i = 0; i < cookieParts.length; i++) {
        let temp = cookieParts[i].split("=");
        cookiesList.set(temp[0], temp[1]);
    }
    return cookiesList;
}

function hasCookie(cookieName) {
    return assocArr[cookieName];
}

let isDate = function (date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
}


// let assocArr = new Map;

// function getCookie(cookieName) {
//     let newCookie = document.cookie;
//     // let cookieParts = newCookie.replaceAll(";", "").split(" ");
//     let cookieParts = newCookie.split(";");
//     for (let i = 0; i < cookieParts.length; i++) {
//         let temp = cookieParts[i].split("=");
//         assocArr.set(temp[0],temp[1]);
//     }
//     return assocArr.get(cookieName);
// }