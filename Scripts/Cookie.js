let assocArr = new Map;

function getCookie(cookieName) {
    let newCookie = document.cookie;
    let cookieParts = newCookie.replaceAll(";", "").split(" ");
    for (let i = 0; i < cookieParts.length; i++) {
        let temp = cookieParts[i].split("=");
        assocArr.set(temp[0], temp[1]);
    }
    return assocArr.get(cookieName);
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