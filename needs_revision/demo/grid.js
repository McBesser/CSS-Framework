(function ($) 
   {
      $(document).ready(function() 
         {   
            function get_code()
               {
                  $('code').text($('#grid').clone().wrap('<div>').parent().html());
                  $('.box-class').text('class="'+$('#grid').attr('class')+'"');
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
               
            $('#form-gap').on('change', function()
               { 
                  var current_gap = $('#grid').data('current-gap');
                  var new_gap = $('#form-gap').val();
                  $('#grid').removeClass(current_gap);
                  $('#grid').addClass(new_gap);
                  $('#grid').data('current-gap', $('#form-gap').val());
                  
                  get_code();                  
               });
               
            $('#form-area-col').on('change', function()
               { 
                  var current_area_col = $('#grid').data('current-area-col');
                  var new_area_col = $('#form-area-col').val();
                  $('#grid').removeClass(current_area_col);
                  $('#grid').addClass(new_area_col);
                  $('#grid').data('current-area-col', $('#form-area-col').val());
                  
                  get_code();      
               });
               
            $('#form-area-row').on('change', function()
               { 
                  var current_area_row = $('#grid').data('current-area-row');
                  var new_area_row = $('#form-area-row').val();
                  $('#grid').removeClass(current_area_row);
                  $('#grid').addClass(new_area_row);
                  $('#grid').data('current-area-row', $('#form-area-row').val());
                  
                  get_code();      
               });
               
            $('#form-grid').on('change', function()
               {          
                  var current_grid = $('#grid').data('current-grid');  
                  var new_grid = $('#form-grid').val();
                  $('#grid').removeClass(current_grid);
                  $('#grid').addClass(new_grid);
                  $('#grid').data('current-grid', $('#form-grid').val());
                                       
                  switch(new_grid)
                     {
                        case 'g-tpl-col-2':
                           $('#grid').html('<div class="g-ga-col-1"></div>' +
                                           '<div class="g-ga-col-2"></div>');
                        break;
                        case 'g-tpl-col-3':
                           $('#grid').html('<div class="g-ga-col-1"></div>' +
                                           '<div class="g-ga-col-2"></div>' +
                                           '<div class="g-ga-col-3"></div>');                       
                        break;
                        case 'g-tpl-brick-2':
                           $('#grid').html('<div class="g-ga-header"></div>' +
                                           '<div class="g-ga-col-1"></div>' +
                                           '<div class="g-ga-col-2"></div>' +
                                           '<div class="g-ga-footer"></div>');
                        break;
                        case 'g-tpl-brick-3':
                           $('#grid').html('<div class="g-ga-header"></div>' +
                                           '<div class="g-ga-col-1"></div>' +
                                           '<div class="g-ga-col-2"></div>' +
                                           '<div class="g-ga-col-3"></div>' +
                                           '<div class="g-ga-footer"></div>');
                        break;
                        case 'g-tpl-teaser':
                           $('#grid').html('<div class="g-ga-header"></div>' +
                                           '<div class="g-ga-content"></div>' +
                                           '<div class="g-ga-footer"></div>');
                        break;
                        case 'g-tpl-image-list-left':
                           $('#grid').html('<div class="g-ga-image"></div>' +
                                           '<div class="g-ga-header"></div>' +
                                           '<div class="g-ga-content"></div>' +
                                           '<div class="g-ga-footer"></div>');
                        break;
                        case 'g-tpl-image-list-right':
                           $('#grid').html('<div class="g-ga-header"></div>' +
                                           '<div class="g-ga-content"></div>' +
                                           '<div class="g-ga-footer"></div>' +
                                           '<div class="g-ga-image"></div>');
                        break;
                        case 'g-tpl-tile-2x2':
                           $('#grid').html('<div class="g-ga-col-1"></div>' +
                                           '<div class="g-ga-col-2"></div>' +
                                           '<div class="g-ga-col-3"></div>' +
                                           '<div class="g-ga-col-4"></div>');
                        break;
                     }  
                  /* $('#grid > div').text('test'); */  
                  $('#grid > div').each(function()
                     {
                        $(this).text('.'+$(this).attr('class'));
                     });   
                  
                  get_code();      
               });
         });
   })(jQuery);