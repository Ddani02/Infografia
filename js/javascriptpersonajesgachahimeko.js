// JavaScript Document
$(document).ready(function(){
	
 $("#Cristal").click(function(){
 $("#Himeko").fadeIn("slow")});
 
	$("#Cristal").click(function(){
 $("#Cristal").fadeOut("slow")});
	
 $("#Cristal").click(function(){
 $("#Nombregrande").fadeIn(7000)});
	
  $("#Himeko").click(function(){
 $("#texto").fadeIn("slow")});
 $("#Cristal").click(function(){
      $("#himekohonkai")[0].play(); 
      $("#himekohonkai")[0].volume=0.2; 
    });		
}); //cierre document ready