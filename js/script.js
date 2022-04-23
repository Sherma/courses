const orderLink = document.getElementById("orderFreeLesson");
const popUp = document.querySelector(".pop-up");
const popUpClose = document.querySelector(".pop-up__close");

orderLink.addEventListener("click", function (event) {
    event.preventDefault();
    // alert("hi");
    popUp.style.display = "block";

    popUpClose.addEventListener("click", function () {
        popUp.style.display = "none";
    });
});
