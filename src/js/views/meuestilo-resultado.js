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

var descricaoEsportivo = 'Reflete a personalidade de uma mulher bem humorada, prática e jovial que preza pelo conforto mais que pela estética. Ela adora peças com modelagens mais soltas como T-shirts, calças jeans, sapatos sem salto e estampas como listras e xadrez. É um estilo mais despojado e um dos mais usados e amados pelas mulheres, ele também se destaca pela praticidade na hora de compor um look, pois não pede grandes composições passando uma imagem despretensiosa. <br><br> <b>Onde investir:</b> Peças de alfaiataria podem ajudar a valorizar os looks, já que elas trazem um refinamento, assim como os tecidos feitos a partir de fibras naturais. Outro ponto importante é investir em acessórios e bolsas de boa qualidade, pois normalmente as pessoas com o estilo esportivo não costumam trocar esses itens com frequência.';
var descricaoTradicional = 'A mulher de estilo tradicional é conhecida por sua organização e foco, optando por modelagens simples e atemporais. Ela costuma combinar cores neutras com estampas discretas, transmitindo uma imagem conservadora e séria. A durabilidade e a qualidade das peças são prioridades para ela. <br><br> <b>onde investir:</b> Para adicionar um toque moderno aos seus looks, é essencial incorporar algumas tendências e ousar em combinações com cores vibrantes e acessórios. Isso pode proporcionar um equilíbrio entre a sua abordagem tradicional e a atualização do seu estilo.';
var descricaoContemporaneo = 'O estilo elegante é sinônimo de refinamento e sofisticação. Ele é a escolha de mulheres cultas, contemporâneas e reservadas, que valorizam o caimento impecável das peças e preferem detalhes e cores discretas, porém não dispensam o uso de joias e salto alto.  <br><br> Essas mulheres se dedicam à harmonia de suas roupas e, quando escolhem estampas, optam por padrões mais discretos. A alfaiataria desempenha um papel fundamental nesse estilo, juntamente com tecidos nobres, como a seda. <br><br> <b>Onde investir:</b> Esse estilo pode transmitir uma imagem imponente, e se a intenção for suavizá-lo, uma opção interessante é mesclar tecidos, como o algodão, com peças de alfaiataria para adicionar um toque sutil a essa abordagem elegante. Além disso, expandir a paleta de cores e adotar tons mais leves pode tornar o visual mais leve e equilibrado.';
var descricaoRomantico = 'Sensível, feminina e delicada - essas são as características marcantes do estilo romântico, muito presente na maioria das mulheres. Mulheres com esse estilo apreciam peças fluidas, saias rodadas, vestidos, babados, pregas, bordados e laços. As estampas florais, rendas e qualquer detalhe com um toque retrô também são características proeminentes desse estilo. <br><br> <b>Onde investir:</b> Ao adotar o estilo romântico, é importante ter em mente a necessidade de equilibrar a delicadeza para não transmitir uma imagem infantilizada. Para valorizar seu visual e torná-lo mais maduro, é interessante combinar elementos delicados com tecidos mais estruturados, como peças de alfaiataria, criando um equilíbrio harmonioso em seu guarda-roupa.';
var descricaoSexy = 'O estilo sexy é a escolha das mulheres sedutoras, desinibidas e ousadas que adoram atrair olhares e emanar confiança. Elas optam por peças que realçam suas curvas e destacam o corpo, com elementos como transparências, decotes, fendas e recortes. Além disso, não dispensam saltos altos, óculos de sol marcantes e estampas de animal print. <br><br> <b>Dicas de investimento:</b> Existe uma linha tênue entre o sexy e o vulgar, portanto, é essencial manter o equilíbrio entre sensualidade e sofisticação para criar um visual incrível. Uma ótima abordagem é mesclar elementos de alfaiataria com lingeries de renda, além de priorizar peças e acessórios de alta qualidade. Essa combinação ajudará a elevar o estilo sexy de forma elegante e sofisticada.';
var descricaoCriativo = 'Mulheres com estilo criativo são inovadoras, anticonvencionais e livres, elas ditam sua própria moda, construindo uma imagem independente e única. Elas têm um amor por misturar estampas, criar sobreposições e experimentar combinações de cores ousadas. Um toque étnico é sempre bem-vindo, adicionando um elemento único e exclusivo ao visual. <br><br> <b>Dicas de investimento:</b> É importante ter um pouco de cautela para evitar sobrecarregar a produção e prestar atenção ao equilíbrio visual das combinações. Concentrar a criatividade nos detalhes pode ser um bom ponto de partida para quem tem esse estilo e deseja expressá-lo com facilidade e harmonia.';
var descricaoDramatico = 'O estilo dramático projeta uma imagem de mulher forte, criativa, sofisticada e ultra moderna. Cores essenciais incluem preto e cinza, mas há espaço para contraste com cores vibrantes. Linhas retas, estampas ousadas, modelagens estruturadas e volumes exagerados são características proeminentes. Os acessórios apresentam designs arrojados, e os coturnos são peças-chave, assim como o jeans destroyed. <br><br> <b>Dicas de investimento:</b> Para equilibrar os volumes e cores e criar um visual mais leve e harmonioso, é importante considerar peças monocromáticas, que são ótimas opções para esse estilo.';

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