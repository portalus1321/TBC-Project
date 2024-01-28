var menu = document.getElementById("menuic")
menu.addEventListener("click", function() {
    this.classList.toggle("active");
    document.getElementById("MenuDD").classList.toggle("menunavactiv");

});