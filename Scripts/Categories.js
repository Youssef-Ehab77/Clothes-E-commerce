let products = [];
let category = window.location.search.split('=')[1];
//https://api.escuelajs.co/api/v1/products
//../JSON/Products.json
$.ajax("../Data/"+category+".json", {
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
            "    <div style='width: 0;height: 0; font-size: 0'>"+products[i].id+"</div> "+
            "    <div class=\"card-img\">\n" +
            "        <img src=\"" + products[i].path + "\" alt=\"loading\">\n" +
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

    //.hover(function (){
    //         console.log(this.getElementsByTagName('div')[0].textContent);
    //     });


}, 300);


$(function () {
    setTimeout(function () {
        $("#header").load('../HTML/Components/Navbar.html');
        $('#footer').load('../HTML/Components/Footer.html');
    }, 250)

});

///// buy button js

var buyBtnArr = $(".buy-btn") ;

var newArrivalProducts = [] ;

$.ajax("../Data/"+category+".json", {
  type: "GET",
  dataType: "json",
  success: function (productsData) {
    newArrivalProducts = productsData;
  },
  error: function () {
      console.log("Error");
  },
});
setTimeout(function () {
  for (let i=1 ; i<9 ; i++) {
      $('.slider').append(
        // "<div class=\"left\"><img id=\"left\" src=\"../Images/Products/left-arrow.png\" alt=\"\"></div>"+
        
        "<div class=\"BOX box"+i+"\">"+
            "<div class=\"slide-img\">"+
                "<img src=\" "+newArrivalProducts[i-1].path+" \" alt=\"Loading\" >"+
           "<div class=\"overlay\">"+
                "<a href=\"#\" class=\"buy-btn\">"+"<div style='width: 0;height: 0; font-size: 0'>"+newArrivalProducts[i-1].id+"</div>"+ "Buy now</a>"+
            "</div>"+
            "</div>"+
            "<div class=\"detail-box\">"+
                "<div class=\"type\">"+
                    "<a href=\"#\">"+newArrivalProducts[i-1].name+"</a>"+
                    // "<span>new arrival</span>"+
                "</div>"+
                // "<a href=\"#\" class=\"price\">\""+newArrivalProducts[i-1].price+"\"</a>"+
            "</div>"+
        "</div>"
      //   +
      //  "<div class=\"right\"><img id=\"right\" src=\"../Images/Products/right-arrow.png\" alt=\"\"></div>"
      )
    }

      // name of product
      // document.querySelectorAll(".BOX")[i].innerText.split("\n")[0]
      // price
      // document.querySelectorAll(".BOX")[i].innerText.split('"')[1].split(" ")[0]

      $('.buy-btn').click(function () {
        // var productName = document.querySelectorAll(".BOX")[i].innerText.split("\n")[0]
        // var productPrice = document.querySelectorAll(".BOX")[i].innerText.split('"')[1].split(" ")[0]
        let text = this.innerText.split('\n');
        window.location = '../HTML/Product.html?id='+text[0];
    });

  
}, 300);

////////////carousel JS/////////////////////////////


$(function(){
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
}) 
