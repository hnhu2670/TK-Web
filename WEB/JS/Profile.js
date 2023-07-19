function init(){
    var a = document.querySelectorAll("div.icon div.icon-heart")
    for(var i=0;i<a.length;i++)
    
        icon[i].onclick = function()
        {
            alert('hello')
        }
    
}

$(window).on("load", function() {
    $(document).ready(function(){
              
        $(".sub").hide()
    
        $(window).scroll(()=>{
            if($(this).scrollTop()>=600)
            {
                $(".sub").show()
    
                // $(".sub").slideDown(500)
                $(".sub").css({
                    "position":"fixed",
                    "z-index":9999
                })
                $(".sub-Profile").css({
                    "background-color":"blue",
    
                })
            }
            else{
                $(".sub").hide()
            }
        })
    })
  });
