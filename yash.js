let searchform = Document.queryselector('.search-form');

Document.queryselector('#search-btn').onclick =function () {
    searchform.classlist.toggle('active');
}

let shoppingcart = Document.queryselector('.shopping-cart');

Document.queryselector('#cart-btn').onclick =function () {
    shoppingcart.classlist.toggle('active');
}

let loginForm = Document.queryselector('.login-form');

Document.queryselector('#login-btn').onclick =function () {
    loginForm.classlist.toggle('active');
}

let navbar = Document.queryselector('.navbar');

Document.queryselector('#menu-btn').onclick =function () {
    navbar.classlist.toggle('active');
}