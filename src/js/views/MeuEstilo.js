var esportivo = 0;
var tradicional = 0;
var contemporanio = 0;
var romatico = 0;
var sexy = 0;
var criativo = 0;
var dramatico = 0;

$("#resultado").click(function (e) {    
    $('#aviso').css('display', 'none');
    var list = "";
    var total = 0;

    //if ($("#nome").val() == "") { $('#aviso').css('display', 'block').html('Preencha o campo nome').css('color', 'red'); return;}
    //if (!isValidEmail($("#email").val())) { $('#aviso').css('display', 'block').html('Preencha o campo e-mail').css('color', 'red'); return; }

    $(":checkbox:checked").each(function (e) {
        
        var iNum = parseInt($(this).val());

        if(iNum >= 1 && iNum <= 10)
            esportivo += 1;
        else if(iNum >= 11 && iNum <= 20)
            tradicional += 1;
        else if(iNum >= 21 && iNum <= 30)
            contemporanio += 1;
        else if(iNum >= 31 && iNum <= 40)
            romatico += 1;
        else if(iNum >= 41 && iNum <= 50)
            sexy += 1;
        else if(iNum >= 51 && iNum <= 60)
            criativo += 1;
        else if(iNum >= 61 && iNum <= 70)
            dramatico += 1;

        total += 1;
    });

    let estilos = {
        esportivo: esportivo, 
        tradicional: tradicional, 
        contemporanio: contemporanio, 
        romantico: romatico,
        sexy: sexy, 
        criativo: criativo,
        dramatico: dramatico
    };
    let sortable = [];
    for (var estilo in estilos) {
        sortable.push([estilo, estilos[estilo]]);
    }
    
    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });   
    

    if (total < 15) { $('#aviso').css('display', 'block').html('Selecione pelo menos 15 tipos de personalidades').css('color', 'red'); return;}
    
    // $('input:checkbox').removeAttr('checked');
    // $('input[type=checkbox]').prop('checked',false);

    var one = retornarNumeroEstilo(sortable[6][1]);
    var two = retornarNumeroEstilo(sortable[5][1]);
    var three = retornarNumeroEstilo(sortable[4][1]);

    estilos = [];
    sortable = [];
    

    window.location.href = "/meuestilo-resultado.html?one=" + one + "&two=" + two + "&three=" + three;

});

function retornarNumeroEstilo(estilo){
    if(estilo == 'esportivo')
        return 1;
    else if(estilo == 'tradicional')
        return 2;
    else if(estilo == 'contemporanio')
        return 3;
    else if(estilo == 'romantico')
        return 4;
    else if(estilo == 'sexy')
        return 5;
    else if(estilo == 'criativo')
        return 6;
    else if(estilo == 'dramatico')
        return 7;
}

function isValidEmail(emailText) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailText);
};

function submit(list) {
    
    list = list.substr(0, list.length - 1);
    $('#aviso').css('display', 'block').html('Processando sua análise, por favor aguarde...').css('color', 'black');



    // var nome = $('#nome').val();
    // var email = $('#email').val();

    // $.ajax({
    //     url: '/MeuEstilo/Gravar?personalidades=' + list + '&nome=' + nome + '&email=' + email,
    //     format: 'JSON',
    //     method: 'POST',
    //     contentType: "application/json; utf-8",
    //     beforeSend: function () {
    //         $('#aviso').css('display', 'block').html('Processando sua análise, por favor aguarde...').css('color', 'black');
    //     },
    //     success: function (data) {
    //         if (data.Success)
    //             window.location.href = "/MeuEstilo/Resultado?c=" + data.Email;
    //     },
    //     error: function (erro) {
    //         $('#aviso').css('display', 'block').html('Ocorreu um erro, por favor tente novamente').css('color', 'red');
    //     }
    // });
}

$("#js-wizard-form").validate({
    ignore: 'input[type=hidden], .select2-search__field',
    errorClass: 'validation-error-label',
    successClass: 'validation-valid-label',
    highlight: function (element, errorClass) {
        $(element).removeClass(errorClass);
    },
    unhighlight: function (element, errorClass) {
        $(element).removeClass(errorClass);
    },
    rules: {
        nome: { required: true },        
        email: { required: true, email: true }
    },
    messages: {
        nome: "Campo obrigatório",
        email: "E-mail inválido"
    }
});

$("#voltar").click(function (e) {
    $('#aviso').css('display', 'none');    
});

$("#codigo-ativacao-avancar").click(function (e) {
    
    $('#aviso-codigo-ativacao').css('display', 'none');
    $("#avancar-tab1").trigger("click");

    // if ($("#codigo-ativacao").val() == "") {        
    //     $('#aviso-codigo-ativacao').css('display', 'block');
    //     return;
    // }
    // else {        
    //     $('#aviso-codigo-ativacao').css('display', 'none');

    //     $.ajax({
    //         url: '/MeuEstilo/ValidarCodigoAtivacao?codigoAtivacao=' + $('#codigo-ativacao').val(),
    //         format: 'JSON',
    //         method: 'GET',
    //         contentType: "application/json; utf-8",        
    //         success: function (data) {
    //             if (data.Success) {
    //                 $('#aviso-codigo-ativacao').css('display', 'none');
    //                 $("#avancar-tab1").trigger("click");
    //             }   
    //             else
    //                 $('#aviso-codigo-ativacao').css('display', 'block');
    //         },
    //         error: function (erro) {
    //             $('#aviso-codigo-ativacao').css('display', 'none');
    //         }
    //     });        
    // }
    
});


