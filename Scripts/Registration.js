$(function () {
    setTimeout(function () {
        $('#sign-up-btn').click(function () {
            let username = $('#r-username').get(0).value;
            let password = $('#r-password').get(0).value;
            username = username.trim();
            if (username.length >= 4 && password.length >= 4) {
                let date = new Date();
                date.setMonth(date.getMonth() + 1)

                setCookie('username', username, date);
                setCookie('password', password, date);
                swal("Signed Up Successfully!");

            } else {
                swal("Please Enter at least 4 characters!");
            }
        });
    }, 300);
});
