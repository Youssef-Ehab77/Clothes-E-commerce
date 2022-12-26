let products = [];
//console.log(window.location);
//https://api.escuelajs.co/api/v1/products

$.ajax("../JSON/Products.json", {
    type: "GET",
    dataType: "json",
    success: function (productsData) {
        products = productsData;
    },
    error: function () {
        console.log("Error");
    },
});
setTimeout(function () {
    for (let i in products) {
        $('.main').append(
            "<div class=\"card\">\n" +
            "    <div class=\"card-img\">\n" +
            "        <img src=\"" + products[i].src + "\" alt=\"loading\">\n" +
            "    </div>\n" +
            "    <div class=\"card-info\">\n" +
            "        <div class=\"card-name\">" + products[i].name + "</div>\n" +
            "        <div class=\"card-price\">" + products[i].price + "</div>\n" +
            "    </div>\n" +
            "</div>"
        )
    }
}, 300);


$(function () {
    setTimeout(function (){
        $("#header").load('../HTML/Header.html');
        $('#footer').load('../HTML/Footer.html');
    },250)

});