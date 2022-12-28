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
                if (confirm("Signed Up Successfully! \n Head To the Home Page Now")) {
                    document.location.href = '../HTML/Index.html';
                }

            } else {
                // alert('Please Enter at least 4 characters!');
                swal("Please Enter at least 4 characters!");
            }
        });
    }, 300);
});
