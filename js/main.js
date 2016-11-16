(function() {
    $('.imgScale').imageScale({
        
        align: 'center'
    });
}());


// (function() {
//     $('.services .moreInfo p').matchHeight();
// }());
// /*jslint browser: true*/
// /*global $, jQuery, alert*/
// (function () {
//     'use strict';
//     $(document).ready(function () {
//         $('#mainSlider').slick({
//             adaptiveHeight: true,
//             adaptiveWidth: true,
//             cssEase: 'linear',
//             dots: true,
//             fade: true,
//             infinite: true,
//             slidesToScroll: 1,
//             slidesToShow: 1,
//             speed: 300,
//             swipeToSlide: true,
//             nextArrow: $('.banner .btnHolder .right'),
//             prevArrow: $('.banner .btnHolder .left'),
//             responsive: [
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         autoplay: true,
//                         autoplaySpeed:2500,
//                     }
//                 }
//             ]
//         });
//         $('#carouselBlock').slick({
//             arrows: false,
//             centerMode: true,
//             centerPadding: '0px',
//             slidesToShow: 3,
//             slidesToScroll: 1,
//             autoplay: true,
//             autoSpeed: 2500,
//             swipeToSlide: true,
//             dots: false,
//             infinite: true,
//             responsive: [
//                 {
//                     breakpoint: 1200,
//                     settings: {
//                         centerMode: true,
//                         slidesToScroll: 1,
//                         slidesToShow: 3,
//                     }
//                 },
//                 {
//                     breakpoint: 900,
//                     settings: {
//                         centerMode: false,
//                         slidesToScroll: 1,
//                         slidesToShow: 2,
//                     }
//                 },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         centerMode: false,
//                         slidesToScroll: 1,
//                         slidesToShow: 1,
//                     }
//                 },
//                 {
//                     breakpoint: 319,
//                     settings: {
//                         centerMode: false,
//                         slidesToScroll: 1,
//                         slidesToShow: 1,
//                     }
//                 }
//             ]
//         });
//         $('#sliderClients').slick({
//             infinite: true,
//             speed: 500,
//             slidesToShow: 6,
//             slidesToScroll: 1,
//             dots: false,
//             swipeToSlide: true,
//             nextArrow: $('.ourClients .btnHolder .right'),
//             prevArrow: $('.ourClients .btnHolder .left'),
//             responsive: [
//                 {
//                     breakpoint: 1200,
//                     settings: {
//                         slidesToShow: 5,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 991,
//                     settings: {
//                         slidesToShow: 4,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 768,
//                     settings: {
//                         slidesToShow: 3,
//                         slidesToScroll: 1
//                     }
//                 },
//                 {
//                     breakpoint: 500,
//                     settings: {
//                         slidesToShow: 2,
//                         slidesToScroll: 1
//                     }
//                 }
//             ]
//         });

//         (function () {
//             var searchLabel = $('#search-label');
//             var searchHolder = $('#searchHolder');
//             var doc = $(document);

//             searchLabel.on('click', function() {
//                 searchHolder.addClass('active');
//             });

//             doc.on('click', function(e) {
//                 var target = e.target;
//                 if (searchLabel.has(target).length) {
//                     if (searchLabel.data('disable')) {
//                         searchLabel.data('disable', false);
//                         searchHolder.removeClass('active');
//                         return;
//                     }
//                     searchLabel.data('disable', true);
//                     return;
//                 }
//                 if(searchHolder.has(target).length) {
//                     return;
//                 }
//                 searchHolder.removeClass('active');
//             });
//         }());

//         function isIE() {
//           var myNav = navigator.userAgent.toLowerCase();
//           return (myNav.indexOf('msie') != -1) ? parseInt(myNav.split('msie')[1]) : false;
//         }

//         (function() {
//             var ieVersion = isIE();
//             var body = $('body');

//             if (ieVersion === 8) {
//                 body.addClass('ie8');
//             }

//             if (ieVersion === 9) {
//                 body.addClass('ie9');
//             }
//         }());
//     });
// }());

