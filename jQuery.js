$(function(){
    $('#mycarouselforT').carousel({
        interval: 2000
    });
    $('.btn').tooltip();
    $('#popoverB').popover();
    $('#thumbnailtext1').popover({
        placement : 'top',
		trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="images/miami14.jpg" class="media" alt="Sample Image"><div class="media-body"><h5 class="media-heading">Hello</h5><p>I really love it.</p></div></div>'
    });
    $('#thumbnailtext2').popover({
        placement : 'top',
		trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="images/miami15.jpg" class="media" alt="Sample Image"></div>'
    });
    $('#thumbnailtext3').popover({
        placement : 'top',
		trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="images/hotelmiami.png" class="media" alt="Sample Image"></div>'
    });
    $('#thumbnailtext4').popover({
        placement : 'top',
		trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="images/bridge2.jpg" class="media" alt="Sample Image"></div>'
    });
    $('#thumbnailtext5').popover({
        placement : 'top',
		trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="images/miamistadion.jpg" class="media" alt="Sample Image"></div>'
    });
    $('#thumbnailtext6').popover({
        placement : 'top',
		trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="images/miamitodo.png" class="media" alt="Sample Image"></div>'
    });
    $('one').popover({ 
        placement : 'right',
		trigger : 'hover',
        html : true,
        content : '<div class="media"><img src="images/miamipor2.png" class="media" alt="Sample Image"></div>'
    });
     $('.SignUp').click(function(){
     $('#wholeBody').hide();
      $('#containerForForm').show();
    });
    $('#goBack').click(function(){
        $('#wholeBody').show();
        $('#containerForForm').hide();
       window.alert('Warning! Your work maynot be saved')
    });
   $('#signUpForOUrWEbsite').click(function(){
    $('#wholeBody').show();
    $('#containerForForm').hide();
    window.alert('Thank you for signing up !');
});

$('#ContactUsfor').click(function(){
    $(this).css('display', 'block')
});
$('.modal').on('hide.bs.modal', function(){
    window.alert('Thank you for Contacting us ! Be patient to hear back from us! ');
});



});
