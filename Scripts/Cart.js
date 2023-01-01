$(function() {

    var number_of_items = 0;

    var check_price = 0; //total check price, add every price

    $.ajax("../Data/both.json", {
        type:"GET",
        dataType:'json',
        contentType: 'application/json',
        success: function(dataObj)
        {


            for (item of dataObj)
            {
                if (hasCookie(item.id))
                {
     
                check_price += parseFloat(item.price.substring(1, item.price.length)) * parseInt(getCookie(item.id));
                //console.log(item.price)
            
            //if item.name in cookies 
                $(".addOn").append(
                
            "<div class='product'>" +
            "<div>" +
                "<div class='product-image'><img src=" + item.path + "></div>" +
                "<div class='product-name' class='product-detail'>" + item.name + '</div>' +
            "</div>" +
            "<div class='quantity-blocks'>" +
                "<button class='decrement' class='incdec'>-</button>" + //Cookies.get(item.id)
                "<div class='count' class='product-detail'>" + parseFloat(getCookie(item.id)) + "</div>" +  //item.quantity instead of 1
                "<button class='increment' class='incdec'>+</button>" +
            "</div>"  +

            "<div class='item-price' class='product-detail'>" + item.price + "</div>" +
            "<div class='item-total' class='product-detail'> £" + parseFloat(item.price.substring(1, item.price.length)) * parseInt(getCookie(item.id)) + "</div>" +
            "<hr class='horline'>" +
            "</div>" 
        )
            number_of_items += parseInt(getCookie(item.id));
            }
        }

        ///////if cart is empty
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

    setTimeout(function (){


        $(".continue-shopping").click(function () {
            window.location = '../HTML/Index.html';
        })
        $("#footer").load('../HTML/Components/Footer.html');
        $('#header').load('../HTML/Components/Navbar.html');

        

        if (getCookie('discount'))
        {
            var discount = getCookie('discount');
            $('.total-price').html('Total Price: £' + check_price + "<br>" + '<span class="greenish-text">- ' + discount + "% = £" + (parseInt(check_price) - (parseInt(discount) * (parseInt(check_price) / 100))) + '</span>');
        }
        else
            $('.total-price').text('Total Price: £' + check_price);
        
        $('.number-items').text(number_of_items + ' items');



        $(".increment").click(function incrementer() { ////////////////INCREMENT////////////////// 
            
        var countElement = $(this).closest('.product').find('.count');

        
        
        var count = parseInt(countElement.text()) + 1;

        //update cookie's value
        var changedCookieName = $(this).closest('.product').find('.product-name').text();
        for (item of dataObj)
        {  
            if (item.name == changedCookieName)
                setCookie(item.id, count)
        }

        var global_count = parseInt($('.number-items').text()) + 1
        $('.number-items').text(global_count + ' items');


        var price = ($(this).closest('.product').find('.item-price').text());


        var tmpTotal = count * parseFloat(price.substring(1, price.length));

        //update check price
        check_price += parseFloat(price.substring(1, price.length));

        
        //if discount available or not
        if (getCookie('discount'))
        {
            var discount = getCookie('discount');
            //update print
            $('.total-price').html('Total Price: £' + check_price + "<br>" + '<span class="greenish-text">- ' + discount + "% = £" + (parseInt(check_price) - (parseInt(discount) * (parseInt(check_price) / 100))) + '</span>');
        }
        else
            $('.total-price').text('Total Price: £' + check_price);

        
        $(this).closest('.product').find('.item-total').text('£' + tmpTotal) 

        countElement.text(count);

        });



        $(".decrement").click(function() {          /////////////////////DECREMENT////////////////////
            var countElement = $(this).closest('.product').find('.count');
            
            if (countElement.text() == 1)
            {
                var wantToRemoveItem = confirm("Are you sure you want to remove this item from your cart?");
                if (!wantToRemoveItem)
                    incrementer();
            }

            if (parseInt(countElement.text()) != 0)
            {
                var count = parseInt(countElement.text()) -1;

                var global_count = parseInt($('.number-items').text()) - 1
                $('.number-items').text(global_count + ' items');

                var price = ($(this).closest('.product').find('.item-price').text());

                if (count != 0)
                {
                    var tmpTotal = count * parseFloat(price.substring(1, price.length));


                    
                    //update cookie's value
                    var changedCookieName = $(this).closest('.product').find('.product-name').text();

                    var cookieSetter = function(count)
                    {
                        for (item of dataObj)
                        {
                            if (item.name == changedCookieName)
                                setCookie(item.id, count)

                        }
                    }(count)
                }
                else
                {
                    $(this).closest('.product').remove();
                    $(this).closest('.horline').remove();
                    //remove this product's cookie which name is id
                    var remCookieName = $(this).closest('.product').find('.product-name').text();
                    for (item of dataObj)
                    {
                        if (item.name == remCookieName)
                            deleteCookie(item.id);
                    }
                }


                //update check price
                check_price -= parseFloat(price.substring(1, price.length));

             
                //if has cookie or not
                if (getCookie('discount'))
                {
                    var discount = getCookie('discount');
                    //update print
                    $('.total-price').html('Total Price: £' + check_price + "<br>" + '<span class="greenish-text">- ' + discount + "% = £" + (parseInt(check_price) - (parseInt(discount) * (parseInt(check_price) / 100))) + '</span>');
                }
                else
                    $('.total-price').text('Total Price: £' + check_price);


                $(this).closest('.product').find('.item-total').text('$' + tmpTotal) 
            }
            
            countElement.text(count);



            if ($(".main").find('.product').length === 0) //if cart is empty
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

            $(".continue-shopping").click(function () {
                window.location = '../HTML/Index.html';
            })
        });
}, 100)


//regex material to check on shipping details

    var usNamereg = /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/;
    var mobilereg = /^(01)(0|1|2|5)[0-9]{8}$/;
    var emailreg =  /(.+)@(.+){2,}\.(.+){2,}/;
    var usAddreg = /.{10,}/;


$('.proceeder').on('click', (function(){   /// if user wants to proceed to checkout, first check if their inputs valid

    if(usNamereg.test($('.full-name').val()) && mobilereg.test($('.user-mobile').val()) && emailreg.test($('.user-email').val()) && usAddreg.test($('.user-address').val()))
    {
        $('.regex-note').remove();
        $('.checkout').show();

        if (getCookie('discount'))
        {
            var discount = getCookie('discount');
            var final_price = (parseInt(check_price) - (parseInt(discount) * (parseInt(check_price) / 100)))
        }
        else
            var final_price = parseInt(check_price)

        $(".pay").text('Pay £' + final_price);
        $('.main').css('filter', 'blur(3px)');
    }


    else if (!$('.regex-note').length)
        $('.total-price').append("<div class='regex-note' style='position: absolute; color: red'>Please check your inputs again!</div>");
    
        else
        $('.regex-note').hide();
        setTimeout(function(){
            $('.regex-note').show();
        }, 100)
        
    if($(window).width() < 820)
    {
        $(".checkout").hide();
        swal("Please extend your window for checkout");
    }

}
))


$(document).mouseup(function(p) 
{
    var checkout = $('.checkout');
    if (!checkout.is(p.target) && !checkout.has(p.target).length) {
      checkout.hide();
      $('.main').css('filter', 'blur(0px)');
    }
  });


//regex material to check on billing details

// we decided not to use all of these to make your experience easier!

var payNamereg = /^[a-zA-Z]{3,} [a-zA-Z]{3,}$/;
var payEmailreg =  /(.+)@(.+){2,}\.(.+){2,}/;
var payCreditreg =  /^[0-9]{13}$/; 
var payusAddreg = /.{10,}/;
var payMonthreg = /^(0?[1-9]|1[012])$/
var payYearreg = /^202[3-9]|2030$/
var payZipreg = /^\d{1,10}$/
var paycvvreg = /^\d{3}$/
var payCityreg = /.{3,}/;


////if user clicks PAY

$(".pay").click(function(){

    if(payNamereg.test($('.pay-full-name').val()) && payEmailreg.test($('.pay-email').val()) && payusAddreg.test($('.pay-address').val())   )
    {
        $('.regex-note').remove();
        //$('.main').css('filter', 'blur(3px)');

        $(".checkout").empty();
        var fName = $(".full-name").val().split(" ")[0];

        $(".checkout").append('<section class="empty-cart">' +
        '<div class="empty-pay-text">Thanks for your payment, ' + fName + '!</div>' +
        '<button type="button" class="pay-shopping-btn" class="continue-shopping">← Continue Shopping</button>' +
    '</section>')

        $(".checkout").width('500px');
        $(".checkout").height('300px');
        $(".checkout").css('margin', 'auto');
        $(".checkout").css('margin-top', '200px');
        $(".checkout").css('margin-bottom', '200px');

        $(document).mouseup(function(p) 
    {
        var checkout = $('.checkout');
        if (!checkout.is(p.target) && !checkout.has(p.target).length) {
            window.location = '../HTML/Index.html';
        }

        $(".pay-shopping-btn").click(function () {
            //event.preventDefault();
            window.location = '../HTML/Index.html';
        })
    });

    // empty cart .. delete all products' cookies
    
    for (item of dataObj)
    {
        if (hasCookie(item.id))
        {
            deleteCookie(item.id);
        }
    }
    deleteCookie('discount');

    ///

    }


    else if (!$('.pay-regex-note').length)
        $('.checkout').append("<div class='pay-regex-note' style='white-space: nowrap;'>Please check your inputs again!</div>");
    else
        $('.pay-regex-note').hide();
        setTimeout(function()
        {
            $('.pay-regex-note').show();
        }, 100)
})



}
})

})
       
