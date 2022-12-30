let products = [];
let category = window.location.search.split('=')[1];
//https://api.escuelajs.co/api/v1/products
//../JSON/Products.json
$.ajax("../Data/" + category + ".json", {
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
            "    <div style='width: 0;height: 0; font-size: 0'>" + products[i].id + "</div> " +
            "    <div class=\"card-img\">\n" +
            "        <img src=\"" +((category === 'Men') ? products[i].path : products[i].path2)+"\" alt=\"loading\">\n" +
                "    </div>\n" +
                "    <div class=\"card-info\">\n" +
                "        <div class=\"card-name\">" + products[i].name + "</div>\n" +
                "        <div class=\"card-price\">" + products[i].price + "</div>\n" +
                "    </div>\n" +
                "</div>"
        );
    }
    $('.card').click(function () {
        let data = this.innerText.split('\n');
        // window.open('../HTML/Product.html?id=' + data[0]);
        window.location = '../HTML/Product.html?id=' + data[0];
    });
}, 300);


$(function () {
    setTimeout(function () {
        $("#header").load('../HTML/Components/Navbar.html');
        $('#footer').load('../HTML/Components/Footer.html');
        console.log();
        if (category === 'Men')
            $('#page-main-img').get(0).src = '../Images/model1.jpg';
        else {
            $('#page-main-img').get(0).src = '../Images/modelw.jpg';
            $('#word1').css('color', '#2D3142');
            $('#word2').css('color', '#2D3142');

        }
    }, 250);
});


////////////carousel JS/////////////////////////////

setTimeout(function () {
    for (let i = 1; i < 9; i++) {
        $('.slider').append(
            "<div class=\"BOX box" + i + "\">" +
            "<div class=\"slide-img\">" +
            "<img src=\" " + ((category === 'Men') ? newArrivalProducts[i - 1].path2:newArrivalProducts[i - 1].path) + " \" alt=\"Loading\" >" +
            "<div class=\"overlay\">" +
            "<a class=\"buy-btn\">" + "<div style='width: 0;height: 0; font-size: 0'>" + newArrivalProducts[i - 1].id + "</div>" + "Buy now</a>" +
            "</div>" +
            "</div>" +
            "<div class=\"detail-box\">" +
            "<div class=\"type\">" +
            "<a>" + newArrivalProducts[i - 1].name + "</a>" +
            "</div>" +
            "</div>" +
            "</div>"
        )
    }
    $('.buy-btn').click(function () {
        let text = this.innerText.split('\n');
        window.location = '../HTML/Product.html?id=' + text[0];
    });


}, 300);
$(function () {
    var oldx;

    $("#right").on("click", function () {

        oldx = document.querySelector('.box1').getBoundingClientRect();
        if (!(oldx.left < -1225)) {
            console.log(oldx.left);
            var t1 = setInterval(function () {

                var offsets1 = document.querySelector('.box1').getBoundingClientRect();
                if (oldx.left >= offsets1.left + 350) {
                    clearInterval(t1);
                }
                var offsets2 = document.querySelector('.box2').getBoundingClientRect();
                var offsets3 = document.querySelector('.box3').getBoundingClientRect();
                var offsets4 = document.querySelector('.box4').getBoundingClientRect();
                var offsets5 = document.querySelector('.box5').getBoundingClientRect();
                var offsets6 = document.querySelector('.box6').getBoundingClientRect();
                var offsets7 = document.querySelector('.box7').getBoundingClientRect();
                var offsets8 = document.querySelector('.box8').getBoundingClientRect();

                $(".box1").css("left", offsets1.left - 10 + "px")
                $(".box2").css("left", offsets2.left - 10 + "px")
                $(".box3").css("left", offsets3.left - 10 + "px")
                $(".box4").css("left", offsets4.left - 10 + "px")
                $(".box5").css("left", offsets5.left - 10 + "px")
                $(".box6").css("left", offsets6.left - 10 + "px")
                $(".box7").css("left", offsets7.left - 10 + "px")
                $(".box8").css("left", offsets8.left - 10 + "px")

            }, 20)
        }

    });


    $("#left").on("click", function () {

        oldx = document.querySelector('.box1').getBoundingClientRect();
        if (!(oldx.left > 0)) {
            console.log(oldx.left);
            var t2 = setInterval(function () {

                var offsets1 = document.querySelector('.box1').getBoundingClientRect();
                if (oldx.left < offsets1.left - 350) {
                    clearInterval(t2);
                }
                var offsets2 = document.querySelector('.box2').getBoundingClientRect();
                var offsets3 = document.querySelector('.box3').getBoundingClientRect();
                var offsets4 = document.querySelector('.box4').getBoundingClientRect();
                var offsets5 = document.querySelector('.box5').getBoundingClientRect();
                var offsets6 = document.querySelector('.box6').getBoundingClientRect();
                var offsets7 = document.querySelector('.box7').getBoundingClientRect();
                var offsets8 = document.querySelector('.box8').getBoundingClientRect();

                $(".box1").css("left", offsets1.left + 10 + "px")
                $(".box2").css("left", offsets2.left + 10 + "px")
                $(".box3").css("left", offsets3.left + 10 + "px")
                $(".box4").css("left", offsets4.left + 10 + "px")
                $(".box5").css("left", offsets5.left + 10 + "px")
                $(".box6").css("left", offsets6.left + 10 + "px")
                $(".box7").css("left", offsets7.left + 10 + "px")
                $(".box8").css("left", offsets8.left + 10 + "px")

            }, 20)
        }

    });
});

///// buy button js
var buyBtnArr = $(".buy-btn");

var newArrivalProducts = [];

$.ajax("../Data/" + category + ".json", {
    type: "GET",
    dataType: "json",
    success: function (productsData) {
        newArrivalProducts = productsData;
    },
    error: function () {
        console.log("Error");
    },
});