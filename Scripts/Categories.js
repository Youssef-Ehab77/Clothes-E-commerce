let products = [];

$.ajax("../JSON/Products.json", {
    type: "GET",
    dataType: "json",
    success: function (productsData) {
        products = productsData;
    },
    error: function () {
        console.log("Error");
    },
});

setTimeout(function (){
    for (let i in products) {
        console.log(products[i].name);
    }
},500);

//<div class="card">
//             <div class="card-img">
//                 <img src="../Images/3.jpg" alt="loading">
//             </div>
//             <div class="card-info">
//                 <div class="card-name">Black Horse</div>
//                 <div class="card-price">1300.50</div>
//             </div>
//         </div>
