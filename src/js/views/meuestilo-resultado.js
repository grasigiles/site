var tituloEsportivo = 'Esportivo';
var tituloTradicional = 'Tradicional';
var tituloContemporaneo = 'Contemporâneo';
var tituloRomantico = 'Romântico';
var tituloSexy = 'Sexy';
var tituloCriativo = 'Criativo';
var tituloDramatico = 'Dramático';

var imageEsportivo = 'images/servicos/meu-estilo/Estilo/1.jpg';
var imageTradicional = 'images/servicos/meu-estilo/Estilo/2.jpg';
var imageContemporanio = 'images/servicos/meu-estilo/Estilo/3.jpg';
var imageRomantico = 'images/servicos/meu-estilo/Estilo/4.jpg';
var imageSexy = 'images/servicos/meu-estilo/Estilo/5.jpg';
var imageCriativo = 'images/servicos/meu-estilo/Estilo/6.jpg';
var imageDramatico = 'images/servicos/meu-estilo/Estilo/7.jpg';

var descricaoEsportivo = 'desc esportivo';
var descricaoTradicional = 'desc tradicional';
var descricaoContemporaneo = 'desc contemporaneo';
var descricaoRomantico = 'desc romantico';
var descricaoSexy = 'desc sexy';
var descricaoCriativo = 'desc criativo';
var descricaoDramatico = 'desc dramatico';

$( document ).ready(function() {
    var one = getUrlVars()["one"];
    var two = getUrlVars()["two"];
    var three = getUrlVars()["three"];
    
    if(one != 'undefined') {
        if(one == "1"){            
            $("#titulo-estilo-one").html(tituloEsportivo);
            $("#image-estilo-one").attr("src",imageEsportivo);
            $("#descricao_estilo_one").html(descricaoEsportivo);
        }
        else if(one == "2"){            
            $("#titulo-estilo-one").html(tituloTradicional);
            $("#image-estilo-one").attr("src",imageTradicional);
            $("#descricao_estilo_one").html(descricaoTradicional);
        }
        else if(one == "3"){            
            $("#titulo-estilo-one").html(tituloContemporaneo);
            $("#image-estilo-one").attr("src",imageContemporanio);
            $("#descricao_estilo_one").html(descricaoContemporaneo);
        }
        else if(one == "4"){            
            $("#titulo-estilo-one").html(tituloRomantico);
            $("#image-estilo-one").attr("src",imageRomantico);
            $("#descricao_estilo_one").html(descricaoRomantico);
        }
        else if(one == "5"){            
            $("#titulo-estilo-one").html(tituloSexy);
            $("#image-estilo-one").attr("src",imageSexy);
            $("#descricao_estilo_one").html(descricaoSexy);
        }
        else if(one == "6"){            
            $("#titulo-estilo-one").html(tituloCriativo);
            $("#image-estilo-one").attr("src",imageCriativo);
            $("#descricao_estilo_one").html(descricaoCriativo);
        }
        else if(one == "7"){            
            $("#titulo-estilo-one").html(tituloDramatico);
            $("#image-estilo-one").attr("src",imageDramatico);
            $("#descricao_estilo_one").html(descricaoDramatico);
        }
    }

    if(two != 'undefined') {
        if(two == "1"){            
            $("#titulo-estilo-two").html(tituloEsportivo);
            $("#image-estilo-two").attr("src",imageEsportivo);
            $("#div-leia-1").html(descricaoEsportivo);
        }
        else if(two == "2"){            
            $("#titulo-estilo-two").html(tituloTradicional);
            $("#image-estilo-two").attr("src",imageTradicional);
            $("#div-leia-1").html(descricaoTradicional);
        }
        else if(two == "3"){            
            $("#titulo-estilo-two").html(tituloContemporaneo);
            $("#image-estilo-two").attr("src",imageContemporanio);
            $("#div-leia-1").html(descricaoContemporaneo);
        }
        else if(two == "4"){            
            $("#titulo-estilo-two").html(tituloRomantico);
            $("#image-estilo-two").attr("src",imageRomantico);
            $("#div-leia-1").html(descricaoRomantico);
        }
        else if(two == "5"){            
            $("#titulo-estilo-two").html(tituloSexy);
            $("#image-estilo-two").attr("src",imageSexy);
            $("#div-leia-1").html(descricaoSexy);
        }
        else if(two == "6"){            
            $("#titulo-estilo-two").html(tituloCriativo);
            $("#image-estilo-two").attr("src",imageCriativo);
            $("#div-leia-1").html(descricaoCriativo);
        }
        else if(two == "7"){            
            $("#titulo-estilo-two").html(tituloDramatico);
            $("#image-estilo-two").attr("src",imageDramatico);
            $("#div-leia-1").html(descricaoDramatico);
        }
    }

    if(three != 'undefined') {
        if(three == "1"){            
            $("#titulo-estilo-three").html(tituloEsportivo);
            $("#image-estilo-three").attr("src",imageEsportivo);
            $("#div-leia-2").html(descricaoEsportivo);
        }
        else if(three == "2"){            
            $("#titulo-estilo-three").html(tituloTradicional);
            $("#image-estilo-three").attr("src",imageTradicional);
            $("#div-leia-2").html(descricaoTradicional);
        }
        else if(three == "3"){            
            $("#titulo-estilo-three").html(tituloContemporaneo);
            $("#image-estilo-three").attr("src",imageContemporanio);
            $("#div-leia-2").html(descricaoContemporaneo);
        }
        else if(three == "4"){            
            $("#titulo-estilo-three").html(tituloRomantico);
            $("#image-estilo-three").attr("src",imageRomantico);
            $("#div-leia-2").html(descricaoRomantico);
        }
        else if(three == "5"){            
            $("#titulo-estilo-three").html(tituloSexy);
            $("#image-estilo-three").attr("src",imageSexy);
            $("#div-leia-2").html(descricaoSexy);
        }
        else if(three == "6"){            
            $("#titulo-estilo-three").html(tituloCriativo);
            $("#image-estilo-three").attr("src",imageCriativo);
            $("#div-leia-2").html(descricaoCriativo);
        }
        else if(three == "7"){            
            $("#titulo-estilo-three").html(tituloDramatico);
            $("#image-estilo-three").attr("src",imageDramatico);
            $("#div-leia-2").html(descricaoDramatico);
        }
    }


});


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
    function(m,key,value) {
      vars[key] = value;
    });
    return vars;
  }