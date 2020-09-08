$(window).scroll(function () {
    var wScroll = $(this).scrollTop();
    var img = $("#Gallery");

    if (wScroll > $(img).offset().top - 250) {
        $('div .layout-responsive').each(function (i) {
            setTimeout(function () {

                $('div .layout-responsive').eq(i).addClass('show');
            }, 300 * (i + 1));
        });
        // $('.gallery').addClass('show');
    };
    var skill = $('.labelSkill');
    if (wScroll > $(skill).offset().top - 250) {

        $('.ulKiri').addClass('ulMuncul');
        $('.ulKanan').addClass('ulMuncul');
    };
    var name = $('#intro');
    if (wScroll > $(name).offset().top - 10) {
        $('.name').addClass('nameMuncul');
    };
    if (wScroll > $(name).offset().top - 10) {
        $('.tagWork').addClass('tagMuncul');
    };
    if (wScroll > $(name).offset().top - 10) {
        $('.me').addClass('meMuncul');
    };
    var about = $('.labelAbout');
    if (wScroll > $(about).offset().top - 160) {
        $('.textAbout').addClass('textAboutMuncul');
    }
    var software = $('.labelSoftware');
    if (wScroll > $(software).offset().top - 160) {
        $('.imgSoftware').addClass('imgSoftwareMuncul');
    }

});
var button = document.querySelector('a#bar');
var navbar = document.querySelector(".navbarLink");
button.addEventListener('click', function () {
    if (navbar.className === "navbarLink") {
        navbar.classList.add("responsive");
        // console.log('respon');
    } else {
        navbar.classList.remove("responsive");
    }
});

// window.onscroll = function () { scrollFunction() };

// var link = document.querySelector('.layout-responsive');
// var navbar = document.querySelector('#Gallery');
// var sticky = navbar.offsetTop;

// function scrollFunction() {
//     if (window.pageYOffset >= sticky - 50) {
//         link.classList.add('show');
//     }
// }

$('.page-scroll').on('click', function (e) {
    var href = $(this).attr('href');
    var elemenHref = $(href);

    $('html,body').animate({
        scrollTop: elemenHref.offset().top
    }, 1250);

    e.preventDefault;
});