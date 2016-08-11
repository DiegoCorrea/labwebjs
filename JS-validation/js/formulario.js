//Padronizar entradas
$(document).ready(function(){
    $('#fixo').mask("(00) 0000-0000");
});

$(document).ready(function(){
    $('#celular').mask("(00) 0 0000-0000");
});

$(document).ready(function(){
    $('#cpf').mask("000.000.000-00");
});

$(document).ready(function(){
    $('#cep').mask("00.000-000");
});

//Previsualização de imagem, antes de enviar ao servidor
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    
    reader.onload = function (e) {
      $('#image-preview').attr('src', e.target.result);
      $('.btn-info').toggleClass('btn-info btn-warning');
    }
    reader.readAsDataURL(input.files[0]);
  }
}

$("#image-upload").change(function(){
  readURL(this);
});


//Pesquisar CEP no site dos correios e preencher os locais
$(document).ready(function() {
  function limpa_formulário_cep() {
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
        $("#rua").val("...");
        $("#bairro").val("...");
        $("#cidade").val("...");
        $("#estado").val("...");

        //Consulta o webservice viacep.com.br/
        $.getJSON("//viacep.com.br/ws/"+ cep +"/json/?callback=?", function(dados) {
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



//Validar e-mail
$(document).ready(function(){
  $("#criarPerfil").validate({
    rules: {
      name: "required",
      email: {
        required: true,
        email: true
      },
    },
  });
});