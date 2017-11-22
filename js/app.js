


//GOOGLE ANALYTICS
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-109935880-1');

// GALLERY
// TODO: Rewrite openPhotoSwipe as a function accepting parameters.
function validateEmail(mail)   
{  
 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){  return true;  }  
	return false;  
}  
function success(msg){
	dur = 5000;
	if(msg.length > 40){
		dur = 10000;
		mmgs = "";
		pts = msg.match(/.{1,40}/g);
		for(i = 0; i < pts.length; i++){
			mmgs += pts[i] + "\r\n";
		}
		msg = mmgs;
	}
	$.notify(msg, {position:"top center", className:'success', autoHideDelay: dur});
}
function error(msg){
	dur = 5000;
	if(msg.length > 40){
		dur = 10000;
		mmgs = "";
		pts = msg.match(/.{1,40}/g);
		for(i = 0; i < pts.length; i++){
			mmgs += pts[i] + "<br />";
		}
		msg = mmgs;
	}
	$.notify(msg, {position:"top center", className:'error', autoHideDelay: dur});
}

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
  var quantity = $(selector_quantity).find(":selected").data("value").quantity
    var price = $(selector_ticket).find(":selected").data("value").price
	var id = $(selector_ticket).find(":selected").data("value").id
	var ticketName = $(selector_ticket).find(":selected").data("value").ticketClass
	
	if($('#fname').val() == ""){ 
		error("Please enter your full name"); return;
	}
	if($('#fphone').val() == ""){ 
		error("Please enter your Phone number"); return;
	}
	if($('#femail').val() == ""){ 
		error("Please enter your email address"); return;
	}
	
	if(quantity == "0"){
		error("Please select a valid quantity"); return;
	}
	if(id == "oo"){
		error("Please select a valid Ticket"); return;
	}
	
	if(validateEmail($('#femail').val()) === false){
		error("Please enter a valid email address"); return;
	}
	
	data = {
		userName: $('#fname').val(),
		userPhone: $('#fphone').val(),
		userEmail: $('#femail').val(),
		ticketClass: id,
		ticketCount: quantity,
		amount: quantity * price
	};
  var handler = PaystackPop.setup({
    key: 'pk_live_41ed986b3773595273e995adf63505fa657e6bfc',
    email: data.userEmail,
    amount: data.amount * 100, // 20000
    metadata: {
      custom_fields: [
        {
          display_name: "Customer Name",
          variable_name: "customer_name",
          value: data.userName
        },
		{
		  display_name: "Customer Phone",
          variable_name: "mobile_number",
          value: data.userPhone,
		},
		{
		  display_name: "Ticket Class",
          variable_name: "ticket_class",
          value: ticketName,
		},
		{
		  display_name: "Ticket Quantity",
          variable_name: "ticket_quantity",
          value: data.ticketCount,
		}
      ]
    },
    callback: function(response){
      
	  data.transactionID = response.reference;
	  
	  $.post("https://www.nairabox.com/webticket/event.php", data, function(ret){
		if(ret.status == 200){
			success(ret.message);
		}else{
			error(ret.message);
		}
	  });
    },
    onClose: function(){
      //
    }
  });
  handler.openIframe();
}


//JQUERY
$( document ).ready(function() {
  //SCROLL ANIMATION
    $( "#arrow_down" ).click(function() {
  var scroll = new SmoothScroll();
  var anchor = document.querySelector( '#sroll_to_ticket' );
  //scroll.animateScroll( anchor );
  var options = { speed: 500, easing: 'easeOutQuad' };
scroll.animateScroll( anchor, options );
});


  // MODAL POPUP
  $('#open_modal').magnificPopup({
    type: 'inline',
    items: {src: '#modal'},
    preloader: false,
    modal: true
  });


  //TICKET CLASS BUTTON TO OPEN MODAL
  $('.ticket_class').magnificPopup({
    type: 'inline',
    items: {src: '#modal'},
    preloader: false,
    modal: true
  });

  //BUTTON TO CLOSE MODAL
  $( "#modal_close" ).click(function(evt) {
	evt.preventDefault();
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
    //console.log("log time here");

    var timeDifference = countdown(null, new Date("2017-12-27"), countdown.DAYS | countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
    //console.log(timeDifference);
    var days = timeDifference.days < 10 ? "0" + timeDifference.days : timeDifference.days;
    var hours = timeDifference.hours < 10 ? "0" + timeDifference.hours : timeDifference.hours;
    var minutes = timeDifference.minutes < 10 ? "0" + timeDifference.minutes : timeDifference.minutes;
    var seconds = timeDifference.secondsseconds < 10 ? "0" + timeDifference.seconds : timeDifference.seconds;

    $('#hero_countdown_day').html(days);
    $('#hero_countdown_hour').html(hours);
    $('#hero_countdown_minute').html(minutes);
    $('#hero_countdown_second').html(seconds);
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

  // $('#arrow_down').addClass('animated pulse infinite');

});
