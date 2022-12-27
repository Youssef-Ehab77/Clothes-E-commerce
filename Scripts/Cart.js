$(function() {

    var number_of_items = 0;

    var check_price = 0; //total check price, add every price

    $.ajax("../json/Products.json", {
        type:"GET",
        dataType:'json',
        contentType: 'application/json',
        success: function(dataObj)
        {

            for (item of dataObj)
            {
                number_of_items += 1;
                check_price += parseInt(item.price);
                //console.log(item.price)

                $(".addOn").append(
                
            "<div class='product'>" +
            "<div>" +
                "<div class='product-image'><img src=" + item.src + "></div>" +
                "<div class='product-detail'>Black Trouser</div>" +
            "</div>" +
            "<div class='quantity-blocks'>" +
                "<button class='decrement' class='incdec'>-</button>" +
                "<div class='count' class='product-detail'>1</div>" +  //item.quantity instead of 1
                "<button class='increment' class='incdec'>+</button>" +
            "</div>"  +

            "<div class='item-price' class='product-detail'>" +item.price + "</div>" +
            "<div class='item-total' class='product-detail'>" + item.price + "</div>" +
            "<hr class='horline'>" +
            "</div>" 
        )
            }


    

    setTimeout(function (){
        $("#footer").load('../HTML/Footer.html');
        $('#header').load('../HTML/Header.html');
        $('.total-price').text('Total Price: $' + check_price);
        $('.number-items').text(number_of_items + ' items');

        $(".increment").click(function() {
            
        var countElement = $(this).closest('.product').find('.count');
        
        var count = parseInt(countElement.text()) + 1;

        var global_count = parseInt($('.number-items').text()) + 1
        $('.number-items').text(global_count + ' items');

        var price = ($(this).closest('.product').find('.item-price').text());


        var tmpTotal = count * parseInt(price);


        //update check price
        check_price += parseInt(price);

        
        //update print
        $('.total-price').text('Total Price: $' + check_price);
     


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

                var price = ($(this).closest('.product').find('.item-price').text());

                if (count != 0)
                    var tmpTotal = count * parseInt(price);
                else
                {
                    $(this).closest('.product').remove();
                    $(this).closest('.horline').remove();
                }

                //update check price

                check_price -= parseInt(price);
             
                //update print
                $('.total-price').text('Total Price: $' + check_price);

                $(this).closest('.product').find('.item-total').text('$' + tmpTotal) 
            }
            
            countElement.text(count);


            if ($(".main").find('.product').length === 0)
            {
                $(".main").empty();
                $(".main").append('<section class="empty-cart">' +
                '<div class="empty-text">"Your Cart is Empty!"</div>' +
                '<button type="button" class="continue-shopping">← Continue Shopping</button>' +
            '</section>')

            $(".main").width('250px');
            $(".main").css('margin', 'auto');
            $(".main").css('margin-top', '200px');
            $(".main").css('margin-bottom', '200px');
            $(".empty-text").css('white-space', 'nowrap');
            }

        });
}, 100)


$('.proceed-btn').click(function(){
    $('.checkout').show()
}
)


}
})

})
       
