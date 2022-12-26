$(function() {

    var number_of_items = 0;

    $.ajax("../json/Products.json", { //open the json file
        type:"GET",
        dataType:'json',
        contentType: 'application/json',
        success: function(dataObj)
        {

            for (item of dataObj)
            {
                number_of_items += 1;

                $(".addOn").append(
                
            "<div class='product'>" +
            "<div>" +
                "<div class='product-image'><img src=" + item.src + "></div>" +
                "<div class='product-detail'>Black Trouser</div>" +
            "</div>" +
            "<div class='quantity-blocks'>" +
                "<button class='decrement' class='incdec'>-</button>" +
                "<div class='count' class='product-detail'>1</div>" +
                "<button class='increment' class='incdec'>+</button>" +
            "</div>"  +

            "<div class='item-price' class='product-detail'>$54</div>" +
            "<div class='item-total' class='product-detail'>$54</div>" +
        "</div>" +
        "<hr>")
            }

        }
    })

    setTimeout(function (){
        $('.number-items').text(number_of_items + ' items');

        $(".increment").click(function() {
            
        var countElement = $(this).closest('.product').find('.count');
        
        var count = parseInt(countElement.text()) + 1;

        var global_count = parseInt($('.number-items').text()) + 1
        $('.number-items').text(global_count + 'items');

        var price = ($(this).closest('.product').find('.item-price').text().slice(1));

        var tmpTotal = count * price;
     
        $(this).closest('.product').find('.item-total').text('$' + tmpTotal) 

        countElement.text(count);


          
        });
        $(".decrement").click(function() {
            var countElement = $(this).closest('.product').find('.count');
            
            if (parseInt(countElement.text()) != 0)
            {
                var count = parseInt(countElement.text()) -1;

                var global_count = parseInt($('.number-items').text()) - 1
                $('.number-items').text(global_count + ' items');

                var price = ($(this).closest('.product').find('.item-price').text().slice(1));

                var tmpTotal = count * price;
             
                $(this).closest('.product').find('.item-total').text('$' + tmpTotal) 
            }
            
            countElement.text(count);
        });
}, 30)



})
       
