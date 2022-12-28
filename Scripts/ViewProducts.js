var current = 0
var start = 0
var end = 7
    document.querySelectorAll('.view-products .carousel-inner-item ').forEach(function(item){
        var containerDimensions = item.getBoundingClientRect();
        var containerWidth = containerDimensions.width;
        //console.log(item , containerDimensions )
        
        document.querySelector('.carousel-control-next').addEventListener('click', () => {
            console.log("ss")
            item.scrollLeft += containerWidth;
        })
    
        document.querySelector('.carousel-control-prev').addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
