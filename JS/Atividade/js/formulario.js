//Padronizar entradas
$(document).ready(function(){
  $('#fixo').mask("(00) 0000-0000");
});
$(document).ready(function(){
  $('#fixoResponsavel').mask("(00) 0000-0000");
});

$(document).ready(function(){
  $('#celular').mask("(00) 0 0000-0000");
});
$(document).ready(function(){
  $('#celularResponsavel').mask("(00) 0 0000-0000");
});

$(document).ready(function(){
  $('#cpf').mask("000.000.000-00");
});

$(document).ready(function(){
  $('#cpfResponsavel').mask("000.000.000-00");
});

$(document).ready(function(){
  $('#cep').mask("00.000-000");
});
$(document).ready(function(){
  $('#cepResponsavel').mask("00.000-000");
});

//Previsualização de imagem, antes de enviar ao servidor
//https://www.youtube.com/watch?v=BkcOqyq8W2M
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function (e) {
      $('#image-preview').attr('src', e.target.result);
      $('.btn-info').toggleClass('btn-info btn-warning');
      $('span').text('Trocar imagem');
    }
    reader.readAsDataURL(input.files[0]);
  }
}
$(document).ready(function(){
  $("#image-upload").change(function(){
    readURL(this);
  });
});

//Pesquisar CEP no site dos correios e preencher os locais
//https://viacep.com.br/exemplo/jquery/
$(document).ready(function(){
  function limpa_formulário_cep(){
    // Limpa valores do formulário de cep.
    $("#rua").val("");
    $("#bairro").val("");
    $("#cidade").val("");
    $("#estado").val("");
  }
  
  //Quando o campo cep perde o foco.
  $("#cep").blur(function() {

    //Nova variável "cep" somente com dígitos.
    var cep = $(this).val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        //Preenche os campos com "..." enquanto consulta webservice.
        $("#rua").val("Pesquisando a Rua...");
        $("#bairro").val("Pesquisando o seu Bairro...");
        $("#cidade").val("Pesquisado a sua Cidade...");
        $("#estado").val("Pesquisando o seu Estado...");

        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
          if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#rua").val(dados.logradouro);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.localidade);
            $("#estado").val(dados.uf);
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
$(document).ready(function(){
  function limpa_formulário_cep(){
    // Limpa valores do formulário de cep.
    $("#ruaResponsavel").val("");
    $("#bairroResponsavel").val("");
    $("#cidadeResponsavel").val("");
    $("#estadoResponsavel").val("");
  }
  
  //Quando o campo cep perde o foco.
  $("#cepResponsavel").blur(function() {

    //Nova variável "cep" somente com dígitos.
    var cep = $(this).val().replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {
        //Preenche os campos com "..." enquanto consulta webservice.
        $("#ruaResponsavel").val("Pesquisando a Rua...");
        $("#bairroResponsavel").val("Pesquisando o seu Bairro...");
        $("#cidadeResponsavel").val("Pesquisado a sua Cidade...");
        $("#estadoResponsavel").val("Pesquisando o seu Estado...");

        //Consulta o webservice viacep.com.br/
        $.getJSON("https://viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
          if (!("erro" in dados)) {
            //Atualiza os campos com os valores da consulta.
            $("#ruaResponsavel").val(dados.logradouro);
            $("#bairroResponsavel").val(dados.bairro);
            $("#cidadeResponsavel").val(dados.localidade);
            $("#estadoResponsavel").val(dados.uf);
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
    dateFormat: 'dd/mm/yy',
    firstDay: 0,
    isRTL: false,
    changeMonth: true,
    changeYear: true,
    yearRange: '1950:2013',
    showMonthAfterYear: false,
    yearSuffix: ''};
  $.datepicker.setDefaults($.datepicker.regional['pt-BR']);
});
//Jquery para entrada de datas
$(document).ready(function(){
  $( "#datepicker" ).datepicker($.datepicker.regional["pt-BR"]);
});

//Botão de 
$(document).ready(function(){
  $("#criarPerfil").submit(function(){
    alert("Submssão realizada com sucesso!");
  });
});

$(document).ready(function () {
  $('.btn').click(function() {
    checked = $("input[type=checkbox]:checked").length;

    if(!checked) {
      alert("Precisa indicar qual o tipo de dependencia!");
      $('#combobox').focus();
      return false;
    }
  });
});
//

// Testando a validação usando jQuery
$(function(){

  // ## EXEMPLO 2
  // Aciona a validação ao sair do input
  $('#cpf').blur(function(){
  
    // O CPF ou CNPJ
    var cpf_cnpj = $(this).val();
    
    // Testa a validação
    if ( valida_cpf_cnpj( cpf_cnpj ) ) {
      alert('CPF Valido');
    } else {
      alert('CPF ou CNPJ inválido!');
    }
  });
});