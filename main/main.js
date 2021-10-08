$(".owl-one").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 900,
    nav: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true,
        },
        600: {
            items: 1,
            nav: false,
            loop: true,
        },
        1000: {
            items: 1,
            nav: true,
        },
    },
});
$(".owl-two").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    smartSpeed: 900,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true,
        },
        600: {
            items: 1,
            nav: false,
            loop: true,
        },
        1000: {
            items: 3,
            nav: false,
        },
    },
});
$(".owl-three").owlCarousel({
    loop: true,
    margin: 30,
    smartSpeed: 900,
    nav: true,
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: false,
            loop: true,
        },
        600: {
            items: 2,
            dots: false,
            nav: false,
            loop: true,
        },
        1000: {
            items: 3,

            nav: false,
            loop: true,
        },
    },
});
$(".owl-four").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 900,
    nav: false,
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: false,
            loop: true,
        },
        600: {
            items: 2,
            dots: false,
            nav: false,
            loop: true,
        },
        1000: {
            items: 4,
            nav: false,
            loop: false,
        },
    },
});
$(".owl-five").owlCarousel({
    loop: true,
    margin: 15,
    smartSpeed: 900,
    nav: false,
    responsive: {
        0: {
            items: 2,
            nav: false,
            dots: false,
            loop: true,
        },
        600: {
            items: 3,
            dots: false,
            nav: false,
            loop: true,
        },
        1000: {
            items: 5,
            nav: false,
            loop: false,
        },
    },
});

const navSlide = () => {
    const burger = document.getElementById("bars");
    const nav = document.querySelector(".head");
    const overlay = document.getElementById("nav");
    const exit = document.getElementById("ex");
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
        overlay.classList.toggle("nav-background");
    });
    exit.addEventListener("click", function() {
        nav.classList.remove("nav-active");
        overlay.classList.remove("nav-background");
    });
};

navSlide();
if ($(window).width() < 992) {
    $("h6").click(function(param) {
        $(this)
            .next()
            .slideToggle({
                start: function() {
                    $(this).css({
                        display: "flex",
                        marginRight: "10px",
                    });
                },
            });
    });
}

$("#search").on("click", function() {
    $(".search-pop input").slideToggle();
    $(".search-pop").toggle();
});

$(".search-pop span").on("click", function() {
    $(".search-pop").hide();
    $(".search-pop input").slideToggle();
});