$(function() {
    var count = 0;
    $("#increment").click(function() {
      count++;
      $("#count").text(count);
    });
    $("#decrement").click(function() {
        if (count != 0)
            count--;
      $("#count").text(count);
    });

    $.ajax("../json/Products.json", { //open the json file
        type:"GET",
        dataType:'json',
        contentType: 'application/json',
        success: function(dataObj)
        {

            for (item of dataObj)
            {
                $(".addOn").append(
                
            "<div class='product'>" +
            "<div>" +
                "<div class='product-image'><img src=" + item.src + "></div>" +
                "<div class='product-detail'>Black Trouser</div>" +
            "</div>" +
            "<div class='quantity-blocks'>" +
                "<button id='decrement' class='incdec'>-</button>" +
                "<div id='count' class='product-detail'>0</div>" +
                "<button id='increment' class='incdec'>+</button>" +
            "</div>"  +

            "<div class='product-detail'>$54</div>" +
            "<div class='product-detail'>$162</div>" +
        "</div>" +
        "<hr>")
            }

        }

    })

})
       
