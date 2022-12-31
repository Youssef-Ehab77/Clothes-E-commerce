//* Load Components

//* Load Header Component


$("#loading-component").load("HTML/Components/Loading.html");
$('body').css({
    'height':'500',
    'background-color': '#2b4661'
})

$(function() {
    var timer = setTimeout(function(){
        $('body').css({
            'height':'auto',
            'background': 'none'
        })
        //* Load navbar Component
        $("#navbar-component").load("HTML/Components/Navbar.html");
        //* Load Header Component
        $("#header-component").load("HTML/Components/Header.html");
        //* footer-component
        $("#all-categories-component").load("HTML/Components/AllCategories.html");
        //* Load Product Component
        $("#product-component").load("HTML/Components/ViewProducts.html");
        //* footer-component
        $("#footer-component").load("HTML/Components/Footer.html");
        
    },2000)
    
});





