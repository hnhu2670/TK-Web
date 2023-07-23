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

  function load_item() {
    let c = document.getElementById("items");
    c.innerHTML = "";

    fetch(`/JSON/items.json`)
        .then((res) => {
            return res.json();
        }).then((data) => {
            let d = document.getElementById("items");
            for (i of data) {
                
                d.innerHTML +=
            `<div class="item">
                <img src="${i.img}" alt="">
                <div class="bg-top ">
                    <div class="flex icon">
                        <div class="icon-heart">
                            <i class="fa-solid fa-heart"></i>
                        </div>
                        <div class="icon-share">
                            <i class="fa-regular fa-paper-plane "></i>
                        </div>
                    </div>
                </div>
            </div>`
                        }
                    })
            }
