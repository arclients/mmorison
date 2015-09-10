var quote_country = "USA";

/**!
 * quotrr.js
 * Web Quote Form
 *
 * Created by Lucas Jans on 2/10.
 * Copyright (c) 2013 Agency Revolution. All rights reserved.
 */

/********************************************
 * Plugins */

/** textFill Plugin
 *  geekymonkey.com/programming/jquery/TextFill
 */
(function($) {
  $.fn.textfill = function(options) {
    var defaults = {
      maxFontPixels: 40,
      innerTag: 'span'
    };
    var Opts = jQuery.extend(defaults, options);
    return this.each(function() {
      var fontSize = Opts.maxFontPixels;
      var ourText = $(Opts.innerTag + ':visible:first', this);
      var maxHeight = $(this).height();
      var maxWidth = $(this).width();
      var textHeight;
      var textWidth;
      do {
        ourText.css('font-size', fontSize);
        textHeight = ourText.height();
        textWidth = ourText.width();
        fontSize = fontSize - 1;
      } while ((textHeight > maxHeight || textWidth > maxWidth) && fontSize > 3);
    });
  };
})(jQuery);

/*! http://mths.be/placeholder v1.8.7 by @mathias */
(function(f,h,c){var a='placeholder' in h.createElement('input'),d='placeholder' in h.createElement('textarea'),i=c.fn,j;if(a&&d){j=i.placeholder=function(){return this};j.input=j.textarea=true}else{j=i.placeholder=function(){return this.filter((a?'textarea':':input')+'[placeholder]').not('.placeholder').bind('focus.placeholder',b).bind('blur.placeholder',e).trigger('blur.placeholder').end()};j.input=a;j.textarea=d;c(function(){c(h).delegate('form','submit.placeholder',function(){var k=c('.placeholder',this).each(b);setTimeout(function(){k.each(e)},10)})});c(f).bind('unload.placeholder',function(){c('.placeholder').val('')})}function g(l){var k={},m=/^jQuery\d+$/;c.each(l.attributes,function(o,n){if(n.specified&&!m.test(n.name)){k[n.name]=n.value}});return k}function b(){var k=c(this);if(k.val()===k.attr('placeholder')&&k.hasClass('placeholder')){if(k.data('placeholder-password')){k.hide().next().show().focus().attr('id',k.removeAttr('id').data('placeholder-id'))}else{k.val('').removeClass('placeholder')}}}function e(){var o,n=c(this),k=n,m=this.id;if(n.val()===''){if(n.is(':password')){if(!n.data('placeholder-textinput')){try{o=n.clone().attr({type:'text'})}catch(l){o=c('<input>').attr(c.extend(g(this),{type:'text'}))}o.removeAttr('name').data('placeholder-password',true).data('placeholder-id',m).bind('focus.placeholder',b);n.data('placeholder-textinput',o).data('placeholder-id',m).before(o)}n=n.removeAttr('id').hide().prev().attr('id',m).show()}n.addClass('placeholder').val(n.attr('placeholder'))}else{n.removeClass('placeholder')}}}(this,document,jQuery));


/********************************************
 * Variables */

$quote     = $(".quotrr");
$quoteType = $(".WQquoteType");
$input     = $("input", ".locator");

/********************************************
 * Window Load */

$(window).load(function() {

});

/********************************************
 * Document Ready */

$(function () {

  // quote type selected class
  $("option:first-child", $quoteType).addClass('selected');
  $quoteType.change(function(e) {
    select = e.target;
    option = select.options[select.selectedIndex];
    e.preventDefault();
    if ($(option).hasClass('selected')) {
      $(option).removeClass('selected');
    } else {
      $("option", $quoteType).removeClass('selected');
      $(option).addClass('selected');
    }
  });

  $(".designation").textfill({ maxFontPixels: 31, innerTag: 'h1' });
  $('input, textarea').placeholder();

  /* Should be added inline */
  $(".surveyor").hide();

  // $(".trigger input[type='submit']").on("click", function() {
  //   $(this).attr("disabled", "disabled");
  // });

  window.onbeforeunload = function(){ $(".trigger input[type='submit']").attr("disabled", "disabled").val("Please wait...");}

  var originalZipValue = $("input", ".locator").val();
  $(".locator .trigger a").click(function() {
    if (originalZipValue != $("input", ".locator").val() & $.trim($("input", ".locator").val()).length >= 5) {
      quotePageTwo();
      downloadGeo();
    } else {
      $(".locator.step input").css("background-color","#FFFF93").focus();
    }
  });

  $("input, .locator").keyup(function(event) {
    if (event.keyCode == 13) {
      if (originalZipValue != $(".locator.step input").val() & $.trim($(".locator.step input").val()).length >= 5) {
        quotePageTwo();
        downloadGeo();
      } else {
        $(".locator.step input").css("background-color","#FFFF93").focus();
      }
    }
  });

  /* is there a quote referral? then go! */
  if (location.hash.indexOf("quote") != -1) {
    $(".locator.step input").val(location.hash.split("/")[1]);
    downloadGeo();
    var offset = $('.ModARWebQuoteC').offset().top;
    $('html,body').animate({
      scrollTop: offset - 15
    }, 1100);
    quotePageTwo();
  }

});

/********************************************
 * Function */

function linkPostcode(a) {

  /* debugger; */
  
}

function downloadGeo() {

  var $city = $(".inputCity, .inputState");
  if ($.trim($(".locator.step input").val()).length >= 5) {
    $city.addClass("quoteSpinner");
    var PFlg = '';
    if ($('.locator .wq-input-field').attr("placeholder") == 'ZIP Code') {
      PFlg = 'u';
    } else {
      PFlg = 'c';
    }
    if (quote_country == 'uk') {
      $.getJSON("http://geo.jamiethompson.co.uk/" + $('.locator input').val().replace(' ', '') + ".json?callback=?", null, function (postCodeInfo) {
        $city.removeClass("quoteSpinner");
        $(".inputStreet").val(postCodeInfo.address.street);
        $(".inputCity").val(postCodeInfo.address.locality);
        }
      );
    } else {
      /* /desktopmodules/webquote/frmGetStateCityData.aspx */
      $.getJSON(path_1 + "?flag=" + PFlg + "&zipCode=" + $(".locator input").val(),
        function (a) {
          $city.removeClass("quoteSpinner");
          $(".inputState").val(a.result[0].StateAbbreviation);
          $(".inputCity").val(a.result[0].City);
        }
      );
    }
  }

}

function quotePageTwo() {
  $(".locator").fadeOut("fast", function () {
    $(".surveyor").animate({ top: (0), left: (0)
    }, "fast", function () {
      // Animation complete.
      $(".surveyor").fadeIn("fast", function () {
        $(".firstName input").focus();
      }).css("position", "relative");
    });
  });
  $('input, textarea').placeholder();
}
