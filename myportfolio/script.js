$(document).ready(function(){
    $(window).scroLL(function(){
        if(this.scroLLY > 20){
           $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});