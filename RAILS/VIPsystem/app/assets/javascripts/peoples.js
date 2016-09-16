$(document).ready(function(){
  $('#cellPhone').mask("(00) 0 0000-0000");
});

$(document).ready(function(){
  $('#CPF').mask("000.000.000-00");
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
  $(".borned").datepicker($.datepicker.regional["pt-BR"]);
});

$(document).ready(function(){

  $('#CPF').blur(function(){
  
    // O CPF ou CNPJ
    var cpf_cnpj = $(this).val();
    
    // Testa a validação
    if ( !valida_cpf_cnpj( cpf_cnpj ) ) {
      alert('CPF inválido!');
    }
  });
});