$(function () {
    setTimeout(function () {
        // $("#header").load('../HTML/Header.html');
        $('#footer').load('../HTML/Footer.html');
    }, 250)

    $('#sign-up').click(function (){
        $('.register-container').show().slideDown();
        // let newWindow = open("../HTML/Registration.html", "", "left=" + 500 + ",top=" + 100 + ",width=600,height=600");
    });
});

