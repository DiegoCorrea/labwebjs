//Previsualização de imagem, antes de enviar ao servidor
//https://www.youtube.com/watch?v=BkcOqyq8W2M



//Padronizar entradas do MASK



//Pesquisar CEP no site dos correios e preencher os locais
//Completar com as id's perdidas
//https://viacep.com.br/exemplo/jquery/
$(document).ready(function(){
  function limpa_formulário_cep(){
    // Limpa valores do formulário de cep.
    $("").val("");
    $("").val("");
    $("").val("");
    $("").val("");
  }
  
  //Quando o campo cep perde o foco.
  $("").blur(function() {

    //Nova variável "cep" somente com dígitos.
    var cep = $(this).val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        //Preenche os campos com "..." enquanto consulta webservice.
        $("").val("Pesquisando a Rua...");
        $("").val("Pesquisando o seu Bairro...");
        $("").val("Pesquisado a sua Cidade...");
        $("").val("Pesquisando o seu Estado...");

        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
          if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("").val(dados.logradouro);
            $("").val(dados.bairro);
            $("").val(dados.localidade);
            $("").val(dados.uf);
          } //end if.
          else {
            //CEP pesquisado não foi encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
          }
        });
      } //end if.
      else {
        //cep é inválido.
        limpa_formulário_cep();
        alert("Formato de CEP inválido.");
      }
    } //end if.
    else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
    }
  });
});
jQuery(function($){
  $.datepicker.regional['pt-BR'] = {
    closeText: 'Fechar',
    prevText: '&#x3c;Anterior',
    nextText: 'Pr&oacute;ximo&#x3e;',
    currentText: 'Hoje',
    monthNames: ['Janeiro','Fevereiro','Mar&ccedil;o','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun',
    'Jul','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda-feira','Ter&ccedil;a-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sabado'],
    dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab'],
    weekHeader: 'Sm',
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: false,
    //Inserir codigo aqui





    yearSuffix: ''};
  $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});
//Jquery para entrada de datas


//Botão de confirmação ao enviar
