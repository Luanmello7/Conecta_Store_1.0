$(document).ready(function(){
    $('#carousel-imagens').slick({
        autoplay: true,
    });
    $('.menu-hamburger').click(function(){
            $('nav').slideToggle();
        })
        $('#telefone').mask('(00) 00000-0000')

        $('form').validate({
            rules: {
                nome: {
                    required: true
                }, email: {
                    required: true,
                    email: true
                }, 
                telefone: {
                    required: true,
                },
                mensagem: {
                    required: true,
                },
                produtoInteresse:{
                    required: false,
                }
                
            },
            messages: {
                nome: 'Por favor, insira seu nome',
                telefone: 'Por favor, insira seu telefone',
                email: 'Por favor, insira seu E-mail',

            },
            submitHandler: function(form) {
                console.log(form)
            },
            invalidHandler: function(evento,validador){
                let camposIncorretos = validador.numberOfInvalids();
                if(camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }
        })
        $('.lista-anime button').click(function(){
            const destino =  $('#contato');

            const nomeProduto = $(this).parent().find('h3').text();

            $('#produto-interesse').val(nomeProduto);

            $('html').animate({
                scrollTop: destino.offset().top
            }, 1000)
        })
    })