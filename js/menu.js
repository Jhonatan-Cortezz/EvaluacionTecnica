'use strict'

var menu = document.getElementById('menu-principal');

var printMenu = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark header-nabvar">
<a class="navbar-brand" href="#"><i class="fas fa-grip-vertical"></i></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse item-center" id="navbarSupportedContent">
<ul class="navbar-nav mr-auto">
    <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item active">
        <a class="nav-link" href="#">Smoothies</a>
    </li>
    <li class="nav-item active">
        <a class="nav-link" href="#">About</a>
    </li>
    <li class="nav-item active">
        <a class="nav-link" href="#">Contact</a>
    </li>
    
</ul>
</div>
</nav>
`;

document.write(printMenu);