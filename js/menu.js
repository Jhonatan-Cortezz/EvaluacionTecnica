'use strict'

var menu = document.getElementById('menu-principal');

var urlHome = "";
var urlPupDrink = "";
var pageTitle = document.title;

if(pageTitle == "Drinks Figma"){
    urlHome = "index.html";
    urlPupDrink = "pages/popular-drink.html"
} else{
    urlHome = "../index.html";
    urlPupDrink = "popular-drink.html"
}
console.log(pageTitle);

var printMenu = `
<div class="container">
    <nav class="navbar navbar-expand-lg navbar-dark header-nabvar">
        <a class="navbar-brand" href="#"><span><i class="fas fa-grip-vertical"></i></span></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class="row col-md-12">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto col-md-12 justify-content-center">
                    <li class="nav-item active">
                        <a class="nav-link" href="${urlHome}">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Smoothies</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="${urlPupDrink}">Popular Drink</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Contact</a>
                    </li>                              
                </ul>              
            </div>  
        </div>
    </nav>
</div>

`;

document.write(printMenu);