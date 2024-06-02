$(function(){

  let faq = $(".faq");
 
  faq.click(function(){
    
if($(this).hasClass(`active`)){
  $(this).removeClass(`active`)
}
else{
  faq.removeClass(`active`)
  $(this).addClass(`active`)
   
}

  
   })

})