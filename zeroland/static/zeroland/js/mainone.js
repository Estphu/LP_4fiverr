const modalOpenBtns = document.querySelectorAll(".modal-open");
const modalCloseBtns = document.querySelectorAll(".modal-close");
const body = document.querySelector("body");

modalOpenBtns.forEach((btn) => {
btn.addEventListener("click", () => {
let modal = btn.getAttribute("data-modal");
document.getElementById(modal).style.display = "block";
body.classList.add("prevent-background-scroll");
});
});

modalCloseBtns.forEach((btn) => {
btn.addEventListener("click", () => {
let modal = (btn.closest(".modal").style.display = "none");
body.classList.remove("prevent-background-scroll");
});
});

document.addEventListener("click", (e) => {
if (e.target.classList.contains("modal")) {
e.target.style.display = "none";
body.classList.remove("prevent-background-scroll");
}
});

const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);



const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

$(function(){
    $('.gallery img').click(function(){
      $('.itemImg').attr('src', $(this).attr('src'));
    });
})