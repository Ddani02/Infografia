// JavaScript Document
$(document).ready(function(){
	
 $("#runa").click(function(){
 $("#Skadi").fadeIn("slow")});
 
	$("#runa").click(function(){
 $("#runa").fadeOut("slow")});
	
 $("#runa").click(function(){
 $("#nombregrande").fadeIn(7000)});
	
  $("#Skadi").click(function(){
 $("#texto").fadeIn("slow")});
 $("#runa").click(function(){
      $("#skadibgm")[0].play(); 
      $("#skadibgm")[0].volume=0.2; 
    });		
}); //cierre document ready