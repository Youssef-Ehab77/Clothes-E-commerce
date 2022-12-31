//* when click on logo => go back to home page
$(function () {
    $('#logo').click(function () {
        location.href = '../HTML/Index.html'
    })
})

// "/HTML/ContactUs.html"
$(function () {
    var pageName = window.location.href;
    pageName = pageName.split('/');
    var length = pageName.length - 1;
    pageName[length] = pageName[length].slice(0, -5);
    // console.log(pageName[length]);
    $('#' + pageName[length]).eq(0).addClass('active')
    $('#' + pageName).eq(0).siblings().removeClass('active')

});

//* check if user login or not
$(function () {
    var isLogined = getCookie('username');
    if (isLogined !== '') {
        $('#login span').text(isLogined);
        $('.account-settings').get(0).children[0].innerText = 'Logout';
        $('.account-settings').get(0).children[0].setAttribute('id', 'logout');
        $('.account-settings').get(0).children[1].remove()
        $('.account-settings').css('height', '50px')
    }
    // $('.account-settings').get(0).children[0].setAttribute ('id' , '');

})

//* To fade in account settings
$(function () {
    $('#login').click(function () {
        $('.account-settings').fadeToggle();
        $('#login').toggleClass('activeLink');
    })
})

//* logout handler
$(function () {
    $('#logout').click(function () {
        console.log("logout");
        location.reload();

    })
})
