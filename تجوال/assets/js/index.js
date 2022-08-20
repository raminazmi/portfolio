/****************** navbar button *******************/
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");
const shadow_color = document.querySelector(".shadow_color");

const toggleNavbar = () => {
    mobile_nav.classList.toggle("active");
    nav_header.classList.toggle("active");
    shadow_color.classList.toggle("active");
};
mobile_nav.addEventListener("click", () => toggleNavbar());
shadow_color.addEventListener("click", () => toggleNavbar());

/****************** Pupoler Events *******************/
var sliderSelector = '.mySwiper-events',
    options = {
        loop: true,
        speed: 800,
        spaceBetween: 65,
        centeredSlides: true,
        slidesPerView: 1.5,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 0,
            slideShadows: true,
        },
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            300: {
                spaceBetween: 20,
                slidesPerView: 1.15
            },
            400: {
                spaceBetween: 30,
                slidesPerView: 1.25
            },
            600: {
                spaceBetween: 40,
            },
            800: { spaceBetween: 50 },
            1300: {
                spaceBetween: 65,
                slidesPerView: 1.25
            },
        },
    };

var EventsSwiper = new Swiper(sliderSelector, options);
EventsSwiper.init();

/******************* Experiments ********************/

var sliderSelector = '.container_float',
    options = {
        allowTouchMove: false,
        effect: "fade",
        speed: 600,
        direction: "vertical",
        rewind: true,
        navigation: {
            nextEl: '.container_float_left',
            prevEl: '.container_float_right',
        },
        on: {
            slideChangeTransitionStart: function() {
                $(".container_float").find(".tap-bar").animate({ "margin-top": "100px", "opacity": "0" }, -1500);
                $(".container_float").find(".tap-bar").animate({ "margin-top": "0", "opacity": "1" }, 600);
            },
        },
        loop: true,
    };
var ExperimentsSwiper1 = new Swiper(sliderSelector, options);
ExperimentsSwiper1.init();

var sliderSelector = '.mySwiper-experiments',
    options = {
        speed: 600,
        allowTouchMove: false,
        spaceBetween: 15,
        centeredSlides: true,
        rewind: true,
        navigation: {
            nextEl: '.container_float_left',
            prevEl: '.container_float_right',
        },
        breakpoints: {

            800: {
                slidesPerView: 1.15,

                spaceBetween: 7,

            },

            1300: {
                slidesPerView: 1.01,
                spaceBetween: 10,
            },
        },
        loop: true,
    };
var ExperimentsSwiper = new Swiper(sliderSelector, options);
ExperimentsSwiper.init();


/******************* Popular landmarks ********************/

