//* when click on logo => go back to home page
$(function(){
    $('#logo').click(function(){
        history.back('./')
    })
})



//* check if user login or not
$(function(){
    var isLogined = getCookie('username');
    if(isLogined!==''){
        $('#login span').text(isLogined);
        $('.account-settings').get(0).children[0].innerText = 'Logout';
        $('.account-settings').get(0).children[0].setAttribute ('id' , 'logout');
        $('.account-settings').get(0).children[1].remove()
        $('.account-settings').css('height','50px')
    }
    // $('.account-settings').get(0).children[0].setAttribute ('id' , '');

})

//* To fade in account settings
$(function(){
    $('#login').click(function(){
        $('.account-settings').fadeToggle();
        $('#login').toggleClass('activeLink');
    })
})

//* logout handler
$(function(){
    $('#logout').click(function(){
        console.log("logout");
        location.reload();

    })
})
