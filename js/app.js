
// GALLERY
// TODO: Rewrite openPhotoSwipe as a function accepting parameters.

var openPhotoSwipe = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'image/image_1.png',
      w: 1348,
      h: 1348
    }
  ];

  // define options (if needed)
  var options = {
    history: false,
    focus: false,
    showHideOpacity:true,
    bgOpacity :.8,
    showAnimationDuration: 0,
    hideAnimationDuration: 0

  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};


var openPhotoSwipe2 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'image/image_2.png',
      w: 1348,
      h: 1348
    }
  ];

  // define options (if needed)
  var options = {
    history: false,
    focus: false,
    showHideOpacity:true,
    bgOpacity :.8,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};


var openPhotoSwipe3 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'image/image_3.jpg',
      w: 1348,
      h: 1348
    }
  ];

  // define options (if needed)
  var options = {
    history: false,
    focus: false,
    showHideOpacity:true,
    bgOpacity :.8,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};


var openPhotoSwipe4 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'image/image_4.png',
      w: 1348,
      h: 1348
    }
  ];

  // define options (if needed)
  var options = {
    history: false,
    focus: false,
    showHideOpacity:true,
    bgOpacity :.8,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};


var openPhotoSwipe5 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'image/image_5.png',
      w: 1348,
      h: 1348
    }
  ];

  // define options (if needed)
  var options = {
    history: false,
    focus: false,
    showHideOpacity:true,
    bgOpacity :.8,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openPhotoSwipe1 = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'image/image_1.png',
      w: 1348,
      h: 1348
    }
  ];

  // define options (if needed)
  var options = {
    history: false,
    focus: false,
    showHideOpacity:true,
    bgOpacity :.8,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

var openPhotoSwipevid = function() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'https://www.youtube.com/watch?v=helEv0kGHd4',
      w: 1348,
      h: 1348
    }
  ];

  // define options (if needed)
  var options = {
    history: false,
    focus: false,
    showHideOpacity:true,
    bgOpacity :.8,
    showAnimationDuration: 0,
    hideAnimationDuration: 0
  };

  var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};

document.getElementById('open_image_1').onclick = openPhotoSwipe1;
document.getElementById('open_image_2').onclick = openPhotoSwipe2;
document.getElementById('open_image_3').onclick = openPhotoSwipe3;
document.getElementById('open_image_4').onclick = openPhotoSwipe4;
document.getElementById('open_image_5').onclick = openPhotoSwipe5;


// PAYSTACK INTEGRATION

function payWithPaystack(){
  var handler = PaystackPop.setup({
    key: 'pk_test_8493ccfdee6b3371c15bbf715d88521181d9a59b',
    email: '30billion@email.com',
    ticket: 'VVIP',
    quantity:2,
    amount: 10000,
    ref: ''+Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    metadata: {
      custom_fields: [
        {
          display_name: "Mobile Number",
          variable_name: "mobile_number",
          value: "+2348012345678",
          ticket: 'VVIP',
          quantity:2
        }
      ]
    },
    callback: function(response){
      alert('success. transaction ref is ' + response.reference);
    },
    onClose: function(){
      alert('window closed');
    }
  });
  handler.openIframe();
}

$( document ).ready(function() {



  // MODAL POPUP
  $('#open_modal').magnificPopup({
    type: 'inline',
    items: {src: '#modal'},
    preloader: false,
    modal: true
  });

  //BUTTON TO CLOSE MODAL
  $( "#modal_close" ).click(function() {
    // alert( "Handler for .click() called." );
    $.magnificPopup.close();
  });

  //HIDE ERROR MESSAGE.
  //ERROR MESSAGE SHOWS ONLY WHEN Tables Ticket IS SELECTED.
  $('.error_message').hide();

  //UPDATE DOM ELEMENT WHEN QUANTIY CHANGES
  $("#selector_quantity").change(function(){
    var quantity = $(selector_quantity).find(":selected").data("value").quantity
    var price = $(selector_ticket).find(":selected").data("value").price

    calc(quantity, price);
    function calc(quantity, price) {
      total = quantity * price;
      $("#total").html( ' '+ total.toLocaleString() );
      $("#quantity").html( ' '+ quantity );
    }
  });


  //UPDATE DOM ELEMENT WHEN Ticket Class CHANGES.
  $("#selector_ticket").change(function(){
    var ticketClass = $(this).find(":selected").data("value").ticketClass;
    var isAvailable = $(this).find(":selected").data("value").isAvailable;
    var quantity = $(selector_quantity).find(":selected").data("value").quantity
    var price = $(selector_ticket).find(":selected").data("value").price

    calc(quantity, price);
    function calc(quantity, price) {
      total = quantity * price;
      $("#total").html( ' '+ total.toLocaleString() );
      $("#ticketClass").html( ' '+ ticketClass );
      $("#quantity").html( ' '+ quantity );
    }

    if(!isAvailable){
      console.log("It is false. Show table booking");
      $('.error_message').show();
    }else {
      $('.error_message').hide();
    }
  });


  //COUNTDOWN TIMER TO EVENT
  setInterval(timer,1000);
  function timer(){
    console.log("log time here");

    var timeDifference = countdown(null, 1511805600000, countdown.MONTH);
    //console.log(timeDifference);
    $('#hero_countdown_day').html(timeDifference.days);
    $('#hero_countdown_hour').html(timeDifference.hours);
    $('#hero_countdown_minute').html(timeDifference.minutes);
    $('#hero_countdown_second').html(timeDifference.seconds);
  }

  //VIDEO POPUP
  $('.video').magnificPopup({
    type: 'iframe',


    iframe: {
      markup: '<div class="mfp-iframe-scaler">'+
      '<div class="mfp-close"></div>'+
      '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
      '<div class="mfp-title">Some caption</div>'+
      '</div>'
    },
    callbacks: {
      markupParse: function(template, values, item) {
        values.title = item.el.attr('title');
      }
    }


  });

  $('#arrow_down').addClass('animated pulse infinite');

});
