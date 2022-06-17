$(document).ready(function () {
    window.addEventListener(
        'scroll',
        function(){
            this.document.querySelector("header").classList.toggle("sticky",window.scrollY > 0);
        }
    )

    //Evento Botones Empleados
    $('.btnDetalle').click(
        function(){
            if($(this).text()=='menos detalles'){
                $(this).text('más detalles');
            } else {
                $(this).text('menos detalles');
            }

            $(this).parent('.flex-center').prev('.oculto').slideToggle(1500);
            $(this).parent('.flex-center').prev('.oculto').removeClass('altura');
            
        }
    )//Fin evento click

    //evento click fotos noticias
    $('.titulo').click(
        function(){
            console.log('entra');
            console.log($(this).children('img').attr('src'));
            $('#fondo').html(
                `<img src="`+ $(this).children('img').attr('src') + `">`);
            $('#grande').slideDown();
            
        });

        $('#fondo').click(
            function () {
                //Cuando hago click a fondo, escondo el div(grande) con slideUp
                $('#grande').slideUp(1000);
            }
        )


    $('.barras').click(
        function(){
            if($('header').css('class')=='sticky'){
                $('header').removeClass('sticky');
            } else{
                $('header').addClass('sticky');
            }
           
            $('nav').slideToggle(1000);
        }
    )    
    //Manipulando el css
    $('#c-2').css("background","black");


















   

});//fin funcion ready