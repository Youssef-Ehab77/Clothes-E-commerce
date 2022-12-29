
    document.querySelectorAll('.view-products .carousel-inner').forEach(function(item){
        var containerDimensions = item.getBoundingClientRect();
        var containerWidth = containerDimensions.width;
        
        document.querySelector('.carousel-control-next').addEventListener('click', () => {
            console.log(item.scrollLeft , containerWidth)
            item.scrollLeft += containerWidth;
            console.log(item.scrollLeft)
        })
    
        document.querySelector('.carousel-control-prev').addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    })
