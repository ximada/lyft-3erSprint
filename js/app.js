
// DECLARO VARIABLES QUE SE VOY A USAR
var $btnsendNumber = $("#send-Number");
var $btnRandonNumber = $("#randon-Send");

$(document).ready(loadPage);

function loadPage(){
   
    splashView();
    viewPrincipal();

    $("#telf").keyup(validationNumberPhone);
    $btnsendNumber.click(randomCodeModal);
    $("#btnGoMOdal").click(verificationCodeView);
    $("#btn-veryfiR").click(verifyPhoneNum);
    $("#inlineFormInputGroup").keyup(checkCodeRandom);
    $("#randon-Send").click(resendCode);
    $("#back-3").click(verificationCodeView);
    
    

}

 

 function splashView() {
 	setTimeout(function(){
 		$(".splash").fadeOut(500);
 	},1000);
 }

 function viewPrincipal(){
 	setTimeout(function(){
 		$(".driver").fadeIn(500)
 	},1000);
 }


// input del telefono//

 
function validationNumberPhone() { //función para validar el número telefónico
    if($(this).val().trim().length === 10 ) {
      event.preventDefault();
      $btnsendNumber.removeAttr("disabled");
    } else {
      $btnsendNumber.attr("disabled" , true);
    
    }
}

function randomCodeModal(){
    var $codeChach = $(".code-Cach");
    var $codeRandom = Math.floor((Math.random()* 900) + 100);
    $codeChach.text("LAB-"+ $codeRandom);
    checkCodeRandom($codeRandom);

}
// Funcion para enviar alerta con codigo nuevo
function resendCode() {
    var $codeChach = $(".code-Cach");
    var $codeRandom = Math.floor((Math.random()* 900) + 100);
    alert("LAB-" + $codeRandom);
}


function checkCodeRandom(codeRandom) {
    if($(this).val().trim().length === 3) {
        $("#btn-veryfiR").removeAttr("disabled");
    } else {
        $btnRandonNumber.attr("disabled", true);
    }
}

function verificationCodeView() { //Funcion que muestra la vista de verificación de código 
    var $containerVerifyCodeRandom = $("#verify-phone");
    $containerVerifyCodeRandom.removeClass("d-none");
    $containerVerifyCodeRandom.siblings().addClass("d-none");
  }
   function verifyPhoneNum() {
       var $signUpVerify =$("#sing-upVerify");
       $signUpVerify.removeClass("d-none");
       $signUpVerify.siblings().addClass("d-none");
   }