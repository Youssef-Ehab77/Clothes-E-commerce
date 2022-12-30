//* view more items button handler
$(function(){
    setTimeout(function(){
        console.log($('#btn-view-more'))
        $('#btn-view-more').click(function(){
            window.scrollTo(0 , $('#product-component').offset().top)
        })
        
    },200)
    
})
