const swiper = new Swiper(".swiper", {

    direction: "horizontal",
    loop: true,
    autoplay: {
        delay: 3500,
        pauseOnMouseEnter: true
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: "true",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});