var swiper = new Swiper(".mySwiper-Destinations", {
    allowTouchMoveallowTouchMove: true,
    navigation: {
        nextEl: ".Destinations_arrows_left",
        prevEl: ".Destinations_arrows_right",
        disabledClass: 'disabled_swiper_button'
    },
    breakpoints: {
        280: {
            slidesPerView: 1.10,
        },
        330: {
            slidesPerView: 1.20,
            spaceBetween: 15,
        },
        450: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 15,
        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

/******************* Popular event ********************/
var swiper = new Swiper(".mySwiper-event", {
    loopFillGroupWithBlank: true,
    allowTouchMoveallowTouchMove: true,
    navigation: {
        nextEl: ".event_arrows_left",
        prevEl: ".event_arrows_right",
        disabledClass: 'disabled_swiper_button'
    },
    breakpoints: {
        280: {
            slidesPerView: 1.10,
        },
        330: {
            slidesPerView: 1.20,
            spaceBetween: 15,
        },
        450: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 15,

        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});
/******************* Popular landmarks ********************/

var swiper = new Swiper(".mySwiper-landmarks", {
    loopFillGroupWithBlank: true,
    allowTouchMoveallowTouchMove: true,
    navigation: {
        nextEl: ".landmarks_arrows_left",
        prevEl: ".landmarks_arrows_right",
        disabledClass: 'disabled_swiper_button'
    },
    breakpoints: {
        280: {
            slidesPerView: 1.10,
        },
        330: {
            slidesPerView: 1.20,
            spaceBetween: 15,
        },
        450: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 15,
        },
        850: {
            slidesPerView: 3,
            spaceBetween: 15,

        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        1300: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});
/******************* resturunt ********************/
const breakpoint = window.matchMedia('(min-width:1100px)');
let mySwiper;
const breakpointChecker = function() {
    if (breakpoint.matches === true) {
        if (mySwiper !== undefined) mySwiper.destroy(true, true);
        return;
    } else if (breakpoint.matches === false) {
        return enableSwiper();
    }
};
const enableSwiper = function() {
    mySwiper = new Swiper(".mySwiper-resturunt", {
        /*     slidesPerView: 5,
            slidesPerColumn: 2, */
        centeredSlides: false,
        slidesPerView: 2,
        loop: false,
        breakpoints: {
            200: {
                slidesPerView: 1.5,
                spaceBetween: 10,
                centeredSlides: true,
                loop: true,
                allowTouchMove: true,
            },
            700: {
                slidesPerView: 2,
                spaceBetween: 40,
                centeredSlides: false,
            },
            1100: {
                loop: false,
                spaceBetween: 0,
            },
            1300: {
                noSwiping: false,
                slidesPerView: 3,
            },
        },
    });
}
breakpoint.addListener(breakpointChecker);
breakpointChecker();

/******************* Explore ********************/
var swiper = new Swiper(".Explore", {
    loopFillGroupWithBlank: true,
    allowTouchMoveallowTouchMove: true,
    navigation: {
        nextEl: ".Explore_arrows_left",
        prevEl: ".Explore_arrows_right",
        disabledClass: 'disabled_swiper_button',
    },
    breakpoints: {
        280: {
            slidesPerView: 1.10,
        },
        330: {
            slidesPerView: 1.20,
            spaceBetween: 15,
        },
        450: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        550: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 20,

        },
        1100: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    }
});
/******************* Slider ********************/
let btn = document.querySelector('.container1');
btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    btn.style.setProperty('--x', x + 'px');
    btn.style.setProperty('--y', y + 'px');
});

function slidesPlugin(activeSlide = 2) {
    const slides = document.querySelectorAll(".slide");

    slides[activeSlide].classList.add("active");

    for (const slide of slides) {
        slide.addEventListener("click", () => {
            clearActiveClasses();

            slide.classList.add("active");
        });
    }

    function clearActiveClasses() {
        slides.forEach((slide) => {
            slide.classList.remove("active");
        });
    }
}
slidesPlugin();
/******************* Map ********************/

// Initialize and add the map
function initMap() {
    // The location of qater
    const qater = {
        lat: 25.286106,
        lng: 51.534817
    };
    // The map, centered at qater
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: qater,
    });
    // The marker, positioned at qater
    const marker = new google.maps.Marker({
        position: qater,
        map: map,
    });
}
/******************* Map ********************/
var Search = {

    searchForm: $("#search-form"),
    searchTerms: $("#search-terms"),
    searchFilters: $("#search-filters"),
    searchFiltersTitle: $("#search-filters-title"),
    offset: $("#search-filters-title").offset(),
    win: $(window),

    init: function() {
        Search.bindUIEvents();
    },

    bindUIEvents: function() {

        Search.searchFiltersTitle
            .on(
                "click",
                Search.toggleSearchFilters
            );

        Search.win
            .on(
                "scroll",
                Search.filterHeaderPosition
            );

        Search.searchForm
            .on(
                "submit",
                Search.searchSubmit
            );

    },

    toggleSearchFilters: function() {
        Search.searchForm
            .toggleClass("filters-open");
    },

    filterHeaderPosition: function() {

        var scrollTop = Search.win.scrollTop();

        if (scrollTop > Search.offset.top) {
            Search.searchFilters.addClass("pinned");
            Search.searchTerms.css("margin-bottom", Search.searchFilters.outerHeight());
        } else {
            Search.searchFilters.removeClass("pinned");
            Search.searchTerms.css("margin-bottom", "10px");
        };

    },

    searchSubmit: function() {
        // process new search
        return false;
    }

};

Search.init();
/******************* filter JavaScript ********************/
var swiper = new Swiper(".search-results", {
    loopFillGroupWithBlank: true,
    allowTouchMoveallowTouchMove: true,
    direction: "vertical",
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".arrow_swipe_left",
        prevEl: ".arrow_swipe_right",
    },
    breakpoints: {
        600: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
        800: {
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 2,
            spaceBetween: 25,
        },
        1300: {
            slidesPerView: 3,
            spaceBetween: 30,
        },

    }

});