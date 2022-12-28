

function getCategoryPath(category){
    var path 
    //* women category
    if(category == 'women') {
        path = "../../Data/Women.json";
    }
    //* men category
    else if(category == 'men'){
        path = "../../Data/Men.json";
        
    } 
    //* Sale
    else{
        path = "../../Data/Men.json";
    }
    return path

}

function loadData(category){
    var path = getCategoryPath(category)
    //* Get data from json file
    var xhr = new XMLHttpRequest();//{open}
    //1-open
    xhr.open("Get" , path);
    
    //3-event
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4){
            if(xhr.status >=200 && xhr.status<300){
                var data = JSON.parse(xhr.response).sort((a, b) => 0.5 - Math.random());;
                for(var i=0; i<8;i++){
                    //* append product items from json file into html file
                    $('.carousel-inner-item').eq(i).append(
                        `
                            <div class="product_details">
                                <div class="Overlay"></div>
                                <img src='${data[i].path}' />            
                            </div>
                            <button class="btn-carousel-view-details">
                                <a href = './Product.html?id=${data[i].id}' > View Details </a>
                            </button>
                        `
                    )
                    
                }
            }
        }
    }
    //2-send
    xhr.send("")

    
}  


$(function(){
    loadData('women')
    
})


//* Toggle Taps
$(function(){
    for(var i=0 ; i<3 ; i++){
        $('.products-header-wrapper').children(i).click(function(){
            $(this).addClass('active')
            if(j!==i){
                $(this).siblings.removeClass('active')
            }
        })
    }

})
    
    


