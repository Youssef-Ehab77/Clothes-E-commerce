//* Load navbar Component
$("#navbar-component").load("./Components/Navbar.html");

//* Load footer Component
$("#footer-component").load("./Components/Footer.html");



//* get value from input form
$(function(){
   
    $('#btnSendMsg').click(function(){
        var name = document.getElementById('name').value
        var email = document.getElementById('email').value
        var message = document.getElementById('message').value

        if(!!name && !!email && !!message){
            $('.error').fadeOut(100)
            $('#successfulMsg').fadeIn(1000)
        }
        else{
            //* if user not enter any data
            $('.error').fadeIn(600)
        }

    })
    
})


