let products = [];
//console.log(window.location);
//https://api.escuelajs.co/api/v1/products
//../JSON/Products.json
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
    $('.card').click(function () {
        let data = this.innerText.split('\n');
        window.location = '../HTML/Cart.html?product=' + data[0];
    });


}, 300);


$(function () {
    setTimeout(function () {
        $("#header").load('../HTML/Components/Navbar.html');
        $('#footer').load('../HTML/Components/Footer.html');
    }, 250)

});


////////////carousel JS/////////////////////////////
  
var oldx;
  
$("#left").on("click", function () {

  oldx = document.querySelector('.box1').getBoundingClientRect();
  if(!(oldx.left < -1225))
  {
    console.log(oldx.left);
  var t1 = setInterval(function(){

  var offsets1 = document.querySelector('.box1').getBoundingClientRect();
  if(oldx.left >= offsets1.left+350 )
  {
    clearInterval(t1);
  }
  var offsets2 = document.querySelector('.box2').getBoundingClientRect();
  var offsets3 = document.querySelector('.box3').getBoundingClientRect();
  var offsets4 = document.querySelector('.box4').getBoundingClientRect();
  var offsets5 = document.querySelector('.box5').getBoundingClientRect();
  var offsets6 = document.querySelector('.box6').getBoundingClientRect();
  var offsets7 = document.querySelector('.box7').getBoundingClientRect();
  var offsets8 = document.querySelector('.box8').getBoundingClientRect();
  
    $(".box1").css("left" , offsets1.left-10+"px")
    $(".box2").css("left" , offsets2.left-10+"px")
    $(".box3").css("left" , offsets3.left-10+"px")
    $(".box4").css("left" , offsets4.left-10+"px")
    $(".box5").css("left" , offsets5.left-10+"px")
    $(".box6").css("left" , offsets6.left-10+"px")
    $(".box7").css("left" , offsets7.left-10+"px")
    $(".box8").css("left" , offsets8.left-10+"px")
    
  },30)
}
   
});


$("#right").on("click", function () {

  oldx = document.querySelector('.box1').getBoundingClientRect();
  if(!(oldx.left > 0))
  {
    console.log(oldx.left);
  var t2 = setInterval(function(){

  var offsets1 = document.querySelector('.box1').getBoundingClientRect();
  if(oldx.left < offsets1.left-350 )
  {
    clearInterval(t2);
  }
  var offsets2 = document.querySelector('.box2').getBoundingClientRect();
  var offsets3 = document.querySelector('.box3').getBoundingClientRect();
  var offsets4 = document.querySelector('.box4').getBoundingClientRect();
  var offsets5 = document.querySelector('.box5').getBoundingClientRect();
  var offsets6 = document.querySelector('.box6').getBoundingClientRect();
  var offsets7 = document.querySelector('.box7').getBoundingClientRect();
  var offsets8 = document.querySelector('.box8').getBoundingClientRect();
  
    $(".box1").css("left" , offsets1.left+10+"px")
    $(".box2").css("left" , offsets2.left+10+"px")
    $(".box3").css("left" , offsets3.left+10+"px")
    $(".box4").css("left" , offsets4.left+10+"px")
    $(".box5").css("left" , offsets5.left+10+"px")
    $(".box6").css("left" , offsets6.left+10+"px")
    $(".box7").css("left" , offsets7.left+10+"px")
    $(".box8").css("left" , offsets8.left+10+"px")
    
  },30)
}
   
});



