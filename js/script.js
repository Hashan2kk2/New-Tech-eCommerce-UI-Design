const inputs = document.querySelectorAll(".input-field");


inputs.forEach((inp) => {
    inp.addEventListener("focus", () => {
        inp.classList.add("active");
    });
    inp.addEventListener("blur", () => {
        if (inp.value != "") return;
        inp.classList.remove("active");
    });
});

function changeView() {
    var login = document.getElementById("login");
    var register = document.getElementById("register");

    login.classList.toggle("d-none");
    register.classList.toggle("d-none");
}

// =========================================
// FEATURED PRODUCTS AND NEW ARRIVALS SWITCH
// =========================================
function fpnaSwitch() {

    var featuredProducts = document.getElementById("featuredProducts");
    var newArrivals = document.getElementById("newArrivals");

    featuredProducts.classList.toggle("d-none");
    newArrivals.classList.toggle("d-none");

}

// ===========================================
// PRODUCT LISTING
// ===========================================

// side nav
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

// ===========================================
// Invoice Print
// ===========================================

function printInvoie(invoice) {
    var print = document.getElementById("invoice").innerHTML;
    document.body.innerHTML = print;
    window.print();
}

// ===========================================
// Admin Panel
// ===========================================
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// admin panel switch gui function

function showDashboard() {
    var dashboard = document.getElementById("dashboardBox");
    var addPro = document.getElementById("addProduct");
    var updatePro = document.getElementById("updateProduct");
    var managePro = document.getElementById("manageProduct");
    var manageUsers = document.getElementById("manageUsers");

    dashboard.classList.remove("d-none");
    dashboard.classList.add("d-block");
    addPro.classList.add("d-none");
    updatePro.classList.add("d-none");
    managePro.classList.add("d-none");
    manageUsers.classList.add("d-none");

}

function addProduct() {
    var dashboard = document.getElementById("dashboardBox");
    var addPro = document.getElementById("addProduct");
    var updatePro = document.getElementById("updateProduct");
    var managePro = document.getElementById("manageProduct");
    var manageUsers = document.getElementById("manageUsers");
    addPro.classList.remove("d-none");
    addPro.classList.add("d-block");
    dashboard.classList.add("d-none");
    updatePro.classList.add("d-none");
    managePro.classList.add("d-none");
    manageUsers.classList.add("d-none");
}

function mngProduct() {
    var dashboard = document.getElementById("dashboardBox");
    var addPro = document.getElementById("addProduct");
    var updatePro = document.getElementById("updateProduct");
    var managePro = document.getElementById("manageProduct");
    var manageUsers = document.getElementById("manageUsers");
    managePro.classList.remove("d-none");
    managePro.classList.add("d-block");
    dashboard.classList.add("d-none");
    updatePro.classList.add("d-none");
    addPro.classList.add("d-none");
    manageUsers.classList.add("d-none");
}

function updateProduct() {
    var dashboard = document.getElementById("dashboardBox");
    var addPro = document.getElementById("addProduct");
    var updatePro = document.getElementById("updateProduct");
    var managePro = document.getElementById("manageProduct");
    var manageUsers = document.getElementById("manageUsers");
    updatePro.classList.remove("d-none");
    updatePro.classList.add("d-block");
    dashboard.classList.add("d-none");
    managePro.classList.add("d-none");
    addPro.classList.add("d-none");
    manageUsers.classList.add("d-none");
}

function mngUsers() {
    var dashboard = document.getElementById("dashboardBox");
    var addPro = document.getElementById("addProduct");
    var updatePro = document.getElementById("updateProduct");
    var managePro = document.getElementById("manageProduct");
    var manageUsers = document.getElementById("manageUsers");
    manageUsers.classList.remove("d-none");
    manageUsers.classList.add("d-block");
    dashboard.classList.add("d-none");
    managePro.classList.add("d-none");
    addPro.classList.add("d-none");
    updatePro.classList.add("d-none");
}
