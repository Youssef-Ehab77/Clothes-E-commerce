$('#sign-up-btn').click(function () {
    let username = $('#username').get(0).value;
    let password = $('#password').get(0).value;

    if (username.length >= 4 && password.length >= 4) {
        let user = {"username": username, "password": password};
        let date = new Date();
        date.setMonth(date.getMonth()+1)
        document.cookie = "user="+user+"; expires="+date+";";
    } else {
        alert('Please Enter at least 4 characters!');
    }
})
