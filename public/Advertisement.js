$('#navigation a').on('click', function(e) {
    e.preventDefault();
    var index = $('a').index(this) + 1;
    
    $('div').each(function(){
        
        if($(this).attr('rel') == index){
            $(this).addClass('active');
            $(this).show();
        }else{
            $(this).removeClass('active');
            $(this).hide();
        }
    });
    
});