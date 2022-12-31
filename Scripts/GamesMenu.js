$(".grandChild1").on("click", function () {
    location.assign('Pokemon.html')
})
$(".grandChild2").on("click", function () {
    location.assign('2048.html')
})

setTimeout(function () {
    $("#header").load('../HTML/Components/Navbar.html');
    // $('#footer').load('../HTML/Components/Footer.html');
}, 200);