$(function(){
  $(".js-shopping-list-form").submit(function(event){
    event.preventDefault();
    const item = $(this).find('input[name="shopping-list-entry"]').val();
    $(".shopping-list").append(`"<li>" + ${item} + "</li>"`);
   
    
  });
};
