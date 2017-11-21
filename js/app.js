//var time = countdown( new Date(2000, 0, 1) ).toString();
//var name = "Home";
// var timeDifference = countdown(null, 1511723382000, countdown.MONTH);
// console.log(timeDifference);
// var timerId =
//   countdown(
//     new Date(),
//     function(ts) {
//       document.getElementById('pageTimer').innerHTML = ts.toHTML("strong");
//     },
//     countdown.HOURS|countdown.MINUTES|countdown.SECONDS);
//
// // later on this timer may be stopped
// window.clearInterval(timerId);
// console.log(name);
// console.log(time);
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
    // history & focus options are disabled on CodePen
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
    // history & focus options are disabled on CodePen
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
    // history & focus options are disabled on CodePen
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
    // history & focus options are disabled on CodePen
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
    // history & focus options are disabled on CodePen
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
    // history & focus options are disabled on CodePen
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
    // history & focus options are disabled on CodePen
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
//document.getElementById('play_video').onclick = openPhotoSwipevid;

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

  $( "#modal_close" ).click(function() {
    // alert( "Handler for .click() called." );
    $.magnificPopup.close();
  });




  $('.error_message').hide();

  // $('#selector_ticket').click(function(){
  //   console.log("Send btn clicked");
  // //console.log($('#selector_ticket').val());
  // var obj = {};
  // obj = $('#selector_ticket').val();
  // var newobj ={id:"911", name:"emma"}
  // console.log(obj);
  //   console.log(newobj.id);
  // console.log(obj.id);
  // });

  $("#selector_quantity").change(function(){
    console.log("quantity selected");
    var quantity = $(selector_quantity).find(":selected").data("value").quantity
    var price = $(selector_ticket).find(":selected").data("value").price

    calc(quantity, price);
    function calc(quantity, price) {
      total = quantity * price;
      $("#total").html( ' '+ total.toLocaleString() );
      // console.log("Comma separated is - " + total.toLocaleString());
      // $("#ticketClass").html( ' '+ ticketClass );
      $("#quantity").html( ' '+ quantity );
    //  $("#btn_send").html('Pay - ' + total );
    }
  });

  $("#selector_ticket").change(function(){
    console.log($(this).find(":selected").data("value").id);
    console.log($(this).find(":selected").data("value").ticketClass);
    console.log($(this).find(":selected").data("value").price);
    console.log($(this).find(":selected").data("value").isAvailable);
    console.log($(selector_quantity).find(":selected").data("value").quantity);

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

    //  $("#btn_send").html('Pay - ' + total );
    }

    if(!isAvailable){
      console.log("It is false. Show table booking");
      $('.error_message').show();
    }else {
      $('.error_message').hide();
    }
    //  alert($(this).find(":selected").data("value").age);
  });

//  console.log( "ready!" );
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

  //Vidoe Popup
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

  //Buy ticket
//   $(".btn_ticket").click(function(){
//     window.open('http://www.nairabox.com:9123/events/single.php?id=5a0d75d48ead0e1e618b4580');
//     console.log("Open window clicked");
// });

//animate Buy Ticket button
$('#arrow_down').addClass('animated bounce infinite');


});
