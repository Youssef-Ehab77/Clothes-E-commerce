//* Show Product Details When mouse over

//* 
$(function(){
    var products = $('.view-products .carousel-inner-item .product_details img');
    for (var i = 0; i < products.length; i++) {
        products.eq(i).mouseover(function(){
            products.eq(i).prev().css('display' , 'block')
        }
               
            
        )
    }
})
        

    
