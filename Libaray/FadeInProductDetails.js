//* Show Product Details When mouse over

//* 
$(function(){
        var products = $('.view-products .carousel-inner-item');
        for (var i = 0; i < products.length; i++) {
            products.eq(i).hover(function(){
    
                //* Display Overlay 
                $(this).children(0).children(0).eq(0).addClass('active',1000) 
    
                //* Display Button of btn-carousel-view-details
                $(this).children(1).addClass('hover',1000) 
            },
            function(){
                //* Display Overlay 
                $(this).children(0).children(0).eq(0).removeClass('active')
    
                //* Display Button of btn-carousel-view-details
                $(this).children(1).next().removeClass('hover')  
            })
            
        }
    
    
})
        
 


    
