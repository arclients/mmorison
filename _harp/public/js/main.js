$(document).ready(function() {
  'use strict';

  var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g);

  if (iOS && $('.o-top-pane').css('min-height') == '84vh') {
    $('.o-top-pane').css('min-height', '0');
  }

  // Foundation
  $(document).foundation({
    offcanvas: {
      open_method: 'overlap'
    }
  });

  $('.off-canvas-submenu').hide();
  $('.off-canvas-list li:first-child .off-canvas-submenu').show();
  $('.off-canvas-submenu-call').click(function() {
    var icon = $(this).next('.off-canvas-submenu').is(':visible') ? '+' : '-';
    $(this).next('.off-canvas-submenu').slideToggle('fast');
    $(this).find('span').text(icon);
  });
  $('.off-canvas-list li:first-child .off-canvas-submenu span').text('-');

  // Headroom
  $('body').addClass('js-headroom');
  $('.js-banner').headroom({
    // vertical offset in px before element is first unpinned
    offset: 93,
    // scroll tolerance in px before state changes
    // tolerance : 0,
    // or you can specify tolerance individually for up/down scroll
    // tolerance : {
    //     up : 5,
    //     down : 0
    // },
    // css classes to apply
    classes: {
      // when element is initialised
      initial: 'js-banner',
      // when scrolling up
      pinned: 'js-banner--pinned',
      // when scrolling down
      unpinned: 'js-banner--unpinned',
      // when above offset
      top: 'js-banner--top',
      // when below offset
      notTop: 'js-banner--not-top'
    }
    // element to listen to scroll events on, defaults to `window`
    // scroller : someElement,
    // callback when pinned, `this` is headroom object
    // onPin : function() {},
    // callback when unpinned, `this` is headroom object
    // onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    // onTop : function() {},
    // callback when below offset, `this` is headroom object
    // onNotTop : function() {},
  });

  // Quick Quote
  function getQuote(){
    location.href = $('#qquote-niches option:selected').val() + '#quote/' + $('#e_2').val();
    return false;
  }

  $('#saveForm').click(function () { getQuote(); });

  $('#qquote-postal').keypress(function(a) {
    if (a.keyCode === 13) {
      getQuote();
    }
  });

  $('#qquote-postal').focus(function(){
    $(this).removeClass('hint').val('');
  });

  // Slick Slider
  $('.js-slider').slick({
    // accessibility: true,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    // asNavFor: '.some-class',
    // appendArrows: $(element),
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>',
    // centerMode: false,
    // centerPadding: '50px',
    // cssEase: 'ease',
    // customPaging: 'n/a',
    dots: false,
    // draggable: true,
    fade: true,
    // focusOnSelect: false,
    // easing: 'linear',
    // edgeFriction: 0.15,
    infinite: true,
    // initialSlide: 0,
    // lazyLoad: 'ondemand',
    // mobileFirst: false,
    // pauseOnHover: true,
    // pauseOnDotsHover: false,
    // respondTo: 'window',
    // responsive: [
    // {
    //   breakpoint: 1024,
    //   settings: {
    //     slidesToShow: 3,
    //     slidesToScroll: 3,
    //     autoplay: true
    //   }
    // },
    // {
    //   breakpoint: 600,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 2,
    //     autoplay: true
    //   }
    // },
    // {
    //   breakpoint: 480,
    //   settings: {
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true
    //   }
    // }],
    // rows: 1,
    // slide: '',
    // slidesPerRow: 1,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    speed: 3000,
    // swipe: true,
    // swipeToSlide: false,
    // touchMove: true,
    // touchThreshold: 5,
    // useCSS: true,
    // variableWidth: true,
    // vertical: false,
    // verticalSwiping: false,
    rtl: false
  });

  $('.js-companies__slider').slick({
    // accessibility: true,
    // adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    // asNavFor: '.some-class',
    // appendArrows: $(element),
    // prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    // nextArrow: '<button type="button" class="slick-next">Next</button>',
    // centerMode: false,
    // centerPadding: '50px',
    // cssEase: 'ease',
    // customPaging: 'n/a',
    dots: false,
    // draggable: true,
    // fade: true,
    // focusOnSelect: false,
    // easing: 'linear',
    // edgeFriction: 0.15,
    infinite: true,
    // initialSlide: 0,
    // lazyLoad: 'ondemand',
    // mobileFirst: false,
    // pauseOnHover: true,
    // pauseOnDotsHover: false,
    // respondTo: 'window',
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }],
    // rows: 1,
    // slide: '',
    // slidesPerRow: 1,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 3000,
    // swipe: true,
    // swipeToSlide: false,
    // touchMove: true,
    // touchThreshold: 5,
    // useCSS: true,
    // variableWidth: true,
    // vertical: false,
    // verticalSwiping: false,
    rtl: false
  });


});
