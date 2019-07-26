(function ($) 
   {
      $(document).ready(function() 
         {   
            function get_code()
               {
                  $('code').text($('#spacing').clone().wrap('<div>').parent().html());
                  $('.box-class').text('class="'+$('#spacing .content-box-wrapper').attr('class')+'"');
               }
            $('#form-demo-code').on('change', function()
               { 
                  var current_demo_code = $('.code-wrapper').data('current-demo-code');
                  var new_demo_code = $('#form-demo-code').val();
                  $('.code-wrapper').removeClass(current_demo_code);
                  $('.code-wrapper').addClass(new_demo_code);
                  $('.code-wrapper').data('current-demo-code', $('#form-demo-code').val());
                  
                  get_code();                  
               });
            $('#form-demo-container').on('change', function()
               { 
                  var current_demo_container = $('.bp-container').data('current-demo-container');
                  var new_demo_container = $('#form-demo-container').val();
                  $('.bp-container').removeClass(current_demo_container);
                  $('.bp-container').addClass(new_demo_container);
                  $('.bp-container').data('current-demo-container', $('#form-demo-container').val());
                  
                  get_code();                  
               });
               
               
            $('#form-margin').on('change', function()
               { 
                  var current_margin = $('#spacing .content-box-wrapper').data('current-margin');
                  var new_margin = $('#form-margin').val();
                  $('#spacing .content-box-wrapper').removeClass(current_margin);
                  $('#spacing .content-box-wrapper').addClass(new_margin);
                  $('#spacing .content-box-wrapper').data('current-margin', $('#form-margin').val());
                  
                  get_code();      
               });
					
            $('#form-padding').on('change', function()
               { 
                  var current_padding = $('#spacing .content-box-wrapper').data('current-padding');
                  var new_padding = $('#form-padding').val();
                  $('#spacing .content-box-wrapper').removeClass(current_padding);
                  $('#spacing .content-box-wrapper').addClass(new_padding);
                  $('#spacing .content-box-wrapper').data('current-padding', $('#form-padding').val());
                  
                  get_code();      
               });
               
         });
   })(jQuery);