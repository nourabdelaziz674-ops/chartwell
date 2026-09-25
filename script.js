
const searchInput = document.getElementById("searchInput");
const sections = document.querySelectorAll("section");
searchInput.addEventListener("input", function () {
   const searchText = searchInput.value.toLowerCase();
   if (searchText === "") {
    sections.forEach(function(section) {
        section.style.display = "block";
    });
    return;
}
   sections.forEach(function(section) {
    const text = section.innerText.toLowerCase();
    if (text.includes(searchText)) {
    section.style.display = "block";}
    else {
    section.style.display = "none";
}

});
});

function showServiceInfo(serviceName) {

    alert("You selected: " + serviceName);

}
const themeButton = document.getElementById("themeButton");
themeButton.addEventListener("click", function ()  {
document.body.classList.toggle("dark-mode");

});

const contactButton = document.getElementById("contactButton");
const contactForm = document.getElementById("contactForm");
contactButton.addEventListener("click", function () {
    contactForm.style.display = "block";
});
const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});

topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});