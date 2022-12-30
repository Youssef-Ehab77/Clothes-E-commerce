//* Load navbar Component
$("#navbar-component").load("../HTML/Components/Navbar.html");
//* footer-component
$("#footer-component").load("../HTML/Components/Footer.html");
var idx;

//* Object to save the product Data

var product = {
  id: "",
  name: "",
  price: "",
  desc: "",
  size: "",
  material: "",
  path: "",
  path2: "",
  category: "",
};

//* function getQueryVariable to get the value of any query

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split("=");
    if (decodeURIComponent(pair[0]) == variable) {
      console.log("Query variable + ");
      return decodeURIComponent(pair[1]);
    }
  }
  //* If there is no "id" in the query
  //* Disply an informing message then redirect to home page after 3 seconds
  document.getElementsByTagName("body")[0].innerHTML =
    " PAGE NOT FOUND.. you wii be redirected to home page in 3 seconds...";
  setTimeout(() => {
    document.location.href = "/HTML";
  }, 3000);
  console.log("Query variable %s not found", variable);
}
//* End of function getQueryVariable

//* get Product Id and Category from the query
var productID = getQueryVariable("id");
var productCat = "Men";
if (productID[0] == "w") productCat = "Women";

//*Accessing Json file
var xhr = new XMLHttpRequest();

xhr.open("GET", "../Data/" + productCat + ".json");
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4) {
    if (xhr.status >= 200 && xhr.status < 300) {
      //* idx variable used to save the Matched ID
      idx = 0;
      var data = JSON.parse(xhr.response);
      //* Searching for the ID over Json file
      for (var i = 0; i < data.length; i++) {
        if (data[i].id == productID) {
          idx = i;
          break;
        }
      }
      //* if the item is not in the json file
      //* Inform the user then redirect to home page

      if (i == data.length) {
        document.getElementsByTagName("body")[0].innerHTML =
          " ITEM NOT FOUND.. you wii be redirected to home page in 3 seconds...";
        setTimeout(() => {
          document.location.href = "/HTML";
        }, 3000);
      }
      //* filling Product object the Data of The item specified
      product.id = data[idx].id;
      product.name = data[idx].name;
      product.price = data[idx].price;
      product.desc = data[idx].desc;
      product.size = data[idx].size;
      product.material = data[idx].material;
      product.path = data[idx].path;
      product.path2 = data[idx].path2;
      product.category = data[idx].category;
      console.log("peep " + product);
      //---
      //* Assigning values to Elements

      console.log(product);
      document.getElementById("category-name").innerHTML = product.category;
      document.getElementById("pro-name").innerHTML = product.name;
      document.getElementById("product-img").src = product.path;
      document.getElementById("product-name").innerHTML = product.name;
      document.getElementById("product-price").innerHTML = product.price;
      document.getElementById("product-desc").innerHTML = product.desc;
      document.getElementById("product-fit").innerHTML = product.size;
      document.getElementById("product-material").innerHTML = product.material;

      //* On mouseover and on mouseout --> change the Image
      document.getElementById("product-img").onmouseover = function () {
        document.getElementById("product-img").src = product.path2;
      };
      document.getElementById("product-img").onmouseout = function () {
        document.getElementById("product-img").src = product.path;
      };
      //* plus button

      document.getElementById("inc-quantity").onclick = function () {
        var textVal = document.getElementById("crnt-quantity").value;
        document.getElementById("crnt-quantity").value = parseInt(textVal) + 1;
      };

      //* minus button
      document.getElementById("dec-quantity").onclick = function () {
        var textVal = document.getElementById("crnt-quantity").value;

        if (textVal > 1)
          document.getElementById("crnt-quantity").value =
            parseInt(textVal) - 1;
      };
      var cookieNameCntr = 0;

      //* adding cookie and open pop out when click add to cart
      document.getElementById("add-to-cart").onclick = function () {
        //*saving the current quantity
        var quantity = document.getElementById("crnt-quantity").value;

        //* Showing the pop out message to user to allow him to complete shopping or go to cart
        document.getElementById("container-pop-up").style.display = "block";

        // *Adding Part of Pop out Div Data
        document.getElementById("product-price-p").innerHTML =
          quantity + " * " + product.price;

        //*Sending the Cookies with the item id and Quantity
        //* if the cookie not created before then Creat it
        if (!hasCookie(productID)) setCookie(productID, parseInt(quantity));
        //* Else Update the Cookie Quantity with Adding the new quantity too the previous one
        else {
          var prevQuantity = getCookie(productID);
          setCookie(productID, parseInt(quantity) + parseInt(prevQuantity));
        }
        console.log(allCookieList());
      };
      //* pop up Div
      //* setting Up th product Img and name
      document.getElementById("product-img-p").src = product.path;
      document.getElementById("product-name-p").innerHTML = product.name;

      //* when the user Press Contiue shopping then close the Pop out message
      document.getElementById("continue-shopping").onclick = function () {
        document.getElementById("container-pop-up").style.display = "none";
      };

      //* when the user Press View Cart then go to cart page
      document.getElementById("view-cart").onclick = function () {
        document.getElementById("container-pop-up").style.display = "none";
        document.location.href = "/HTML/Cart.html";
      };
    }
  }
};

xhr.send();
