  $(document).ready(function() {

      
        var i = 0;
        var next = '.maps';
        var prev;
 

        var image = ['.maps', '.bear', '.genes'];
       

   
        $(next).css('display', 'inline-block');
        


        $('#next').click(function() {
            prev = image[i];
           
            $(prev).fadeOut(100).hide();
           
            i += 1;
            if (i >= image.length) {
                i = 0;
            }
            next = image[i];
      
            $('.slide').addClass(next);
            $(next).fadeIn('slow').css('display', 'inline-block');


        });


        $('#prev').click(function() {
            next = image[i];
         
            $(next).fadeOut(100).hide();
       
            i -= 1;
            if (i <= 0) {
                i = image.length - 1;
            }

            prev = image[i];
         
            $(prev).fadeIn('slow').css('display', 'inline-block');
            

        });


    });
