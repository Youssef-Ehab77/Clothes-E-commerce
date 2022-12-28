//* Load navbar Component
$("#navbar-component").load("../HTML/Components/Navbar.html");
//* footer-component
$("#footer-component").load("../HTML/Components/Footer.html");
///DON't forget to handle the IDS that is not availabe
function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log("Query variable %s not found", variable);
}
var productID = getQueryVariable("id");
var productCat = "Men";
if (productID[0] == "w") productCat = "Women";
console.log("Product " + productCat);
var xhr = new XMLHttpRequest(); //{open}
//1-open
xhr.open("GET", "../Data/" + productCat + ".json");
//3-event
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      var idx = 0;
      var data = JSON.parse(xhr.response);
      for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
        if (data[i].id == productID) {
          idx = i;
          break;
        }
      }
      document.getElementById("product-img").src = data[idx].path;

      document.getElementById("product-name").innerHTML = data[idx].name;
      document.getElementById("product-price").innerHTML = data[idx].price;
      document.getElementById("product-desc").innerHTML = data[idx].desc;
      document.getElementById("product-fit").innerHTML = data[idx].size;
      document.getElementById("product-material").innerHTML =
        data[idx].material;
      document.getElementById("product-img").onmouseover = function () {
        document.getElementById("product-img").src = data[idx].path2;
      };
      document.getElementById("product-img").onmouseout = function () {
        document.getElementById("product-img").src = data[idx].path;
      };
    }
  }
};
xhr.send();
