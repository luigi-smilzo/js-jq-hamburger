// REFERENCES
var hamburger = $('.header-right > a');
var menu = $('.hamburger-menu');
var close = $('.hamburger-menu a.close');

// INTERACTIONS
hamburger.click( function () {
    menu.addClass('active');
});

close.click( function () {
    menu.removeClass('active');
});